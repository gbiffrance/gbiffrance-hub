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
/*
 *  Copyright (C) 2014 Atlas of Living Australia
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
 */

/*  Common map (Leaflet) functions */

// used to generate unique handler name for user drawn areas.
var areaCounter = 0;

function addClickEventForVector(layer) {
    var name = "drawnArea" + areaCounter;
    areaCounter++;

    MAP_VAR.map.addHandler(name, L.AreaPopupHandler.extend({layer: layer}));
    MAP_VAR.map[name].enable();
}

function removeLayer(leaflet_id) {
    if (MAP_VAR.map._layers[leaflet_id] !== undefined) {
        var layer = MAP_VAR.map._layers[leaflet_id];
        MAP_VAR.map.removeLayer(layer);
    }
}

L.AreaPopupHandler = L.Handler.extend({
    layer: null,

    addHooks: function() {
        L.DomEvent.on(this.layer, 'click', this._generatePopup, this);
    },

    removeHooks: function() {
        L.DomEvent.off(this.layer, 'click', this._generatePopup, this);
    },

    _generatePopup: function(e) {
        generatePopup(this.layer, e.latlng);
    }
});

L.PointClickHandler = L.Handler.extend({
    obj: null,

    addHooks: function() {
        L.DomEvent.on(this.obj, 'click', pointLookupClickRegister, this);
    },

    removeHooks: function() {
        L.DomEvent.off(this.obj, 'click', pointLookupClickRegister, this);
    }
});

function generatePopup(layer, latlng) {
    var params = "";
    if (jQuery.isFunction(layer.getRadius)) {
        // circle
        params = getParamsForCircle(layer);
    } else {
        var wkt = new Wkt.Wkt();
        wkt.fromObject(layer);
        params = getParamsforWKT(wkt.write());
    }

    if (latlng == null) {
        latlng = layer.getBounds().getCenter();
    }

    L.popup()
        .setLatLng([latlng.lat, latlng.lng])
        .setContent("species count: <b id='speciesCountDiv'>calculating...</b><br>" +
            "occurrence count: <b id='occurrenceCountDiv'>calculating...</b><br>" +
            "<a id='showOnlyTheseRecords' href='" + BC_CONF.contextPath + "/occurrences/search" +
            params + "'>" + jQuery.i18n.prop("search.map.popup.linkText") + "</a><br>" +
            "<a id='removeArea' href='javascript:void(0)' " +
            "onclick='removeLayer(\"" + layer._leaflet_id + "\");MAP_VAR.map.closePopup()'>" +
            jQuery.i18n.prop("search.map.popup.removeText") + "</a>")
        .openOn(MAP_VAR.map);

    getSpeciesCountInArea(params);
    getOccurrenceCountInArea(params);
}

function getSpeciesCountInArea(params) {
    speciesCount = -1;
    $.getJSON(BC_CONF.biocacheServiceUrl + "/occurrence/facets.json" + params + "&facets=taxon_name&callback=?",
        function( data ) {
            if (data && data.length > 0 && data[0].count !== undefined) {
                var speciesCount = data[0].count;
                document.getElementById("speciesCountDiv").innerHTML = speciesCount;
            } else {
                document.getElementById("speciesCountDiv").innerHTML = 0;
            }
        });
}

function getOccurrenceCountInArea(params) {
    occurrenceCount = -1;
    $.getJSON(BC_CONF.biocacheServiceUrl + "/occurrences/search.json" + params + "&pageSize=0&facet=off&callback=?",
        function( data ) {
            if (data && data.totalRecords !== undefined) {
                var occurrenceCount = data.totalRecords;
                document.getElementById("occurrenceCountDiv").innerHTML = occurrenceCount;

                if (occurrenceCount == "0") {
                    $("#showOnlyTheseRecords").hide()
                }
            } else {
                document.getElementById("occurrenceCountDiv").innerHTML = 0;
            }
        });
}

function getParamsforWKT(wkt) {
    return "?" + getExistingParams() + "&wkt=" + encodeURI(wkt.replace(" ", "+"));
}

function getParamsForCircle(circle) {
    var latlng = circle.getLatLng();
    var radius = Math.round((circle.getRadius() / 1000) * 10) / 10; // convert to km (from m) and round to 1 decmial place
    return "?" + getExistingParams() + "&radius=" + radius + "&lat=" + latlng.lat + "&lon=" + latlng.lng;
}

function getExistingParams() {
    var paramsObj = $.url(MAP_VAR.query).param();
    if (!paramsObj.q) {
        paramsObj.q = "*:*";
    }
    delete paramsObj.wkt;
    delete paramsObj.lat;
    delete paramsObj.lon;
    delete paramsObj.radius;
    var decoder = document.createElement("textarea");
    decoder.innerHTML = decodeURI(BC_CONF.queryContext);
    paramsObj.qc = decoder.value;
    //otherwise get context like "Isle of Man" as %26quot%3BIsle of Man%26quot%3B (encoded html entities), which never matches any records
    return $.param(paramsObj);
}

function drawWktObj(wktString) {
    var wkt = new Wkt.Wkt();
    wkt.read(wktString);
    var wktObject = wkt.toObject({color: '#bada55'});
    generatePopup(wktObject.getLayers()[0], null);
    addClickEventForVector(wktObject);
    MAP_VAR.drawnItems.addLayer(wktObject);

    if (wktObject.getBounds !== undefined && typeof wktObject.getBounds === 'function') {
        // For objects that have defined bounds or a way to get them
        MAP_VAR.map.fitBounds(wktObject.getBounds());
    } else {
        if (focus && wktObject.getLatLng !== undefined && typeof wktObject.getLatLng === 'function') {
            MAP_VAR.map.panTo(wktObject.getLatLng());
        }
    }
}

/*
 * // require jquery
//= require purl
//= require map.common
 */

