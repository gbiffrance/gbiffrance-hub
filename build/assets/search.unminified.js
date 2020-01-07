/*
 * Purl (A JavaScript URL parser) v2.3.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */

;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function() {

    var tag2attr = {
            a       : 'href',
            img     : 'src',
            form    : 'action',
            base    : 'href',
            script  : 'src',
            iframe  : 'src',
            link    : 'href',
            embed   : 'src',
            object  : 'data'
        },

        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query

        aliases = { 'anchor' : 'fragment' }, // aliases for backwards compatability

        parser = {
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },

        isint = /^[0-9]+$/;

    function parseUri( url, strictMode ) {
        var str = decodeURI( url ),
            res   = parser[ strictMode || false ? 'strict' : 'loose' ].exec( str ),
            uri = { attr : {}, param : {}, seg : {} },
            i   = 14;

        while ( i-- ) {
            uri.attr[ key[i] ] = res[i] || '';
        }

        // build query and fragment parameters
        uri.param['query'] = parseString(uri.attr['query']);
        uri.param['fragment'] = parseString(uri.attr['fragment']);

        // split path and fragement into segments
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

        // compile a 'base' domain attribute
        uri.attr['base'] = uri.attr.host ? (uri.attr.protocol ?  uri.attr.protocol+'://'+uri.attr.host : uri.attr.host) + (uri.attr.port ? ':'+uri.attr.port : '') : '';

        return uri;
    }

    function getAttrName( elm ) {
        var tn = elm.tagName;
        if ( typeof tn !== 'undefined' ) return tag2attr[tn.toLowerCase()];
        return tn;
    }

    function promote(parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }

    function parse(parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
                parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [parent[key], val];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if (']' == part) {
                if (isArray(obj)) {
                    if ('' !== val) obj.push(val);
                } else if ('object' == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [parent[key], val];
                }
            } else if (~part.indexOf(']')) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
                // key
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }

    function merge(parent, key, val) {
        if (~key.indexOf(']')) {
            var parts = key.split('[');
            parse(parts, parent, 'base', val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== '') {
                set(parent.base, key, val);
            }
        }
        return parent;
    }

    function parseString(str) {
        return reduce(String(str).split(/&|;/), function(ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, ' '));
            } catch(e) {
                // ignore
            }
            var eql = pair.indexOf('='),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);

            val = val.substr(val.indexOf('=') + 1, val.length);

            if (key === '') {
                key = pair;
                val = '';
            }

            return merge(ret, key, val);
        }, { base: {} }).base;
    }

    function set(obj, key, val) {
        var v = obj[key];
        if (typeof v === 'undefined') {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [v, val];
        }
    }

    function lastBraceInKey(str) {
        var len = str.length,
            brace,
            c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if (']' == c) brace = false;
            if ('[' == c) brace = true;
            if ('=' == c && !brace) return i;
        }
    }

    function reduce(obj, accumulator){
        var i = 0,
            l = obj.length >> 0,
            curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }

    function isArray(vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }

    function keys(obj) {
        var key_array = [];
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) key_array.push(prop);
        }
        return key_array;
    }

    function purl( url, strictMode ) {
        if ( arguments.length === 1 && url === true ) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();

        return {

            data : parseUri(url, strictMode),

            // get various attributes from the URI
            attr : function( attr ) {
                attr = aliases[attr] || attr;
                return typeof attr !== 'undefined' ? this.data.attr[attr] : this.data.attr;
            },

            // return query string parameters
            param : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.query[param] : this.data.param.query;
            },

            // return fragment parameters
            fparam : function( param ) {
                return typeof param !== 'undefined' ? this.data.param.fragment[param] : this.data.param.fragment;
            },

            // return path segments
            segment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];
                }
            },

            // return fragment segments
            fsegment : function( seg ) {
                if ( typeof seg === 'undefined' ) {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];
                }
            }

        };

    }

    purl.jQuery = function($){
        if ($ != null) {
            $.fn.url = function( strictMode ) {
                var url = '';
                if ( this.length ) {
                    url = $(this).attr( getAttrName(this[0]) ) || '';
                }
                return purl( url, strictMode );
            };

            $.url = purl;
        }
    };

    purl.jQuery(window.jQuery);

    return purl;

});
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/*
 * // require jquery
//= require jquery-migrate-1.2.1.min.js
 */
/******************************************************************************
* jquery.i18n.properties
*
* Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
* MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
*
* @version     1.0.x
* @author      Nuno Fernandes
* @url         www.codingwithcoffee.com
* @inspiration Localisation assistance for jQuery (http://keith-wood.name/localisation.html)
*              by Keith Wood (kbwood{at}iinet.com.au) June 2007
*
*****************************************************************************/
(function(k){function n(c,a){k.ajax({url:c,async:!1,cache:a.cache,contentType:"text/plain;charset="+a.encoding,dataType:"text",success:function(b){r(b,a.mode)}})}function r(c,a){for(var b="",e=c.split(/\n/),d=/(\{\d+\})/g,q=/\{(\d+)\}/g,m=/(\\u.{4})/ig,f=0;f<e.length;f++)if(e[f]=e[f].replace(/^\s\s*/,"").replace(/\s\s*$/,""),e[f].length>0&&e[f].match("^#")!="#"){var g=e[f].split("=");if(g.length>0){for(var o=unescape(g[0]).replace(/^\s\s*/,"").replace(/\s\s*$/,""),h=g.length==1?"":g[1];h.match(/\\$/)==
"\\";)h=h.substring(0,h.length-1),h+=e[++f].replace(/\s\s*$/,"");for(var l=2;l<g.length;l++)h+="="+g[l];h=h.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(a=="map"||a=="both"){if(g=h.match(m))for(l=0;l<g.length;l++)h=h.replace(g[l],s(g[l]));k.i18n.map[o]=h}if(a=="vars"||a=="both")if(h=h.replace(/"/g,'\\"'),t(o),d.test(h)){for(var g=h.split(d),l=!0,j="",n=[],p=0;p<g.length;p++)if(d.test(g[p])&&(n.length==0||n.indexOf(g[p])==-1))l||(j+=","),j+=g[p].replace(q,"v$1"),n.push(g[p]),l=!1;b+=o+"=function("+
j+"){";o='"'+h.replace(q,'"+v$1+"')+'"';b+="return "+o+";};"}else b+=o+'="'+h+'";'}}eval(b)}function t(c){if(/\./.test(c))for(var a="",c=c.split(/\./),b=0;b<c.length;b++)b>0&&(a+="."),a+=c[b],eval("typeof "+a+' == "undefined"')&&eval(a+"={};")}function s(c){var a=[],c=parseInt(c.substr(2),16);c>=0&&c<Math.pow(2,16)&&a.push(c);for(var c="",b=0;b<a.length;++b)c+=String.fromCharCode(a[b]);return c}k.i18n={};k.i18n.map={};k.i18n.properties=function(c){c=k.extend({name:"Messages",language:"",path:"",mode:"vars",
cache:!1,encoding:"UTF-8",callback:null},c);if(c.language===null||c.language=="")c.language=k.i18n.browserLang();if(c.language===null)c.language="";var a=c.name&&c.name.constructor==Array?c.name:[c.name];for(i=0;i<a.length;i++)n(c.path+a[i]+".properties",c),c.language.length>=2&&n(c.path+a[i]+"_"+c.language.substring(0,2)+".properties",c),c.language.length>=5&&n(c.path+a[i]+"_"+c.language.substring(0,5)+".properties",c);c.callback&&c.callback()};k.i18n.prop=function(c){var a=k.i18n.map[c];if(a==null)return"["+
c+"]";var b;if(typeof a=="string"){for(b=0;(b=a.indexOf("\\",b))!=-1;)a=a[b+1]=="t"?a.substring(0,b)+"\t"+a.substring(b++ +2):a[b+1]=="r"?a.substring(0,b)+"\r"+a.substring(b++ +2):a[b+1]=="n"?a.substring(0,b)+"\n"+a.substring(b++ +2):a[b+1]=="f"?a.substring(0,b)+"\u000c"+a.substring(b++ +2):a[b+1]=="\\"?a.substring(0,b)+"\\"+a.substring(b++ +2):a.substring(0,b)+a.substring(b+1);var e=[],d,j;for(b=0;b<a.length;)if(a[b]=="'")if(b==a.length-1)a=a.substring(0,b);else if(a[b+1]=="'")a=a.substring(0,b)+
a.substring(++b);else{for(d=b+2;(d=a.indexOf("'",d))!=-1;)if(d==a.length-1||a[d+1]!="'"){a=a.substring(0,b)+a.substring(b+1,d)+a.substring(d+1);b=d-1;break}else a=a.substring(0,d)+a.substring(++d);d==-1&&(a=a.substring(0,b)+a.substring(b+1))}else if(a[b]=="{")if(d=a.indexOf("}",b+1),d==-1)b++;else if(j=parseInt(a.substring(b+1,d)),!isNaN(j)&&j>=0){var m=a.substring(0,b);m!=""&&e.push(m);e.push(j);b=0;a=a.substring(d+1)}else b=d+1;else b++;a!=""&&e.push(a);a=e;k.i18n.map[c]=e}if(a.length==0)return"";
if(a.lengh==1&&typeof a[0]=="string")return a[0];m="";for(b=0;b<a.length;b++)m+=typeof a[b]=="string"?a[b]:a[b]+1<arguments.length?arguments[a[b]+1]:"{"+a[b]+"}";return m};k.i18n.browserLang=function(){var c=navigator.language||navigator.userLanguage,c=c.toLowerCase();c.length>3&&(c=c.substring(0,3)+c.substring(3).toUpperCase());return c};var j;if(!j)j=function(c,a,b){if(Object.prototype.toString.call(a)!=="[object RegExp]")return typeof j._nativeSplit=="undefined"?c.split(a,b):j._nativeSplit.call(c,
a,b);var e=[],d=0,k=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.sticky?"y":""),a=RegExp(a.source,k+"g"),m,f,g;c+="";j._compliantExecNpcg||(m=RegExp("^"+a.source+"$(?!\\s)",k));if(b===void 0||+b<0)b=Infinity;else if(b=Math.floor(+b),!b)return[];for(;f=a.exec(c);){k=f.index+f[0].length;if(k>d&&(e.push(c.slice(d,f.index)),!j._compliantExecNpcg&&f.length>1&&f[0].replace(m,function(){for(var a=1;a<arguments.length-2;a++)arguments[a]===void 0&&(f[a]=void 0)}),f.length>1&&f.index<c.length&&Array.prototype.push.apply(e,
f.slice(1)),g=f[0].length,d=k,e.length>=b))break;a.lastIndex===f.index&&a.lastIndex++}d===c.length?(g||!a.test(""))&&e.push(""):e.push(c.slice(d));return e.length>b?e.slice(0,b):e},j._compliantExecNpcg=/()??/.exec("")[1]===void 0,j._nativeSplit=String.prototype.split;String.prototype.split=function(c,a){return j(this,c,a)}})(jQuery);

//= require jquery_migration
//= require jquery.i18n.properties-1.0.9.min

 
 
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));
(function(c){function p(){var d,a={height:h.innerHeight,width:h.innerWidth};if(!a.height&&((d=i.compatMode)||!c.support.boxModel))d=d==="CSS1Compat"?k:i.body,a={height:d.clientHeight,width:d.clientWidth};return a}var m={},e,a,i=document,h=window,k=i.documentElement,j=c.expando;c.event.special.inview={add:function(a){m[a.guid+"-"+this[j]]={data:a,$element:c(this)}},remove:function(a){try{delete m[a.guid+"-"+this[j]]}catch(c){}}};c(h).bind("scroll resize",function(){e=a=null});setInterval(function(){var d=
c(),j,l=0;c.each(m,function(a,b){var c=b.data.selector,e=b.$element;d=d.add(c?e.find(c):e)});if(j=d.length){e=e||p();for(a=a||{top:h.pageYOffset||k.scrollTop||i.body.scrollTop,left:h.pageXOffset||k.scrollLeft||i.body.scrollLeft};l<j;l++)if(c.contains(k,d[l])){var g=c(d[l]),f={height:g.height(),width:g.width()},b=g.offset(),n=g.data("inview"),o;if(!a||!e)break;b.top+f.height>a.top&&b.top<a.top+e.height&&b.left+f.width>a.left&&b.left<a.left+e.width?(o=a.left>b.left?"right":a.left+e.width<b.left+f.width?
"left":"both",f=a.top>b.top?"bottom":a.top+e.height<b.top+f.height?"top":"both",b=o+"-"+f,(!n||n!==b)&&g.data("inview",b).trigger("inview",[!0,o,f])):n&&g.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);
/*
 * Copyright (C) 2014 Atlas of Living Australia
 * All Rights Reserved.
 *
 * The contents of this file are subject to the Mozilla Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 */

// jquery.jsonp 2.4.0 (c)2012 Julian Aubourg | MIT License
// https://github.com/jaubourg/jquery-jsonp
(function(e){function t(){}function n(e){C=[e]}function r(e,t,n){return e&&e.apply&&e.apply(t.context||t,n)}function i(e){return/\?/.test(e)?"&":"?"}function O(c){function Y(e){z++||(W(),j&&(T[I]={s:[e]}),D&&(e=D.apply(c,[e])),r(O,c,[e,b,c]),r(_,c,[c,b]))}function Z(e){z++||(W(),j&&e!=w&&(T[I]=e),r(M,c,[c,e]),r(_,c,[c,e]))}c=e.extend({},k,c);var O=c.success,M=c.error,_=c.complete,D=c.dataFilter,P=c.callbackParameter,H=c.callback,B=c.cache,j=c.pageCache,F=c.charset,I=c.url,q=c.data,R=c.timeout,U,z=0,W=t,X,V,J,K,Q,G;return S&&S(function(e){e.done(O).fail(M),O=e.resolve,M=e.reject}).promise(c),c.abort=function(){!(z++)&&W()},r(c.beforeSend,c,[c])===!1||z?c:(I=I||u,q=q?typeof q=="string"?q:e.param(q,c.traditional):u,I+=q?i(I)+q:u,P&&(I+=i(I)+encodeURIComponent(P)+"=?"),!B&&!j&&(I+=i(I)+"_"+(new Date).getTime()+"="),I=I.replace(/=\?(&|$)/,"="+H+"$1"),j&&(U=T[I])?U.s?Y(U.s[0]):Z(U):(E[H]=n,K=e(y)[0],K.id=l+N++,F&&(K[o]=F),L&&L.version()<11.6?(Q=e(y)[0]).text="document.getElementById('"+K.id+"')."+p+"()":K[s]=s,A&&(K.htmlFor=K.id,K.event=h),K[d]=K[p]=K[v]=function(e){if(!K[m]||!/i/.test(K[m])){try{K[h]&&K[h]()}catch(t){}e=C,C=0,e?Y(e[0]):Z(a)}},K.src=I,W=function(e){G&&clearTimeout(G),K[v]=K[d]=K[p]=null,x[g](K),Q&&x[g](Q)},x[f](K,J=x.firstChild),Q&&x[f](Q,J),G=R>0&&setTimeout(function(){Z(w)},R)),c)}var s="async",o="charset",u="",a="error",f="insertBefore",l="_jqjsp",c="on",h=c+"click",p=c+a,d=c+"load",v=c+"readystatechange",m="readyState",g="removeChild",y="<script>",b="success",w="timeout",E=window,S=e.Deferred,x=e("head")[0]||document.documentElement,T={},N=0,C,k={callback:l,url:location.href},L=E.opera,A=!!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;O.setup=function(t){e.extend(k,t)},e.jsonp=O})(jQuery);

/*
 * // require jquery
//= require purl
//= require jquery_i18n
//= require jquery.cookie.js
//= require jquery.inview.min.js
//= require jquery.jsonp-2.4.0.min.js
 */
 
/* 
 *  Copyright (C) 2011 Atlas of Living Australia
 *  All Rights Reserved.
 *
 *  The contents of this file are subject to the Mozilla Public
 *  License Version 1.1 (the "License"); you may not use this file
 *  except in compliance with the License. You may obtain a copy of
 *  the License at http://www.mozilla.org/MPL/
 *
 *  Software distributed under the License is distributed on an "AS
 *  IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 *  implied. See the License for the specific language governing
 *  rights and limitations under the License.
 *
 */
//= require searchCore.js
//= require_self

// Jquery Document.onLoad equivalent
$(document).ready(function() {

    /**
     * Load Spring i18n messages into JS
     */
    jQuery.i18n.properties({
        name: 'messages',
        path: BC_CONF.contextPath + '/messages/i18n/',
        mode: 'map',
        language: BC_CONF.locale // default is to use browser specified locale
        //callback: function(){} //alert( "facet.conservationStatus = " + jQuery.i18n.prop('facet.conservationStatus')); }
    });

    //alert("doc is loaded");
    // listeners for sort & paging widgets
    $("select#sort").change(function() {
        var val = $("option:selected", this).val();
        reloadWithParam('sort',val);
    });
    $("select#dir").change(function() {
        var val = $("option:selected", this).val();
        reloadWithParam('dir',val);
    });
    $("select#sort").change(function() {
        var val = $("option:selected", this).val();
        reloadWithParam('sort',val);
    });
    $("select#dir").change(function() {
        var val = $("option:selected", this).val();
        reloadWithParam('dir',val);
    });
    $("select#per-page").change(function() {
        var val = $("option:selected", this).val();
        reloadWithParam('pageSize',val);
    });

    // Jquery Tools Tabs setup
    var tabsInit = {
        map: false,
        charts: false,
        userCharts: false,
        images: false,
        species: false
    };


    // initialise BS tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        //console.log("this", $(this).attr('id'));
        var id = $(this).attr('id');
        var tab = e.currentTarget.hash.substring(1);
        amplify.store('search-tab-state', tab);
        location.hash = 'tab_'+ tab;

        if (id == "t2" && !tabsInit.map) {
            //console.log("tab2 FIRST");
            initialiseMap();
            tabsInit.map = true; // only initialise once!
        } else if (id == "t3" && !tabsInit.charts) {
            // trigger charts load
            loadDefaultCharts();
            tabsInit.charts = true; // only initialise once!
        } else if (id == "t6" && !tabsInit.userCharts) {
            // trigger charts load
            loadUserCharts();
            tabsInit.userCharts = true; // only initialise once!
        } else if (id == "t4" && !tabsInit.species) {
            loadSpeciesInTab(0, "common");
            tabsInit.species = true;
        } else if (id == "t5" && !tabsInit.images && BC_CONF.hasMultimedia) {
            loadImagesInTab();
            tabsInit.images = true;
        }
    });

    var storedSearchTab = amplify.store('search-tab-state');

    // work-around for intitialIndex & history being mutually exclusive
    if (!storedSearchTab && BC_CONF.defaultListView && !window.location.hash) {
        window.location.hash = BC_CONF.defaultListView; // used for avh, etc
    }

    // catch hash URIs and trigger tabs
    if (location.hash !== '') {
        $('.nav-tabs a[href="' + location.hash.replace('tab_','') + '"]').tab('show');
        //$('.nav-tabs li a[href="' + location.hash.replace('tab_','') + '"]').click();
    } else if (storedSearchTab) {
        //console.log("stored value", storedSearchTab);
        $('.nav-tabs a[href="#' + storedSearchTab+ '"]').tab('show');
    } else {
        $('.nav-tabs a:first').tab('show');
    }

    // Substitute LSID strings for tacon names in facet values for species
    var guidList = [];
    $("li.species_guid, li.genus_guid").each(function(i, el) {
        guidList[i] = $(el).attr("id");
    });

    if (guidList.length > 0) {
        // AJAX call to get names for LSIDs
        // IE7< has limit of 2000 chars on URL so split into 2 requests
        var guidListA = guidList.slice(0, 15) // first 15 elements
        var jsonUrlA = BC_CONF.bieWebappUrl + "/species/namesFromGuids.json?guid=" + guidListA.join("&guid=") + "&callback=?";
        $.getJSON(jsonUrlA, function(data) {
            // set the name in place of LSID
            $("li.species_guid, li.genus_guid").each(function(i, el) {
                if (i < 15) {
                    $(el).find("a").html("<i>"+data[i]+"</i>");
                } else {
                    return false; // breaks each loop
                }
            });
        });

        if (guidList.length > 15) {
            var guidListB = guidList.slice(15)
            var jsonUrlB = BC_CONF.bieWebappUrl + "/species/namesFromGuids.json?guid=" + guidListB.join("&guid=") + "&callback=?";
            $.getJSON(jsonUrlB, function(data) {
                // set the name in place of LSID
                $("li.species_guid, li.genus_guid").each(function(i, el) {
                    // skip forst 15 elements
                    if (i > 14) {
                        var k = i - 15;
                        $(el).find("a").html("<i>"+data[k]+"</i>");
                    }
                });
            });
        }
    }

    // do the same for the selected facet
    var selectedLsid = $("b.species_guid").attr("id");
    if (selectedLsid) {
        var jsonUrl2 = BC_CONF.bieWebappUrl + "/species/namesFromGuids.json?guid=" + selectedLsid + "&callback=?";
        $.getJSON(jsonUrl2, function(data) {
            // set the name in place of LSID
            $("b.species_guid").html("<i>"+data[0]+"</i>");
        });
    }

    // remove *:* query from search bar
    //var q = $.url().param('q');
    var q =  $.url().param('q');
    if (q && q[0] == "*:*") {
        $(":input#solrQuery").val("");
    }

    // active facets/filters
    $('.activeFilter').click(function(e) {
        e.preventDefault();
        removeFilter(this);
    });

    // bootstrap dropdowns - allow clicking inside dropdown div
    $('#facetCheckboxes').children().not('#updateFacetOptions').click(function(e) {
        //console.log("detected a Click");
        e.stopPropagation();
    });

    // in mobile view toggle display of facets
    $("#toggleFacetDisplay").click(function() {
        $(this).find("i").toggleClass("icon-chevron-down icon-chevron-right");
        if ($(".sidebar").is(":visible")) {
            $(".sidebar").removeClass("overrideHide");
        } else {
            $(".sidebar").addClass("overrideHide");
        }
    });

    // user selectable facets...
    $("input.facetOpts").change(function() {
        var selectedFacets = 0;
        $('#facetConfigErrors').html('').hide();

        //var val = $("option:selected", this).val();
        // count selected facets to check if facets.max has been exceeded
        $('input.facetOpts:checkbox:checked').each(function(){
            selectedFacets++;
        });

        if (BC_CONF.maxFacets && BC_CONF.maxFacets > 0 && selectedFacets > BC_CONF.maxFacets) {
            $('#facetConfigErrors').html(jQuery.i18n.prop('facets.max.exceeded', (selectedFacets - BC_CONF.maxFacets))).show();
        }
    });

    $("#updateFacetOptions").click(function(e) {
        e.preventDefault();
        // alert("about to reload with new facets...");
        var selectedFacets = [];
        // iterate over seleted facet options
        $(":input.facetOpts:checked").each(function(i, el) {
            selectedFacets.push($(el).val());
        });

        //Check user has selected at least 1 facet
        if (selectedFacets.length > 0 && selectedFacets.length  <= BC_CONF.maxFacets) {
            // save facets to the user_facets cookie
            $.cookie("user_facets", selectedFacets, { expires: 7 });
            // reload page
            document.location.reload(true);
        } else if (selectedFacets.length > BC_CONF.maxFacets) {
            alert(jQuery.i18n.prop('facets.max.exceeded', (selectedFacets.length - BC_CONF.maxFacets)));
        } else {
            alert(jQuery.i18n.prop('facets.max.select1'));
        }
    });

    // reset facet options to default values (clear cookie)
    $("#resetFacetOptions").click(function(e) {
        e.preventDefault();
        $.removeCookie('user_facets');
        document.location.reload(true);
    });

    // load stored prefs from cookie
    var userFacets = $.cookie("user_facets");
    if (userFacets) {
        $(":input.facetOpts").removeAttr("checked");
        var facetList = userFacets.split(",");
        for (i in facetList) {
            if (typeof facetList[i] === "string") {
                var thisFacet = facetList[i];
                //console.log("thisFacet", thisFacet);
                $(":input.facetOpts[value='"+thisFacet+"']").attr("checked","checked");
            }
        }
    } //  note removed else that did page refresh by triggering cookie update code.

    // select all and none buttons
    $(".selectNone").click(function(e) {
        e.preventDefault();
        $(":input.facetOpts").removeAttr("checked");
    });
    $(".selectAll").click(function(e) {
        e.preventDefault();
        $(":input.facetOpts").attr("checked","checked");
    });

    // taxa search - show included synonyms with popup to allow user to refine to a single name
    $("span.lsid").not('.searchError .lsid').each(function(i, el) {
        var lsid = $(this).attr("id");
        var nameString = $(this).html();
        var maxFacets = 20;
        var index = i; // keep a copy
        var queryContextParam = (BC_CONF.queryContext) ? "&qc=" + BC_CONF.queryContext : "";
        var jsonUri = BC_CONF.biocacheServiceUrl + "/occurrences/search.json?q=lsid:" + lsid + "&" + BC_CONF.facetQueries +
            "&facets=raw_taxon_name&pageSize=0&flimit=" + maxFacets + queryContextParam + "&callback=?";

        var $clone = $('#resultsReturned #template').clone();
        $clone.attr("id",""); // remove the ID
        $clone.find(".taxaMenuContent").addClass("stopProp");
        // add unique IDs to some elements
        $clone.find("form.raw_taxon_search").attr("id","rawTaxonSearch_" + i);
        $clone.find(":input.rawTaxonSumbit").attr("id","rawTaxonSumbit_" + i);
        $clone.find('.refineTaxaSearch').attr("id", "refineTaxaSearch_" + i);

        $.getJSON(jsonUri, function(data) {
            // use HTML template, see http://stackoverflow.com/a/1091493/249327
            var speciesPageUri = BC_CONF.bieWebappUrl + "/species/" + lsid;
            var speciesPageLink = "<a href='" + speciesPageUri + "' title='Species page' target='BIE'>view species page</a>";
            $clone.find('a.btn').text(nameString).attr("href", speciesPageUri);
            $clone.find('.nameString').text(nameString);
            $clone.find('.speciesPageLink').html(speciesPageLink);

            var synListSize = 0;
            var synList1 = "";
            $.each(data.facetResults, function(k, el) {
                //console.log("el", el);
                if (el.fieldName == "raw_taxon_name") {
                    $.each(el.fieldResult, function(j, el1) {
                        synListSize++;
                        synList1 += "<input type='checkbox' name='raw_taxon_guid' id='rawTaxon_" + index + "_" + j +
                            "' class='rawTaxonCheckBox' value='" + el1.label + "'/>&nbsp;" +
                            "<a href='" + BC_CONF.contextPath + "/occurrences/search?q=raw_taxon_name:%22" + el1.label +
                            "%22'>" + el1.label + "</a> (" + el1.count + ")<br/>";
                    });
                }
            });

            if (synListSize == 0) {
                synList1 += "[no records found]";
            }

            //synList1 += "</div>";

            if (synListSize >= maxFacets) {
                synList1 += "<div><br>Only showing the first " + maxFacets + " names<br>See the \"Scientific name (unprocessed)\" section in the \"Refine results\" column on the left for a complete list</div>";
            }

//            synList += "</div>";

            $clone.find('div.rawTaxaList').html(synList1);
            $clone.removeClass("hide");
            // prevent BS dropdown from closing when clicking on content
            $clone.find('.stopProp').children().not('input.rawTaxonSumbit').click(function(e) {
                e.stopPropagation();
            });

//            $("#rawTaxonSearchForm").append(synList);
            // position it under the drop down
//            $("#refineTaxaSearch_"+i).position({
//                my: "right top",
//                at: "right bottom",
//                of: $(el), // or this
//                offset: "0 -1",
//                collision: "none"
//            });
//            $("#refineTaxaSearch_"+i).hide();
        });
        // format display with drop-down
        //$("span.lsid").before("<span class='plain'> which matched: </span>");
//        $(el).html("<a href='#' title='click for details about this taxon search' id='lsid_" + i + "'>" + nameString + "</a>");
//        $(el).addClass("dropDown");
        $(el).html($clone);
    });

    // form validation for raw_taxon_name popup div with checkboxes
    $(":input.rawTaxonSumbit").on("click", function(e) {
        e.preventDefault();
        var submitId = $(this).attr("id");
        var formNum = submitId.replace("rawTaxonSumbit_",""); // 1, 2, etc
        var checkedFound = false;

        $("#refineTaxaSearch_" + formNum).find(":input.rawTaxonCheckBox").each(function(i, el) {
            if ($(el).is(':checked')) {
                checkedFound = true;
                return false; // break loop
            }
        });

        if (checkedFound) {
            //$("form#rawTaxonSearchForm").submit();
            var form  = this.form
            $(form).submit();
        } else {
            alert("Please check at least one \"verbatim scientific name\" checkbox.");
        }
    });

    // load more images button
    $("#loadMoreImages .btn").live("click", function(e) {
        e.preventDefault();
        $(this).addClass('disabled');
        $(this).find('img').show(); // turn on spinner
        var start = $("#imagesGrid").data('count');
        //console.log("start", start);
        loadImages(start);
    });

    // load more species images button
    $("#loadMoreSpecies").live("click", function(e) {
        e.preventDefault();
        var start = $("#speciesGallery").data('count');
        var group = $("#speciesGroup :selected").val();
        var sort = $("#speciesGallery").data('sort');
        //console.log("start", start);
        loadSpeciesInTab(start, sort, group);
    });

    // species tab -> species group drop down
    $("#speciesGroup, #speciesGallerySort").live("change", function(e) {
        var group = $("#speciesGroup :selected").val();
        var sort = $("#speciesGallerySort :selected").val();
        loadSpeciesInTab(0, sort, group);
    });

    // add click even on each record row in results list
    $(".recordRow").click(function(e) {
        e.preventDefault();
        window.location.href = BC_CONF.contextPath + "/occurrences/" + $(this).attr("id");
    }).hover(function(){
            // mouse in
            $(this).css('cursor','pointer');
            $(this).css('background-color','#FFF');
        }, function() {
            // mouse out
            $(this).css('cursor','default');
            $(this).css('background-color','transparent');
    });

    $('.multipleFacetsLink').click(function() {
        var link = this;
        var facetName = link.id.
            replace("multi-", "").
            replace("_guid", "").
            replace("_uid", "_name").
            replace("data_resource_name", "data_resource_uid").
            replace("data_provider_name", "data_provider_uid").
            replace("species_list_name", "species_list_uid").
            //replace(/(_[id])$/, "$1_RNG").
            replace("occurrence_year", "decade");

        var displayName = $(link).data("displayname");
        //console.log(facetName, displayName);
        loadMoreFacets(facetName, displayName, null);
    });

    $('#multipleFacets').on('hidden', function () {
        // clear the tbody content
        $("tbody.scrollContent tr").not("#spinnerRow").remove();
    });

    $("#downloadFacet").live("click", function(e) {
        var facetName = $("table#fullFacets").data("facet");
        //console.log('clicked ' + window.location.href );
        window.location.href = BC_CONF.biocacheServiceUrl + "/occurrences/facets/download" + BC_CONF.facetDownloadQuery + '&facets=' + facetName + '&count=true&lookup=true';
    });

    // form validation for form#facetRefineForm
    $("#submitFacets :input.submit").live("click", function(e) {
        e.preventDefault();
        var inverseModifier = ($(this).attr('id') == 'exclude') ? "-" : "";
        var fq = ""; // build up OR'ed fq query
        var facetName = $("table#fullFacets").data("facet");
        var checkedFound = false;
        var selectedCount = 0;
        var maxSelected = 15;
        $("form#facetRefineForm").find(":input.fqs").each(function(i, el) {
            //console.log("checking ", el);
            if ($(el).is(':checked')) {
                checkedFound = true;
                selectedCount++;
                fq += $(el).val() + " OR ";
                //return false; // break loop
            }
        });
        fq = fq.replace(/ OR $/, ""); // remove trailing OR

        if (fq.indexOf(' OR ') != -1) {
            fq = "(" + fq + ")"; // so that exclude (inverse) searches work
        }

        if (checkedFound && selectedCount > maxSelected) {
            alert("Too many options selected - maximum is " + maxSelected + ", you have selected " + selectedCount + ", please de-select " +
                (selectedCount - maxSelected) + " options. \n\nNote: if you want to include/exclude all possible values (wildcard filter), use the drop-down option on the buttons below.");
        } else if (checkedFound) {
            //$("form#facetRefineForm").submit();
            var hash = window.location.hash;
            var fqString = "&fq=" + inverseModifier + fq;
            window.location.href = window.location.pathname + BC_CONF.searchString + fqString + hash;
        } else {
            alert("Please select at least one checkbox.");
        }
    });

    // Drop-down option on facet popup div - for wildcard fq searches
    $('#submitFacets a.wildcard').live('click', function(e) {
        e.preventDefault();
        var link = this;
        var inverseModifier = ($(link).attr('id').indexOf('exclude') != -1) ? "-" : "";
        var facetName = $("table#fullFacets").data("facet");
        var fqString = "&fq=" + inverseModifier + facetName + ":*";
        //console.log("fqString",fqString);
        window.location.href = window.location.pathname + BC_CONF.searchString + fqString
    });

    // QTip generated tooltips
    //if($.fn.qtip.plugins.iOS) { return false; }

    $("a.multipleFacetsLink, a#downloadLink, a#alertsLink, .tooltips, .tooltip, span.dropDown a, div#customiseFacets > a, a.removeLink, .btn, .rawTaxonSumbit").qtip({
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow'
        },
        position: {
            target: 'mouse',
            adjust: { x: 6, y: 14 }
        }
    });

    // maultiple facets popup - sortable column heading links
    $("a.fsort").live("click", function(e) {
        e.preventDefault();
        var fsort = $(this).data('sort');
        var foffset = $(this).data('foffset');
        var table = $(this).closest('table');
        if (table.length == 0) {
            //console.log("table 1", table);
            table = $(this).parent().siblings('table#fullFacets');
        }
        //console.log("table 2", table);
        var facetName = $(table).data('facet');
        var displayName = $(table).data('label');
        //loadMultiFacets(facetName, displayName, criteria, foffset);
        loadFacetsContent(facetName, fsort, foffset, BC_CONF.facetLimit, true);
    });

    // loadMoreValues (legacy - now handled by inview)
    $("a.loadMoreValues").live("click", function(e) {
        e.preventDefault();
        var link = $(this);
        var fsort = link.data('sort');
        var foffset = link.data('foffset');
        var table = $("table#fullFacets");
        //console.log("table 2", table);
        var facetName = $(table).data('facet');
        var displayName = $(table).data('label');
        //loadMultiFacets(facetName, displayName, criteria, foffset);
        loadFacetsContent(facetName, fsort, foffset, BC_CONF.facetLimit, false);
    });

    // Inview trigger to load more values when tr comes into view
    $("tr#loadMore").live("inview", function() {
        var link = $(this).find("a.loadMoreValues");
        //console.log("inview", link);
        var fsort = link.data('sort');
        var foffset = link.data('foffset');
        var table = $("table#fullFacets");
        //console.log("table 2", table);
        var facetName = $(table).data('facet');
        var displayName = $(table).data('label');
        //loadMultiFacets(facetName, displayName, criteria, foffset);
        loadFacetsContent(facetName, fsort, foffset, BC_CONF.facetLimit, false);
    });

    // Email alert buttons
    var alertsUrlPrefix = BC_CONF.alertsUrl || "https://alerts.ala.org.au";
    $("a#alertNewRecords, a#alertNewAnnotations").click(function(e) {
        e.preventDefault();
        var query = $("<p>"+BC_CONF.queryString+"</p>").text(); // strips <span> from string
        var fqArray = decodeURIComponent(BC_CONF.facetQueries).split('&fq=').filter(function(e){ return e === 0 || e }); // remove empty elements
        if (fqArray) {
            var fqueryString = fqArray.join("; ");
            if(fqueryString.length > 0){
                query += " (" + fqueryString + ")"; // append the fq queries to queryString
            }
        }
        var methodName = $(this).data("method");
        var url = alertsUrlPrefix + "/ws/" + methodName + "?";
        url += "queryDisplayName="+encodeURIComponent(query);
        url += "&baseUrlForWS=" + encodeURIComponent(BC_CONF.biocacheServiceUrl.replace(/\/ws$/,""));
        url += "&baseUrlForUI=" + encodeURIComponent(BC_CONF.serverName);
        url += "&webserviceQuery=%2Fws%2Foccurrences%2Fsearch" + BC_CONF.searchString;
        url += "&uiQuery=%2Foccurrences%2Fsearch%3Fq%3D*%3A*";
        url += "&resourceName=" + encodeURIComponent(BC_CONF.resourceName);
        //console.log("url", query, methodName, url);
        window.location.href = url;
    });

    // Show/hide the facet groups
    $('.showHideFacetGroup').click(function(e) {
        e.preventDefault();
        var name = $(this).data('name');
        //console.log('toggle on #group_' + name, $('#group_' + name).is(":visible"))
        $(this).find('span').toggleClass('right-caret');
        $('#group_' + name).slideToggle(600, function() {
            //console.log('showHideFacetGroup',name);
            if ($('#group_' + name).is(":visible") ) {
                $('#group_' + name).find(".nano").nanoScroller({ preventPageScrolling: true });
                amplify.store('search-facets-state-' + name, true);
                //console.log("storing facet state", name, amplify.store('search-facets-state-' + name));
            } else {
                amplify.store('search-facets-state-' + name, null);
                //console.log("un-storing facet state", name, amplify.store('search-facets-state-' + name));
            }
        });
    });

    // Hide any facet groups if they don't contain any facet values
    $('.facetsGroup').each(function(i, el) {
        var name = $(el).attr('id').replace(/^group_/, '');
        var wasShown = amplify.store('search-facets-state-' + name);
        //console.log('facetsGroup','search-facets-state-' + name + '=', wasShown);
        if ($.trim($(el).html()) == '') {
            //console.log("is empty", name);
            $('#heading_' + name).hide();
        } else if (wasShown) {
            //console.log("wasShown", $(el).prev());
            $(el).prev().find('a').click();
        }
    });

    // scroll bars on facet values
    $(".nano").nanoScroller({ preventPageScrolling: true, sliderMinHeight: 90 });
    //$(".nano").overlayScrollbars({  });

    // store last search in local storage for a "back button" on record pages
    amplify.store('lastSearch', $.url().attr('relative'));

    // mouse over affect on thumbnail images
    $('#recordImages').on('hover', '.imgCon', function() {
        $(this).find('.brief, .detail').toggleClass('hide');
    });


    var imageId, attribution, recordUrl, scientificName;
    // Lightbox
    $(document).delegate('.thumbImage', 'click', function(event) {
        var recordLink = '<a href="RECORD_URL">View details of this record</a>'
        event.preventDefault();
        imageId = $(this).attr('data-image-id');
        scientificName = $(this).attr('data-scientific-name');
        attribution = $(this).find('.meta.detail').html();
        recordUrl = $(this).attr('href');
        recordLink = recordLink.replace('RECORD_URL', recordUrl);
        var flagIssueLink = '<a href="RECORD_URL">record.</a>';
        flagIssueLink = flagIssueLink.replace('RECORD_URL', recordUrl);
        attribution += '<br>' + recordLink +
                       '<br><br>If this image is incorrectly<br>identified please flag an<br>issue on the ' + flagIssueLink +'<br>';
        setDialogSize();
        $('#imageDialog').modal('show');
    });

    // show image only after modal dialog is shown. otherwise, image position will be off the viewing area.
    $('#imageDialog').on('shown.bs.modal',function () {

        if($("#viewerContainerId").width() == 0){
            //this is a workaround for #viewContainerId having width of zero, which results in the
            //image not rendering
            $("#viewerContainerId").width(($('#imageDialog').width() - 50));
        }

        imgvwr.viewImage($("#viewerContainerId"), imageId, scientificName, undefined, {
            imageServiceBaseUrl: BC_CONF.imageServiceBaseUrl,
            addSubImageToggle: false,
            addCalibration: false,
            addDrawer: false,
            addCloseButton: true,
            addAttribution: true,
            addLikeDislikeButton: BC_CONF.addLikeDislikeButton,
            addPreferenceButton: BC_CONF.addPreferenceButton,
            attribution: attribution,
            disableLikeDislikeButton: BC_CONF.disableLikeDislikeButton,
            likeUrl: BC_CONF.likeUrl + '?id=' + imageId,
            dislikeUrl: BC_CONF.dislikeUrl + '?id=' + imageId,
            userRatingUrl: BC_CONF.userRatingUrl + '?id=' + imageId,
            userRatingHelpText: BC_CONF.userRatingHelpText.replace('RECORD_URL', recordUrl),
            savePreferredSpeciesListUrl: BC_CONF.savePreferredSpeciesListUrl + '?id=' + imageId + '&scientificName=' + scientificName,
            getPreferredSpeciesListUrl: BC_CONF.getPreferredSpeciesListUrl
        });
    });

    // set size of modal dialog during a resize
    $(window).on('resize', setDialogSize)
    function setDialogSize() {
        var height = $(window).height()
        height *= 0.8
        $("#viewerContainerId").height(height);
    }
}); // end JQuery document ready

/**
 * Catch sort drop-down and build GET URL manually
 */
function reloadWithParam(paramName, paramValue) {
    var paramList = [];
    var q = $.url().param('q'); //$.query.get('q')[0];
    var fqList = $.url().param('fq'); //$.query.get('fq');
    var sort = $.url().param('sort');
    var dir = $.url().param('dir');
    var wkt = $.url().param('wkt');
    var pageSize = $.url().param('pageSize');
    var lat = $.url().param('lat');
    var lon = $.url().param('lon');
    var rad = $.url().param('radius');
    var taxa = $.url().param('taxa');
    // add query param
    if (q != null) {
        paramList.push("q=" + q);
    }
    // add filter query param
    if (fqList && typeof fqList === "string") {
        fqList = [ fqList ];
    } else if (!fqList) {
        fqList = [];
    }

    if (fqList) {
        paramList.push("fq=" + fqList.join("&fq="));
    }

    // add sort/dir/pageSize params if already set (different to default)
    if (paramName != 'sort' && sort != null) {
        paramList.push('sort' + "=" + sort);
    }

    if (paramName != 'dir' && dir != null) {
        paramList.push('dir' + "=" + dir);
    }

    if (paramName != 'pageSize' && pageSize != null) {
        paramList.push("pageSize=" + pageSize);
    }

    if (paramName != null && paramValue != null) {
        paramList.push(paramName + "=" + paramValue);
    }
    
    if (lat && lon && rad) {
        paramList.push("lat=" + lat);
        paramList.push("lon=" + lon);
        paramList.push("radius=" + rad);
    }
    
    if (taxa) {
        paramList.push("taxa=" + taxa);
    }

    if (wkt){
        paramList.push("wkt=" + wkt);
    }

    //alert("params = "+paramList.join("&"));
    //alert("url = "+window.location.pathname);
    window.location.href = window.location.pathname + '?' + paramList.join('&');
}

/**
 * triggered when user removes an active facet - re-calculates the request params for
 * page minus the requested fq param
 */
function removeFacet(el) {
    var facet = $(el).data("facet").replace(/\+/g,' ');
    var q = $.url().param('q'); //$.query.get('q')[0];
    var fqList = $.url().param('fq'); //$.query.get('fq');
    var lat = $.url().param('lat');
    var lon = $.url().param('lon');
    var rad = $.url().param('radius');
    var taxa = $.url().param('taxa');
    var paramList = [];
    if (q != null) {
        paramList.push("q=" + q);
    }
    //console.log("0. fqList", fqList);
    // add filter query param
    if (fqList && typeof fqList === "string") {
        fqList = [ fqList ];
    }

    //console.log("1. fqList", fqList);
    
    if (lat && lon && rad) {
        paramList.push("lat=" + lat);
        paramList.push("lon=" + lon);
        paramList.push("radius=" + rad);
    }
    
    if (taxa) {
        paramList.push("taxa=" + taxa);
    }

    //alert("this.facet = "+facet+"; fqList = "+fqList.join('|'));

    if (fqList instanceof Array) {
        //alert("fqList is an array");
        for (var i in fqList) {
            var thisFq = decodeURIComponent(fqList[i].replace(/\+/g,' ')); //.replace(':[',':'); // for dates to work
            //alert("fq = "+thisFq + " || facet = "+decodeURIComponent(facet));
            if (thisFq.indexOf(decodeURIComponent(facet)) != -1) {  // if(str1.indexOf(str2) != -1){
                //alert("removing fq: "+fqList[i]);
                fqList.splice($.inArray(fqList[i], fqList), 1);
            }
        }
    } else {
        //alert("fqList is NOT an array");
        if (decodeURIComponent(fqList) == facet) {
            fqList = null;
        }
    }
    //alert("(post) fqList = "+fqList.join('|'));
    if (fqList != null) {
        paramList.push("fq=" + fqList.join("&fq="));
    }

    window.location.href = window.location.pathname + '?' + paramList.join('&') + window.location.hash +"";
}

function removeFilter(el) {
    var facet = $(el).data("facet").replace(/^\-/g,''); // remove leading "-" for exclude searches
    var q = $.url().param('q'); //$.query.get('q')[0];
    var fqList = $.url().param('fq'); //$.query.get('fq');
    var lat = $.url().param('lat');
    var lon = $.url().param('lon');
    var rad = $.url().param('radius');
    var taxa = $.url().param('taxa');
    var wkt = $.url().param('wkt');
    var paramList = [];
    if (q != null) {
        paramList.push("q=" + q);
    }
    //console.log("0. fqList", fqList);
    // add filter query param
    if (fqList && typeof fqList === "string") {
        fqList = [ fqList ];
    }

    //console.log("1. fqList", fqList);

    if (lat && lon && rad) {
        paramList.push("lat=" + lat);
        paramList.push("lon=" + lon);
        paramList.push("radius=" + rad);
    }

    if (wkt) {
        paramList.push("wkt=" + wkt);
    }

    if (taxa) {
        paramList.push("taxa=" + taxa);
    }

    for (var i in fqList) {
        var fqParts = fqList[i].split(':');
        var fqField = fqParts[0].replace(/[\(\)\-]/g,"");
        //alert("fqField = " + fqField + " vs " + facet);

        if (fqField.indexOf(facet) != -1) {  // if(str1.indexOf(str2) != -1){
            //alert("removing fq: "+fqList[i]);
            fqList.splice($.inArray(fqList[i], fqList), 1);
        }
    }

    if (facet == "all") {
        fqList = [];
    }

    if (fqList != null) {
        paramList.push("fq=" + fqList.join("&fq="));
    }

    //alert("paramList = " + paramList.join('&'));

    window.location.href = window.location.pathname + '?' + paramList.join('&') + window.location.hash +"";
}

/**
 * Load the default charts
 */
function loadDefaultCharts() {
    if (dynamicFacets && dynamicFacets.length > 0) {
        var chartsConfigUri = BC_CONF.biocacheServiceUrl + "/upload/charts/" + BC_CONF.selectedDataResource + ".json";
        $.getJSON(chartsConfigUri, function (chartsConfig) {

            //console.log("Number of dynamic charts to render: " + chartsConfig.length, dynamicFacets);

            var conf = {}

            $.each(chartsConfig, function (index, config) {
                if (config.visible) {
                    var type = 'bar'
                    if (config.format == 'pie') type = 'doughnut'
                    conf[config.field] = {
                        chartType: type,
                        emptyValueMsg: '',
                        hideEmptyValues: true,
                        title: config.field
                    }
                }
            });
            chartConfig.charts = conf;

            var charts = ALA.BiocacheCharts('charts', chartConfig);
        });
    } else {
        var charts = ALA.BiocacheCharts('charts', chartConfig);
    }
}

/**
 * Load the user charts
 */
function loadUserCharts() {

    if (userChartConfig) { //userCharts
        //load user charts
        $.ajax({
            dataType: "json",
            url: BC_CONF.serverName + "/user/chart",
            success: function(data) {
                if ($.map(data, function (n, i) {
                        return i;
                    }).length > 3) {
                    //console.log("loading user chart data")
                    //console.log(data)

                    //do not display user charts by default
                    $.map(data.charts, function (value, key) {
                        value.hideOnce = true;
                    });

                    data.chartControlsCallback = saveChartConfig

                    //set current context
                    data.biocacheServiceUrl = userChartConfig.biocacheServiceUrl;
                    data.biocacheWebappUrl = userChartConfig.biocacheWebappUrl;
                    data.query = userChartConfig.query;
                    data.queryContext = userChartConfig.queryContext;
                    data.filter = userChartConfig.filter;
                    data.facetQueries = userChartConfig.facetQueries;

                    var charts = ALA.BiocacheCharts('userCharts', data);
                } else {
                    userChartConfig.charts = {}
                    userChartConfig.chartControlsCallback = saveChartConfig
                    var charts = ALA.BiocacheCharts('userCharts', userChartConfig);
                }
            },
            error: function (data) {
                userChartConfig.charts = {}
                userChartConfig.chartControlsCallback = saveChartConfig
                var charts = ALA.BiocacheCharts('userCharts', userChartConfig);
            }
        })
    }
}

function saveChartConfig(data) {
    //console.log("saving user chart data");
    //console.log(data);

    var d = jQuery.extend(true, {}, data);

    //remove unnecessary data
    delete d.chartControlsCallback
    $.each (d.charts, function(key, value) { if (value.slider) delete value.slider; });
    $.each (d.charts, function(key, value) { if (value.datastructure) delete value.datastructure});
    $.each (d.charts, function(key, value) { if (value.chart) delete value.chart});

    if (data) {
        $.ajax({
            url: BC_CONF.serverName + "/user/chart",
            type: "POST",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(d)
        })
    }
}

/**
 * Load images in images tab
 */
function loadImagesInTab() {
    loadImages(0);
}

function loadImages(start) {

        start = (start) ? start : 0;
        var imagesJsonUri = BC_CONF.biocacheServiceUrl + "/occurrences/search.json" + BC_CONF.searchString +
            "&fq=multimedia:Image&facet=false&pageSize=20&start=" + start + "&sort=identification_qualifier_s&dir=asc&callback=?";
        $.getJSON(imagesJsonUri, function (data) {
            //console.log("data",data);
            if (data.occurrences && data.occurrences.length > 0) {
                //var htmlUl = "";
                if (start == 0) {
                    $("#imagesGrid").html("");
                }
                var count = 0;
                $.each(data.occurrences, function (i, el) {
                    //console.log("el", el.image);
                    count++;
                    var sciNameRawOrMatched = (el.raw_scientificName === undefined? el.scientificName : el.raw_scientificName); //e.g. if data submitted using species ID's instead of scientific names
                    // clone template div & populate with metadata
                    var $ImgConTmpl = $('.imgConTmpl').clone();
                    $ImgConTmpl.removeClass('imgConTmpl').removeClass('hide');
                    var link = $ImgConTmpl.find('a.cbLink');
                    //link.attr('id','thumb_' + category + i);
                    link.addClass('thumbImage tooltips');
                    link.attr('href', BC_CONF.contextPath + "/occurrences/" + el.uuid);
                    link.attr('title', 'click to enlarge');
                    link.attr('data-occurrenceuid', el.uuid);
                    link.attr('data-image-id', el.image);
                    link.attr('data-scientific-name', sciNameRawOrMatched);
                    
                    $ImgConTmpl.find('img').attr('src', el.smallImageUrl);
                    // brief metadata
                    var briefHtml = sciNameRawOrMatched;
                    var br = "<br>";
                    if (el.typeStatus) briefHtml += br + el.typeStatus;
                    if (el.institutionName) briefHtml += ((el.typeStatus) ? ' | ' : br) + el.institutionName;
                    $ImgConTmpl.find('.brief').html(briefHtml);
                    // detail metadata
                    var detailHtml = sciNameRawOrMatched;
                    if (el.typeStatus) detailHtml += br + 'Type: ' + el.typeStatus;
                    if (el.collector) detailHtml += br + 'By: ' + el.collector;
                    if (el.eventDate) detailHtml += br + 'Date: ' + moment(el.eventDate).format('YYYY-MM-DD');
                    if (el.institutionName) {
                        detailHtml += br + el.institutionName;
                    } else {
                        detailHtml += br + el.dataResourceName;
                    }
                    $ImgConTmpl.find('.detail').html(detailHtml);
    
                    // write to DOM
                    $("#imagesGrid").append($ImgConTmpl.html());
                });
    
                if (count + start < data.totalRecords) {
                    //console.log("load more", count, start, count + start, data.totalRecords);
                    $('#imagesGrid').data('count', count + start);
                    $("#loadMoreImages").show();
                    $("#loadMoreImages .btn").removeClass('disabled');
                } else {
                    $("#loadMoreImages").hide();
                }
    
            } else {
                $('#imagesGrid').html('<p>' + jQuery.i18n.prop('list.noimages.available') + '</p>');
            }
        }).always(function () {
            $("#loadMoreImages img").hide();
        });
}

/**
 * Load the species tab with list of species from the current query.
 * Uses automatic scrolling to load new bunch of rows when user scrolls.
 *
 * @param start
 */
function loadSpeciesInTab(start, sortField, group) {
    var pageSize = 20;
    var init = $('#speciesGallery').data('init');
    start = (start) ? start : 0;
    group = (group) ? group : "ALL_SPECIES";
    // sortField should be one of: taxa, common, count
    var sortExtras;
    switch (sortField) {
        case 'taxa': sortExtras = "&common=false&sort=index";
            break;
        default:
        case 'common': sortExtras = "&common=true&sort=index";
            break;
        case 'count': sortExtras = "&common=false&sort=count";
            break;
    }

    if (!init) {
        // populate the groups dropdown
        var groupsUrl = BC_CONF.biocacheServiceUrl + "/explore/groups.json" + BC_CONF.searchString + "&facets=species_group&callback=?";
        $.getJSON(groupsUrl, function(data) {
            if (data.length > 0) {
                $("#speciesGroup").empty();
                $.each(data, function(i, el) {
                    if (el.count > 0) {
                        var indent = Array(el.level + 1).join("-") + " ";
                        var dispayName = el.name.replace("_", " ");
                        if (el.level == 0) {
                            dispayName = dispayName.toLowerCase(); // lowercase
                            dispayName = dispayName.charAt(0).toUpperCase() + dispayName.slice(1); // capitalise first letter
                        }
                        var opt = $("<option value='" + el.name + "'>" + indent + dispayName + " (" + el.speciesCount + ")</option>");
                        $("#speciesGroup").append(opt);
                    }
                });
            }
        }).error(function(){ $("#speciesGroup option").val("Error: species groups were not loaded");});
        //
        $('#speciesGallery').data('init', true);
    } else {
        //$("#loadMoreSpecies").hide();
    }

    if (start == 0) {
        $("#speciesGallery").empty().before("<div id='loadingSpecies'>Loading... <img src='" + BC_CONF.contextPath + "/images/spinner.gif'/></div>");
        $("#loadMoreSpecies").hide();
    } else {
        $("#loadMoreSpecies img").show();
    }

    var speciesJsonUrl = BC_CONF.contextPath + "/proxy/exploreGroupWithGallery" + BC_CONF.searchString + // TODO fix proxy
            "&group=" + group + "&pageSize=" + pageSize + "&start=" + start + sortExtras;

    $.getJSON(speciesJsonUrl, function(data) {
        //console.log("data", data);
        if (data.length > 0) {
            //var html = "<table><thead><tr><th>Image</th><th>Scientific name</th><th>Common name</th><th>Record count</th></tr></thead><tbody>";
            var count = 0;
            $.each(data, function(i, el) {
                // don't show higher taxa
                count++;
                if (el.rankId > 6000 && el.thumbnailUrl) {
                    var imgEl = $("<img src='" + el.thumbnailUrl +
                        "' style='height:100px; cursor:pointer;'/>");
                    var metaData = {
                        type: 'species',
                        guid: el.guid,
                        rank: el.rank,
                        rankId: el.rankId,
                        sciName: el.scientificName,
                        commonName: el.commonName,
                        count: el.count
                    };
                    imgEl.data(metaData);
                    $("#speciesGallery").append(imgEl);
                }
            });

            if (count == pageSize) {
                //console.log("load more", count, start, count + start, data.totalRecords);
                $('#speciesGallery').data('count', count + start);
                $("#loadMoreSpecies").show();
            } else {
                $("#loadMoreSpecies").hide();
            }

            $('#speciesGallery img').ibox(); // enable hover effect

            //html += "</tbody></table>";
//            $("#speciesGallery").append(html);

        }
    }).error(function (request, status, error) {
            alert(request.responseText);
    }).complete(function() {
            $("#loadingSpecies").remove();
            $("#loadMoreSpecies img").hide();
    });
}

/**
 * iBox Jquery plugin for Google Images hover effect.
 * Origina by roxon http://stackoverflow.com/users/383904/roxon
 * Posted to stack overflow: 
 *   http://stackoverflow.com/questions/7411393/pop-images-like-google-images/7412302#7412302
 */
(function($) {
    $.fn.ibox = function() {
        // set zoom ratio //
        resize = 50; // pixels to add to img height
        ////////////////////
        var img = this;
        img.parent().parent().parent().append('<div id="ibox" />');
        $('body').append('<div id="ibox" />');
        var ibox = $('#ibox');
        var elX = 0;
        var elY = 0;

        img.each(function() {
            var el = $(this);

            el.mouseenter(function() {
                ibox.html('');
                var elH = el.height();
                var elW = el.width();
                var ratio = elW / elH; //(elW > elH) ? elW / elH : elH / elW;
                var newH = elH + resize;
                var newW = newH * ratio;
                var offset = (((newW - elW) / 2) + 6);
                //console.log(ratio, elW, newW, offset);
                elX = el.position().left - offset ; // 6 = CSS#ibox padding+border
                elY = el.position().top - 6;
                var h = el.height();
                var w = el.width();
                var wh;
                checkwh = (h < w) ? (wh = (w / h * resize) / 2) : (wh = (w * resize / h) / 2);

                $(this).clone().prependTo(ibox);

                var link, rank, linkTitle, count;
                var md = $(el).data();

                if (md.type == 'species') {
                    link = BC_CONF.bieWebappUrl + "/species/"  + md.guid;
                    linkTitle = "Go to ALA species page";
                    rank = " ";
                    count = " <br/>Record count: " + md.count;
                } else {
                    link = BC_CONF.contextPath + "/occurrences/"  + md.uuid;
                    linkTitle = "Go to occurrence record";
                    rank = "<span style='text-transform: capitalize'>" + md.rank + "</span>: ";
                    count = "";
                }

                var itals = (md.rankId >= 6000) ? "<span style='font-style: italic;'>" : "<span>";
                var infoDiv = "<div style=''><a href='" + link + "' title='" + linkTitle + "'>" + rank + itals +
                    md.sciName + "</span><br/>" + md.commonName.replace("| ", "") + "</a> " + count + "</div>";
                $(ibox).append(infoDiv);
                $(ibox).click(function(e) {
                    e.preventDefault();
                    window.location.href = link;
                });
                
                ibox.css({
                    top: elY + 'px',
                    left: elX + 'px',
                    "max-width": $(el).width() + (2 * wh) + 12
                });

                ibox.stop().fadeTo(200, 1, function() {
                    //$(this).animate({top: '-='+(resize/2), left:'-='+wh},200).children('img').animate({height:'+='+resize},200);
                    $(this).children('img').animate({height:'+='+resize},200);
                });
                
            });

            ibox.mouseleave(function() {
                ibox.html('').hide();
            });
        });
    };
})(jQuery);

// vars for hiding drop-dpwn divs on click outside tem
var hoverDropDownDiv = false;

/**
 * draws the div for selecting multiple facets (popup div)
 *
 * Uses HTML template, found in the table itself.
 * See: http://stackoverflow.com/a/1091493/249327
 */
function loadMoreFacets(facetName, displayName, fsort, foffset) {
    foffset = (foffset) ? foffset : "0";
    var facetLimit = BC_CONF.facetLimit;
    var params = BC_CONF.searchString.replace(/^\?/, "").split("&");
    // include hidden inputs for current request params
    var inputsHtml = "";
    $.each(params, function(i, el) {
        var pair = el.split("=");
        if (pair.length == 2) {
            inputsHtml += "<input type='hidden' name='" + pair[0] + "' value='" + pair[1] + "'/>";
        }
    });
    $('#facetRefineForm').append(inputsHtml);
    $('table#fullFacets').data('facet', facetName); // data attribute for storing facet field
    $('table#fullFacets').data('label', displayName); // data attribute for storing facet display name
    $('#indexCol a').html(displayName); // table heading
    $('#indexCol a').attr('title', 'sort by ' + displayName); // table heading

    $("table#fullFacets tbody").html(""); //clear the existing table

    $("a.fsort").qtip({
        style: {
            classes: 'ui-tooltip-rounded ui-tooltip-shadow'
        },
        position: {
            target: 'mouse',
            adjust: {
                x: 8, y: 12
            }
        }
    });
    // perform ajax
    loadFacetsContent(facetName, fsort, foffset, facetLimit);

}

function loadFacetsContent(facetName, fsort, foffset, facetLimit, replaceFacets) {
    var jsonUri = BC_CONF.biocacheServiceUrl + "/occurrences/search.json" + BC_CONF.searchString +
        "&facets=" + facetName + "&flimit=" + facetLimit + "&foffset=" + foffset + "&pageSize=0"; // + "&fsort=" + fsort

    if (fsort) {
        // so default facet sorting is used in initial loading
        jsonUri += "&fsort=" + fsort;
    }
    jsonUri += "&callback=?"; // JSONP trigger

    $.getJSON(jsonUri, function(data) {
        //console.log("data",data);
        if (data.totalRecords && data.totalRecords > 0) {
            var hasMoreFacets = false;
            var html = "";
            $("tr#loadingRow").remove(); // remove the loading message
            $("tr#loadMore").remove(); // remove the load more records link
            if (replaceFacets) {
                // remove any facet values in table
                $("table#fullFacets tr").not("tr.tableHead").not("#spinnerRow").remove();
            }
            $.each(data.facetResults[0].fieldResult, function(i, el) {
                //console.log("0. facet", el);
                if (el.count > 0) {

                    // surround with quotes: fq value if contains spaces but not for range queries
                    var fqEsc = ((el.label.indexOf(" ") != -1 || el.label.indexOf(",") != -1 || el.label.indexOf("lsid") != -1) && el.label.indexOf("[") != 0)
                        ? "\"" + el.label + "\""
                        : el.label; // .replace(/:/g,"\\:")
                    var label = (el.displayLabel) ? el.displayLabel : el.label ;
                    var encodeFq = true;
                    if (label.indexOf("@") != -1) {
                        label = label.substring(0,label.indexOf("@"));
                    } else if (jQuery.i18n.prop(el.i18nCode).indexOf("[") == -1) {
                        // i18n substitution
                        label = jQuery.i18n.prop(el.i18nCode);
                    } else if (facetName.indexOf("outlier_layer") != -1 || /^el\d+/.test(label)) {
                        label = jQuery.i18n.prop("layer." + label);
                    } else if (facetName.indexOf("geospatial_kosher") != -1 || /^el\d+/.test(label)) {
                        label = jQuery.i18n.prop("geospatial_kosher." + label);
                    } else if (facetName.indexOf("user_assertions") != -1 || /^el\d+/.test(label)) {
                        label = jQuery.i18n.prop("user_assertions." + label);
                    } else if (facetName.indexOf("duplicate_type") != -1 || /^el\d+/.test(label)) {
                        label = jQuery.i18n.prop("duplication." + label);
                    } else if (facetName.indexOf("taxonomic_issue") != -1 || /^el\d+/.test(label)) {
                        label = jQuery.i18n.prop(label);
                    } else if (!label && el.i18nCode.indexOf("novalue") != -1) {
                        label = "[no value]";
                    } else {
                        var code = facetName + "." + label;
                        var i18nLabel = jQuery.i18n.prop(code);
                        //console.log("ELSE",label, code, i18nLabel, jQuery.i18n.prop(label))
                        var newLabel = (i18nLabel.indexOf("[") == -1) ? i18nLabel : (jQuery.i18n.prop(label));
                        label = (newLabel.indexOf("[") == -1) ? newLabel : label;
                    }
                    facetName = facetName.replace(/_RNG$/,""); // remove range version if present
                    //console.log("label", label, facetName, el);
                    var fqParam = (el.fq) ? encodeURIComponent(el.fq) : facetName + ":" + ((encodeFq) ? encodeURIComponent(fqEsc) : fqEsc) ;
                    //var link = BC_CONF.searchString.replace("'", "&apos;") + "&fq=" + fqParam;
                    
                    //NC: 2013-01-16 I changed the link so that the search string is uri encoded so that " characters do not cause issues 
                    //Problematic URL http://biocache.ala.org.au/occurrences/search?q=lsid:urn:lsid:biodiversity.org.au:afd.taxon:b76f8dcf-fabd-4e48-939c-fd3cafc1887a&fq=geospatial_kosher:true&fq=state:%22Australian%20Capital%20Territory%22
                    var link = BC_CONF.searchString + "&fq=" + fqParam;
                    //console.log(link)
                    var rowType = (i % 2 == 0) ? "normalRow" : "alternateRow";
                    html += "<tr class='" + rowType + "'><td>" +
                        "<input type='checkbox' name='fqs' class='fqs' value='"  + fqParam +
                        "'/></td><td class='multiple-facet-value'><a href=\"" + link + "\"> " + label + "</a></td><td class='multiple-facet-count'>" + el.count + "</td></tr>";
                }
                if (i == facetLimit - 1) {
                    //console.log("got to end of page of facets: " + i);
                    hasMoreFacets = true;
                }
            });
            $("table#fullFacets tbody").append(html);
            $('#spinnerRow').hide();
            // Fix some border issues
            $("table#fullFacets tr:last td").css("border-bottom", "1px solid #CCCCCC");
            $("table#fullFacets td:last-child, table#fullFacets th:last-child").css("border-right", "none");
            //$("tr.hidden").fadeIn('slow');

            if (hasMoreFacets) {
                var offsetInt = Number(foffset);
                var flimitInt = Number(facetLimit);
                var loadMore =  "<tr id='loadMore' class=''><td colspan='3'><a href='#index' class='loadMoreValues' data-sort='" +
                    fsort + "' data-foffset='" + (offsetInt + flimitInt) +
                    "'>Loading " + facetLimit + " more values...</a></td></tr>";
                $("table#fullFacets tbody").append(loadMore);
                //$("tr#loadMore").fadeIn('slow');
            }

            var tableHeight = $("#fullFacets tbody").height();
            var tbodyHeight = 0;
            $("#fullFacets tbody tr").each(function(i, el) {
                tbodyHeight += $(el).height();
            });
            //console.log("table heights", tableHeight, tbodyHeight);
            if (false && tbodyHeight < tableHeight) {
                // no scroll bar so adjust column widths
                var thWidth = $(".scrollContent td + td + td").width() + 18; //$("th#indexCol").width() + 36;
                $(".scrollContent td + td + td").width(thWidth);

            }
            //$.fancybox.resize();
        } else {
            $("tr#loadingRow").remove(); // remove the loading message
            $("tr#loadMore").remove(); // remove the load more records link
            $('#spinnerRow').hide();
            $("table#fullFacets tbody").append("<tr><td></td><td>[Error: no values returned]</td></tr>");
        }
    });
}

