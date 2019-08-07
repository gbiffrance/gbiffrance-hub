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

 
 
(function(h,o,g){var p=function(){for(var b=/audio(.min)?.js.*/,a=document.getElementsByTagName("script"),c=0,d=a.length;c<d;c++){var e=a[c].getAttribute("src");if(b.test(e))return e.replace(b,"")}}();g[h]={instanceCount:0,instances:{},flashSource:'      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance='+h+'.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance='+
h+'.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',settings:{autoplay:false,loop:false,preload:true,imageLocation:p+"player-graphics.gif",swfLocation:p+"audiojs.swf",useFlash:function(){var b=document.createElement("audio");return!(b.canPlayType&&b.canPlayType("audio/mpeg;").replace(/no/,""))}(),hasFlash:function(){if(navigator.plugins&&navigator.plugins.length&&navigator.plugins["Shockwave Flash"])return true;else if(navigator.mimeTypes&&navigator.mimeTypes.length){var b=
navigator.mimeTypes["application/x-shockwave-flash"];return b&&b.enabledPlugin}else try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(a){}return false}(),createPlayer:{markup:'          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
playPauseClass:"play-pause",scrubberClass:"scrubber",progressClass:"progress",loaderClass:"loaded",timeClass:"time",durationClass:"duration",playedClass:"played",errorMessageClass:"error-message",playingClass:"playing",loadingClass:"loading",errorClass:"error"},css:'        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 290px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
trackEnded:function(){},flashError:function(){var b=this.settings.createPlayer,a=j(b.errorMessageClass,this.wrapper),c='Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';if(this.mp3)c+=' <a href="'+this.mp3+'">Download audio file</a>.';g[h].helpers.removeClass(this.wrapper,b.loadingClass);g[h].helpers.addClass(this.wrapper,b.errorClass);a.innerHTML=c},loadError:function(){var b=this.settings.createPlayer,a=j(b.errorMessageClass,this.wrapper);g[h].helpers.removeClass(this.wrapper,
b.loadingClass);g[h].helpers.addClass(this.wrapper,b.errorClass);a.innerHTML='Error loading: "'+this.mp3+'"'},init:function(){g[h].helpers.addClass(this.wrapper,this.settings.createPlayer.loadingClass)},loadStarted:function(){var b=this.settings.createPlayer,a=j(b.durationClass,this.wrapper),c=Math.floor(this.duration/60),d=Math.floor(this.duration%60);g[h].helpers.removeClass(this.wrapper,b.loadingClass);a.innerHTML=(c<10?"0":"")+c+":"+(d<10?"0":"")+d},loadProgress:function(b){var a=this.settings.createPlayer,
c=j(a.scrubberClass,this.wrapper);j(a.loaderClass,this.wrapper).style.width=c.offsetWidth*b+"px"},playPause:function(){this.playing?this.settings.play():this.settings.pause()},play:function(){g[h].helpers.addClass(this.wrapper,this.settings.createPlayer.playingClass)},pause:function(){g[h].helpers.removeClass(this.wrapper,this.settings.createPlayer.playingClass)},updatePlayhead:function(b){var a=this.settings.createPlayer,c=j(a.scrubberClass,this.wrapper);j(a.progressClass,this.wrapper).style.width=
c.offsetWidth*b+"px";a=j(a.playedClass,this.wrapper);c=this.duration*b;b=Math.floor(c/60);c=Math.floor(c%60);a.innerHTML=(b<10?"0":"")+b+":"+(c<10?"0":"")+c}},create:function(b,a){a=a||{};return b.length?this.createAll(a,b):this.newInstance(b,a)},createAll:function(b,a){var c=a||document.getElementsByTagName("audio"),d=[];b=b||{};for(var e=0,i=c.length;e<i;e++)d.push(this.newInstance(c[e],b));return d},newInstance:function(b,a){var c=this.helpers.clone(this.settings),d="audiojs"+this.instanceCount,
e="audiojs_wrapper"+this.instanceCount;this.instanceCount++;if(b.getAttribute("autoplay")!=null)c.autoplay=true;if(b.getAttribute("loop")!=null)c.loop=true;if(b.getAttribute("preload")=="none")c.preload=false;a&&this.helpers.merge(c,a);if(c.createPlayer.markup)b=this.createPlayer(b,c.createPlayer,e);else b.parentNode.setAttribute("id",e);e=new g[o](b,c);c.css&&this.helpers.injectCss(e,c.css);if(c.useFlash&&c.hasFlash){this.injectFlash(e,d);this.attachFlashEvents(e.wrapper,e)}else c.useFlash&&!c.hasFlash&&
this.settings.flashError.apply(e);if(!c.useFlash||c.useFlash&&c.hasFlash)this.attachEvents(e.wrapper,e);return this.instances[d]=e},createPlayer:function(b,a,c){var d=document.createElement("div"),e=b.cloneNode(true);d.setAttribute("class","audiojs");d.setAttribute("className","audiojs");d.setAttribute("id",c);if(e.outerHTML&&!document.createElement("audio").canPlayType){e=this.helpers.cloneHtml5Node(b);d.innerHTML=a.markup;d.appendChild(e);b.outerHTML=d.outerHTML;d=document.getElementById(c)}else{d.appendChild(e);
d.innerHTML+=a.markup;b.parentNode.replaceChild(d,b)}return d.getElementsByTagName("audio")[0]},attachEvents:function(b,a){if(a.settings.createPlayer){var c=a.settings.createPlayer,d=j(c.playPauseClass,b),e=j(c.scrubberClass,b);g[h].events.addListener(d,"click",function(){a.playPause.apply(a)});g[h].events.addListener(e,"click",function(i){i=i.clientX;var f=this,k=0;if(f.offsetParent){do k+=f.offsetLeft;while(f=f.offsetParent)}a.skipTo((i-k)/e.offsetWidth)});if(!a.settings.useFlash){g[h].events.trackLoadProgress(a);
g[h].events.addListener(a.element,"timeupdate",function(){a.updatePlayhead.apply(a)});g[h].events.addListener(a.element,"ended",function(){a.trackEnded.apply(a)});g[h].events.addListener(a.source,"error",function(){clearInterval(a.readyTimer);clearInterval(a.loadTimer);a.settings.loadError.apply(a)})}}},attachFlashEvents:function(b,a){a.swfReady=false;a.load=function(c){a.mp3=c;a.swfReady&&a.element.load(c)};a.loadProgress=function(c,d){a.loadedPercent=c;a.duration=d;a.settings.loadStarted.apply(a);
a.settings.loadProgress.apply(a,[c])};a.skipTo=function(c){if(!(c>a.loadedPercent)){a.updatePlayhead.call(a,[c]);a.element.skipTo(c)}};a.updatePlayhead=function(c){a.settings.updatePlayhead.apply(a,[c])};a.play=function(){if(!a.settings.preload){a.settings.preload=true;a.element.init(a.mp3)}a.playing=true;a.element.pplay();a.settings.play.apply(a)};a.pause=function(){a.playing=false;a.element.ppause();a.settings.pause.apply(a)};a.setVolume=function(c){a.element.setVolume(c)};a.loadStarted=function(){a.swfReady=
true;a.settings.preload&&a.element.init(a.mp3);a.settings.autoplay&&a.play.apply(a)}},injectFlash:function(b,a){var c=this.flashSource.replace(/\$1/g,a);c=c.replace(/\$2/g,b.settings.swfLocation);c=c.replace(/\$3/g,+new Date+Math.random());var d=b.wrapper.innerHTML,e=document.createElement("div");e.innerHTML=c+d;b.wrapper.innerHTML=e.innerHTML;b.element=this.helpers.getSwf(a)},helpers:{merge:function(b,a){for(attr in a)if(b.hasOwnProperty(attr)||a.hasOwnProperty(attr))b[attr]=a[attr]},clone:function(b){if(b==
null||typeof b!=="object")return b;var a=new b.constructor,c;for(c in b)a[c]=arguments.callee(b[c]);return a},addClass:function(b,a){RegExp("(\\s|^)"+a+"(\\s|$)").test(b.className)||(b.className+=" "+a)},removeClass:function(b,a){b.className=b.className.replace(RegExp("(\\s|^)"+a+"(\\s|$)")," ")},injectCss:function(b,a){for(var c="",d=document.getElementsByTagName("style"),e=a.replace(/\$1/g,b.settings.imageLocation),i=0,f=d.length;i<f;i++){var k=d[i].getAttribute("title");if(k&&~k.indexOf("audiojs")){f=
d[i];if(f.innerHTML===e)return;c=f.innerHTML;break}}d=document.getElementsByTagName("head")[0];i=d.firstChild;f=document.createElement("style");if(d){f.setAttribute("type","text/css");f.setAttribute("title","audiojs");if(f.styleSheet)f.styleSheet.cssText=c+e;else f.appendChild(document.createTextNode(c+e));i?d.insertBefore(f,i):d.appendChild(styleElement)}},cloneHtml5Node:function(b){var a=document.createDocumentFragment(),c=a.createElement?a:document;c.createElement("audio");c=c.createElement("div");
a.appendChild(c);c.innerHTML=b.outerHTML;return c.firstChild},getSwf:function(b){b=document[b]||window[b];return b.length>1?b[b.length-1]:b}},events:{memoryLeaking:false,listeners:[],addListener:function(b,a,c){if(b.addEventListener)b.addEventListener(a,c,false);else if(b.attachEvent){this.listeners.push(b);if(!this.memoryLeaking){window.attachEvent("onunload",function(){if(this.listeners)for(var d=0,e=this.listeners.length;d<e;d++)g[h].events.purge(this.listeners[d])});this.memoryLeaking=true}b.attachEvent("on"+
a,function(){c.call(b,window.event)})}},trackLoadProgress:function(b){if(b.settings.preload){var a,c;b=b;var d=/(ipod|iphone|ipad)/i.test(navigator.userAgent);a=setInterval(function(){if(b.element.readyState>-1)d||b.init.apply(b);if(b.element.readyState>1){b.settings.autoplay&&b.play.apply(b);clearInterval(a);c=setInterval(function(){b.loadProgress.apply(b);b.loadedPercent>=1&&clearInterval(c)})}},10);b.readyTimer=a;b.loadTimer=c}},purge:function(b){var a=b.attributes,c;if(a)for(c=0;c<a.length;c+=
1)if(typeof b[a[c].name]==="function")b[a[c].name]=null;if(a=b.childNodes)for(c=0;c<a.length;c+=1)purge(b.childNodes[c])},ready:function(){return function(b){var a=window,c=false,d=true,e=a.document,i=e.documentElement,f=e.addEventListener?"addEventListener":"attachEvent",k=e.addEventListener?"removeEventListener":"detachEvent",n=e.addEventListener?"":"on",m=function(l){if(!(l.type=="readystatechange"&&e.readyState!="complete")){(l.type=="load"?a:e)[k](n+l.type,m,false);if(!c&&(c=true))b.call(a,l.type||
l)}},q=function(){try{i.doScroll("left")}catch(l){setTimeout(q,50);return}m("poll")};if(e.readyState=="complete")b.call(a,"lazy");else{if(e.createEventObject&&i.doScroll){try{d=!a.frameElement}catch(r){}d&&q()}e[f](n+"DOMContentLoaded",m,false);e[f](n+"readystatechange",m,false);a[f](n+"load",m,false)}}}()}};g[o]=function(b,a){this.element=b;this.wrapper=b.parentNode;this.source=b.getElementsByTagName("source")[0]||b;this.mp3=function(c){var d=c.getElementsByTagName("source")[0];return c.getAttribute("src")||
(d?d.getAttribute("src"):null)}(b);this.settings=a;this.loadStartedCalled=false;this.loadedPercent=0;this.duration=1;this.playing=false};g[o].prototype={updatePlayhead:function(){this.settings.updatePlayhead.apply(this,[this.element.currentTime/this.duration])},skipTo:function(b){if(!(b>this.loadedPercent)){this.element.currentTime=this.duration*b;this.updatePlayhead()}},load:function(b){this.loadStartedCalled=false;this.source.setAttribute("src",b);this.element.load();this.mp3=b;g[h].events.trackLoadProgress(this)},
loadError:function(){this.settings.loadError.apply(this)},init:function(){this.settings.init.apply(this)},loadStarted:function(){if(!this.element.duration)return false;this.duration=this.element.duration;this.updatePlayhead();this.settings.loadStarted.apply(this)},loadProgress:function(){if(this.element.buffered!=null&&this.element.buffered.length){if(!this.loadStartedCalled)this.loadStartedCalled=this.loadStarted();this.loadedPercent=this.element.buffered.end(this.element.buffered.length-1)/this.duration;
this.settings.loadProgress.apply(this,[this.loadedPercent])}},playPause:function(){this.playing?this.pause():this.play()},play:function(){/(ipod|iphone|ipad)/i.test(navigator.userAgent)&&this.element.readyState==0&&this.init.apply(this);if(!this.settings.preload){this.settings.preload=true;this.element.setAttribute("preload","auto");g[h].events.trackLoadProgress(this)}this.playing=true;this.element.play();this.settings.play.apply(this)},pause:function(){this.playing=false;this.element.pause();this.settings.pause.apply(this)},
setVolume:function(b){this.element.volume=b},trackEnded:function(){this.skipTo.apply(this,[0]);this.settings.loop||this.pause.apply(this);this.settings.trackEnded.apply(this)}};var j=function(b,a){var c=[];a=a||document;if(a.getElementsByClassName)c=a.getElementsByClassName(b);else{var d,e,i=a.getElementsByTagName("*"),f=RegExp("(^|\\s)"+b+"(\\s|$)");d=0;for(e=i.length;d<e;d++)f.test(i[d].className)&&c.push(i[d])}return c.length>1?c:c[0]}})("audiojs","audiojsInstance",this);

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

(function($) {
$.i18n = {};

/** Map holding bundle keys (if mode: 'map') */
$.i18n.map = {};
    
/**
 * Load and parse message bundle files (.properties),
 * making bundles keys available as javascript variables.
 * 
 * i18n files are named <name>.js, or <name>_<language>.js or <name>_<language>_<country>.js
 * Where:
 *      The <language> argument is a valid ISO Language Code. These codes are the lower-case, 
 *      two-letter codes as defined by ISO-639. You can find a full list of these codes at a 
 *      number of sites, such as: http://www.loc.gov/standards/iso639-2/englangn.html
 *      The <country> argument is a valid ISO Country Code. These codes are the upper-case,
 *      two-letter codes as defined by ISO-3166. You can find a full list of these codes at a
 *      number of sites, such as: http://www.iso.ch/iso/en/prods-services/iso3166ma/02iso-3166-code-lists/list-en1.html
 * 
 * Sample usage for a bundles/Messages.properties bundle:
 * $.i18n.properties({
 *      name:      'Messages', 
 *      language:  'en_US',
 *      path:      'bundles'
 * });
 * @param  name			(string/string[], optional) names of file to load (eg, 'Messages' or ['Msg1','Msg2']). Defaults to "Messages"
 * @param  language		(string, optional) language/country code (eg, 'en', 'en_US', 'pt_PT'). if not specified, language reported by the browser will be used instead.
 * @param  path			(string, optional) path of directory that contains file to load
 * @param  mode			(string, optional) whether bundles keys are available as JavaScript variables/functions or as a map (eg, 'vars' or 'map')
 * @param  cache        (boolean, optional) whether bundles should be cached by the browser, or forcibly reloaded on each page load. Defaults to false (i.e. forcibly reloaded)
 * @param  encoding 	(string, optional) the encoding to request for bundles. Property file resource bundles are specified to be in ISO-8859-1 format. Defaults to UTF-8 for backward compatibility.
 * @param  callback     (function, optional) callback function to be called after script is terminated
 */
$.i18n.properties = function(settings) {
	// set up settings
    var defaults = {
        name:           'Messages',
        language:       '',
        path:           '',  
        mode:           'vars',
        cache:			false,
        encoding:       'UTF-8',
        callback:       null
    };
    settings = $.extend(defaults, settings);    
    if(settings.language === null || settings.language == '') {
	   settings.language = $.i18n.browserLang();
	}
	if(settings.language === null) {settings.language='';}
	
	// load and parse bundle files
	var files = getFiles(settings.name);
	for(i=0; i<files.length; i++) {
//		// 1. load base (eg, Messages.properties)
//		loadAndParseFile(settings.path + files[i] + '.properties', settings);
//        // 2. with language code (eg, Messages_pt.properties)
//		if(settings.language.length >= 2) {
//            loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 2) +'.properties', settings);
//		}
//		// 3. with language code and country code (eg, Messages_pt_PT.properties)
//        if(settings.language.length >= 5) {
//            loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 5) +'.properties', settings);
//        }

        // NdR changes to only request a single file, as my messages implementation already has fallback values included
        if (settings.language.length >= 5) {
            loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 5) +'.properties', settings);
        } else if (settings.language.length >= 2) {
            loadAndParseFile(settings.path + files[i] + '_' + settings.language.substring(0, 2) +'.properties', settings);
        } else {
            loadAndParseFile(settings.path + files[i] + '.properties', settings);
        }
	}
	
	// call callback
	if(settings.callback){ settings.callback(); }
};


/**
 * When configured with mode: 'map', allows access to bundle values by specifying its key.
 * Eg, jQuery.i18n.prop('com.company.bundles.menu_add')
 */
$.i18n.prop = function(key /* Add parameters as function arguments as necessary  */) {
	var value = $.i18n.map[key];
	if (value == null)
		return '[' + key + ']';
	
//	if(arguments.length < 2) // No arguments.
//    //if(key == 'spv.lbl.modified') {alert(value);}
//		return value;
	
//	if (!$.isArray(placeHolderValues)) {
//		// If placeHolderValues is not an array, make it into one.
//		placeHolderValues = [placeHolderValues];
//		for (var i=2; i<arguments.length; i++)
//			placeHolderValues.push(arguments[i]);
//	}

	// Place holder replacement
	/**
	 * Tested with:
	 *   test.t1=asdf ''{0}''
	 *   test.t2=asdf '{0}' '{1}'{1}'zxcv
	 *   test.t3=This is \"a quote" 'a''{0}''s'd{fgh{ij'
	 *   test.t4="'''{'0}''" {0}{a}
	 *   test.t5="'''{0}'''" {1}
	 *   test.t6=a {1} b {0} c
	 *   test.t7=a 'quoted \\ s\ttringy' \t\t x
	 *
	 * Produces:
	 *   test.t1, p1 ==> asdf 'p1'
	 *   test.t2, p1 ==> asdf {0} {1}{1}zxcv
	 *   test.t3, p1 ==> This is "a quote" a'{0}'sd{fgh{ij
	 *   test.t4, p1 ==> "'{0}'" p1{a}
	 *   test.t5, p1 ==> "'{0}'" {1}
	 *   test.t6, p1 ==> a {1} b p1 c
	 *   test.t6, p1, p2 ==> a p2 b p1 c
	 *   test.t6, p1, p2, p3 ==> a p2 b p1 c
	 *   test.t7 ==> a quoted \ s	tringy 		 x
	 */
	
	var i;
	if (typeof(value) == 'string') {
        // Handle escape characters. Done separately from the tokenizing loop below because escape characters are 
		// active in quoted strings.
        i = 0;
        while ((i = value.indexOf('\\', i)) != -1) {
 		   if (value[i+1] == 't')
 			   value = value.substring(0, i) + '\t' + value.substring((i++) + 2); // tab
 		   else if (value[i+1] == 'r')
 			   value = value.substring(0, i) + '\r' + value.substring((i++) + 2); // return
 		   else if (value[i+1] == 'n')
 			   value = value.substring(0, i) + '\n' + value.substring((i++) + 2); // line feed
 		   else if (value[i+1] == 'f')
 			   value = value.substring(0, i) + '\f' + value.substring((i++) + 2); // form feed
 		   else if (value[i+1] == '\\')
 			   value = value.substring(0, i) + '\\' + value.substring((i++) + 2); // \
 		   else
 			   value = value.substring(0, i) + value.substring(i+1); // Quietly drop the character
        }
		
		// Lazily convert the string to a list of tokens.
		var arr = [], j, index;
		i = 0;
		while (i < value.length) {
			if (value[i] == '\'') {
				// Handle quotes
				if (i == value.length-1)
					value = value.substring(0, i); // Silently drop the trailing quote
				else if (value[i+1] == '\'')
					value = value.substring(0, i) + value.substring(++i); // Escaped quote
				else {
					// Quoted string
					j = i + 2;
					while ((j = value.indexOf('\'', j)) != -1) {
						if (j == value.length-1 || value[j+1] != '\'') {
							// Found start and end quotes. Remove them
							value = value.substring(0,i) + value.substring(i+1, j) + value.substring(j+1);
							i = j - 1;
							break;
						}
						else {
							// Found a double quote, reduce to a single quote.
							value = value.substring(0,j) + value.substring(++j);
						}
					}
					
					if (j == -1) {
						// There is no end quote. Drop the start quote
						value = value.substring(0,i) + value.substring(i+1);
					}
				}
			}
			else if (value[i] == '{') {
				// Beginning of an unquoted place holder.
				j = value.indexOf('}', i+1);
				if (j == -1)
					i++; // No end. Process the rest of the line. Java would throw an exception
				else {
					// Add 1 to the index so that it aligns with the function arguments.
					index = parseInt(value.substring(i+1, j));
					if (!isNaN(index) && index >= 0) {
						// Put the line thus far (if it isn't empty) into the array
						var s = value.substring(0, i);
						if (s != "")
							arr.push(s);
						// Put the parameter reference into the array
						arr.push(index);
						// Start the processing over again starting from the rest of the line.
						i = 0;
						value = value.substring(j+1);
					}
					else
						i = j + 1; // Invalid parameter. Leave as is.
				}
			}
			else
				i++;
		}
		
		// Put the remainder of the no-empty line into the array.
		if (value != "")
			arr.push(value);
		value = arr;
		
		// Make the array the value for the entry.
		$.i18n.map[key] = arr;
	}
	
	if (value.length == 0)
		return "";
	if (value.lengh == 1 && typeof(value[0]) == "string")
		return value[0];
	
	var s = "";
	for (i=0; i<value.length; i++) {
		if (typeof(value[i]) == "string")
			s += value[i];
		// Must be a number
		else if (value[i] + 1 < arguments.length)
			s += arguments[value[i] + 1];
		else
			s += "{"+ value[i] +"}";
	}
	
	return s;
};

/** Language reported by browser, normalized code */
$.i18n.browserLang = function() {
	return normaliseLanguageCode(navigator.language /* Mozilla */ || navigator.userLanguage /* IE */);
}


/** Load and parse .properties files */
function loadAndParseFile(filename, settings) {
	$.ajax({
        url:        filename,
        async:      false,
        cache:		settings.cache,
        contentType:'text/plain;charset='+ settings.encoding,
        dataType:   'text',
        success:    function(data, status) {
        				parseData(data, settings.mode); 
					}
    });
}

/** Parse .properties files */
function parseData(data, mode) {
   var parsed = '';
   var parameters = data.split( /\n/ );
   var regPlaceHolder = /(\{\d+\})/g;
   var regRepPlaceHolder = /\{(\d+)\}/g;
   var unicodeRE = /(\\u.{4})/ig;
   for(var i=0; i<parameters.length; i++ ) {
       parameters[i] = parameters[i].replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
       if(parameters[i].length > 0 && parameters[i].match("^#")!="#") { // skip comments
           var pair = parameters[i].split('=');
           if(pair.length > 0) {
               /** Process key & value */
               var name = unescape(pair[0]).replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
               var value = pair.length == 1 ? "" : pair[1];
               // process multi-line values
               while(value.match(/\\$/)=="\\") {
               		value = value.substring(0, value.length - 1);
               		value += parameters[++i].replace( /\s\s*$/, '' ); // right trim
               }               
               // Put values with embedded '='s back together
               for(var s=2;s<pair.length;s++){ value +='=' + pair[s]; }
               value = value.replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' ); // trim
               
               /** Mode: bundle keys in a map */
               if(mode == 'map' || mode == 'both') {
                   // handle unicode chars possibly left out
                   var unicodeMatches = value.match(unicodeRE);
                   if(unicodeMatches) {
                     for(var u=0; u<unicodeMatches.length; u++) {
                        value = value.replace( unicodeMatches[u], unescapeUnicode(unicodeMatches[u]));
                     }
                   }
                   // add to map
                   $.i18n.map[name] = value;
               }
               
               /** Mode: bundle keys as vars/functions */
               if(mode == 'vars' || mode == 'both') {
                   value = value.replace( /"/g, '\\"' ); // escape quotation mark (")
                   
                   // make sure namespaced key exists (eg, 'some.key') 
                   checkKeyNamespace(name);
                   
                   // value with variable substitutions
                   if(regPlaceHolder.test(value)) {
                       var parts = value.split(regPlaceHolder);
                       // process function args
                       var first = true;
                       var fnArgs = '';
                       var usedArgs = [];
                       for(var p=0; p<parts.length; p++) {
                           if(regPlaceHolder.test(parts[p]) && (usedArgs.length == 0 || usedArgs.indexOf(parts[p]) == -1)) {
                               if(!first) {fnArgs += ',';}
                               fnArgs += parts[p].replace(regRepPlaceHolder, 'v$1');
                               usedArgs.push(parts[p]);
                               first = false;
                           }
                       }
                       parsed += name + '=function(' + fnArgs + '){';
                       // process function body
                       var fnExpr = '"' + value.replace(regRepPlaceHolder, '"+v$1+"') + '"';
                       parsed += 'return ' + fnExpr + ';' + '};';
                       
                   // simple value
                   }else{
                       parsed += name+'="'+value+'";';
                   }
               } // END: Mode: bundle keys as vars/functions
           } // END: if(pair.length > 0)
       } // END: skip comments
   }
   eval(parsed);
}

/** Make sure namespace exists (for keys with dots in name) */
// TODO key parts that start with numbers quietly fail. i.e. month.short.1=Jan
function checkKeyNamespace(key) {
	var regDot = /\./;
	if(regDot.test(key)) {
		var fullname = '';
		var names = key.split( /\./ );
		for(var i=0; i<names.length; i++) {
			if(i>0) {fullname += '.';}
			fullname += names[i];
			if(eval('typeof '+fullname+' == "undefined"')) {
				eval(fullname + '={};');
			}
		}
	}
}

/** Make sure filename is an array */
function getFiles(names) {
	return (names && names.constructor == Array) ? names : [names];
}

/** Ensure language code is in the format aa_AA. */
function normaliseLanguageCode(lang) {
    lang = lang.toLowerCase();
    if(lang.length > 3) {
        lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
    }
    return lang;
}

/** Unescape unicode chars ('\u00e3') */
function unescapeUnicode(str) {
  // unescape unicode codes
  var codes = [];
  var code = parseInt(str.substr(2), 16);
  if (code >= 0 && code < Math.pow(2, 16)) {
     codes.push(code);
  }
  // convert codes to text
  var unescaped = '';
  for (var i = 0; i < codes.length; ++i) {
    unescaped += String.fromCharCode(codes[i]);
  }
  return unescaped;
}

/* Cross-Browser Split 1.0.1
(c) Steven Levithan <stevenlevithan.com>; MIT License
An ECMA-compliant, uniform cross-browser split method */
var cbSplit;
// avoid running twice, which would break `cbSplit._nativeSplit`'s reference to the native `split`
if (!cbSplit) {    
  cbSplit = function(str, separator, limit) {
      // if `separator` is not a regex, use the native `split`
      if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
        if(typeof cbSplit._nativeSplit == "undefined")
          return str.split(separator, limit);
        else
          return cbSplit._nativeSplit.call(str, separator, limit);
      }
  
      var output = [],
          lastLastIndex = 0,
          flags = (separator.ignoreCase ? "i" : "") +
                  (separator.multiline  ? "m" : "") +
                  (separator.sticky     ? "y" : ""),
          separator = RegExp(separator.source, flags + "g"), // make `global` and avoid `lastIndex` issues by working with a copy
          separator2, match, lastIndex, lastLength;
  
      str = str + ""; // type conversion
      if (!cbSplit._compliantExecNpcg) {
          separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags); // doesn't need /g or /y, but they don't hurt
      }
  
      /* behavior for `limit`: if it's...
      - `undefined`: no limit.
      - `NaN` or zero: return an empty array.
      - a positive number: use `Math.floor(limit)`.
      - a negative number: no limit.
      - other: type-convert, then use the above rules. */
      if (limit === undefined || +limit < 0) {
          limit = Infinity;
      } else {
          limit = Math.floor(+limit);
          if (!limit) {
              return [];
          }
      }
  
      while (match = separator.exec(str)) {
          lastIndex = match.index + match[0].length; // `separator.lastIndex` is not reliable cross-browser
  
          if (lastIndex > lastLastIndex) {
              output.push(str.slice(lastLastIndex, match.index));
  
              // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
              if (!cbSplit._compliantExecNpcg && match.length > 1) {
                  match[0].replace(separator2, function () {
                      for (var i = 1; i < arguments.length - 2; i++) {
                          if (arguments[i] === undefined) {
                              match[i] = undefined;
                          }
                      }
                  });
              }
  
              if (match.length > 1 && match.index < str.length) {
                  Array.prototype.push.apply(output, match.slice(1));
              }
  
              lastLength = match[0].length;
              lastLastIndex = lastIndex;
  
              if (output.length >= limit) {
                  break;
              }
          }
  
          if (separator.lastIndex === match.index) {
              separator.lastIndex++; // avoid an infinite loop
          }
      }
  
      if (lastLastIndex === str.length) {
          if (lastLength || !separator.test("")) {
              output.push("");
          }
      } else {
          output.push(str.slice(lastLastIndex));
      }
  
      return output.length > limit ? output.slice(0, limit) : output;
  };
  
  cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined; // NPCG: nonparticipating capturing group
  cbSplit._nativeSplit = String.prototype.split;

} // end `if (!cbSplit)`
String.prototype.split = function (separator, limit) {
    return cbSplit(this, separator, limit);
};

})(jQuery);
                
/*
 * Copyright (C) 2011 Atlas of Living Australia
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

/*------------------------------------------------------------------------------------------*
 *---------------- FACET BREAKDOWN CHARTS USING THE MODULE PATTERN -------------------------*
 *------------------------------------------------------------------------------------------*/
// define a base object with the major defaults that we can inherit from (prototypically)
var baseFacetChart = {
    collectionsUrl: "http://no-default-collectory",
    biocacheServicesUrl: "http://no-default-biocache/ws",
    biocacheWebappUrl: "http://no-default-biocache",
    chartsDiv: null,  // the container for the chart
    chart: null,    // the google chart object
    width: 600,
    height: 450,
    chartArea: {left:0, top:30, width:"90%", height: "70%"},
    is3D: false,
    titleTextStyle: {color: "#555", fontName: 'Arial', fontSize: 15},
    sliceVisibilityThreshold: 0,
    legend: {position: "right"},
    chartType: "pie",
    column1DataType: 'string',
    datasets: 1,
    backgroundColor: {fill:'transparent'},
    // defaults for individual facet charts
    individualChartOptions: {
        state_conservation: {chartArea: {left:60, height: "58%"}, title: 'By state conservation status'},
        occurrence_year: {chartArea: {left:60, height: "55%"}, requestFacetName: 'decade'},
        decade: {chartArea: {left:60, height: "55%"}, responseFacetName: 'occurrence_year'},
        year: {width: 600},
        month: {width: 600},
        institution_uid: {chartArea: {left: 0, width: "100%"}},
        collection_uid: {chartArea: {left: 0, width: "100%"}},
        species_group: {title: 'By higher-level group', ignore: ['Animals'], chartType: 'column',
            width: 450, chartArea: {left:60, height:"58%"},
            vAxis: {minValue: 0, textPosition:'in', gridlines:{color: '#ddd', count: 4}},
            colors: ['#108628'], reverseCategories:true, hAxis:{slantedTextAngle:60}},
        state: {ignore: ['Unknown1']},
        type_status: {title: 'By type status (as % of all type specimens)', ignore: ['notatype']},
        el895: {hAxis: {title:'Moisture Index'}},
        el882: {hAxis: {title:'mm'}, chartArea: {width: "65%"}},
        el889: {hAxis: {title:'mm'}},
        el887: {hAxis: {title:'MJ/m2/day'}},
        el865: {hAxis: {title:'Moisture Index'}},
        el894: {hAxis: {title:'MJ/m2/day'}},
        el895Outliers: {hAxis: {title:'Moisture Index'}, chartArea: {width: "65%"}, facets: ['el895'], facetLabels: ['Precipitation'], singleFacetName : 'el895', avoidTitlePrefix:true},
        el882Outliers: {hAxis: {title:'mm'}, chartType: "scatter", chartArea: {width: "65%"}, facets: ['el882'], facetLabels: ['Precipitation'], singleFacetName : 'el882', avoidTitlePrefix:true},
        el889Outliers: {hAxis: {title:'mm'}, chartArea: {width: "65%"}, facets: ['el889'], facetLabels: ['Precipitation'], singleFacetName : 'el889', avoidTitlePrefix:true},
        el887Outliers: {hAxis: {title:'MJ/m2/day'}, chartArea: {width: "65%"}, facets: ['el887'], facetLabels: ['Precipitation'], singleFacetName : 'el887', avoidTitlePrefix:true},
        el865Outliers: {hAxis: {title:'Moisture Index'}, chartArea: {width: "65%"}, facets: ['el865'], facetLabels: ['Precipitation'], singleFacetName : 'el865', avoidTitlePrefix:true},
        el894Outliers: {hAxis: {title:'MJ/m2/day'}, chartArea: {width: "65%"}, facets: ['el894'], facetLabels: ['Precipitation'], singleFacetName : 'el894', avoidTitlePrefix:true},
        el895OutliersCumm: {hAxis: {title:'Moisture Index'}, chartArea: {width: "65%"}, facets: ['el895'], facetLabels: ['Precipitation'], singleFacetName : 'el895', avoidTitlePrefix:true},
        el882OutliersCumm: {hAxis: {title:'mm'}, chartArea: {width: "65%"}, facets: ['el882'], facetLabels: ['Precipitation'], singleFacetName : 'el882', avoidTitlePrefix:true},
        el889OutliersCumm: {hAxis: {title:'mm'}, chartArea: {width: "65%"}, facets: ['el889'], facetLabels: ['Precipitation'], singleFacetName : 'el889', avoidTitlePrefix:true},
        el887OutliersCumm: {hAxis: {title:'MJ/m2/day'}, chartArea: {width: "65%"}, facets: ['el887'], facetLabels: ['Precipitation'], singleFacetName : 'el887', avoidTitlePrefix:true},
        el865OutliersCumm: {hAxis: {title:'Moisture Index'}, chartArea: {width: "65%"}, facets: ['el865'], facetLabels: ['Precipitation'], singleFacetName : 'el865', avoidTitlePrefix:true},
        el894OutliersCumm: {hAxis: {title:'MJ/m2/day'}, chartArea: {width: "65%"}, facets: ['el894'], facetLabels: ['Precipitation'], singleFacetName : 'el894', avoidTitlePrefix:true},
        radiation: {hAxis: {title:'MJ/m2/day'}, chartArea: {width: "65%"}, facets: ['el887','el894'],
            facetLabels: ['seasonality (Bio23)','warmest quarter (Bio26)']},
        precipitation: {hAxis: {title:'mm'}, chartArea: {width: "65%"}, facets: ['el882','el889'],
            facetLabels: ['seasonality (Bio15)','driest quarter (Bio17)']},
        moisture: {hAxis: {title:'Moisture Index'}, chartArea: {width: "65%"}, facets: ['el895','el865'],
            facetLabels: ['lowest period (Bio30)','highest quarter mean (Bio32)']}
    },
    getChartTypeOptions: function (name) {
        if (this.individualChartOptions[name] !== undefined) {
            return this.individualChartOptions[name];
        } else {
            return {};
        }
    },
    // these override the facet names in chart titles
    chartLabels: {
        institution_uid: 'institution',
        data_resource_uid: 'data set',
        assertions: 'data assertion',
        biogeographic_region: 'biogeographic region',
        occurrence_year: 'decade',
        el895: 'Moisture Index - lowest period (Bio30)',
        el895Outliers: 'Moisture Index - lowest period (Bio30)',
        el895OutliersCumm: 'Moisture Index - lowest period (Bio30)',
        el882: 'Precipitation - seasonality (Bio15)',
        el882Outliers: 'Precipitation - seasonality (Bio15) - Outliers',
        el882OutliersCumm: 'Precipitation - seasonality (Bio15) - Outliers (Cumulative)',
        el889: 'Precipitation - driest quarter (Bio17)',
        el889Outliers: 'Precipitation - driest quarter (Bio17) - Outliers',
        el889OutliersCumm: 'Precipitation - driest quarter (Bio17) - Outliers (Cumulative)',
        el887: 'Radiation - seasonality (Bio23)',
        el887Outliers: 'Radiation - seasonality (Bio23) - Outliers',
        el887OutliersCumm: 'Radiation - seasonality (Bio23) - Outliers (Cumulative)',
        el865: 'Moisture Index - highest quarter mean (Bio32)',
        el865Outliers: 'Moisture Index - highest quarter mean (Bio32) - Outliers',
        el865OutliersCumm: 'Moisture Index - highest quarter mean (Bio32) - Outliers (Cumulative)',
        el894: 'Radiation - warmest quarter (Bio26)',
        el894Outliers: 'Radiation - warmest quarter (Bio26) - Outliers',
        el894OutliersCumm: 'Radiation - warmest quarter (Bio26) - Outliers (Cumulative)',
        radiation: 'Radiation',
        precipitation: 'Precipitation',
        moisture: 'Moisture'
    },
    // select the properties that need to be passed to the chart library
    googleChartOptions: function() {
        var gChartOptions = {},
            that = this;
        $.each(['width','height','chartArea','is3D','titleTextStyle','sliceVisibilityThreshold','legend',
            'hAxis','vAxis','title','colors','reverseCategories','fontSize','backgroundColor','axisTitlesPosition',
            'fontName','focusTarget','titlePosition','tooltip'], function (i,prop) {
            if (that[prop] != undefined) {
                gChartOptions[prop] = that[prop];
            }
        });
        return gChartOptions;
    },
    name: '',
    chartLabel: function () { return this.chartLabels[this.name] ? this.chartLabels[this.name] : this.name;},
    title: function () { return "By " + this.chartLabel();},
    transformData: function (data) {
        if (this.syncTransforms[this.name]) {
            return this.syncTransforms[this.name].apply(null, [data]);
        }
        return data;
    },
    syncTransforms: {
        occurrence_year: function (data) {
            var firstDecade;
            var transformedData = [];
            $.each(data, function(i,obj) {
                if (obj.label === 'before') {
                    transformedData.splice(0,0,{label: "before " + firstDecade, count: obj.count});
                }
                else {
                    var decade = obj.label.substr(0,4);
                    if (i === 0) { firstDecade = decade; }
                    transformedData.push({label: decade + "s", count: obj.count});
                }
            });
            /*// sort
             transformedData.sort(function (a,b) {
             return b.label - a.label;
             });*/
            return transformedData;
        },
        decade: function (data) {
            var firstDecade;
            var transformedData = [];
            $.each(data, function(i,obj) {
                if (obj.label === 'before') {
                    transformedData.splice(0,0,{label: "before " + firstDecade, count: obj.count});
                }
                else {
                    var decade = obj.label.substr(0,4);
                    if (i === 0) { firstDecade = decade; }
                    transformedData.push({label: decade + "s", count: obj.count});
                }
            });
            /*// sort
             transformedData.sort(function (a,b) {
             return b.label - a.label;
             });*/
            return transformedData;
        },
        year: function (data) {
            var year, firstYear = 3000, lastYear = 0, dataMap = {}, transformedData = [];
            $.each(data, function(i,obj) {
                year = obj.label;
                if (Number(year) < firstYear) { firstYear = Number(year); }
                if (Number(year) > lastYear) { lastYear = Number(year); }
                dataMap[year] = obj.count;
            });
            if (firstYear > lastYear) { return [] }  // no data
            for (y = firstYear; y <= lastYear; y++) {
                transformedData.push({label: "" + y, count: dataMap["" + y] || 0});
            }
            return transformedData;
        }
    },
    formatLabel: function (data) {
        if (this.labelFormatters[this.name]) {
            return this.labelFormatters[this.name].apply(null, [data]);
        }
        return data;
    },
    labelFormatters: {
        month: function (data) {
            return transformMonthData(data);
        }
    },
    transformDataAfter: function (dataTable, opts) {
        var ts = this.asyncTransforms[this.name];
        if (ts) {
            ts.method.apply(null, [this.chart, dataTable, opts, ts.param]);
        }
    },
    asyncTransforms: {
        collection_uid: {method: lookupEntityNameFromUids, param: 'collection'},
        institution_uid: {method: lookupEntityNameFromUids, param: 'institution'},
        data_resource_uid: {method: lookupEntityNameFromUids, param: 'dataResource'}
    },
    setType: function (type) {
        this.chartType = type;
    },
    // create the chart
    init: function (data, options) {
        var name = this.name,
            specificOptions = options[name];

        // add the default title
        if(options.avoidTitlePrefix !== "undefined" && options.avoidTitlePrefix){
            this.title =  this.chartLabel();
        } else {
            this.title = "By " + this.chartLabel();
        }

        // apply chart-specific and user-defined options and user-defined individual chart options
        var opts = $.extend(true, {}, this.getChartTypeOptions(name), options, options[name] || {});
        for (var prop in opts) {
            if (opts.hasOwnProperty(prop)) {
                //alert(typeof opts[prop]);
                if (typeof opts[prop] === 'object' && !$.isArray(opts[prop])) {
                    // deep copy first nested level preserving existing values that are not explicitly overridden
                    for (var p in opts[prop]) {
                        if (opts[prop].hasOwnProperty(p)) {
                            // create the object if it doesn't exist
                            if (this[prop] === undefined) {
                                this[prop] = {};
                            }
                            this[prop][p] = opts[prop][p];
                        }
                    }
                } else {
                    this[prop] = opts[prop];
                }
            }
        }
        if (opts.displayRecordsUrl != undefined) { biocacheWebappUrl = opts.displayRecordsUrl; }

        this.chartsDiv = $('#' + (this.chartsDiv || 'charts'));

        // preserve context for callback
        var that = this;

        // build the table
        var dataTable = this.buildDataTable(name, data, options);

        // reject the chart if there is only one facet value (after filtering)
        if (dataTable.getNumberOfRows() < 2) {
            return;
        }

        // create the container
        var $container = $('#' + name);
        if ($container.length == 0) {
            $container = $("<div id='" + name + "'></div>");
            this.chartsDiv.append($container);
        }

        // specify the type (for css tweaking)
        $container.addClass('chart-' + this.chartType);

        // create the chart
        switch (this.chartType) {
            case 'column': this.chart = new google.visualization.ColumnChart($container[0]); break;
            case 'bar': this.chart = new google.visualization.BarChart($container[0]); break;
            case 'line': this.chart = new google.visualization.LineChart($container[0]); break;
            case 'scatter': this.chart = new google.visualization.ScatterChart($container[0]); break;
            default: this.chart = new google.visualization.PieChart($container[0]); break;
        }

        // show the chart state
        this.chart.draw(dataTable, this.googleChartOptions());

        // kick off post-draw asynch actions (clone the opts as these objects are not as independent as they are meant to be)
        this.transformDataAfter(dataTable, $.extend(true, {}, this.googleChartOptions()));

        // setup a click handler - if requested
        if (this.clickThru != false) {  // defaults to true
            google.visualization.events.addListener(this.chart, 'select', function() {

                // default facet value is the name selected
                var id = dataTable.getValue(that.chart.getSelection()[0].row,0);

                // build the facet query
                var facetQuery = name + ":" + id;

                // the facet query can be overridden for date ranges
                if (name == 'occurrence_year' || name == 'decade') {
                    if (id.match("^before") == 'before') { // startWith
                        facetQuery = "occurrence_year:[*%20TO%20" + "1849-12-31T23:59:59Z]";
                    }
                    else {
                        var decade = id.substr(0,4);
                        var dateTo = parseInt(decade) + 9;
                        facetQuery = "occurrence_year:[" + decade + "-01-01T00:00:00Z%20TO%20" +
                            dateTo + "-12-31T23:59:59Z]";
                    }
                }

                // show the records
                document.location = urlConcat(biocacheWebappUrl,"/occurrences/search?q=") + that.query +
                    "&fq=" + facetQuery;
            });
        }
    },
    buildDataTable: function (name, data, options) {
        this.column1DataType = this.column1 || 'string';

        // preserve context for callback
        var that = this;

        // deduce the fieldName used in the data
        //var fieldName = this.getChartTypeOptions(name).responseFacetName || name;

        // optionally transform the data
        var facetData = data[name];
        if(that.singleFacetName !== "undefined" && that.singleFacetName != null){
            //console.log('########Transform data using singleFacetName : ' + that.singleFacetName );
            facetData = data[that.singleFacetName];
        }

        var xformedData = this.transformData(facetData);

        // optionally format the labels
        xformedData = this.formatLabel(xformedData);

        // create the data table
        var dataTable = new google.visualization.DataTable(), dataOptions = this.getChartTypeOptions(name);
        if (dataOptions && dataOptions.facets && options.outlierValues == "undefined") {
            // add a y-value column for each facet
            dataTable.addColumn(this.column1DataType, this.chartLabel());
            for (var i = 0; i < dataOptions.facets.length; i++) {
                dataTable.addColumn('number', dataOptions.facetLabels ? dataOptions.facetLabels[i] : this.chartLabel());
            }
        } else if (options.outlierValues !== undefined) {
            dataTable.addColumn('number', this.chartLabel());
            dataTable.addColumn('number','records');
            dataTable.addColumn('number','outliers');
            dataTable.addColumn('number','this record (outlier)');

        } else if (this.column1DataType == 'number') {
            //console.log('building datatable "number" ');
            dataTable.addColumn('number', this.chartLabel());
            dataTable.addColumn('number','records');

        } else {
            //console.log('building datatable else ');
            dataTable.addColumn('string', this.chartLabel());
            dataTable.addColumn('number','records');
        }

        if (dataOptions && dataOptions.facets && dataOptions.facets.length > 1) {
            // munge data from 2 facets TODO: only handles 2 facets here
            var facet1 = data[dataOptions.facets[0]],
                facet2 = data[dataOptions.facets[1]],
                xValue,
                rowIndexes;

            $.each(facet1, function (i,obj) {
                dataTable.addRow([parseFloat(obj.label), obj.count, null]);
            });
            $.each(facet2, function (i,obj) {
                xValue = parseFloat(obj.label);
                // see if this x value already has a row in the table
                rowIndexes = dataTable.getFilteredRows([{column: 1, value: xValue}]);
                if (rowIndexes.length > 0) {
                    // if so just set the second value
                    dataTable.setCell(rowIndexes[0], 3, obj.count);
                } else {
                    // create a new row with null as the first value
                    dataTable.addRow([parseFloat(obj.label), null, obj.count]);
                }
            });

        } else if(options.outlierValues !== undefined) {

            //console.log('building datatable -  handle each data item');
            // handle each data item
            // //console.log('xformedData : ' + xformedData);

            $.each(xformedData, function(i,obj) {
                // filter any crap
                //console.log('building datatable -  obj.label: ' + obj.label);
                if (that.ignore !== "undefined" || $.inArray(obj.label, that.ignore) == -1) {

                    if (detectCamelCase(obj.label)) {
                        dataTable.addRow([{v: obj.label, f: capitalise(expandCamelCase(obj.label))}, obj.count, null,null]);
                    } else if (that.column1DataType === 'number') {
                        if (options.highlightedValue !== undefined && obj.label == options.highlightedValue){
                            dataTable.addRow([parseFloat(obj.label), null, null, obj.count]);
                        } else if($.inArray(parseFloat(obj.label), options.outlierValues) >= 0){
                            dataTable.addRow([parseFloat(obj.label), null, obj.count, null]);
                        } else {
                            dataTable.addRow([parseFloat(obj.label), obj.count, null,null])
                        }
                    } else {
                        dataTable.addRow([parseFloat(obj.label), obj.count, null,null]);
                    }
                }
            });

        } else {
            // handle each data item
            $.each(xformedData, function(i,obj) {
                var labelObj, label, formattedLabel, value;
                // filter any crap
                if (that.ignore == undefined || $.inArray(obj.label, that.ignore) == -1) {
                    // set std values
                    label = obj.label;
                    formattedLabel = obj.formattedLabel;
                    value = obj.count;

                    // handle camelCase labels
                    if (detectCamelCase(label)) {
                        formattedLabel = capitalise(expandCamelCase(label));
                    }

                    // handle numeric labels
                    if (that.column1DataType === 'number') {
                        label = parseFloat(label);
                    }

                    // inject formatted labels if available
                    if (formattedLabel !== undefined) {
                        labelObj = {v: label, f: formattedLabel};
                    } else {
                        labelObj = label;
                    }

                    // add the row
                    dataTable.addRow([labelObj, value]);
                }
            });
        }

        return dataTable;
    },
    newChart: function(options) {
        if(typeof Object.create !== 'function'){
            Object.create = function(o){
                var F = function(){};
                F.prototype = o;
                return new F();
            };
        }
        var that = Object.create(this);
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                that[prop] = options[prop];
            }
        }
        return that;
    }

};
// create charts specific for a chart type - by differential inheritance
// NOTE a new object is created and returned each time these are referenced
var facetChartTypes = {
    pie: function () { return baseFacetChart.newChart({chartType: 'pie'}); },
    bar: function () {
        var chartArea = baseFacetChart.chartArea;
        chartArea.left = 170;
        return baseFacetChart.newChart({chartType: 'bar', chartArea: chartArea});
    },
    column: function () {
        var chartArea = baseFacetChart.chartArea;
        chartArea.left = 60;
        chartArea.height = "58%";
        return baseFacetChart.newChart({chartType: 'column', width: 450, chartArea: chartArea,
            hAxis: {slantedText: true}, legend: 'none'});
    },
    scatter: function () {
        var chartArea = baseFacetChart.chartArea;
        chartArea.left = 60;
        chartArea.height = "65%";
        return baseFacetChart.newChart({chartType: 'scatter', vAxis: {title:'count'}, chartArea: chartArea,
            column1: 'number'})
    }
}

var defaultChartTypes = {
    state: 'pie',
    institution: 'pie',
    data_resource_uid: 'pie',
    type_status: 'pie',
    species_group: 'pie',
    assertions: 'bar',
    occurrence_year: 'column',
    decade: 'column',
    year: 'column',
    month: 'column',
    biogeographic_region: 'pie',
    state_conservation: 'column',
    el895: 'scatter',
    el882: 'scatter',
    el882OutliersCumm: 'scatter',
    el882Outliers: 'scatter',
    el887: 'scatter',
    el887Outliers: 'scatter',
    el887OutliersCumm: 'scatter',
    el889: 'scatter',
    el889Outliers: 'scatter',
    el889OutliersCumm: 'scatter',
    el865: 'scatter',
    el865Outliers: 'scatter',
    el865OutliersCumm: 'scatter',
    el894: 'scatter',
    el894Outliers: 'scatter',
    el894OutliersCumm: 'scatter',
    radiation: 'scatter',
    precipitation: 'scatter',
    moisture: 'scatter'
}

// object to handle multiple facets charts from the same data request
var facetChartGroup = {
    // define a constructor for facet charts
    createChart: function (name, options, data) {
        // choose a chart type to instantiate
        var baseChart = (options[name] && options[name].chartType) ?
            options[name].chartType :
            (defaultChartTypes[name] || 'pie');

        var that = facetChartTypes[baseChart]();

        that.name = name;

        that.init(data, options);

        // return the new chart
        return that;
    },
    // this handles substitution of facet names where they are different to the chart name
    // and where charts require more than one facet
    buildFacetsFromChartName: function (name) {
        var facetNames = [name];

        // handle multiple and transformed facets
        var dataOptions = baseFacetChart.individualChartOptions[name];
        if (dataOptions && dataOptions.facets) {
            facetNames = dataOptions.facets;
        }

        return '&facets=' + facetNames.join('&facets=');
    },
    // create a set of facets charts - requesting the data
    loadAndDrawFacetCharts: function (options) {
        // the base url for getting the facet data
        var url = (options.biocacheServicesUrl == undefined) ? baseFacetChart.biocacheServicesUrl : options.biocacheServicesUrl,

        facets = "",

        // calc the target div
        chartsDiv = $('#' + (options.chartsDiv ? options.chartsDiv : baseFacetChart.chartsDiv)),

        // reference to this that we can use in callbacks
        that = this;

        // build facets list
        $.each(options.charts, function(i,name) {
            facets += that.buildFacetsFromChartName(name)
        });

        // show a message while requesting data
        chartsDiv.append($("<span>Loading charts...</span>"));

        // make request
        $.ajax({
            url: urlConcat(url, "/occurrences/search.json?pageSize=0&flimit=200&q=") + options.query + facets + "&fsort=index",
            dataType: 'jsonp',
            error: function() {
                cleanUp(); // TODO:
            },
            success: function(data) {

                // clear loading message
                chartsDiv.find('span').remove();

                // draw all charts
                that.drawFacetCharts(data, options);

            }
        });
    },
    // create a set of facets charts - given the data
    drawFacetCharts: function (data, options) {
        // check that we have results
        if (data.length == 0 || data.totalRecords == undefined || data.totalRecords == 0) {
            return;
        }

        // update total if requested
        if (options.totalRecordsSelector) {
            $(options.totalRecordsSelector).html(addCommas(data.totalRecords));
        }

        //if the chart is Cumulative, keep a running total
        if(options.cumulative !== undefined && options.cumulative){
            var runningTotal = 0;
            for(var i = 0; i < data.facetResults[0].fieldResult.length; i++){

                runningTotal += data.facetResults[0].fieldResult[i].count;
                data.facetResults[0].fieldResult[i].count = runningTotal;

                //console.log(data.facetResults[0].fieldResult[i].label +": total, " + runningTotal);
            }
        }

        // transform facet results list into map keyed on facet name
        var facetMap = {};
        $.each(data.facetResults, function(idx, obj) {
            facetMap[obj.fieldName] = obj.fieldResult;
        });

        // draw the charts
        var chartsDiv = $('#' + (options.targetDivId ? options.targetDivId : 'charts')),
            query = options.query,
            that = this;
        $.each(options.charts, function(index, name) {
            that.createChart(name, options, facetMap);
        });
    }
};

// create a set of facets charts - requesting the data
var loadAndDrawFacetCharts = function (options) {
    // the base url for getting the facet data
    var url = (options.biocacheServicesUrl == undefined) ? baseFacetChart.biocacheServicesUrl : options.biocacheServicesUrl,

    // build the required facet set
        facets = options.charts.join('&facets='),

    // calc the target div
        chartsDiv = $('#' + (options.chartsDiv ? options.chartsDiv : baseFacetChart.chartsDiv));

    // show a message while requesting data
    chartsDiv.append($("<span>Loading charts...</span>"));

    // make request
    $.ajax({
        url: urlConcat(url, "/occurrences/search.json?pageSize=0&q=") + options.query + "&facets=" + facets + "&fsort=index",
        dataType: 'jsonp',
        error: function() {
            cleanUp(); // TODO:
        },
        success: function(data) {

            // clear loading message
            chartsDiv.find('span').remove();

            // draw all charts
            drawFacetCharts(data, options);

        }
    });
};

//function
/*------------------------- RECORD BREAKDOWN CHARTS ------------------------------*/

/***** external services & links *****/
// an instance of the collections app - used for name lookup services
var collectionsUrl = "https://collections.ala.org.au";  // should be overridden from config by the calling page
// an instance of the biocache web services app - used for facet and taxonomic breakdowns
var biocacheServicesUrl = "https://biocache.ala.org.au/ws";  // should be overridden from config by the calling page
// an instance of a web app - used to display search results
var biocacheWebappUrl = "https://biocache.ala.org.au";  // should be overridden from config by the calling page

// defaults for taxa chart
var taxonomyPieChartOptions = {
    width: 480,
    height: 350,
    chartArea: {left:0, top:30, width:"100%", height: "70%"},
    is3D: false,
    titleTextStyle: {color: "#555", fontName: 'Arial', fontSize: 15},
    sliceVisibilityThreshold: 0,
    legend: "right"
};

// defaults for facet charts
var genericChartOptions = {
    width: 480,
    height: 350,
    chartArea: {left:0, top:30, width:"100%", height: "70%"},
    is3D: false,
    titleTextStyle: {color: "#555", fontName: 'Arial', fontSize: 15},
    sliceVisibilityThreshold: 0,
    legend: "right",
    chartType: "pie"
};

// defaults for individual facet charts
var individualChartOptions = {
    state_conservation: {chartType: 'column', width: 450, chartArea: {left:60, height: "58%"},
        title: 'By state conservation status', hAxis: {slantedText: true}},
    occurrence_year: {chartType: 'column', width: 450, chartArea: {left:60, height: "65%"}, hAxis: {slantedText: true}},
    species_group: {title: 'By higher-level group', ignore: ['Animals']},
    state: {ignore: ['Unknown1']},
    type_status: {title: 'By type status (as % of all type specimens)', ignore: ['notatype']},
    assertions: {chartType: 'bar', chartArea: {left:170}}
};

/*----------------- FACET-BASED CHARTS USING DIRECT CALLS TO BIO-CACHE SERVICES ---------------------*/
// these override the facet names in chart titles
var chartLabels = {
    institution_uid: 'institution',
    data_resource_uid: 'data set',
    assertions: 'data assertion',
    biogeographic_region: 'biogeographic region',
    occurrence_year: 'decade'
}
// asynchronous transforms are applied after the chart is drawn, ie the chart is drawn with the original values
// then redrawn when the ajax call for transform data returns
var asyncTransforms = {
// facet data now has entity names in label
//    collection_uid: {method: 'lookupEntityName', param: 'collection'},
//    institution_uid: {method: 'lookupEntityName', param: 'institution'},
//    data_resource_uid: {method: 'lookupEntityName', param: 'dataResource'}
}
// synchronous transforms are applied to the json data before the data table is built
var syncTransforms = {
    collection_uid: {method: 'transformFqData'},
    institution_uid: {method: 'transformFqData'},
    data_resource_uid: {method: 'transformFqData'},
    occurrence_year: {method: 'transformDecadeData'},
    month: {method: 'transformMonthData'}/*,
     assertions: {method: 'expandCamelCase'}*/
}

/********************************************************************************\
 * Ajax request for charts based on the facets available in the biocache breakdown.
 \********************************************************************************/
function loadFacetCharts(chartOptions) {
    if (chartOptions.collectionsUrl != undefined) { collectionsUrl = chartOptions.collectionsUrl; }
    if (chartOptions.biocacheServicesUrl != undefined) { biocacheServicesUrl = chartOptions.biocacheServicesUrl; }
    if (chartOptions.displayRecordsUrl != undefined) { biocacheWebappUrl = chartOptions.displayRecordsUrl; }

    var chartsDiv = $('#' + (chartOptions.targetDivId ? chartOptions.targetDivId : 'charts'));
    chartsDiv.append($("<span>Loading charts...</span>"));

    console.log('loadFacetCharts');
    console.log(chartOptions);

    var query = chartOptions.query ? chartOptions.query : buildQueryString(chartOptions.instanceUid);
    $.ajax({
        url: urlConcat(biocacheServicesUrl, "/occurrences/search.json?pageSize=0&q=") + query + "&fsort=index",
        dataType: 'jsonp',
        error: function() {
            cleanUp();
        },
        success: function(data) {

            // clear loading message
            chartsDiv.find('span').remove();

            // draw all charts
            drawFacetCharts(data, chartOptions);

        }
    });
}
function cleanUp(chartOptions) {
    $('img.loading').remove();
    if (chartOptions != undefined && chartOptions.error) {
        window[chartOptions.error]();
    }
}
/*********************************************************************\
 * Loads charts based on the facets declared in the config object.
 * - does not require any markup other than div#charts element
 \*********************************************************************/
function drawFacetCharts(data, chartOptions) {
    // check that we have results
    if (data.length == 0 || data.totalRecords == undefined || data.totalRecords == 0) {
        return;
    }

    // update total if requested
    if (chartOptions.totalRecordsSelector) {
        $(chartOptions.totalRecordsSelector).html(addCommas(data.totalRecords));
    }

    // transform facet results into map
    var facetMap = {};
    $.each(data.facetResults, function(idx, obj) {
        facetMap[obj.fieldName] = obj.fieldResult;
    });

    // draw the charts
    var chartsDiv = $('#' + (chartOptions.targetDivId ? chartOptions.targetDivId : 'charts'));
    var query = chartOptions.query ? chartOptions.query : buildQueryString(chartOptions.instanceUid);
    $.each(chartOptions.charts, function(index, name) {
        if (facetMap[name] != undefined) {
            buildGenericFacetChart(name, facetMap[name], query, chartsDiv, chartOptions);
        }
    });
}
/************************************************************\
 * Create and show a generic facet chart
 \************************************************************/
function buildGenericFacetChart(name, data, query, chartsDiv, chartOptions) {

    // resolve chart label
    var chartLabel = chartLabels[name] ? chartLabels[name] : name;

    // resolve the chart options
    var opts = $.extend({}, genericChartOptions);
    opts.title = "By " + chartLabel;  // default title
    var individualOptions = individualChartOptions[name] ? individualChartOptions[name] : {};
    // merge generic, individual and user options
    opts = $.extend(true, {}, opts, individualOptions, chartOptions[name]);

    // optionally transform the data
    var xformedData = data;
    if (syncTransforms[name]) {
        xformedData = window[syncTransforms[name].method](data);
    }

    // create the data table
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', chartLabel);
    dataTable.addColumn('number','records');
    $.each(xformedData, function(i,obj) {
        // filter any crap
        if (opts == undefined || opts.ignore == undefined || $.inArray(obj.label, opts.ignore) == -1) {
            if (detectCamelCase(obj.label)) {
                dataTable.addRow([{v: obj.label, f: capitalise(expandCamelCase(obj.label))}, obj.count]);
            }
            else if (obj.formattedLabel) {
                dataTable.addRow([{v: obj.label, f: obj.formattedLabel}, obj.count]);
            }
            else {
                dataTable.addRow([obj.label, obj.count]);
            }
        }
    });

    // reject the chart if there is only one facet value (after filtering)
    if (dataTable.getNumberOfRows() < 2) {
        return;
    }

    // create the container
    var $container = $('#' + name);
    if ($container.length == 0) {
        $container = $("<div id='" + name + "'></div>");
        chartsDiv.append($container);
    }

    // specify the type (for css tweaking)
    $container.addClass('chart-' + opts.chartType);

    console.log('Loading chart');
    console.log(opts);

    // create the chart
    var chart;
    switch (opts.chartType) {
        case 'column': chart = new google.visualization.ColumnChart(document.getElementById(name)); break;
        case 'bar': chart = new google.visualization.BarChart(document.getElementById(name)); break;
        case 'line': chart = new google.visualization.LineChart(document.getElementById(name)); break;
        case 'scatter': chart = new google.visualization.ScatterChart(document.getElementById(name)); break;
        default: chart = new google.visualization.PieChart(document.getElementById(name)); break;
    }

    chart.draw(dataTable, opts);

    // kick off post-draw asynch actions
    if (asyncTransforms[name]) {
        window[asyncTransforms[name].method](chart, dataTable, opts, asyncTransforms[name].param);
    }

    // setup a click handler - if requested
    if (chartOptions.clickThru != false) {  // defaults to true
        google.visualization.events.addListener(chart, 'select', function() {

            // default facet value is the name selected
            var id = dataTable.getValue(chart.getSelection()[0].row,0);

            // build the facet query
            var facetQuery;

            if (id.indexOf(name) != -1) {
                // fq provided in facet results
                facetQuery = id;
            } else {
                facetQuery = name + ":" + id;
            }

            // the facet query can be overridden for date ranges
            if (name == 'occurrence_year') {
                if (id.match("^before") == 'before') { // startWith
                    facetQuery = "occurrence_year:[*%20TO%20" + "1850" + "-01-01T12:00:00Z]";
                }
                else {
                    var decade = id.substr(0,4);
                    var dateTo = parseInt(decade) + 10;
                    facetQuery = "occurrence_year:[" + decade + "-01-01T12:00:00Z%20TO%20" + dateTo + "-01-01T12:00:00Z]";
                }
            }

            // show the records
            document.location = urlConcat(biocacheWebappUrl,"/occurrences/search?q=") + query +
            "&fq=" + facetQuery ;
        });
    }
}

/*---------------------- DATA TRANSFORMATION METHODS ----------------------*/
function transformDecadeData(data) {
    var firstDecade;
    var transformedData = [];
    $.each(data, function(i,obj) {
        if (obj.label == 'before') {
            transformedData.splice(0, 0, {label: "before " + firstDecade, count: obj.count});
        }
        else {
            var decade = obj.label.substr(0,4);
            if (i == 0) { firstDecade = decade; }
            transformedData.push({label: decade + "s", count: obj.count});
        }
    });
    return transformedData;
}

function transformMonthData(data) {
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        monthIdx;
    $.each(data, function(i,obj) {
        monthIdx = parseInt(obj.label, 10); // months values "01" need parsing to int
        obj.formattedLabel = months[monthIdx - 1];
    });
    return data;
}

function transformFqData(data) {
    $.each(data, function(i,obj) {
        // substitute label for fq data if present
        if (obj.fq) {
            obj.formattedLabel = obj.label;
            obj.label = obj.fq;
        }
    });
    return data;
}
/*--------------------- LABEL TRANSFORMATION METHODS ----------------------*/
function detectCamelCase(name) {
    return /[a-z][A-Z]/.test(name);
}
function expandCamelCase(name) {
    return name.replace(/([a-z])([A-Z])/g, function(s, str1, str2){return str1 + " " + str2.toLowerCase();});
}
/* capitalises the first letter of the passed string */
function capitalise(item) {
    return item.replace(/^./, function(str){ return str.toUpperCase(); })
}
function lookupEntityName(chart, table, opts, entity) {
    var uidList = [];
    for (var i = 0; j = table.getNumberOfRows(), i < j; i++) {
        uidList.push(table.getValue(i,0));
    }
    $.jsonp({
        url: collectionsUrl + "/ws/resolveNames/" + uidList.join(',') + "?callback=?",
        cache: true,
        success: function(data) {
            for (var i = 0;j + table.getNumberOfRows(), i < j; i++) {
                var uid = table.getValue(i,0);
                table.setCell(i, 0, uid, data[uid]);
            }
            chart.draw(table, opts);
        },
        error: function(d,msg) {
            alert(msg);
        }
    });
}
// does name lookup from uids and transforms data table
function lookupEntityNameFromUids (chart, table, opts) {
    var uidList = [];
    for (var i = 0; j = table.getNumberOfRows(), i < j; i++) {
        uidList.push(table.getValue(i,0));
    }
    $.jsonp({
        url: collectionsUrl + "/ws/resolveNames/" + uidList.join(',') + "?callback=?",
        cache: true,
        success: function(data) {
            for (var i = 0;j + table.getNumberOfRows(), i < j; i++) {
                var uid = table.getValue(i,0);
                table.setCell(i, 0, uid, data[uid]);
            }
            chart.draw(table, opts);
        },
        error: function(d,msg) {
            alert(msg);
        }
    });
}


/*------------------------------------------------------------------------------------------*
 *----------- TAXONOMY BREAKDOWN CHARTS USING DIRECT CALLS TO BIO-CACHE SERVICES -----------*
 *------------------------------------------------------------------------------------------*/
// works for uid-based queries or q/fq general queries
var taxonomyChart = {
    // the base query that defines the full set of records being analysed
    baseQuery: "",
    // the active query - base plus any non-taxonomic restrictions such as date range
    query: "",
    // the rank of the current subset being displayed
    rank: undefined,
    // the name of the current subset being displayed
    name: undefined,
    // threshold - used when no rank+name given
    threshold: undefined,
    // chart configuration
    chartOptions: {},
    // history of chart state
    historyState: [],
    hasState: function () { return this.historyState.length > 0; },
    pushState: function () {
        this.historyState.push({rank:this.rank, name:this.name});
    },
    popState: function () {
        return this.hasState() ? this.historyState.pop() : {};
    },
    cleanUp: function () {
        $('img.loading').remove();
        if (this.chartOptions != undefined && this.chartOptions.error) {
            window[this.chartOptions.error]();
        }
    },
    // loads a new chart with the passed configuration
    load: function (chartOptions) {
        var thisChart = this;

        if (chartOptions) {
            this.chartOptions = chartOptions;

            if (chartOptions.collectionsUrl != undefined) { collectionsUrl = chartOptions.collectionsUrl; }
            if (chartOptions.biocacheServicesUrl != undefined) { biocacheServicesUrl = chartOptions.biocacheServicesUrl; }
            if (chartOptions.displayRecordsUrl != undefined) { biocacheWebappUrl = chartOptions.displayRecordsUrl; }

            this.baseQuery = chartOptions.query ? chartOptions.query : buildQueryString(chartOptions.instanceUid);
            this.query = this.baseQuery + (chartOptions.subquery ? chartOptions.subquery : '');

            this.rank = chartOptions.rank;
            this.name = chartOptions.name;
            this.threshold = chartOptions.threshold;
        }

        var url = urlConcat(biocacheServicesUrl, "/breakdown.json?q=") + this.query;

        // add url params to set state
        if (this.rank) {
            url += "&rank=" + this.rank + (this.name ? "&name=" + this.name: "");
        }
        else {
            url += "&max=" + (this.threshold ? this.threshold : '55');
        }

        $.ajax({
            url: url,
            dataType: 'jsonp',
            timeout: 30000,
            complete: function(jqXHR, textStatus) {
                if (textStatus == 'timeout') {
                    alert('Sorry - the request was taking too long so it has been cancelled.');
                }
                if (textStatus == 'error') {
                    alert('Sorry - the chart cannot be redrawn due to an error.');
                }
                if (textStatus != 'success') {
                    thisChart.cleanUp();
                }
            },
            success: function(data) {
                // check for errors
                if (data != undefined && data.taxa.length > 0) {
                    // draw the chart
                    thisChart.draw(data);
                }
            }
        });
    },
    draw: function (data) {
        var thisChart = this;

        // create the data table
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', chartLabels[name] ? chartLabels[name] : name);
        dataTable.addColumn('number','records');
        $.each(data.taxa, function(i,obj) {
            dataTable.addRow([obj.label, obj.count]);
        });

        // resolve the chart options
        var opts = $.extend({}, taxonomyPieChartOptions);
        opts = $.extend(true, opts, this.chartOptions);
        opts.title = opts.name ? opts.name + " records by " + data.rank : "By " + data.rank;

        // create the outer div that will contain the chart and the additional links
        var $outerContainer = $('#taxa');
        if ($outerContainer.length == 0) {
            $outerContainer = $('<div id="taxa"></div>'); // create it
            $outerContainer.css('margin-bottom','-50px');
            var chartsDiv = $('div#' + (this.chartOptions.targetDivId ? this.chartOptions.targetDivId : 'charts'));
            // append it
            chartsDiv.prepend($outerContainer);
        }

        // create the chart container if not already there
        var $container = $('#taxaChart');
        if ($container.length == 0) {
            $container = $("<div id='taxaChart' class='chart-pie'></div>");
            $outerContainer.append($container);
        }

        // create the chart
        var chart = new google.visualization.PieChart(document.getElementById('taxaChart'));

        // notify any listeners
        if (this.chartOptions.notifyChange) {
            window[this.chartOptions.notifyChange](this.rank, this.name);
        }

        // draw the chart
        chart.draw(dataTable, opts);

        // draw the back button / instructions
        var $backLink = $('#backLink');
        if ($backLink.length == 0) {
            $backLink = $('<div class="link" id="backLink">&laquo; Previous rank</div>').appendTo($outerContainer);  // create it
            $backLink.css('position','relative').css('top','-75px');
            $backLink.click(function() {
                // only act if link was real
                if (!$backLink.hasClass('link')) return;

                // show spinner while loading
                $container.append($('<img class="loading" style="position:absolute;left:130px;top:220px;z-index:2000" ' +
                    'alt="loading..." src="' + collectionsUrl + '/images/ala/ajax-loader.gif"/>'));

                // get state from history
                var previous = thisChart.popState();

                // set new chart state
                taxonomyChart.rank = previous.rank;
                taxonomyChart.name = previous.name;

                // redraw chart
                thisChart.load();
            });
        }
        if (this.hasState()) {
            // show the prev link
            $backLink.html("&laquo; Previous rank").addClass('link');
        }
        else {
            // show the instruction
            $backLink.html("Click a slice to drill into the next taxonomic level.").removeClass('link');
        }

        // draw records link
        var $recordsLink = $('#recordsLink');
        if ($recordsLink.length == 0) {
            $recordsLink = $('<div class="link under" id="recordsLink">View records</div>').appendTo($outerContainer);  // create it
            $recordsLink.css('position','relative').css('top','-75px');
            $recordsLink.click(function () {
                thisChart.showRecords();  // called explicitly so we have the correct 'this' context
            });
        }

        // set link text
        if (this.hasState()) {
            $recordsLink.html('View records for ' + this.rank + ' ' + this.name);
        }
        else {
            $recordsLink.html('View all records');
        }

        // setup a click handler - if requested
        var clickThru = this.chartOptions.clickThru == undefined ? true : this.chartOptions.clickThru;  // default to true
        var drillDown = this.chartOptions.drillDown == undefined ? true : this.chartOptions.drillDown;  // default to true
        if (clickThru || drillDown) {
            google.visualization.events.addListener(chart, 'select', function() {

                // find out what they clicked
                var name = dataTable.getValue(chart.getSelection()[0].row,0);

                /* DRILL DOWN */
                if (drillDown && data.rank != "species") {
                    // show spinner while loading
                    $container.append($('<img class="loading" style="position:absolute;left:130px;top:220px;z-index:2000" ' +
                        'alt="loading..." src="' + collectionsUrl + '/images/ala/ajax-loader.gif"/>'));

                    // save current state as history - for back-tracking
                    thisChart.pushState();

                    // set new chart state
                    thisChart.rank = data.rank;
                    thisChart.name = name;

                    // redraw chart
                    thisChart.load();
                }

                /* SHOW RECORDS */
                else if (clickThru) {
                    // show occurrence records
                    document.location = urlConcat(biocacheWebappUrl, "/occurrences/search?q=") + query +
                        "&fq=" + data.rank + ":" + name;
                }
            });
        }
    },
    showRecords: function () {
        // show occurrence records
        var fq = "";
        if (this.rank != undefined && this.name != undefined) {
            fq = "&fq=" + this.rank + ":" + this.name;
        }
        document.location = urlConcat(biocacheWebappUrl, "/occurrences/search?q=") +
            this.query + fq;
    },
    reset: function () {
        if (this.hasState()) {
            var firstState = this.historyState[0];

            // this is a bit rubbish - the common code should be pulled out
            // set new chart state
            this.rank = firstState.rank;
            this.name = firstState.name;
        }

        // remove any non-taxonomic restrictions
        this.query = this.baseQuery;

        // redraw chart
        this.load();
    },
    updateQuery: function (query) {
        this.query = query;
        this.load();
    }
};

/*------------------------- TAXON TREE -----------------------------*/
function initTaxonTree(treeOptions) {
    var query = treeOptions.query ? treeOptions.query : buildQueryString(treeOptions.instanceUid);

    var targetDivId = treeOptions.targetDivId ? treeOptions.targetDivId : 'tree';
    var $container = $('#' + targetDivId);
    var title = treeOptions.title || 'Explore records by taxonomy';
    if (treeOptions.title !== "") {
        $container.append($('<h4>' + title + '</h4>'));
    }
    var $treeContainer = $('<div id="treeContainer"></div>').appendTo($container);
    $treeContainer.resizable({
        maxHeight: 900,
        minHeight: 100,
        maxWidth: 900,
        minWidth: 500
    });
    var $tree = $('<div id="taxaTree"></div>').appendTo($treeContainer);
    $tree
        .bind("after_open.jstree", function(event, data) {
            var children = $.jstree._reference(data.rslt.obj)._get_children(data.rslt.obj);
            // automatically open if only one child node
            if (children.length == 1) {
                $tree.jstree("open_node",children[0]);
            }
            // adjust container size
            var fullHeight = $tree[0].scrollHeight;
            if (fullHeight > $tree.height()) {
                fullHeight = Math.min(fullHeight, 700);
                $treeContainer.animate({height:fullHeight});
            }
        })
        .bind("select_node.jstree", function (event, data) {
            // click will show the context menu
            $tree.jstree("show_contextmenu", data.rslt.obj);
        })
        .bind("loaded.jstree", function (event, data) {
            // get rid of the anchor click handler because it hides the context menu (which we are 'binding' to click)
            //$tree.undelegate("a", "click.jstree");
            $tree.jstree("open_node","#top");
        })
        .jstree({
            json_data: {
                data: {"data":"Kingdoms", "state":"closed", "attr":{"rank":"kingdoms", "id":"top"}},
                ajax: {
                    url: function(node) {
                        var rank = $(node).attr("rank");
                        var u = urlConcat(biocacheServicesUrl, "/breakdown.json?q=") + query + "&rank=";
                        if (rank == 'kingdoms') {
                            u += 'kingdom';  // starting node
                        }
                        else {
                            u += rank + "&name=" + $(node).attr('id');
                        }
                        return u;
                    },
                    dataType: 'jsonp',
                    success: function(data) {
                        var nodes = [];
                        var rank = data.rank;
                        $.each(data.taxa, function(i, obj) {
                            var label = obj.label + " - " + obj.count;
                            if (rank == 'species') {
                                nodes.push({"data":label, "attr":{"rank":rank, "id":obj.label}});
                            }
                            else {
                                nodes.push({"data":label, "state":"closed", "attr":{"rank":rank, "id":obj.label}});
                            }
                        });
                        return nodes;
                    },
                    error: function(xhr, text_status) {
                        //alert(text_status);
                    }
                }
            },
            core: { animation: 200, open_parents: true },
            themes:{
                theme: treeOptions.theme || 'default',
                icons: treeOptions.icons || false,
                url: treeOptions.serverUrl + "/js/themes/" + (treeOptions.theme || 'default') + "/style.css"
            },
            checkbox: {override_ui:true},
            contextmenu: {select_node: false, show_at_node: false, items: {
                records: {label: "Show records", action: function(obj) {showRecords(obj, query);}},
                bie: {label: "Show information", action: function(obj) {showBie(obj);}},
                create: false,
                rename: false,
                remove: false,
                ccp: false }
            },
            plugins: ['json_data','themes','ui','contextmenu']
        });
}
/************************************************************\
 * Go to occurrence records for selected node
 \************************************************************/
function showRecords(node, query) {
    var rank = node.attr('rank');
    if (rank == 'kingdoms') return;
    var name = node.attr('id');
    // url for records list
    var recordsUrl = urlConcat(biocacheWebappUrl, "/occurrences/search?q=") + query +
        "&fq=" + rank + ":" + name;
    document.location.href = recordsUrl;
}
/************************************************************\
 * Go to 'species' page for selected node
 \************************************************************/
function showBie(node) {
    var rank = node.attr('rank');
    if (rank == 'kingdoms') return;
    var name = node.attr('id');
    var sppUrl = "https://bie.ala.org.au/species/" + name;
    if (rank != 'species') { sppUrl += "_(" + rank + ")"; }
    document.location.href = sppUrl;
}

/*------------------------- UTILITIES ------------------------------*/
/************************************************************\
 * build records query handling multiple uids
 * uidSet can be a comma-separated string or an array
 \************************************************************/
function buildQueryString(uidSet) {
    var uids = (typeof uidSet == "string") ? uidSet.split(',') : uidSet;
    var str = "";
    $.each(uids, function(index, value) {
        str += solrFieldNameForUid(value) + ":" + value + " OR ";
    });
    return str.substring(0, str.length - 4);
}
/************************************************************\
 * returns the appropriate facet name for the uid - to build
 * biocache occurrence searches
 \************************************************************/
function solrFieldNameForUid(uid) {
    switch(uid.substring(0,2)) {
        case 'co': return "collection_uid";
        case 'in': return "institution_uid";
        case 'dp': return "data_provider_uid";
        case 'dr': return "data_resource_uid";
        case 'dh': return "data_hub_uid";
        default: return "";
    }
}
/************************************************************\
 * returns the appropriate context for the uid - to build
 * biocache webservice urls
 \************************************************************/
function wsEntityForBreakdown(uid) {
    switch (uid.substr(0,2)) {
        case 'co': return 'collections';
        case 'in': return 'institutions';
        case 'dr': return 'dataResources';
        case 'dp': return 'dataProviders';
        case 'dh': return 'dataHubs';
        default: return "";
    }
}
/************************************************************\
 * Concatenate url fragments handling stray slashes
 \************************************************************/
function urlConcat(base, context) {
    // remove any trailing slash from base
    base = base.replace(/\/$/, '');
    // remove any leading slash from context
    context = context.replace(/^\//, '');
    // join
    return base + "/" + context;
}

/************************************************************\
 * Add commas to number strings
 \************************************************************/
function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

/*
 Document   : wms.js
 Created on : Feb 16, 2011, 3:25:27 PM
 Author     : "Gavin Jackson <Gavin.Jackson@csiro.au>"

 Refactored code from http://lyceum.massgis.state.ma.us/wiki/doku.php?id=googlemapsv3:home
 */

function bound(value, opt_min, opt_max) {
    if (opt_min != null) value = Math.max(value, opt_min);
    if (opt_max != null) value = Math.min(value, opt_max);
    return value;
}

function degreesToRadians(deg) {
    return deg * (Math.PI / 180);
}

function radiansToDegrees(rad) {
    return rad / (Math.PI / 180);
}

function MercatorProjection() {
    var MERCATOR_RANGE = 256;
    this.pixelOrigin_ = new google.maps.Point(
            MERCATOR_RANGE / 2, MERCATOR_RANGE / 2);
    this.pixelsPerLonDegree_ = MERCATOR_RANGE / 360;
    this.pixelsPerLonRadian_ = MERCATOR_RANGE / (2 * Math.PI);
};

MercatorProjection.prototype.fromLatLngToPoint = function(latLng, opt_point) {
    var me = this;

    var point = opt_point || new google.maps.Point(0, 0);

    var origin = me.pixelOrigin_;
    point.x = origin.x + latLng.lng() * me.pixelsPerLonDegree_;
    // NOTE(appleton): Truncating to 0.9999 effectively limits latitude to
    // 89.189.  This is about a third of a tile past the edge of the world tile.
    var siny = bound(Math.sin(degreesToRadians(latLng.lat())), -0.9999, 0.9999);
    point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) * -me.pixelsPerLonRadian_;
    return point;
};

MercatorProjection.prototype.fromDivPixelToLatLng = function(pixel, zoom) {
    var me = this;

    var origin = me.pixelOrigin_;
    var scale = Math.pow(2, zoom);
    var lng = (pixel.x / scale - origin.x) / me.pixelsPerLonDegree_;
    var latRadians = (pixel.y / scale - origin.y) / -me.pixelsPerLonRadian_;
    var lat = radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) - Math.PI / 2);
    return new google.maps.LatLng(lat, lng);
};

MercatorProjection.prototype.fromDivPixelToSphericalMercator = function(pixel, zoom) {
    var me = this;
    var coord = me.fromDivPixelToLatLng(pixel, zoom);

    var r= 6378137.0;
    var x = r* degreesToRadians(coord.lng());
    var latRad = degreesToRadians(coord.lat());
    var y = (r/2) * Math.log((1+Math.sin(latRad))/ (1-Math.sin(latRad)));

    return new google.maps.Point(x,y);
};

function loadWMS(map, baseURL, customParams){
    var tileHeight = 256;
    var tileWidth = 256;
    var opacityLevel = 0.75;
    var isPng = true;
    var minZoomLevel = 2;
    var maxZoomLevel = 28;

    //var baseURL = "";
    var wmsParams = [
        "REQUEST=GetMap",
        "SERVICE=WMS",
        "VERSION=1.1.1",
        "BGCOLOR=0xFFFFFF",
        "TRANSPARENT=TRUE",
        "SRS=EPSG:900913", // 3395?
            "WIDTH="+ tileWidth,
            "HEIGHT="+ tileHeight
    ];

    //add additional parameters
    var wmsParams = wmsParams.concat(customParams);

    var overlayOptions =
    {
        getTileUrl: function(coord, zoom)
        {
            var lULP = new google.maps.Point(coord.x*256,(coord.y+1)*256);
            var lLRP = new google.maps.Point((coord.x+1)*256,coord.y*256);

            var projectionMap = new MercatorProjection();

            var lULg = projectionMap.fromDivPixelToSphericalMercator(lULP, zoom);
            var lLRg  = projectionMap.fromDivPixelToSphericalMercator(lLRP, zoom);

            var lUL_Latitude = lULg.y;
            var lUL_Longitude = lULg.x;
            var lLR_Latitude = lLRg.y;
            var lLR_Longitude = lLRg.x;
            //GJ: there is a bug when crossing the -180 longitude border (tile does not render) - this check seems to fix it
            if (lLR_Longitude < lUL_Longitude){
                lLR_Longitude = Math.abs(lLR_Longitude);
            }
            var urlResult = baseURL + wmsParams.join("&") + "&bbox=" + lUL_Longitude + "," + lUL_Latitude + "," + lLR_Longitude + "," + lLR_Latitude;

            return urlResult;
        },

        tileSize: new google.maps.Size(tileHeight, tileWidth),

        minZoom: minZoomLevel,
        maxZoom: maxZoomLevel,

        opacity: opacityLevel,

        isPng: isPng
    };

    overlayWMS = new google.maps.ImageMapType(overlayOptions);

    map.overlayMapTypes.insertAt(0, overlayWMS);

    map.setOptions({
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.TERRAIN,
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.HYBRID
            ],
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        }
    });
}

/*!
 * Amplify 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 *
 */
(function( global, undefined ) {

var slice = [].slice,
	subscriptions = {};

var amplify = global.amplify = {
	publish: function( topic ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to publish." );
		}

		var args = slice.call( arguments, 1 ),
			topicSubscriptions,
			subscription,
			length,
			i = 0,
			ret;

		if ( !subscriptions[ topic ] ) {
			return true;
		}

		topicSubscriptions = subscriptions[ topic ].slice();
		for ( length = topicSubscriptions.length; i < length; i++ ) {
			subscription = topicSubscriptions[ i ];
			ret = subscription.callback.apply( subscription.context, args );
			if ( ret === false ) {
				break;
			}
		}
		return ret !== false;
	},

	subscribe: function( topic, context, callback, priority ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to create a subscription." );
		}

		if ( arguments.length === 3 && typeof callback === "number" ) {
			priority = callback;
			callback = context;
			context = null;
		}
		if ( arguments.length === 2 ) {
			callback = context;
			context = null;
		}
		priority = priority || 10;

		var topicIndex = 0,
			topics = topic.split( /\s/ ),
			topicLength = topics.length,
			added;
		for ( ; topicIndex < topicLength; topicIndex++ ) {
			topic = topics[ topicIndex ];
			added = false;
			if ( !subscriptions[ topic ] ) {
				subscriptions[ topic ] = [];
			}

			var i = subscriptions[ topic ].length - 1,
				subscriptionInfo = {
					callback: callback,
					context: context,
					priority: priority
				};

			for ( ; i >= 0; i-- ) {
				if ( subscriptions[ topic ][ i ].priority <= priority ) {
					subscriptions[ topic ].splice( i + 1, 0, subscriptionInfo );
					added = true;
					break;
				}
			}

			if ( !added ) {
				subscriptions[ topic ].unshift( subscriptionInfo );
			}
		}

		return callback;
	},

	unsubscribe: function( topic, context, callback ) {
		if ( typeof topic !== "string" ) {
			throw new Error( "You must provide a valid topic to remove a subscription." );
		}

		if ( arguments.length === 2 ) {
			callback = context;
			context = null;
		}

		if ( !subscriptions[ topic ] ) {
			return;
		}

		var length = subscriptions[ topic ].length,
			i = 0;

		for ( ; i < length; i++ ) {
			if ( subscriptions[ topic ][ i ].callback === callback ) {
				if ( !context || subscriptions[ topic ][ i ].context === context ) {
					subscriptions[ topic ].splice( i, 1 );
					
					// Adjust counter and length for removed item
					i--;
					length--;
				}
			}
		}
	}
};

}( this ) );

(function( amplify, undefined ) {

var store = amplify.store = function( key, value, options ) {
	var type = store.type;
	if ( options && options.type && options.type in store.types ) {
		type = options.type;
	}
	return store.types[ type ]( key, value, options || {} );
};

store.types = {};
store.type = null;
store.addType = function( type, storage ) {
	if ( !store.type ) {
		store.type = type;
	}

	store.types[ type ] = storage;
	store[ type ] = function( key, value, options ) {
		options = options || {};
		options.type = type;
		return store( key, value, options );
	};
};
store.error = function() {
	return "amplify.store quota exceeded";
};

var rprefix = /^__amplify__/;
function createFromStorageInterface( storageType, storage ) {
	store.addType( storageType, function( key, value, options ) {
		var storedValue, parsed, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			try {
				// accessing the length property works around a localStorage bug
				// in Firefox 4.0 where the keys don't update cross-page
				// we assign to key just to avoid Closure Compiler from removing
				// the access as "useless code"
				// https://bugzilla.mozilla.org/show_bug.cgi?id=662511
				key = storage.length;

				while ( key = storage.key( i++ ) ) {
					if ( rprefix.test( key ) ) {
						parsed = JSON.parse( storage.getItem( key ) );
						if ( parsed.expires && parsed.expires <= now ) {
							remove.push( key );
						} else {
							ret[ key.replace( rprefix, "" ) ] = parsed.data;
						}
					}
				}
				while ( key = remove.pop() ) {
					storage.removeItem( key );
				}
			} catch ( error ) {}
			return ret;
		}

		// protect against name collisions with direct storage
		key = "__amplify__" + key;

		if ( value === undefined ) {
			storedValue = storage.getItem( key );
			parsed = storedValue ? JSON.parse( storedValue ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				storage.removeItem( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				storage.removeItem( key );
			} else {
				parsed = JSON.stringify({
					data: value,
					expires: options.expires ? now + options.expires : null
				});
				try {
					storage.setItem( key, parsed );
				// quota exceeded
				} catch( error ) {
					// expire old data and try again
					store[ storageType ]();
					try {
						storage.setItem( key, parsed );
					} catch( error ) {
						throw store.error();
					}
				}
			}
		}

		return ret;
	});
}

// localStorage + sessionStorage
// IE 8+, Firefox 3.5+, Safari 4+, Chrome 4+, Opera 10.5+, iPhone 2+, Android 2+
for ( var webStorageType in { localStorage: 1, sessionStorage: 1 } ) {
	// try/catch for file protocol in Firefox and Private Browsing in Safari 5
	try {
		// Safari 5 in Private Browsing mode exposes localStorage
		// but doesn't allow storing data, so we attempt to store and remove an item.
		// This will unfortunately give us a false negative if we're at the limit.
		window[ webStorageType ].setItem( "__amplify__", "x" );
		window[ webStorageType ].removeItem( "__amplify__" );
		createFromStorageInterface( webStorageType, window[ webStorageType ] );
	} catch( e ) {}
}

// globalStorage
// non-standard: Firefox 2+
// https://developer.mozilla.org/en/dom/storage#globalStorage
if ( !store.types.localStorage && window.globalStorage ) {
	// try/catch for file protocol in Firefox
	try {
		createFromStorageInterface( "globalStorage",
			window.globalStorage[ window.location.hostname ] );
		// Firefox 2.0 and 3.0 have sessionStorage and globalStorage
		// make sure we default to globalStorage
		// but don't default to globalStorage in 3.5+ which also has localStorage
		if ( store.type === "sessionStorage" ) {
			store.type = "globalStorage";
		}
	} catch( e ) {}
}

// userData
// non-standard: IE 5+
// http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx
(function() {
	// IE 9 has quirks in userData that are a huge pain
	// rather than finding a way to detect these quirks
	// we just don't register userData if we have localStorage
	if ( store.types.localStorage ) {
		return;
	}

	// append to html instead of body so we can do this from the head
	var div = document.createElement( "div" ),
		attrKey = "amplify";
	div.style.display = "none";
	document.getElementsByTagName( "head" )[ 0 ].appendChild( div );

	// we can't feature detect userData support
	// so just try and see if it fails
	// surprisingly, even just adding the behavior isn't enough for a failure
	// so we need to load the data as well
	try {
		div.addBehavior( "#default#userdata" );
		div.load( attrKey );
	} catch( e ) {
		div.parentNode.removeChild( div );
		return;
	}

	store.addType( "userData", function( key, value, options ) {
		div.load( attrKey );
		var attr, parsed, prevValue, i, remove,
			ret = value,
			now = (new Date()).getTime();

		if ( !key ) {
			ret = {};
			remove = [];
			i = 0;
			while ( attr = div.XMLDocument.documentElement.attributes[ i++ ] ) {
				parsed = JSON.parse( attr.value );
				if ( parsed.expires && parsed.expires <= now ) {
					remove.push( attr.name );
				} else {
					ret[ attr.name ] = parsed.data;
				}
			}
			while ( key = remove.pop() ) {
				div.removeAttribute( key );
			}
			div.save( attrKey );
			return ret;
		}

		// convert invalid characters to dashes
		// http://www.w3.org/TR/REC-xml/#NT-Name
		// simplified to assume the starting character is valid
		// also removed colon as it is invalid in HTML attribute names
		key = key.replace( /[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-" );
		// adjust invalid starting character to deal with our simplified sanitization
		key = key.replace( /^-/, "_-" );

		if ( value === undefined ) {
			attr = div.getAttribute( key );
			parsed = attr ? JSON.parse( attr ) : { expires: -1 };
			if ( parsed.expires && parsed.expires <= now ) {
				div.removeAttribute( key );
			} else {
				return parsed.data;
			}
		} else {
			if ( value === null ) {
				div.removeAttribute( key );
			} else {
				// we need to get the previous value in case we need to rollback
				prevValue = div.getAttribute( key );
				parsed = JSON.stringify({
					data: value,
					expires: (options.expires ? (now + options.expires) : null)
				});
				div.setAttribute( key, parsed );
			}
		}

		try {
			div.save( attrKey );
		// quota exceeded
		} catch ( error ) {
			// roll the value back to the previous value
			if ( prevValue === null ) {
				div.removeAttribute( key );
			} else {
				div.setAttribute( key, prevValue );
			}

			// expire old data and try again
			store.userData();
			try {
				div.setAttribute( key, parsed );
				div.save( attrKey );
			} catch ( error ) {
				// roll the value back to the previous value
				if ( prevValue === null ) {
					div.removeAttribute( key );
				} else {
					div.setAttribute( key, prevValue );
				}
				throw store.error();
			}
		}
		return ret;
	});
}() );

// in-memory storage
// fallback for all browsers to enable the API even if we can't persist data
(function() {
	var memory = {},
		timeout = {};

	function copy( obj ) {
		return obj === undefined ? undefined : JSON.parse( JSON.stringify( obj ) );
	}

	store.addType( "memory", function( key, value, options ) {
		if ( !key ) {
			return copy( memory );
		}

		if ( value === undefined ) {
			return copy( memory[ key ] );
		}

		if ( timeout[ key ] ) {
			clearTimeout( timeout[ key ] );
			delete timeout[ key ];
		}

		if ( value === null ) {
			delete memory[ key ];
			return null;
		}

		memory[ key ] = value;
		if ( options.expires ) {
			timeout[ key ] = setTimeout(function() {
				delete memory[ key ];
				delete timeout[ key ];
			}, options.expires );
		}

		return value;
	});
}() );

}( this.amplify = this.amplify || {} ) );

/*global amplify*/

(function( amplify, undefined ) {
'use strict';

function noop() {}
function isFunction( obj ) {
	return ({}).toString.call( obj ) === "[object Function]";
}

function async( fn ) {
	var isAsync = false;
	setTimeout(function() {
		isAsync = true;
	}, 1 );
	return function() {
		var that = this,
			args = arguments;
		if ( isAsync ) {
			fn.apply( that, args );
		} else {
			setTimeout(function() {
				fn.apply( that, args );
			}, 1 );
		}
	};
}

amplify.request = function( resourceId, data, callback ) {
	// default to an empty hash just so we can handle a missing resourceId
	// in one place
	var settings = resourceId || {};

	if ( typeof settings === "string" ) {
		if ( isFunction( data ) ) {
			callback = data;
			data = {};
		}
		settings = {
			resourceId: resourceId,
			data: data || {},
			success: callback
		};
	}

	var request = { abort: noop },
		resource = amplify.request.resources[ settings.resourceId ],
		success = settings.success || noop,
		error = settings.error || noop;

	settings.success = async( function( data, status ) {
		status = status || "success";
		amplify.publish( "request.success", settings, data, status );
		amplify.publish( "request.complete", settings, data, status );
		success( data, status );
	});

	settings.error = async( function( data, status ) {
		status = status || "error";
		amplify.publish( "request.error", settings, data, status );
		amplify.publish( "request.complete", settings, data, status );
		error( data, status );
	});

	if ( !resource ) {
		if ( !settings.resourceId ) {
			throw "amplify.request: no resourceId provided";
		}
		throw "amplify.request: unknown resourceId: " + settings.resourceId;
	}

	if ( !amplify.publish( "request.before", settings ) ) {
		settings.error( null, "abort" );
		return;
	}

	amplify.request.resources[ settings.resourceId ]( settings, request );
	return request;
};

amplify.request.types = {};
amplify.request.resources = {};
amplify.request.define = function( resourceId, type, settings ) {
	if ( typeof type === "string" ) {
		if ( !( type in amplify.request.types ) ) {
			throw "amplify.request.define: unknown type: " + type;
		}

		settings.resourceId = resourceId;
		amplify.request.resources[ resourceId ] =
			amplify.request.types[ type ]( settings );
	} else {
		// no pre-processor or settings for one-off types (don't invoke)
		amplify.request.resources[ resourceId ] = type;
	}
};

}( amplify ) );


(function( amplify, $, undefined ) {
'use strict';

var xhrProps = [ "status", "statusText", "responseText", "responseXML", "readyState" ],
		rurlData = /\{([^\}]+)\}/g;

amplify.request.types.ajax = function( defnSettings ) {
	defnSettings = $.extend({
		type: "GET"
	}, defnSettings );

	return function( settings, request ) {
		var xhr, handleResponse,
			url = defnSettings.url,
			abort = request.abort,
			ajaxSettings = $.extend( true, {}, defnSettings, { data: settings.data } ),
			aborted = false,
			ampXHR = {
				readyState: 0,
				setRequestHeader: function( name, value ) {
					return xhr.setRequestHeader( name, value );
				},
				getAllResponseHeaders: function() {
					return xhr.getAllResponseHeaders();
				},
				getResponseHeader: function( key ) {
					return xhr.getResponseHeader( key );
				},
				overrideMimeType: function( type ) {
					return xhr.overrideMimeType( type );
				},
				abort: function() {
					aborted = true;
					try {
						xhr.abort();
					// IE 7 throws an error when trying to abort
					} catch( e ) {}
					handleResponse( null, "abort" );
				},
				success: function( data, status ) {
					settings.success( data, status );
				},
				error: function( data, status ) {
					settings.error( data, status );
				}
			};

		handleResponse = function( data, status ) {
			$.each( xhrProps, function( i, key ) {
				try {
					ampXHR[ key ] = xhr[ key ];
				} catch( e ) {}
			});
			// Playbook returns "HTTP/1.1 200 OK"
			// TODO: something also returns "OK", what?
			if ( /OK$/.test( ampXHR.statusText ) ) {
				ampXHR.statusText = "success";
			}
			if ( data === undefined ) {
				// TODO: add support for ajax errors with data
				data = null;
			}
			if ( aborted ) {
				status = "abort";
			}
			if ( /timeout|error|abort/.test( status ) ) {
				ampXHR.error( data, status );
			} else {
				ampXHR.success( data, status );
			}
			// avoid handling a response multiple times
			// this can happen if a request is aborted
			// TODO: figure out if this breaks polling or multi-part responses
			handleResponse = $.noop;
		};

		amplify.publish( "request.ajax.preprocess",
			defnSettings, settings, ajaxSettings, ampXHR );

		$.extend( ajaxSettings, {
			isJSONP: function () {
				return (/jsonp/gi).test(this.dataType);
			},
			cacheURL: function () {
				if (!this.isJSONP()) {
					return this.url;
				}

				var callbackName = 'callback';

				// possible for the callback function name to be overridden
				if (this.hasOwnProperty('jsonp')) {
					if (this.jsonp !== false) {
						callbackName = this.jsonp;
					} else {
						if (this.hasOwnProperty('jsonpCallback')) {
							callbackName = this.jsonpCallback;
						}
					}
				}

				// search and replace callback parameter in query string with empty string
				var callbackRegex = new RegExp('&?' + callbackName + '=[^&]*&?', 'gi');
				return this.url.replace(callbackRegex, '');
			},
			success: function( data, status ) {
				handleResponse( data, status );
			},
			error: function( _xhr, status ) {
				handleResponse( null, status );
			},
			beforeSend: function( _xhr, _ajaxSettings ) {
				xhr = _xhr;
				ajaxSettings = _ajaxSettings;
				var ret = defnSettings.beforeSend ?
					defnSettings.beforeSend.call( this, ampXHR, ajaxSettings ) : true;
				return ret && amplify.publish( "request.before.ajax",
					defnSettings, settings, ajaxSettings, ampXHR );
			}
		});

		// cache all JSONP requests
		if (ajaxSettings.cache && ajaxSettings.isJSONP()) {
			$.extend(ajaxSettings, {
				cache: true
			});
		}

		$.ajax( ajaxSettings );

		request.abort = function() {
			ampXHR.abort();
			abort.call( this );
		};
	};
};



amplify.subscribe( "request.ajax.preprocess", function( defnSettings, settings, ajaxSettings ) {
	var mappedKeys = [],
		data = ajaxSettings.data;

	if ( typeof data === "string" ) {
		return;
	}

	data = $.extend( true, {}, defnSettings.data, data );

	ajaxSettings.url = ajaxSettings.url.replace( rurlData, function ( m, key ) {
		if ( key in data ) {
			mappedKeys.push( key );
			return data[ key ];
		}
	});

	// We delete the keys later so duplicates are still replaced
	$.each( mappedKeys, function ( i, key ) {
		delete data[ key ];
	});

	ajaxSettings.data = data;
});



amplify.subscribe( "request.ajax.preprocess", function( defnSettings, settings, ajaxSettings ) {
	var data = ajaxSettings.data,
		dataMap = defnSettings.dataMap;

	if ( !dataMap || typeof data === "string" ) {
		return;
	}

	if ( $.isFunction( dataMap ) ) {
		ajaxSettings.data = dataMap( data );
	} else {
		$.each( defnSettings.dataMap, function( orig, replace ) {
			if ( orig in data ) {
				data[ replace ] = data[ orig ];
				delete data[ orig ];
			}
		});
		ajaxSettings.data = data;
	}
});



var cache = amplify.request.cache = {
	_key: function( resourceId, url, data ) {
		data = url + data;
		var length = data.length,
			i = 0;

		/*jshint bitwise:false*/
		function chunk() {
			return data.charCodeAt( i++ ) << 24 |
				data.charCodeAt( i++ ) << 16 |
				data.charCodeAt( i++ ) << 8 |
				data.charCodeAt( i++ ) << 0;
		}

		var checksum = chunk();
		while ( i < length ) {
			checksum ^= chunk();
		}
		/*jshint bitwise:true*/

		return "request-" + resourceId + "-" + checksum;
	},

	_default: (function() {
		var memoryStore = {};
		return function( resource, settings, ajaxSettings, ampXHR ) {
			// data is already converted to a string by the time we get here
			var cacheKey = cache._key( settings.resourceId,
					ajaxSettings.cacheURL(), ajaxSettings.data ),
				duration = resource.cache;

			if ( cacheKey in memoryStore ) {
				ampXHR.success( memoryStore[ cacheKey ] );
				return false;
			}
			var success = ampXHR.success;
			ampXHR.success = function( data ) {
				memoryStore[ cacheKey ] = data;
				if ( typeof duration === "number" ) {
					setTimeout(function() {
						delete memoryStore[ cacheKey ];
					}, duration );
				}
				success.apply( this, arguments );
			};
		};
	}())
};

if ( amplify.store ) {
	$.each( amplify.store.types, function( type ) {
		cache[ type ] = function( resource, settings, ajaxSettings, ampXHR ) {
			var cacheKey = cache._key( settings.resourceId,
					ajaxSettings.cacheURL(), ajaxSettings.data ),
				cached = amplify.store[ type ]( cacheKey );

			if ( cached ) {
				ajaxSettings.success( cached );
				return false;
			}
			var success = ampXHR.success;
			ampXHR.success = function( data ) {
				amplify.store[ type ]( cacheKey, data, { expires: resource.cache.expires } );
				success.apply( this, arguments );
			};
		};
	});
	cache.persist = cache[ amplify.store.type ];
}

amplify.subscribe( "request.before.ajax", function( resource ) {
	var cacheType = resource.cache;
	if ( cacheType ) {
		// normalize between objects and strings/booleans/numbers
		cacheType = cacheType.type || cacheType;
		return cache[ cacheType in cache ? cacheType : "_default" ]
			.apply( this, arguments );
	}
});



amplify.request.decoders = {
	// http://labs.omniti.com/labs/jsend
	jsend: function( data, status, ampXHR, success, error ) {
		if ( data.status === "success" ) {
			success( data.data );
		} else if ( data.status === "fail" ) {
			error( data.data, "fail" );
		} else if ( data.status === "error" ) {
			delete data.status;
			error( data, "error" );
		} else {
			error( null, "error" );
		}
	}
};

amplify.subscribe( "request.before.ajax", function( resource, settings, ajaxSettings, ampXHR ) {
	var _success = ampXHR.success,
		_error = ampXHR.error,
		decoder = $.isFunction( resource.decoder ) ?
			resource.decoder :
			resource.decoder in amplify.request.decoders ?
				amplify.request.decoders[ resource.decoder ] :
				amplify.request.decoders._default;

	if ( !decoder ) {
		return;
	}

	function success( data, status ) {
		_success( data, status );
	}
	function error( data, status ) {
		_error( data, status );
	}
	ampXHR.success = function( data, status ) {
		decoder( data, status, ampXHR, success, error );
	};
	ampXHR.error = function( data, status ) {
		decoder( data, status, ampXHR, success, error );
	};
});

}( amplify, jQuery ) );

//! moment.js
//! version : 2.3.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){u(a),g(this,a)}function f(a){var b=o(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._input=a,this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&bb.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return"[object Date]"===Object.prototype.toString.call(a)}function m(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function n(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Jb[a]||Kb[b]||b}return a}function o(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=n(c),b&&(d[b]=a[c]));return d}function p(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}bb[b]=function(e,f){var g,h,i=bb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=bb().utc().set(d,a);return i.call(bb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function r(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function s(a){return t(a)?366:365}function t(a){return 0===a%4&&0!==a%100||0===a%400}function u(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[gb]<0||a._a[gb]>11?gb:a._a[hb]<1||a._a[hb]>r(a._a[fb],a._a[gb])?hb:a._a[ib]<0||a._a[ib]>23?ib:a._a[jb]<0||a._a[jb]>59?jb:a._a[kb]<0||a._a[kb]>59?kb:a._a[lb]<0||a._a[lb]>999?lb:-1,a._pf._overflowDayOfYear&&(fb>b||b>hb)&&(b=hb),a._pf.overflow=b)}function v(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1}}function w(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function x(a){return a?a.toLowerCase().replace("_","-"):a}function y(a,b){return b.abbr=a,mb[a]||(mb[a]=new d),mb[a].set(b),mb[a]}function z(a){delete mb[a]}function A(a){var b,c,d,e,f=0,g=function(a){if(!mb[a]&&nb)try{require("./lang/"+a)}catch(b){}return mb[a]};if(!a)return bb.fn._lang;if(!k(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=x(a[f]).split("-"),b=e.length,d=x(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&m(e,d,!0)>=b-1)break;b--}f++}return bb.fn._lang}function B(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function C(a){var b,c,d=a.match(rb);for(b=0,c=d.length;c>b;b++)d[b]=Ob[d[b]]?Ob[d[b]]:B(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function D(a,b){return a.isValid()?(b=E(b,a.lang()),Lb[b]||(Lb[b]=C(b)),Lb[b](a)):a.lang().invalidDate()}function E(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(sb.lastIndex=0;d>=0&&sb.test(a);)a=a.replace(sb,c),sb.lastIndex=0,d-=1;return a}function F(a,b){var c;switch(a){case"DDDD":return vb;case"YYYY":case"GGGG":case"gggg":return wb;case"YYYYY":case"GGGGG":case"ggggg":return xb;case"S":case"SS":case"SSS":case"DDD":return ub;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return yb;case"a":case"A":return A(b._l)._meridiemParse;case"X":return Bb;case"Z":case"ZZ":return zb;case"T":return Ab;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"ww":case"W":case"WW":case"e":case"E":return tb;default:return c=new RegExp(N(M(a.replace("\\","")),"i"))}}function G(a){var b=(zb.exec(a)||[])[0],c=(b+"").match(Gb)||["-",0,0],d=+(60*c[1])+q(c[2]);return"+"===c[0]?-d:d}function H(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[gb]=q(b)-1);break;case"MMM":case"MMMM":d=A(c._l).monthsParse(b),null!=d?e[gb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[hb]=q(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=q(b));break;case"YY":e[fb]=q(b)+(q(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":e[fb]=q(b);break;case"a":case"A":c._isPm=A(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[ib]=q(b);break;case"m":case"mm":e[jb]=q(b);break;case"s":case"ss":e[kb]=q(b);break;case"S":case"SS":case"SSS":e[lb]=q(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=G(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function I(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=K(a),a._w&&null==a._a[hb]&&null==a._a[gb]&&(f=function(b){return b?b.length<3?parseInt(b,10)>68?"19"+b:"20"+b:b:null==a._a[fb]?bb().weekYear():a._a[fb]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=X(f(g.GG),g.W||1,g.E,4,1):(i=A(a._l),j=null!=g.d?T(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=X(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[fb]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[fb]?d[fb]:a._a[fb],a._dayOfYear>s(e)&&(a._pf._overflowDayOfYear=!0),c=S(e,0,a._dayOfYear),a._a[gb]=c.getUTCMonth(),a._a[hb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[ib]+=q((a._tzm||0)/60),l[jb]+=q((a._tzm||0)%60),a._d=(a._useUTC?S:R).apply(null,l)}}function J(a){var b;a._d||(b=o(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],I(a))}function K(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function L(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=A(a._l),h=""+a._i,i=h.length,j=0;for(d=E(a._f,g).match(rb)||[],b=0;b<d.length;b++)e=d[b],c=(F(e,a).exec(h)||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Ob[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),H(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[ib]<12&&(a._a[ib]+=12),a._isPm===!1&&12===a._a[ib]&&(a._a[ib]=0),I(a),u(a)}function M(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function N(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a){var b,c,d,e,f;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(e=0;e<a._f.length;e++)f=0,b=g({},a),v(b),b._f=a._f[e],L(b),w(b)&&(f+=b._pf.charsLeftOver,f+=10*b._pf.unusedTokens.length,b._pf.score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function P(a){var b,c=a._i,d=Cb.exec(c);if(d){for(b=4;b>0;b--)if(d[b]){a._f=Eb[b-1]+(d[6]||" ");break}for(b=0;4>b;b++)if(Fb[b][1].exec(c)){a._f+=Fb[b][0];break}zb.exec(c)&&(a._f+=" Z"),L(a)}else a._d=new Date(c)}function Q(b){var c=b._i,d=ob.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?P(b):k(c)?(b._a=c.slice(0),I(b)):l(c)?b._d=new Date(+c):"object"==typeof c?J(b):b._d=new Date(c)}function R(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function S(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function T(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function U(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function V(a,b,c){var d=eb(Math.abs(a)/1e3),e=eb(d/60),f=eb(e/60),g=eb(f/24),h=eb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",eb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,U.apply({},i)}function W(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=bb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function X(a,b,c,d,e){var f,g,h=new Date(Date.UTC(a,0)).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:s(a-1)+g}}function Y(a){var b=a._i,c=a._f;return"undefined"==typeof a._pf&&v(a),null===b?bb.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=A().preparse(b)),bb.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?O(a):L(a):Q(a),new e(a))}function Z(a,b){bb.fn[a]=bb.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),bb.updateOffset(this),this):this._d["get"+c+b]()}}function $(a){bb.duration.fn[a]=function(){return this._data[a]}}function _(a,b){bb.duration.fn["as"+a]=function(){return+this/b}}function ab(){"undefined"==typeof ender&&(this.moment=bb)}for(var bb,cb,db="2.3.1",eb=Math.round,fb=0,gb=1,hb=2,ib=3,jb=4,kb=5,lb=6,mb={},nb="undefined"!=typeof module&&module.exports,ob=/^\/?Date\((\-?\d+)/i,pb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,qb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,rb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,sb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,tb=/\d\d?/,ub=/\d{1,3}/,vb=/\d{3}/,wb=/\d{1,4}/,xb=/[+\-]?\d{1,6}/,yb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,zb=/Z|[\+\-]\d\d:?\d\d/i,Ab=/T/i,Bb=/[\+\-]?\d+(\.\d{1,3})?/,Cb=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?$/,Db="YYYY-MM-DDTHH:mm:ssZ",Eb=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Fb=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Gb=/([\+\-]|\d\d)/gi,Hb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Ib={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Jb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Kb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Lb={},Mb="DDD w W M D d".split(" "),Nb="M D H h m s w W".split(" "),Ob={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return q(this.milliseconds()/100)},SS:function(){return i(q(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+":"+i(q(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},Pb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Mb.length;)cb=Mb.pop(),Ob[cb+"o"]=c(Ob[cb],cb);for(;Nb.length;)cb=Nb.pop(),Ob[cb+cb]=b(Ob[cb],2);for(Ob.DDDD=b(Ob.DDD,3),g(d.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=bb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=bb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return W(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),bb=function(b,c,d,e){return"boolean"==typeof d&&(e=d,d=a),Y({_i:b,_f:c,_l:d,_strict:e,_isUTC:!1})},bb.utc=function(b,c,d,e){var f;return"boolean"==typeof d&&(e=d,d=a),f=Y({_useUTC:!0,_isUTC:!0,_l:d,_i:b,_f:c,_strict:e}).utc()},bb.unix=function(a){return bb(1e3*a)},bb.duration=function(a,b){var c,d,e,g=bb.isDuration(a),h="number"==typeof a,i=g?a._input:h?{}:a,j=null;return h?b?i[b]=a:i.milliseconds=a:(j=pb.exec(a))?(c="-"===j[1]?-1:1,i={y:0,d:q(j[hb])*c,h:q(j[ib])*c,m:q(j[jb])*c,s:q(j[kb])*c,ms:q(j[lb])*c}):(j=qb.exec(a))&&(c="-"===j[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},i={y:e(j[2]),M:e(j[3]),d:e(j[4]),h:e(j[5]),m:e(j[6]),s:e(j[7]),w:e(j[8])}),d=new f(i),g&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},bb.version=db,bb.defaultFormat=Db,bb.updateOffset=function(){},bb.lang=function(a,b){var c;return a?(b?y(x(a),b):null===b?(z(a),a="en"):mb[a]||A(a),c=bb.duration.fn._lang=bb.fn._lang=A(a),c._abbr):bb.fn._lang._abbr},bb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),A(a)},bb.isMoment=function(a){return a instanceof e},bb.isDuration=function(a){return a instanceof f},cb=Pb.length-1;cb>=0;--cb)p(Pb[cb]);for(bb.normalizeUnits=function(a){return n(a)},bb.invalid=function(a){var b=bb.utc(0/0);return null!=a?g(b._pf,a):b._pf.userInvalidated=!0,b},bb.parseZone=function(a){return bb(a).parseZone()},g(bb.fn=e.prototype,{clone:function(){return bb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return D(bb(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&m(this._a,(this._isUTC?bb.utc(this._a):bb(this._a)).toArray())>0:!1},parsingFlags:function(){return g({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=D(this,a||bb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?bb(a).zone(this._offset||0):bb(a).local(),g=6e4*(this.zone()-f.zone());return b=n(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-bb(this).startOf("month")-(f-bb(f).startOf("month")))/d,e-=6e4*(this.zone()-bb(this).startOf("month").zone()-(f.zone()-bb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(bb(),a)},calendar:function(){var a=this.diff(bb().zone(this.zone()).startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){return t(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=T(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),bb.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=n(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=n(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+bb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+bb(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+bb(a).startOf(b)},min:function(a){return a=bb.apply(null,arguments),this>a?this:a},max:function(a){return a=bb.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=G(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,bb.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?bb(a).zone():0,0===(this.zone()-a)%60},daysInMonth:function(){return r(this.year(),this.month())},dayOfYear:function(a){var b=eb((bb(this).startOf("day")-bb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=W(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=W(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=W(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=n(a),this[a]()},set:function(a,b){return a=n(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=A(b),this)}}),cb=0;cb<Hb.length;cb++)Z(Hb[cb].toLowerCase().replace(/s$/,""),Hb[cb]);Z("year","FullYear"),bb.fn.days=bb.fn.day,bb.fn.months=bb.fn.month,bb.fn.weeks=bb.fn.week,bb.fn.isoWeeks=bb.fn.isoWeek,bb.fn.toJSON=bb.fn.toISOString,g(bb.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*q(this._months/12)},humanize:function(a){var b=+this,c=V(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=bb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=bb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=n(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=n(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:bb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(cb in Ib)Ib.hasOwnProperty(cb)&&(_(cb,Ib[cb]),$(cb.toLowerCase()));_("Weeks",6048e5),bb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},bb.lang("en",{ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),nb?(module.exports=bb,ab()):"function"==typeof define&&define.amd?define("moment",function(a,b,c){return c.config().noGlobal!==!0&&ab(),bb}):ab()}).call(this);
;(function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (exports) {
	'use strict';

	function inherits(parent, child) {
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var extended = Object.create(parent.prototype);
		for (var p in props) {
			extended[p] = props[p];
		}
		extended.constructor = child;
		child.prototype = extended;
		return child;
	}

	var defaults = {
		defaultProtocol: 'http',
		events: null,
		format: noop,
		formatHref: noop,
		nl2br: false,
		tagName: 'a',
		target: typeToTarget,
		validate: true,
		ignoreTags: [],
		attributes: null,
		className: 'linkified' // Deprecated value - no default class will be provided in the future
	};

	function Options(opts) {
		opts = opts || {};

		this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
		this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
		this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
		this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
		this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
		this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
		this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
		this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
		this.ignoreTags = [];

		// linkAttributes and linkClass is deprecated
		this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
		this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

		// Make all tags names upper case
		var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
		for (var i = 0; i < ignoredTags.length; i++) {
			this.ignoreTags.push(ignoredTags[i].toUpperCase());
		}
	}

	Options.prototype = {
		/**
   * Given the token, return all options for how it should be displayed
   */
		resolve: function resolve(token) {
			var href = token.toHref(this.defaultProtocol);
			return {
				formatted: this.get('format', token.toString(), token),
				formattedHref: this.get('formatHref', href, token),
				tagName: this.get('tagName', href, token),
				className: this.get('className', href, token),
				target: this.get('target', href, token),
				events: this.getObject('events', href, token),
				attributes: this.getObject('attributes', href, token)
			};
		},


		/**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options. By default,
   */
		check: function check(token) {
			return this.get('validate', token.toString(), token);
		},


		// Private methods

		/**
   * Resolve an option's value based on the value of the option and the given
   * params.
   * @param {String} key Name of option to use
   * @param operator will be passed to the target option if it's method
   * @param {MultiToken} token The token from linkify.tokenize
   */
		get: function get(key, operator, token) {
			var optionValue = void 0,
			    option = this[key];
			if (!option) {
				return option;
			}

			switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
				case 'function':
					return option(operator, token.type);
				case 'object':
					optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
					return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
			}

			return option;
		},
		getObject: function getObject(key, operator, token) {
			var option = this[key];
			return typeof option === 'function' ? option(operator, token.type) : option;
		}
	};

	/**
  * Quick indexOf replacement for checking the ignoreTags option
  */
	function contains(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}
		}
		return false;
	}

	function noop(val) {
		return val;
	}

	function typeToTarget(href, type) {
		return type === 'url' ? '_blank' : null;
	}

	var options = Object.freeze({
		defaults: defaults,
		Options: Options,
		contains: contains
	});

	function createStateClass() {
		return function (tClass) {
			this.j = [];
			this.T = tClass || null;
		};
	}

	/**
 	A simple state machine that can emit token classes
 
 	The `j` property in this class refers to state jumps. It's a
 	multidimensional array where for each element:
 
 	* index [0] is a symbol or class of symbols to transition to.
 	* index [1] is a State instance which matches
 
 	The type of symbol will depend on the target implementation for this class.
 	In Linkify, we have a two-stage scanner. Each stage uses this state machine
 	but with a slighly different (polymorphic) implementation.
 
 	The `T` property refers to the token class.
 
 	TODO: Can the `on` and `next` methods be combined?
 
 	@class BaseState
 */
	var BaseState = createStateClass();
	BaseState.prototype = {
		defaultTransition: false,

		/**
  	@method constructor
  	@param {Class} tClass Pass in the kind of token to emit if there are
  		no jumps after this state and the state is accepting.
  */

		/**
  	On the given symbol(s), this machine should go to the given state
  		@method on
  	@param {Array|Mixed} symbol
  	@param {BaseState} state Note that the type of this state should be the
  		same as the current instance (i.e., don't pass in a different
  		subclass)
  */
		on: function on(symbol, state) {
			if (symbol instanceof Array) {
				for (var i = 0; i < symbol.length; i++) {
					this.j.push([symbol[i], state]);
				}
				return this;
			}
			this.j.push([symbol, state]);
			return this;
		},


		/**
  	Given the next item, returns next state for that item
  	@method next
  	@param {Mixed} item Should be an instance of the symbols handled by
  		this particular machine.
  	@return {State} state Returns false if no jumps are available
  */
		next: function next(item) {
			for (var i = 0; i < this.j.length; i++) {
				var jump = this.j[i];
				var symbol = jump[0]; // Next item to check for
				var state = jump[1]; // State to jump to if items match

				// compare item with symbol
				if (this.test(item, symbol)) {
					return state;
				}
			}

			// Nowhere left to jump!
			return this.defaultTransition;
		},


		/**
  	Does this state accept?
  	`true` only of `this.T` exists
  		@method accepts
  	@return {Boolean}
  */
		accepts: function accepts() {
			return !!this.T;
		},


		/**
  	Determine whether a given item "symbolizes" the symbol, where symbol is
  	a class of items handled by this state machine.
  		This method should be overriden in extended classes.
  		@method test
  	@param {Mixed} item Does this item match the given symbol?
  	@param {Mixed} symbol
  	@return {Boolean}
  */
		test: function test(item, symbol) {
			return item === symbol;
		},


		/**
  	Emit the token for this State (just return it in this case)
  	If this emits a token, this instance is an accepting state
  	@method emit
  	@return {Class} T
  */
		emit: function emit() {
			return this.T;
		}
	};

	/**
 	State machine for string-based input
 
 	@class CharacterState
 	@extends BaseState
 */
	var CharacterState = inherits(BaseState, createStateClass(), {
		/**
  	Does the given character match the given character or regular
  	expression?
  		@method test
  	@param {String} char
  	@param {String|RegExp} charOrRegExp
  	@return {Boolean}
  */
		test: function test(character, charOrRegExp) {
			return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
		}
	});

	/**
 	State machine for input in the form of TextTokens
 
 	@class TokenState
 	@extends BaseState
 */
	var TokenState = inherits(BaseState, createStateClass(), {

		/**
   * Similar to `on`, but returns the state the results in the transition from
   * the given item
   * @method jump
   * @param {Mixed} item
   * @param {Token} [token]
   * @return state
   */
		jump: function jump(token) {
			var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var state = this.next(new token('')); // dummy temp token
			if (state === this.defaultTransition) {
				// Make a new state!
				state = new this.constructor(tClass);
				this.on(token, state);
			} else if (tClass) {
				state.T = tClass;
			}
			return state;
		},


		/**
  	Is the given token an instance of the given token class?
  		@method test
  	@param {TextToken} token
  	@param {Class} tokenClass
  	@return {Boolean}
  */
		test: function test(token, tokenClass) {
			return token instanceof tokenClass;
		}
	});

	/**
 	Given a non-empty target string, generates states (if required) for each
 	consecutive substring of characters in str starting from the beginning of
 	the string. The final state will have a special value, as specified in
 	options. All other "in between" substrings will have a default end state.
 
 	This turns the state machine into a Trie-like data structure (rather than a
 	intelligently-designed DFA).
 
 	Note that I haven't really tried these with any strings other than
 	DOMAIN.
 
 	@param {String} str
 	@param {CharacterState} start State to jump from the first character
 	@param {Class} endToken Token class to emit when the given string has been
 		matched and no more jumps exist.
 	@param {Class} defaultToken "Filler token", or which token type to emit when
 		we don't have a full match
 	@return {Array} list of newly-created states
 */
	function stateify(str, start, endToken, defaultToken) {
		var i = 0,
		    len = str.length,
		    state = start,
		    newStates = [],
		    nextState = void 0;

		// Find the next state without a jump to the next character
		while (i < len && (nextState = state.next(str[i]))) {
			state = nextState;
			i++;
		}

		if (i >= len) {
			return [];
		} // no new tokens were added

		while (i < len - 1) {
			nextState = new CharacterState(defaultToken);
			newStates.push(nextState);
			state.on(str[i], nextState);
			state = nextState;
			i++;
		}

		nextState = new CharacterState(endToken);
		newStates.push(nextState);
		state.on(str[len - 1], nextState);

		return newStates;
	}

	function createTokenClass() {
		return function (value) {
			if (value) {
				this.v = value;
			}
		};
	}

	/******************************************************************************
 	Text Tokens
 	Tokens composed of strings
 ******************************************************************************/

	/**
 	Abstract class used for manufacturing text tokens.
 	Pass in the value this token represents
 
 	@class TextToken
 	@abstract
 */
	var TextToken = createTokenClass();
	TextToken.prototype = {
		toString: function toString() {
			return this.v + '';
		}
	};

	function inheritsToken(value) {
		var props = value ? { v: value } : {};
		return inherits(TextToken, createTokenClass(), props);
	}

	/**
 	A valid domain token
 	@class DOMAIN
 	@extends TextToken
 */
	var DOMAIN = inheritsToken();

	/**
 	@class AT
 	@extends TextToken
 */
	var AT = inheritsToken('@');

	/**
 	Represents a single colon `:` character
 
 	@class COLON
 	@extends TextToken
 */
	var COLON = inheritsToken(':');

	/**
 	@class DOT
 	@extends TextToken
 */
	var DOT = inheritsToken('.');

	/**
 	A character class that can surround the URL, but which the URL cannot begin
 	or end with. Does not include certain English punctuation like parentheses.
 
 	@class PUNCTUATION
 	@extends TextToken
 */
	var PUNCTUATION = inheritsToken();

	/**
 	The word localhost (by itself)
 	@class LOCALHOST
 	@extends TextToken
 */
	var LOCALHOST = inheritsToken();

	/**
 	Newline token
 	@class NL
 	@extends TextToken
 */
	var NL = inheritsToken('\n');

	/**
 	@class NUM
 	@extends TextToken
 */
	var NUM = inheritsToken();

	/**
 	@class PLUS
 	@extends TextToken
 */
	var PLUS = inheritsToken('+');

	/**
 	@class POUND
 	@extends TextToken
 */
	var POUND = inheritsToken('#');

	/**
 	Represents a web URL protocol. Supported types include
 
 	* `http:`
 	* `https:`
 	* `ftp:`
 	* `ftps:`
 
 	@class PROTOCOL
 	@extends TextToken
 */
	var PROTOCOL = inheritsToken();

	/**
 	Represents the start of the email URI protocol
 
 	@class MAILTO
 	@extends TextToken
 */
	var MAILTO = inheritsToken('mailto:');

	/**
 	@class QUERY
 	@extends TextToken
 */
	var QUERY = inheritsToken('?');

	/**
 	@class SLASH
 	@extends TextToken
 */
	var SLASH = inheritsToken('/');

	/**
 	@class UNDERSCORE
 	@extends TextToken
 */
	var UNDERSCORE = inheritsToken('_');

	/**
 	One ore more non-whitespace symbol.
 	@class SYM
 	@extends TextToken
 */
	var SYM = inheritsToken();

	/**
 	@class TLD
 	@extends TextToken
 */
	var TLD = inheritsToken();

	/**
 	Represents a string of consecutive whitespace characters
 
 	@class WS
 	@extends TextToken
 */
	var WS = inheritsToken();

	/**
 	Opening/closing bracket classes
 */

	var OPENBRACE = inheritsToken('{');
	var OPENBRACKET = inheritsToken('[');
	var OPENANGLEBRACKET = inheritsToken('<');
	var OPENPAREN = inheritsToken('(');
	var CLOSEBRACE = inheritsToken('}');
	var CLOSEBRACKET = inheritsToken(']');
	var CLOSEANGLEBRACKET = inheritsToken('>');
	var CLOSEPAREN = inheritsToken(')');

	var AMPERSAND = inheritsToken('&');

	var text = Object.freeze({
		Base: TextToken,
		DOMAIN: DOMAIN,
		AT: AT,
		COLON: COLON,
		DOT: DOT,
		PUNCTUATION: PUNCTUATION,
		LOCALHOST: LOCALHOST,
		NL: NL,
		NUM: NUM,
		PLUS: PLUS,
		POUND: POUND,
		QUERY: QUERY,
		PROTOCOL: PROTOCOL,
		MAILTO: MAILTO,
		SLASH: SLASH,
		UNDERSCORE: UNDERSCORE,
		SYM: SYM,
		TLD: TLD,
		WS: WS,
		OPENBRACE: OPENBRACE,
		OPENBRACKET: OPENBRACKET,
		OPENANGLEBRACKET: OPENANGLEBRACKET,
		OPENPAREN: OPENPAREN,
		CLOSEBRACE: CLOSEBRACE,
		CLOSEBRACKET: CLOSEBRACKET,
		CLOSEANGLEBRACKET: CLOSEANGLEBRACKET,
		CLOSEPAREN: CLOSEPAREN,
		AMPERSAND: AMPERSAND
	});

	/**
 	The scanner provides an interface that takes a string of text as input, and
 	outputs an array of tokens instances that can be used for easy URL parsing.
 
 	@module linkify
 	@submodule scanner
 	@main scanner
 */

	var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

	var NUMBERS = '0123456789'.split('');
	var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
	var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

	var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
	var makeState = function makeState(tokenClass) {
		return new CharacterState(tokenClass);
	};

	// Frequently used states
	var S_START = makeState();
	var S_NUM = makeState(NUM);
	var S_DOMAIN = makeState(DOMAIN);
	var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
	var S_WS = makeState(WS);

	// States for special URL symbols
	S_START.on('@', makeState(AT)).on('.', makeState(DOT)).on('+', makeState(PLUS)).on('#', makeState(POUND)).on('?', makeState(QUERY)).on('/', makeState(SLASH)).on('_', makeState(UNDERSCORE)).on(':', makeState(COLON)).on('{', makeState(OPENBRACE)).on('[', makeState(OPENBRACKET)).on('<', makeState(OPENANGLEBRACKET)).on('(', makeState(OPENPAREN)).on('}', makeState(CLOSEBRACE)).on(']', makeState(CLOSEBRACKET)).on('>', makeState(CLOSEANGLEBRACKET)).on(')', makeState(CLOSEPAREN)).on('&', makeState(AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(PUNCTUATION));

	// Whitespace jumps
	// Tokens of only non-newline whitespace are arbitrarily long
	S_START.on('\n', makeState(NL)).on(WHITESPACE, S_WS);

	// If any whitespace except newline, more whitespace!
	S_WS.on(WHITESPACE, S_WS);

	// Generates states for top-level domains
	// Note that this is most accurate when tlds are in alphabetical order
	for (var i = 0; i < tlds.length; i++) {
		var newStates = stateify(tlds[i], S_START, TLD, DOMAIN);
		domainStates.push.apply(domainStates, newStates);
	}

	// Collect the states generated by different protocls
	var partialProtocolFileStates = stateify('file', S_START, DOMAIN, DOMAIN);
	var partialProtocolFtpStates = stateify('ftp', S_START, DOMAIN, DOMAIN);
	var partialProtocolHttpStates = stateify('http', S_START, DOMAIN, DOMAIN);
	var partialProtocolMailtoStates = stateify('mailto', S_START, DOMAIN, DOMAIN);

	// Add the states to the array of DOMAINeric states
	domainStates.push.apply(domainStates, partialProtocolFileStates);
	domainStates.push.apply(domainStates, partialProtocolFtpStates);
	domainStates.push.apply(domainStates, partialProtocolHttpStates);
	domainStates.push.apply(domainStates, partialProtocolMailtoStates);

	// Protocol states
	var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
	var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
	var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
	var S_MAILTO = partialProtocolMailtoStates.pop();
	var S_PROTOCOL_SECURE = makeState(DOMAIN);
	var S_FULL_PROTOCOL = makeState(PROTOCOL); // Full protocol ends with COLON
	var S_FULL_MAILTO = makeState(MAILTO); // Mailto ends with COLON

	// Secure protocols (end with 's')
	S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	domainStates.push(S_PROTOCOL_SECURE);

	// Become protocol tokens after a COLON
	S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
	S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
	S_MAILTO.on(':', S_FULL_MAILTO);

	// Localhost
	var partialLocalhostStates = stateify('localhost', S_START, LOCALHOST, DOMAIN);
	domainStates.push.apply(domainStates, partialLocalhostStates);

	// Everything else
	// DOMAINs make more DOMAINs
	// Number and character transitions
	S_START.on(NUMBERS, S_NUM);
	S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

	S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

	// All the generated states should have a jump to DOMAIN
	for (var _i = 0; _i < domainStates.length; _i++) {
		domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
	}

	S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

	// Set default transition
	S_START.defaultTransition = makeState(SYM);

	/**
 	Given a string, returns an array of TOKEN instances representing the
 	composition of that string.
 
 	@method run
 	@param {String} str Input string to scan
 	@return {Array} Array of TOKEN instances
 */
	var run = function run(str) {

		// The state machine only looks at lowercase strings.
		// This selective `toLowerCase` is used because lowercasing the entire
		// string causes the length and character position to vary in some in some
		// non-English strings. This happens only on V8-based runtimes.
		var lowerStr = str.replace(/[A-Z]/g, function (c) {
			return c.toLowerCase();
		});
		var len = str.length;
		var tokens = []; // return value

		var cursor = 0;

		// Tokenize the string
		while (cursor < len) {
			var state = S_START;
			var nextState = null;
			var tokenLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
				state = nextState;

				// Keep track of the latest accepting state
				if (state.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				tokenLength++;
				cursor++;
			}

			if (sinceAccepts < 0) {
				continue;
			} // Should never happen

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			tokenLength -= sinceAccepts;

			// Get the class for the new token
			var TOKEN = latestAccepting.emit(); // Current token class

			// No more jumps, just make a new token
			tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
		}

		return tokens;
	};

	var start = S_START;

	var scanner = Object.freeze({
		State: CharacterState,
		TOKENS: text,
		run: run,
		start: start
	});

	/******************************************************************************
 	Multi-Tokens
 	Tokens composed of arrays of TextTokens
 ******************************************************************************/

	// Is the given token a valid domain token?
	// Should nums be included here?
	function isDomainToken(token) {
		return token instanceof DOMAIN || token instanceof TLD;
	}

	/**
 	Abstract class used for manufacturing tokens of text tokens. That is rather
 	than the value for a token being a small string of text, it's value an array
 	of text tokens.
 
 	Used for grouping together URLs, emails, hashtags, and other potential
 	creations.
 
 	@class MultiToken
 	@abstract
 */
	var MultiToken = createTokenClass();

	MultiToken.prototype = {
		/**
  	String representing the type for this token
  	@property type
  	@default 'TOKEN'
  */
		type: 'token',

		/**
  	Is this multitoken a link?
  	@property isLink
  	@default false
  */
		isLink: false,

		/**
  	Return the string this token represents.
  	@method toString
  	@return {String}
  */
		toString: function toString() {
			var result = [];
			for (var _i2 = 0; _i2 < this.v.length; _i2++) {
				result.push(this.v[_i2].toString());
			}
			return result.join('');
		},


		/**
  	What should the value for this token be in the `href` HTML attribute?
  	Returns the `.toString` value by default.
  		@method toHref
  	@return {String}
  */
		toHref: function toHref() {
			return this.toString();
		},


		/**
  	Returns a hash of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {String} [protocol] `'http'` by default
  	@return {Object}
  */
		toObject: function toObject() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			return {
				type: this.type,
				value: this.toString(),
				href: this.toHref(protocol)
			};
		}
	};

	/**
 	Represents an arbitrarily mailto email address with the prefix included
 	@class MAILTO
 	@extends MultiToken
 */
	var MAILTOEMAIL = inherits(MultiToken, createTokenClass(), {
		type: 'email',
		isLink: true
	});

	/**
 	Represents a list of tokens making up a valid email address
 	@class EMAIL
 	@extends MultiToken
 */
	var EMAIL = inherits(MultiToken, createTokenClass(), {
		type: 'email',
		isLink: true,
		toHref: function toHref() {
			return 'mailto:' + this.toString();
		}
	});

	/**
 	Represents some plain text
 	@class TEXT
 	@extends MultiToken
 */
	var TEXT = inherits(MultiToken, createTokenClass(), { type: 'text' });

	/**
 	Multi-linebreak token - represents a line break
 	@class NL
 	@extends MultiToken
 */
	var NL$1 = inherits(MultiToken, createTokenClass(), { type: 'nl' });

	/**
 	Represents a list of tokens making up a valid URL
 	@class URL
 	@extends MultiToken
 */
	var URL = inherits(MultiToken, createTokenClass(), {
		type: 'url',
		isLink: true,

		/**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@method href
  	@param {String} protocol
  	@return {String}
  */
		toHref: function toHref() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			var hasProtocol = false;
			var hasSlashSlash = false;
			var tokens = this.v;
			var result = [];
			var i = 0;

			// Make the first part of the domain lowercase
			// Lowercase protocol
			while (tokens[i] instanceof PROTOCOL) {
				hasProtocol = true;
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Skip slash-slash
			while (tokens[i] instanceof SLASH) {
				hasSlashSlash = true;
				result.push(tokens[i].toString());
				i++;
			}

			// Lowercase all other characters in the domain
			while (isDomainToken(tokens[i])) {
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Leave all other characters as they were written
			for (; i < tokens.length; i++) {
				result.push(tokens[i].toString());
			}

			result = result.join('');

			if (!(hasProtocol || hasSlashSlash)) {
				result = protocol + '://' + result;
			}

			return result;
		},
		hasProtocol: function hasProtocol() {
			return this.v[0] instanceof PROTOCOL;
		}
	});

	var multi = Object.freeze({
		Base: MultiToken,
		MAILTOEMAIL: MAILTOEMAIL,
		EMAIL: EMAIL,
		NL: NL$1,
		TEXT: TEXT,
		URL: URL
	});

	/**
 	Not exactly parser, more like the second-stage scanner (although we can
 	theoretically hotswap the code here with a real parser in the future... but
 	for a little URL-finding utility abstract syntax trees may be a little
 	overkill).
 
 	URL format: http://en.wikipedia.org/wiki/URI_scheme
 	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
 	reference)
 
 	@module linkify
 	@submodule parser
 	@main parser
 */

	var makeState$1 = function makeState$1(tokenClass) {
		return new TokenState(tokenClass);
	};

	// The universal starting state.
	var S_START$1 = makeState$1();

	// Intermediate states for URLs. Note that domains that begin with a protocol
	// are treated slighly differently from those that don't.
	var S_PROTOCOL = makeState$1(); // e.g., 'http:'
	var S_MAILTO$1 = makeState$1(); // 'mailto:'
	var S_PROTOCOL_SLASH = makeState$1(); // e.g., '/', 'http:/''
	var S_PROTOCOL_SLASH_SLASH = makeState$1(); // e.g., '//', 'http://'
	var S_DOMAIN$1 = makeState$1(); // parsed string ends with a potential domain name (A)
	var S_DOMAIN_DOT = makeState$1(); // (A) domain followed by DOT
	var S_TLD = makeState$1(URL); // (A) Simplest possible URL with no query string
	var S_TLD_COLON = makeState$1(); // (A) URL followed by colon (potential port number here)
	var S_TLD_PORT = makeState$1(URL); // TLD followed by a port number
	var S_URL = makeState$1(URL); // Long URL with optional port and maybe query string
	var S_URL_NON_ACCEPTING = makeState$1(); // URL followed by some symbols (will not be part of the final URL)
	var S_URL_OPENBRACE = makeState$1(); // URL followed by {
	var S_URL_OPENBRACKET = makeState$1(); // URL followed by [
	var S_URL_OPENANGLEBRACKET = makeState$1(); // URL followed by <
	var S_URL_OPENPAREN = makeState$1(); // URL followed by (
	var S_URL_OPENBRACE_Q = makeState$1(URL); // URL followed by { and some symbols that the URL can end it
	var S_URL_OPENBRACKET_Q = makeState$1(URL); // URL followed by [ and some symbols that the URL can end it
	var S_URL_OPENANGLEBRACKET_Q = makeState$1(URL); // URL followed by < and some symbols that the URL can end it
	var S_URL_OPENPAREN_Q = makeState$1(URL); // URL followed by ( and some symbols that the URL can end it
	var S_URL_OPENBRACE_SYMS = makeState$1(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
	var S_URL_OPENBRACKET_SYMS = makeState$1(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENANGLEBRACKET_SYMS = makeState$1(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENPAREN_SYMS = makeState$1(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
	var S_EMAIL_DOMAIN = makeState$1(); // parsed string starts with local email info + @ with a potential domain name (C)
	var S_EMAIL_DOMAIN_DOT = makeState$1(); // (C) domain followed by DOT
	var S_EMAIL = makeState$1(EMAIL); // (C) Possible email address (could have more tlds)
	var S_EMAIL_COLON = makeState$1(); // (C) URL followed by colon (potential port number here)
	var S_EMAIL_PORT = makeState$1(EMAIL); // (C) Email address with a port
	var S_MAILTO_EMAIL = makeState$1(MAILTOEMAIL); // Email that begins with the mailto prefix (D)
	var S_MAILTO_EMAIL_NON_ACCEPTING = makeState$1(); // (D) Followed by some non-query string chars
	var S_LOCALPART = makeState$1(); // Local part of the email address
	var S_LOCALPART_AT = makeState$1(); // Local part of the email address plus @
	var S_LOCALPART_DOT = makeState$1(); // Local part of the email address plus '.' (localpart cannot end in .)
	var S_NL = makeState$1(NL$1); // single new line

	// Make path from start to protocol (with '//')
	S_START$1.on(NL, S_NL).on(PROTOCOL, S_PROTOCOL).on(MAILTO, S_MAILTO$1).on(SLASH, S_PROTOCOL_SLASH);

	S_PROTOCOL.on(SLASH, S_PROTOCOL_SLASH);
	S_PROTOCOL_SLASH.on(SLASH, S_PROTOCOL_SLASH_SLASH);

	// The very first potential domain name
	S_START$1.on(TLD, S_DOMAIN$1).on(DOMAIN, S_DOMAIN$1).on(LOCALHOST, S_TLD).on(NUM, S_DOMAIN$1);

	// Force URL for protocol followed by anything sane
	S_PROTOCOL_SLASH_SLASH.on(TLD, S_URL).on(DOMAIN, S_URL).on(NUM, S_URL).on(LOCALHOST, S_URL);

	// Account for dots and hyphens
	// hyphens are usually parts of domain names
	S_DOMAIN$1.on(DOT, S_DOMAIN_DOT);
	S_EMAIL_DOMAIN.on(DOT, S_EMAIL_DOMAIN_DOT);

	// Hyphen can jump back to a domain name

	// After the first domain and a dot, we can find either a URL or another domain
	S_DOMAIN_DOT.on(TLD, S_TLD).on(DOMAIN, S_DOMAIN$1).on(NUM, S_DOMAIN$1).on(LOCALHOST, S_DOMAIN$1);

	S_EMAIL_DOMAIN_DOT.on(TLD, S_EMAIL).on(DOMAIN, S_EMAIL_DOMAIN).on(NUM, S_EMAIL_DOMAIN).on(LOCALHOST, S_EMAIL_DOMAIN);

	// S_TLD accepts! But the URL could be longer, try to find a match greedily
	// The `run` function should be able to "rollback" to the accepting state
	S_TLD.on(DOT, S_DOMAIN_DOT);
	S_EMAIL.on(DOT, S_EMAIL_DOMAIN_DOT);

	// Become real URLs after `SLASH` or `COLON NUM SLASH`
	// Here PSS and non-PSS converge
	S_TLD.on(COLON, S_TLD_COLON).on(SLASH, S_URL);
	S_TLD_COLON.on(NUM, S_TLD_PORT);
	S_TLD_PORT.on(SLASH, S_URL);
	S_EMAIL.on(COLON, S_EMAIL_COLON);
	S_EMAIL_COLON.on(NUM, S_EMAIL_PORT);

	// Types of characters the URL can definitely end in
	var qsAccepting = [DOMAIN, AT, LOCALHOST, NUM, PLUS, POUND, PROTOCOL, SLASH, TLD, UNDERSCORE, SYM, AMPERSAND];

	// Types of tokens that can follow a URL and be part of the query string
	// but cannot be the very last characters
	// Characters that cannot appear in the URL at all should be excluded
	var qsNonAccepting = [COLON, DOT, QUERY, PUNCTUATION, CLOSEBRACE, CLOSEBRACKET, CLOSEANGLEBRACKET, CLOSEPAREN, OPENBRACE, OPENBRACKET, OPENANGLEBRACKET, OPENPAREN];

	// These states are responsible primarily for determining whether or not to
	// include the final round bracket.

	// URL, followed by an opening bracket
	S_URL.on(OPENBRACE, S_URL_OPENBRACE).on(OPENBRACKET, S_URL_OPENBRACKET).on(OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(OPENPAREN, S_URL_OPENPAREN);

	// URL with extra symbols at the end, followed by an opening bracket
	S_URL_NON_ACCEPTING.on(OPENBRACE, S_URL_OPENBRACE).on(OPENBRACKET, S_URL_OPENBRACKET).on(OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(OPENPAREN, S_URL_OPENPAREN);

	// Closing bracket component. This character WILL be included in the URL
	S_URL_OPENBRACE.on(CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET.on(CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET.on(CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN.on(CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_Q.on(CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_Q.on(CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_Q.on(CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_Q.on(CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_SYMS.on(CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_SYMS.on(CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_SYMS.on(CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_SYMS.on(CLOSEPAREN, S_URL);

	// URL that beings with an opening bracket, followed by a symbols.
	// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
	// has a single opening bracket for some reason).
	S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// URL that begins with an opening bracket, followed by some symbols
	S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

	S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// Account for the query string
	S_URL.on(qsAccepting, S_URL);
	S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

	S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
	S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

	// Email address-specific state definitions
	// Note: We are not allowing '/' in email addresses since this would interfere
	// with real URLs

	// For addresses with the mailto prefix
	// 'mailto:' followed by anything sane is a valid email
	S_MAILTO$1.on(TLD, S_MAILTO_EMAIL).on(DOMAIN, S_MAILTO_EMAIL).on(NUM, S_MAILTO_EMAIL).on(LOCALHOST, S_MAILTO_EMAIL);

	// Greedily get more potential valid email values
	S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
	S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

	// For addresses without the mailto prefix
	// Tokens allowed in the localpart of the email
	var localpartAccepting = [DOMAIN, NUM, PLUS, POUND, QUERY, UNDERSCORE, SYM, AMPERSAND, TLD];

	// Some of the tokens in `localpartAccepting` are already accounted for here and
	// will not be overwritten (don't worry)
	S_DOMAIN$1.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT);
	S_TLD.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT);
	S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

	// Okay we're on a localpart. Now what?
	// TODO: IP addresses and what if the email starts with numbers?
	S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(AT, S_LOCALPART_AT) // close to an email address now
	.on(DOT, S_LOCALPART_DOT);
	S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
	S_LOCALPART_AT.on(TLD, S_EMAIL_DOMAIN).on(DOMAIN, S_EMAIL_DOMAIN).on(LOCALHOST, S_EMAIL);
	// States following `@` defined above

	var run$1 = function run$1(tokens) {
		var len = tokens.length;
		var cursor = 0;
		var multis = [];
		var textTokens = [];

		while (cursor < len) {
			var state = S_START$1;
			var secondState = null;
			var nextState = null;
			var multiLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
				// Starting tokens with nowhere to jump to.
				// Consider these to be just plain text
				textTokens.push(tokens[cursor++]);
			}

			while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

				// Get the next state
				secondState = null;
				state = nextState;

				// Keep track of the latest accepting state
				if (state.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				cursor++;
				multiLength++;
			}

			if (sinceAccepts < 0) {

				// No accepting state was found, part of a regular text token
				// Add all the tokens we looked at to the text tokens array
				for (var _i3 = cursor - multiLength; _i3 < cursor; _i3++) {
					textTokens.push(tokens[_i3]);
				}
			} else {

				// Accepting state!

				// First close off the textTokens (if available)
				if (textTokens.length > 0) {
					multis.push(new TEXT(textTokens));
					textTokens = [];
				}

				// Roll back to the latest accepting state
				cursor -= sinceAccepts;
				multiLength -= sinceAccepts;

				// Create a new multitoken
				var MULTI = latestAccepting.emit();
				multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
			}
		}

		// Finally close off the textTokens (if available)
		if (textTokens.length > 0) {
			multis.push(new TEXT(textTokens));
		}

		return multis;
	};

	var parser = Object.freeze({
		State: TokenState,
		TOKENS: multi,
		run: run$1,
		start: S_START$1
	});

	if (!Array.isArray) {
		Array.isArray = function (arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	/**
 	Converts a string into tokens that represent linkable and non-linkable bits
 	@method tokenize
 	@param {String} str
 	@return {Array} tokens
 */
	var tokenize = function tokenize(str) {
		return run$1(run(str));
	};

	/**
 	Returns a list of linkable items in the given string.
 */
	var find = function find(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		var filtered = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			if (token.isLink && (!type || token.type === type)) {
				filtered.push(token.toObject());
			}
		}

		return filtered;
	};

	/**
 	Is the given string valid linkable text of some sort
 	Note that this does not trim the text for you.
 
 	Optionally pass in a second `type` param, which is the type of link to test
 	for.
 
 	For example,
 
 		test(str, 'email');
 
 	Will return `true` if str is a valid email.
 */
	var test = function test(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
	};

	exports.find = find;
	exports.inherits = inherits;
	exports.options = options;
	exports.parser = parser;
	exports.scanner = scanner;
	exports.test = test;
	exports.tokenize = tokenize;
})(self.linkify = self.linkify || {});
})();
'use strict';

;(function (window, linkify, $) {
	var linkifyJquery = function (linkify) {
		'use strict';

		/**
  	Linkify a HTML DOM node
  */

		var tokenize = linkify.tokenize,
		    options = linkify.options;
		var Options = options.Options;


		var TEXT_TOKEN = linkify.parser.TOKENS.TEXT;

		var HTML_NODE = 1;
		var TXT_NODE = 3;

		/**
  	Given a parent element and child node that the parent contains, replaces
  	that child with the given array of new children
  */
		function replaceChildWithChildren(parent, oldChild, newChildren) {
			var lastNewChild = newChildren[newChildren.length - 1];
			parent.replaceChild(lastNewChild, oldChild);
			for (var i = newChildren.length - 2; i >= 0; i--) {
				parent.insertBefore(newChildren[i], lastNewChild);
				lastNewChild = newChildren[i];
			}
		}

		/**
  	Given an array of MultiTokens, return an array of Nodes that are either
  	(a) Plain Text nodes (node type 3)
  	(b) Anchor tag nodes (usually, unless tag name is overridden in the options)
  
  	Takes the same options as linkifyElement and an optional doc element
  	(this should be passed in by linkifyElement)
  */
		function tokensToNodes(tokens, opts, doc) {
			var result = [];

			for (var _iterator = tokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var token = _ref;

				if (token.type === 'nl' && opts.nl2br) {
					result.push(doc.createElement('br'));
					continue;
				} else if (!token.isLink || !opts.check(token)) {
					result.push(doc.createTextNode(token.toString()));
					continue;
				}

				var _opts$resolve = opts.resolve(token),
				    formatted = _opts$resolve.formatted,
				    formattedHref = _opts$resolve.formattedHref,
				    tagName = _opts$resolve.tagName,
				    className = _opts$resolve.className,
				    target = _opts$resolve.target,
				    events = _opts$resolve.events,
				    attributes = _opts$resolve.attributes;

				// Build the link


				var link = doc.createElement(tagName);
				link.setAttribute('href', formattedHref);

				if (className) {
					link.setAttribute('class', className);
				}

				if (target) {
					link.setAttribute('target', target);
				}

				// Build up additional attributes
				if (attributes) {
					for (var attr in attributes) {
						link.setAttribute(attr, attributes[attr]);
					}
				}

				if (events) {
					for (var event in events) {
						if (link.addEventListener) {
							link.addEventListener(event, events[event]);
						} else if (link.attachEvent) {
							link.attachEvent('on' + event, events[event]);
						}
					}
				}

				link.appendChild(doc.createTextNode(formatted));
				result.push(link);
			}

			return result;
		}

		// Requires document.createElement
		function linkifyElementHelper(element, opts, doc) {

			// Can the element be linkified?
			if (!element || element.nodeType !== HTML_NODE) {
				throw new Error('Cannot linkify ' + element + ' - Invalid DOM Node type');
			}

			var ignoreTags = opts.ignoreTags;

			// Is this element already a link?
			if (element.tagName === 'A' || options.contains(ignoreTags, element.tagName)) {
				// No need to linkify
				return element;
			}

			var childElement = element.firstChild;

			while (childElement) {
				var str = void 0,
				    tokens = void 0,
				    nodes = void 0;

				switch (childElement.nodeType) {
					case HTML_NODE:
						linkifyElementHelper(childElement, opts, doc);
						break;
					case TXT_NODE:
						{
							str = childElement.nodeValue;
							tokens = tokenize(str);

							if (tokens.length === 0 || tokens.length === 1 && tokens[0] instanceof TEXT_TOKEN) {
								// No node replacement required
								break;
							}

							nodes = tokensToNodes(tokens, opts, doc);

							// Swap out the current child for the set of nodes
							replaceChildWithChildren(element, childElement, nodes);

							// so that the correct sibling is selected next
							childElement = nodes[nodes.length - 1];

							break;
						}
				}

				childElement = childElement.nextSibling;
			}

			return element;
		}

		function linkifyElement(element, opts) {
			var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


			try {
				doc = doc || document || window && window.document || global && global.document;
			} catch (e) {/* do nothing for now */}

			if (!doc) {
				throw new Error('Cannot find document implementation. ' + 'If you are in a non-browser environment like Node.js, ' + 'pass the document implementation as the third argument to linkifyElement.');
			}

			opts = new Options(opts);
			return linkifyElementHelper(element, opts, doc);
		}

		// Maintain reference to the recursive helper to cache option-normalization
		linkifyElement.helper = linkifyElementHelper;
		linkifyElement.normalize = function (opts) {
			return new Options(opts);
		};

		// Applies the plugin to jQuery
		function apply($) {
			var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			$.fn = $.fn || {};

			try {
				doc = doc || document || window && window.document || global && global.document;
			} catch (e) {/* do nothing for now */}

			if (!doc) {
				throw new Error('Cannot find document implementation. ' + 'If you are in a non-browser environment like Node.js, ' + 'pass the document implementation as the second argument to linkify/jquery');
			}

			if (typeof $.fn.linkify === 'function') {
				// Already applied
				return;
			}

			function jqLinkify(opts) {
				opts = linkifyElement.normalize(opts);
				return this.each(function () {
					linkifyElement.helper(this, opts, doc);
				});
			}

			$.fn.linkify = jqLinkify;

			$(doc).ready(function () {
				$('[data-linkify]').each(function () {
					var $this = $(this);
					var data = $this.data();
					var target = data.linkify;
					var nl2br = data.linkifyNlbr;

					var options = {
						nl2br: !!nl2br && nl2br !== 0 && nl2br !== 'false'
					};

					if ('linkifyAttributes' in data) {
						options.attributes = data.linkifyAttributes;
					}

					if ('linkifyDefaultProtocol' in data) {
						options.defaultProtocol = data.linkifyDefaultProtocol;
					}

					if ('linkifyEvents' in data) {
						options.events = data.linkifyEvents;
					}

					if ('linkifyFormat' in data) {
						options.format = data.linkifyFormat;
					}

					if ('linkifyFormatHref' in data) {
						options.formatHref = data.linkifyFormatHref;
					}

					if ('linkifyTagname' in data) {
						options.tagName = data.linkifyTagname;
					}

					if ('linkifyTarget' in data) {
						options.target = data.linkifyTarget;
					}

					if ('linkifyValidate' in data) {
						options.validate = data.linkifyValidate;
					}

					if ('linkifyIgnoreTags' in data) {
						options.ignoreTags = data.linkifyIgnoreTags;
					}

					if ('linkifyClassName' in data) {
						options.className = data.linkifyClassName;
					} else if ('linkifyLinkclass' in data) {
						// linkClass is deprecated
						options.className = data.linkifyLinkclass;
					}

					options = linkifyElement.normalize(options);

					var $target = target === 'this' ? $this : $this.find(target);
					$target.linkify(options);
				});
			});
		}

		// Try assigning linkifyElement to the browser scope
		try {
			!undefined.define && (window.linkifyElement = linkifyElement);
		} catch (e) {/**/}

		return apply;
	}(linkify);

	if (typeof $.fn.linkify !== 'function') {
		linkifyJquery($);
	}
})(window, linkify, jQuery);
/*
 * // require jquery
//= require jquery_i18n
//= require audiojs/audio.min.js
//= require jquery.i18n.properties-1.0.9.js
//= require charts2.js
//= require wms2.js
//= require amplify.js
//= require moment.min.js
//= require linkifyjs/linkify.js
//= require linkifyjs/linkify-jquery.js
//= require_self
 */
/**
 * JQuery on document ready callback
 */
$(document).ready(function() {

    $('#showUncheckedTests').on('click', function(e){
        $('.uncheckTestResult').toggle();
    });

    $('#showMissingPropResult').on('click', function(e){
        $('.missingPropResult').toggle();
    });

    jQuery.i18n.properties({
        name: 'messages',
        path: OCC_REC.contextPath + '/messages/i18n/',
        mode: 'map',
        language: OCC_REC.locale // default is to use browser specified locale
        //callback: function(){} //alert( "facet.conservationStatus = " + jQuery.i18n.prop('facet.conservationStatus')); }
    });

    refreshUserAnnotations();

    // bind to form submit for assertions
    $("form#issueForm").submit(function(e) {
        e.preventDefault();
        var comment = $("#issueComment").val();
        var code = $("#issue").val();
        var userDisplayName = OCC_REC.userDisplayName //'${userDisplayName}';
        var recordUuid = OCC_REC.recordUuid //'${ala:escapeJS(record.raw.rowKey)}';
        if(code!=""){
            $('#assertionSubmitProgress').css({'display':'block'});

            $.get( OCC_REC.contextPath + "/assertions/" + OCC_REC.recordUuid, function(data) {
                var bPreventAddingIssue = false;
                for (var i = 0; i < data.userAssertions.length; i++) {
                    if (data.userAssertions[i].code == 50000) {
                        data.userAssertions.forEach(function (element) {
                            if (element.uuid == data.userAssertions[i].relatedUuid && element.code == code) {
                                bPreventAddingIssue = true;
                            }
                        })
                    }
                }

                if (bPreventAddingIssue) {
                    alert("You cannot flag an issue with the same type that has already been verified.");
                    return;
                } else {

                    $.post(OCC_REC.contextPath + "/occurrences/assertions/add",
                        {
                            recordUuid: recordUuid,
                            code: code,
                            comment: comment,
                            userAssertionStatus: 'Open issue',
                            userId: OCC_REC.userId,
                            userDisplayName: userDisplayName
                        },
                        function (data) {
                            $('#assertionSubmitProgress').css({'display': 'none'});
                            $("#submitSuccess").html("Thanks for flagging the problem!");
                            $("#issueFormSubmit").hide();
                            $("input:reset").hide();
                            $("input#close").show();
                            //retrieve all assertions
                            $.get(OCC_REC.contextPath + '/assertions/' + OCC_REC.recordUuid, function (data) { // recordUuid=${record.raw.uuid}
                                //console.log("data", data);
                                $('#userAssertions').html(data);
                                $('#userAssertionsContainer').show("slow");
                            });
                            refreshUserAnnotations();
                            //document.location.reload(true);
                        }
                    ).error(function () {
                        $('#assertionSubmitProgress').css({'display': 'none'});
                        $("#submitSuccess").html("There was problem flagging the issue. Please try again later.");
                    });
                }

            });

        } else {
            alert("Please supply a issue type");
        }
    });

    $(".userAssertionComment").each(function(i, el) {
        var html = $(el).html();
        $(el).html(replaceURLWithHTMLLinks(html)); // convert it
    });


    // bind to form "close" button TODO
    $("input#close").live("click", function(e) {
        // close the popup
    //    $.fancybox.close();
        // reset form back to default state
        $('form#issueForm')[0].reset();
        $("#submitSuccess").html("");
        $("#issueFormSubmit").show("slow");
        $("input:reset").show("slow");
        $("input#close").hide("slow");
        $('#loginOrFlag').modal('hide');
        document.location.reload(true);
    });

    // convert camel case field names to "normal"
    $("td.dwc, span.dwc").each(function(i, el) {
        var html = $(el).html();
        $(el).html(fileCase(html)); // conver it
    });

    //    // load a JS map with sensitiveDatasets values from hubs.properties file
    //    var sensitiveDatasets = {
    //    <c:forEach var="sds" items="${sensitiveDatasets}" varStatus="s">
    //    ${sds}: '<ala:propertyLoader checkSupplied="true" bundle="hubs" property="sensitiveDatasets.${sds}"/>'<c:if test="${not s.last}">,</c:if>
    //    </c:forEach>
    //}
    var sensitiveDatasets = OCC_REC.sensitiveDatasets;

    // add links for dataGeneralizations pages in collectory
    $("span.dataGeneralizations").each(function(i, el) {
        var field = $(this);
        var text = $(this).text().match(/\[.*?\]/g);

        if (text) {
            $.each(text, function(j, el) {
                var list = el.replace(/\[.*,(.*)\]/, "$1").trim();
                var code = list.replace(/\s/g, "_").toUpperCase();

                if (sensitiveDatasets[code]) {
                    var linked = "<a href='" + sensitiveDatasets[code] + "' title='" + list
                        + " sensitive species list information page' target='collectory'>" + list + "</a>";
                    var regex = new RegExp(list, "g");
                    var html = $(field).html().replace(regex, linked);
                    $(field).html(html);
                }
            });
        }
    });

    $("#backBtn a").click(function(e) {
        e.preventDefault();
        var url = $(this).attr("href");
        if (url) {
            // referer value from request object
            window.location.href = url;
        } else if (history.length) {
            //There is history to go back to
            history.go(-1);
        } else {
            alert("Sorry it appears the history has been lost, please use the browser&apso;s back button");
        }
    });

    var sequenceTd = $("tr#nucleotides").find("td.value");
    var sequenceStr = sequenceTd.text().trim();
    if (sequenceStr.length > 10) {
        // split long DNA sequences into blocks of 10 chars
        $(sequenceTd).html("<code>"+sequenceStr.replace(/(.{10})/g,"$1 ")+"</code>");
    }

    // context sensitive help on data quality tests
    $(".dataQualityHelpLinkZZZ").click(function(e) {
        e.preventDefault();
        $("#dataQualityModal .modal-body").html(""); // clear content
        var code = $(this).data("code");
        var dataQualityItem = getDataQualityItem(code);
        var content = "Error: info not found";
        if (dataQualityItem) {
            content = "<div><b>Name: " + dataQualityItem.name + "</b></div>";
            content += "<div>" + dataQualityItem.description + "</div>";
            content += "<div><a href='https://github.com/AtlasOfLivingAustralia/ala-dataquality/wiki/" +
                dataQualityItem.name + "' target='wiki' title='More details on the wiki page'>Wiki page</a></div>";
        }

        //$("#dataQualityModal .modal-body").html(content);
        //$('#dataQualityModal').modal({show:true});
        $(this).popover({
            html : true,
            content: function() {
                return content;
            }
        });
    });

    $(".dataQualityHelpLinkZZ").popover({
        html : true,
        content: "Just a test"
    }).click('click', function(e) { e.preventDefault(); });

    // add BS tooltip to elements with class "tooltips"
    $(".tooltips").tooltip();

    $(".dataQualityHelpLink").popover({
        html : true,
        trigger: "click",
        title: function() {
            var code = $(this).data("code");
            var content = "";
            var dataQualityItem = getDataQualityItem(code);
            if (dataQualityItem) {
                content = "<button type='button' class='close' onclick='$(&quot;.dataQualityHelpLink&quot;).popover(&quot;hide&quot;);'>×</button>" + dataQualityItem.name;
            }
            return content;
        },
        content: function() {
            var code = $(this).data("code");
            var dataQualityItem = getDataQualityItem(code);
            var content = "Error: info not found";
            if (dataQualityItem) {
                //content = "<div><b>" + dataQualityItem.name + "</b></div>";
                content = "<div>" + dataQualityItem.description + "</div>";
                if (dataQualityItem.wiki) {
                    content += "<div><i class='glyphicon glyphicon-share-alt'></i>&nbsp;<a href='https://github.com/AtlasOfLivingAustralia/ala-dataquality/wiki/" +
                        dataQualityItem.name + "' target='wiki' title='More details on the wiki page'>Wiki page</a></div>";
                }
            }
            return content;
        }
    }).click('click', function(e) { e.preventDefault(); });

    // Activate the "back to search results" button at top of page
    var lastSearch = amplify.store('lastSearch');
    //console.log('lastSearch', lastSearch);
    if (lastSearch) {
        $('#backBtn > a').attr('href', lastSearch);
        $('#backBtn').show();
    }

    // hide any DwC sections that are empty
    $('.occurrenceTable').each(function(i, el) {
        if (!$(el).find('tr').length) {
            // hide section
            $(el).parent().hide();
            // hide ToC entry
            var parentId = $(el).parent().attr('id').replace('Table','');
            $('a[href="#' + parentId + '"]').hide();
        }
    });

}); // end JQuery document ready

/**
 * Delete a user assertion
 */
function deleteAssertion(recordUuid, assertionUuid){
    $.post(OCC_REC.contextPath + '/occurrences/assertions/delete',
        { recordUuid: recordUuid, assertionUuid: assertionUuid },
        function(data) {
            refreshUserAnnotations();
        }
    );
}

/**
 * Convert camel case text to pretty version (all lower case)
 */
function fileCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().capitalize();
}

function compareModifiedDate(a,b) {
    if (moment(a.created).isBefore(b.created)) {
        return -1;
    } else if (moment(a.created).isAfter(b.created)) {
        return 1;
    } else {
        return 0;
    }
}

function getMessage(userAssertionCode) {
    return "${message(code:show.userAssertionStatus." + userAssertionCode+ ")}";
}

/**
 * Load and display the assertions for this record
 */
function refreshUserAnnotations(){

    $.get( OCC_REC.contextPath + "/assertions/" + OCC_REC.recordUuid, function(data) {

        if (data.assertionQueries.length == 0 && data.userAssertions.length == 0) {
            $('#userAnnotationsDiv').hide('slow');
            $('#userAssertionsContainer').hide("slow");
            $('#userAnnotationsNav').css("display","none");
        } else {
            $('#userAnnotationsDiv').show('slow');
            $('#userAssertionsContainer').show("slow");
            $('#userAnnotationsNav').css("display","block");
        }
        $('#userAnnotationsList').empty();

        var userAssertionStatus = jQuery.i18n.prop("user_assertions." + data.userAssertionStatus);
        $("#userAssertionStatus").text(userAssertionStatus);

        for(var i=0; i < data.assertionQueries.length; i++){
            var $clone = $('#userAnnotationTemplate').clone();
            $clone.find('.issue').text(data.assertionQueries[i].assertionType);
            $clone.find('.user').text(data.assertionQueries[i].userName);
            $clone.find('.comment').text('Comment: ' + data.assertionQueries[i].comment);
            $clone.find('.created').text('Date created: ' + (moment(data.assertionQueries[i].createdDate).format('YYYY-MM-DD')));
            if(data.assertionQueries[i].recordCount > 1){
                $clone.find('.viewMore').css({display:'block'});
                $clone.find('.viewMoreLink').attr('href', OCC_REC.contextPath + '/occurrences/search?q=query_assertion_uuid:' + data.assertionQueries[i].uuid);
            }
            $('#userAnnotationsList').append($clone);
            $('#userAssertionsContainer').show("slow");
        }

        var verifiedAssertions = [];
        var disableDelete = [];
        var enableDelete = [];

        $.each(data.userAssertions, function( index, userAssertion ) {

            var $clone = $('#userAnnotationTemplate').clone();

            // if the code == 50000, then we have verification - so don't display here
            if (userAssertion.code != 50000) {
                $clone.prop('id', "userAnnotation_" + userAssertion.uuid);
                $clone.find('.issue').text(jQuery.i18n.prop(userAssertion.name));
                $clone.find('.user').text(userAssertion.userDisplayName);
                $clone.find('.comment').text('Comment: ' + userAssertion.comment);
                $clone.find('.userRole').text(userAssertion.userRole != null ? userAssertion.userRole : '');
                $clone.find('.userEntity').text(userAssertion.userEntityName != null ? userAssertion.userEntityName : '');
                $clone.find('.created').text('Date created: ' + (moment(userAssertion.created, "YYYY-MM-DDTHH:mm:ssZ").format('YYYY-MM-DD HH:mm:ss')));
                if (userAssertion.userRole != null) {
                    $clone.find('.userRole').text(', ' + userAssertion.userRole);
                }
                if (userAssertion.userEntityName != null) {
                    $clone.find('.userEntity').text(', ' + userAssertion.userEntityName);
                }

                //if the current user is the author of the annotation, they can delete
                if(OCC_REC.userId == userAssertion.userId){
                    $clone.find('.deleteAnnotation').css({display:'block'});
                    $clone.find('.deleteAnnotation').attr('id', userAssertion.uuid);
                } else {
                    $clone.find('.deleteAnnotation').css({display:'none'});
                }

                //display the verification button,
                $clone.find('.verifyAnnotation').css({display:'block'});
                $clone.find('.verifyAnnotation').attr('id', "verifyAnnotations_" +userAssertion.uuid);

                $clone.find(".verifications").hide();

                $('#userAnnotationsList').append($clone);
            } else {
                //this is a verification assertion, so it needs to be embedded in existing assertion
                verifiedAssertions.push(userAssertion);
                // if an assertion has a verification, disable the delete button
                if (disableDelete.indexOf(userAssertion.relatedUuid) < 0) {
                    disableDelete.push(userAssertion.relatedUuid);
                }
            }
        });

        //display verified
        var sortedVerifiedAssertion = verifiedAssertions.sort(compareModifiedDate);
        for(var i = 0; i < sortedVerifiedAssertion.length; i++){

            var $clone = $('#userVerificationTemplate').clone();
            $clone.prop('id', "userVerificationAnnotation_" + sortedVerifiedAssertion[i].uuid);
            var qaStatusMessage = jQuery.i18n.prop("user_assertions." + sortedVerifiedAssertion[i].qaStatus);
            $clone.find('.qaStatus').text(qaStatusMessage);
            $clone.find('.comment').text(sortedVerifiedAssertion[i].comment);
            $clone.find('.userDisplayName').text(sortedVerifiedAssertion[i].userDisplayName);
            $clone.find('.created').text((moment(sortedVerifiedAssertion[i].created, "YYYY-MM-DDTHH:mm:ssZ").format('YYYY-MM-DD HH:mm:ss')));

            //add the verification, and show the table
            $('#userAnnotationsList').find('#userAnnotation_' + sortedVerifiedAssertion[i].relatedUuid + " table.verifications tbody").append($clone);
            $('#userAnnotationsList').find('#userAnnotation_' + sortedVerifiedAssertion[i].relatedUuid + " table.verifications").show();
            updateDeleteVerificationEvents(sortedVerifiedAssertion[i].relatedUuid)
        }

        for(var i = 0; i < disableDelete.length; i++) {
            var $cloneHeader = $('#userVerificationTemplate').clone();
            $cloneHeader.prop('id', "userVerificationAnnotationHeader_" + disableDelete[i]);
            $cloneHeader.find('.qaStatus').text("User Verification Status");
            $cloneHeader.find('.comment').text("Comment");
            $cloneHeader.find('.userDisplayName').text("Verified By");
            $cloneHeader.find('.created').text("Created");
            $cloneHeader.find('.deleteVerification').html('Delete this Verification');
            $cloneHeader.css({display: 'block'});
            ($cloneHeader).insertAfter('#userAnnotation_' + disableDelete[i] + ' .userVerificationClass .userVerificationTemplate:first')
        }

        for(var i = 0; i < data.userAssertions.length; i++){
            if ((data.userAssertions[i].code != 50000) && (disableDelete.indexOf(data.userAssertions[i].uuid) < 0)) {
                enableDelete.push (data.userAssertions[i].uuid);
            }
        }

        updateDeleteEvents(enableDelete, disableDelete);
    });
}

function updateDeleteVerificationEvents(relatedAssertionId) {
    $('#userAnnotation_' + relatedAssertionId + ' .deleteVerificationButton').off("click");
    $('#userAnnotation_' + relatedAssertionId + ' .deleteVerificationButton').on("click", function (e) {
        e.preventDefault();
        var isConfirmed = confirm('Are you sure you want to delete this verification ?');
        if (isConfirmed === true) {
            deleteAssertion(OCC_REC.recordUuid, this.parentElement.parentElement.id.split('_').pop());
        }
    });
}

function updateDeleteEvents(enableDelete, disableDelete){

    for(var i = 0; i < enableDelete.length; i++){
        $('#userAnnotation_' + enableDelete[i] + ' .deleteAnnotation').off("click");
        $('#userAnnotation_' + enableDelete[i] + ' .deleteAnnotation').on("click", function (e) {
            e.preventDefault();
            var isConfirmed = confirm('Are you sure you want to delete this flagged issue?');
            if (isConfirmed === true) {
                $('#' + enableDelete[i] + ' .deleteAssertionSubmitProgress').css({'display':'inline'});
                deleteAssertion(OCC_REC.recordUuid, enableDelete[i]);
            }
        });
        updateVerificationEvents(enableDelete[i]);
    }

    for(var i = 0; i < disableDelete.length; i++){
        $('#userAnnotation_' + disableDelete[i] + ' .deleteAnnotationButton').attr('disabled', 'disabled');
        $('#userAnnotation_' + disableDelete[i] + ' .deleteAnnotationButton').attr('title', 'Unable to delete, as this assertion has a verification');


        $('#userAnnotation_' + disableDelete[i] + ' .deleteAnnotation').off("click");
        $('#userAnnotation_' + disableDelete[i] + ' .deleteAnnotation').on("click", function (e) {
            e.preventDefault();
        });
        updateVerificationEvents(disableDelete[i]);
    }

}

function updateVerificationEvents(assertionId) {
    $('#userAnnotation_' + assertionId + ' .verifyAnnotation').off("click");
    $('#userAnnotation_' + assertionId + ' .verifyAnnotation').on("click", function(e){
        e.preventDefault();
        $("#verifySpinner").hide();
        updateConfirmVerificationEvents(OCC_REC.recordUuid, assertionId, OCC_REC.userDisplayName);
    });
}

function updateConfirmVerificationEvents(occUuid, assertionUuid, userDisplayName){

    $('.closeVerify').on("click", function(e){
        e.preventDefault();
        $(".verifyAsk").fadeIn();
        $(".verifyDone").fadeOut();
    });

    $('.confirmVerify').off("click");
    $('.confirmVerify').on("click", function(e){
        e.preventDefault();
        $("#verifySpinner").show();
        var code = "50000";
        var comment = $("#verifyComment").val();
        var userAssertionStatus = $("#userAssertionStatusSelection").val();
        if (!comment) {
            alert("Please add a comment");
            $("#verifyComment").focus();
            $("#verifySpinner").hide();
            return false;
        }

        console.log("Submitting an assertion with userAssertionStatus: " + userAssertionStatus)

        $.post(OCC_REC.contextPath + "/occurrences/assertions/add",
            { recordUuid: occUuid,
                code: code,
                comment: comment,
                userAssertionStatus: userAssertionStatus,
                assertionUuid: assertionUuid,
                userId: OCC_REC.userId,
                userDisplayName: userDisplayName},
            function(data) {
                // service simply returns status or OK or FORBIDDEN, so assume it worked...
                $(".verifyAsk").fadeOut();
                $(".verifyDone").fadeIn();
                refreshUserAnnotations();
            }
        ).error(function (request, status, error) {
            alert("Error verifying record: " + request.responseText);
        }).complete(function() {
            $("#verifySpinner").hide();
        });
    });
}

/**
 * Capitalise first letter of string only
 * @return {String}
 */
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var dataQualityDataIsLoaded = false;
var dataQualityItems = {};

function getDataQualityItem(code) {

    if (!dataQualityDataIsLoaded) {
        var url = OCC_REC.contextPath + "/dataQuality/allCodes";
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function(data) {
                if (data && data[1]) {
                    $.each(data, function(key, val) {
                        //console.log("data", key, val);
                        dataQualityItems[key] = val;
                    });
                }
            },
            complete: function() {
                dataQualityDataIsLoaded = true;
            },
            async: false
        });
    }
    //console.log("dataQualityItems",dataQualityItems);
    if (dataQualityItems[code]) {
        return dataQualityItems[code];
    }
}

/*
 * IE doesn't support String.trim(), so add it in manually
 */
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    return text.replace(exp,"<a href='$1'>$1</a>");
}

/************************************************************\
 *
 \************************************************************/
// opens email window for slightly obfuscated email addy
var strEncodedAtSign = "(SPAM_MAIL@ALA.ORG.AU)";
function sendEmail(strEncoded) {
    var strAddress;
    strAddress = strEncoded.split(strEncodedAtSign);
    strAddress = strAddress.join("@");
    window.location.href = 'mailto:' + strAddress
    if (event) {
        event.cancelBubble = true;
    }
    return false;
}
