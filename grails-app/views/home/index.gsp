<%--
  Created by IntelliJ IDEA.
  User: dos009@csiro.au
  Date: 28/02/2014
  Time: 3:15 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="org.springframework.web.servlet.support.RequestContextUtils; au.org.ala.biocache.hubs.FacetsName; org.apache.commons.lang.StringUtils" contentType="text/html;charset=UTF-8" %>
<g:set var="hubDisplayName" value="${grailsApplication.config.skin.orgNameLong}"/>
<g:set var="biocacheServiceUrl" value="${grailsApplication.config.biocache.baseUrl}"/>
<g:set var="serverName" value="${grailsApplication.config.serverName?:grailsApplication.config.biocache.baseUrl}"/>
<!DOCTYPE html>
<head>
    <meta name="layout" content="${grailsApplication.config.skin.layout}"/>
    <meta name="section" content="search"/>
    <meta name="svn.revision" content="${meta(name: 'svn.revision')}"/>
    <title><g:message code="home.index.title" default="Recherche par occurrence"/> | ${hubDisplayName}</title>
    <style type="text/css">
        #leafletMap {
            cursor: pointer;
            font-size: 12px;
            line-height: 18px;
        }
        #leafletMap, input {
            margin: 0px;
        }
        .tooltip-inner {
            max-width: 350px;
            white-space: nowrap;
            /* If max-width does not work, try using width instead */
            /*width: 150px;*/
        }
        .leaflet-control-layers-base  {
            font-size: 12px;
        }
        .leaflet-control-layers-base label,  .leaflet-control-layers-base input, .leaflet-control-layers-base button, .leaflet-control-layers-base select, .leaflet-control-layers-base textarea {
            margin:0px;
            height:20px;
            font-size: 12px;
            line-height:18px;
            width:auto;
        }

        .leaflet-control-layers {
            opacity:0.8;
            filter:alpha(opacity=80);
        }

        .leaflet-control-layers-overlays label {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 0px;
        }
        #wktInput {
            height: 280px;
            width: 95%;
        }
        #addWkt {
            display: inline-block;
            margin-top: 5px;
        }

        #spatialSearch .accordion-group {
            border: none;

        }

        #spatialSearch .accordion-heading .accordion-toggle {
            padding: 0;
        }

        .accordion-heading .accordion-toggle {
            padding: 8px 10px;
        }

        .accordion-inner {
            /*padding: 10px 10px;*/
            margin-top: 5px;
            padding: 0;
            border: none;
        }

        .accordion-caret .accordion-toggle:hover {
            text-decoration: none;
        }
        .accordion-caret .accordion-toggle:hover span,
        .accordion-caret .accordion-toggle:hover strong {
            text-decoration: underline;
        }
        .accordion-caret .accordion-toggle:before {
            font-size: 18px;
            vertical-align: -1px;
        }
        .accordion-caret .accordion-toggle:not(.collapsed):before {
            content: "▾";
            margin-right: 0px;
        }
        .accordion-caret .accordion-toggle.collapsed:before {
            content: "▸";
            margin-right: 0px;
        }
    </style>
    <script src="http://maps.google.com/maps/api/js?v=3.5&sensor=false"></script>
    <r:require modules="jquery, jquery_migration, leaflet, leafletPlugins, mapCommon, bootstrap, alf, searchMap, bootstrapCombobox, bieAutocomplete"/>
    <g:if test="${grailsApplication.config.skin.useAlaBie?.toBoolean()}">
        <r:require module="bieAutocomplete"/>
    </g:if>
    <r:script>
        // global var for GSP tags/vars to be passed into JS functions
        var BC_CONF = {
            //bieWebServiceUrl: "${grailsApplication.config.bieService.baseUrl}",
            biocacheServiceUrl: "${alatag.getBiocacheAjaxUrl()}",
            bieWebappUrl: "${grailsApplication.config.bie.baseUrl}",
            autocompleteHints: ${grailsApplication.config.bie?.autocompleteHints?.encodeAsJson()?:'{}'},
            contextPath: "${request.contextPath}",
            queryContext: "${grailsApplication.config.biocache.queryContext}",
            locale: "${org.springframework.web.servlet.support.RequestContextUtils.getLocale(request)}"
        }

         /**
             * Load Spring i18n messages into JS
             */
            jQuery.i18n.properties({
                name: 'messages',
                path: '${request.contextPath}/messages/i18n/',
                mode: 'map',
                language: BC_CONF.locale // default is to use browser specified locale
                //callback: function(){} //alert( "facet.conservationStatus = " + jQuery.i18n.prop('facet.conservationStatus')); }
            });

        $(document).ready(function() {

            var mapInit = false;
            $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
                //console.log("this", $(this).attr('id'));
                var id = $(this).attr('id');
                location.hash = 'tab_'+ $(e.target).attr('href').substr(1);

                if (id == "t5" && !mapInit) {
                    initialiseMap();
                    mapInit = true;
                }
            });
            // catch hash URIs and trigger tabs
            if (location.hash !== '') {
                $('.nav-tabs a[href="' + location.hash.replace('tab_','') + '"]').tab('show');
                //$('.nav-tabs li a[href="' + location.hash.replace('tab_','') + '"]').click();
            } else {
                $('.nav-tabs a:first').tab('show');
            }

            // Toggle show/hide sections with plus/minus icon
            $(".toggleTitle").not("#extendedOptionsLink").click(function(e) {
                e.preventDefault();
                var $this = this;
                $(this).next(".toggleSection").slideToggle('slow', function(){
                    // change plus/minus icon when transition is complete
                    $($this).toggleClass('toggleTitleActive');
                });
            });

            $(".toggleOptions").click(function(e) {
                e.preventDefault();
                var $this = this;
                var targetEl = $(this).attr("id");
                $(targetEl).slideToggle('slow', function(){
                    // change plus/minus icon when transition is complete
                    $($this).toggleClass('toggleOptionsActive');
                });
            });

            // Add WKT string to map button click
            $('#addWkt').click(function() {
                var wktString = $('#wktInput').val();

                if (wktString) {
                    drawWktObj($('#wktInput').val());
                } else {
                    alert("Please paste a valid WKT string"); // TODO i18n this
                }
            });



        }); // end $(document).ready()

        // extend tooltip with callback
        var tmp = $.fn.tooltip.Constructor.prototype.show;
        $.fn.tooltip.Constructor.prototype.show = function () {
            tmp.call(this);
            if (this.options.callback) {
                this.options.callback();
            }
        };

        //var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            //'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            //'Imagery © <a href="http://mapbox.com">Mapbox</a>';
        // var mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';
        // var defaultBaseLayer = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr});
        // var mbUrl = 'https://{s}.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={token}';
        // var defaultBaseLayer = L.tileLayer(mbUrl, {mapid: '${grailsApplication.config.map.mapbox.id}', token: '${grailsApplication.config.map.mapbox.token}', attribution: mbAttr});

        var defaultBaseLayer = L.tileLayer("${grailsApplication.config.map.minimal.url}", {
                                     attribution: "${raw(grailsApplication.config.map.minimal.attr)}",
                                     subdomains: "${grailsApplication.config.map.minimal.subdomains}",
                                     mapid: "${grailsApplication.config.map.mapbox?.id?:''}",
                                     token: "${grailsApplication.config.map.mapbox?.token?:''}"
                             });

        // Global var to store map config
        var MAP_VAR = {
            map : null,
            mappingUrl : "${mappingUrl}",
            query : "${searchString}",
            queryDisplayString : "${queryDisplayString}",
            //center: [-30.0,133.6],
            defaultLatitude : "${grailsApplication.config.map.defaultLatitude?:'46.6'}",
            defaultLongitude : "${grailsApplication.config.map.defaultLongitude?:'2.4'}",
            defaultZoom : "${grailsApplication.config.map.defaultZoom?:'4'}",
            overlays : {
                <g:if test="${grailsApplication.config.map.overlay.url}">
                    "${grailsApplication.config.map.overlay.name?:'overlay'}" : L.tileLayer.wms("${grailsApplication.config.map.overlay.url}", {
                        layers: 'ALA:ucstodas',
                        format: 'image/png',
                        transparent: true,
                        attribution: "${grailsApplication.config.map.overlay.name?:'overlay'}"
                    })
                </g:if>
            },
            baseLayers : {
                "Minimal" : defaultBaseLayer,
                //"Night view" : L.tileLayer(cmUrl, {styleId: 999,   attribution: cmAttr}),
                "Road" :  new L.Google('ROADMAP'),
                "Terrain" : new L.Google('TERRAIN'),
                "Satellite" : new L.Google('HYBRID')
            },
            layerControl : null,
            //currentLayers : [],
            //additionalFqs : '',
            //zoomOutsideScopedRegion: ${(grailsApplication.config.map.zoomOutsideScopedRegion == false || grailsApplication.config.map.zoomOutsideScopedRegion == "false") ? false : true}
        };

        function initialiseMap() {
            //alert('starting map');
            if(MAP_VAR.map != null){
                return;
            }

            //initialise map
            MAP_VAR.map = L.map('leafletMap', {
                center: [MAP_VAR.defaultLatitude, MAP_VAR.defaultLongitude],
                zoom: MAP_VAR.defaultZoom,
                minZoom: 1,
                scrollWheelZoom: false
                //fullscreenControl: true,
                //fullscreenControlOptions: {
                //    position: 'topleft'
                //}
            });

            //add edit drawing toolbar
            // Initialise the FeatureGroup to store editable layers
            MAP_VAR.drawnItems = new L.FeatureGroup();
            MAP_VAR.map.addLayer(MAP_VAR.drawnItems);

            // Initialise the draw control and pass it the FeatureGroup of editable layers
            MAP_VAR.drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: MAP_VAR.drawnItems
                },
                draw: {
                    polyline: false,
                    rectangle: {
                        shapeOptions: {
                            color: '#bada55'
                        }
                    },
                    circle: {
                        shapeOptions: {
                            color: '#bada55'
                        }
                    },
                    marker: false,
                    polygon: {
                        allowIntersection: false, // Restricts shapes to simple polygons
                        drawError: {
                            color: '#e1e100', // Color the shape will turn when intersects
                            message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                        },
                        shapeOptions: {
                            color: '#bada55'
                        }
                    }
                }
            });
            MAP_VAR.map.addControl(MAP_VAR.drawControl);

            MAP_VAR.map.on('draw:created', function(e) {
                //setup onclick event for this object
                var layer = e.layer;
                //console.log("layer",layer, layer._latlng.lat);
                generatePopup(layer, layer._latlng);
                addClickEventForVector(layer);
                MAP_VAR.drawnItems.addLayer(layer);
            });

            MAP_VAR.map.on('draw:edited', function(e) {
                //setup onclick event for this object
                var layers = e.layers;
                layers.eachLayer(function (layer) {
                    generatePopup(layer, layer._latlng);
                    addClickEventForVector(layer);
                });
            });

            //add the default base layer
            MAP_VAR.map.addLayer(defaultBaseLayer);

            L.control.coordinates({position:"bottomleft", useLatLngOrder: true}).addTo(MAP_VAR.map); // coordinate plugin

            MAP_VAR.layerControl = L.control.layers(MAP_VAR.baseLayers, MAP_VAR.overlays, {collapsed:true, position:'topleft'});
            MAP_VAR.layerControl.addTo(MAP_VAR.map);

            L.Util.requestAnimFrame(MAP_VAR.map.invalidateSize, MAP_VAR.map, !1, MAP_VAR.map._container);
            L.Browser.any3d = false; // FF bug prevents selects working properly

            // Add a help tooltip to map when first loaded
            MAP_VAR.map.whenReady(function() {
                var opts = {
                    placement:'right',
                    callback: destroyHelpTooltip // hide help tooltip when mouse over the tools
                }
                $('.leaflet-draw-toolbar a').tooltip(opts);
                $('.leaflet-draw-toolbar').first().attr('title','Commencer par choisir un outil').tooltip({placement:'right'}).tooltip('show');
            });

            // Hide help tooltip on first click event
            var once = true;
            MAP_VAR.map.on('click', function(e) {
                if (once) {
                    $('.leaflet-draw-toolbar').tooltip('destroy');
                    once = false;
                }
            });
        }

        var once = true;
        function destroyHelpTooltip() {
            if ($('.leaflet-draw-toolbar').length && once) {
                $('.leaflet-draw-toolbar').tooltip('destroy');
                once = false;
            }
        }

    </r:script>
</head>

<body>

 <div class="row col-xs-12 col-sm-12">
    <div id="headingBar">
        <h2 id="searchHeader"><g:message code="home.index.body.title" default="Recherche par occurrence"/></h2>
    </div>
    <g:if test="${flash.message}">
        <div class="message alert alert-info">
            <button type="button" class="close" onclick="$(this).parent().hide()">×</button>
            <b><g:message code="home.index.body.alert" default="Alert:"/></b> ${raw(flash.message)}
        </div>
    </g:if>
    <div class="row" id="content">
        <div class="col-xs-18 col-md-12">
            <div class="tabbable" role="tabpanel">
                <ul class="nav nav-tabs" id="searchTabs" role="tablist">
                    <li role="presentation" class="active"><a id="t1" href="#simpleSearch" aria-controls="simpleSearch" data-toggle="tab" class="title-tab"><g:message code="home.index.navigator01" default="Recherche simple"/></a></li>
                    <li><a id="t2" href="#advanceSearch" data-toggle="tab" class="title-tab"><g:message code="home.index.navigator02" default="Recherche avancée"/></a></li>
                    %{--<li><a id="t3" href="#taxaUpload" data-toggle="tab" class="title-tab"><g:message code="home.index.navigator03" default="Recherche par taxon"/></a></li>--}%
                    <li><a id="t5" href="#spatialSearch" data-toggle="tab" class="title-tab"><g:message code="home.index.navigator05" default="Recherche spatiale"/></a></li>
                </ul>
            </div>
            <div class="tab-content searchPage">
                <div id="simpleSearch" class="tab-pane active">
                    <form name="simpleSearchForm" id="simpleSearchForm" action="${request.contextPath}/occurrences/search" method="GET">
                        <br/>
                        <div class="controls">
                            <div class="input-group">
                                <input type="text" class="form-control input-lg" name="taxa" id="taxa" placeholder="Nom scientifique, nom vernaculaire, etc.">
                                <span class="input-group-btn">
                                    <button class="btn btn-default search-occurrence btn-lg" type="submit" id="locationSearch" >
                                        <g:message code="home.index.simsplesearch.button" default="Rechercher"/>
                                    </button>
                                </span>
                            </div>    
                        </div>
                        <div>
                            <br/>
                            <span style="font-size: 12px; color: #444;">
                                <b><g:message code="home.index.simsplesearch.span" default="Remarque : la recherche simple essaie de faire correspondres un(e) espèce/taxon connu(e) - par son nom scientifique ou son nom commun. S'il n'y a aucune correspondance de nom, une recherche par texte intégral sera effectuée sur votre requête"/>
                            </span>
                        </div>
                    </form>
                </div><!-- end simpleSearch div -->
                <div id="advanceSearch" class="tab-pane">
                    <g:render template="advanced" />
                </div><!-- end #advancedSearch div -->
                <div id="taxaUpload" class="tab-pane">
                    <form name="taxaUploadForm" id="taxaUploadForm" action="${biocacheServiceUrl}/occurrences/batchSearch" method="POST">
                        <p><g:message code="home.index.taxaupload.des01" default="Enter a list of taxon names/scientific names, one name per line (common names not currently supported)."/></p>
                        <%--<p><input type="hidden" name="MAX_FILE_SIZE" value="2048" /><input type="file" /></p>--%>
                        <p><textarea name="queries" id="raw_names" class="span6" rows="15" cols="60"></textarea></p>
                        <p>
                            <%--<input type="submit" name="action" value="Download" />--%>
                            <%--&nbsp;OR&nbsp;--%>
                            <input type="hidden" name="redirectBase" value="${serverName}${request.contextPath}/occurrences/search"/>
                            <input type="hidden" name="field" value="raw_name"/>
                            <button class="btn btn-default advanced-search-occurrence" name="action"  type="submit" id="locationSearch" >
                                <g:message code="home.index.taxaupload.button01" default="Rechercher"/>
                             </button>
                        </p>
                    </form>
                </div><!-- end #uploadDiv div -->
%{--                 <div id="catalogUpload" class="tab-pane">
                    <form name="catalogUploadForm" id="catalogUploadForm" action="${biocacheServiceUrl}/occurrences/batchSearch" method="POST">
                        <p><g:message code="home.index.catalogupload.des01" default="Enter a list of catalogue numbers (one number per line)."/></p>
                        <%--<p><input type="hidden" name="MAX_FILE_SIZE" value="2048" /><input type="file" /></p>--%>
                        <p><textarea name="queries" id="catalogue_numbers" class="span6" rows="15" cols="60"></textarea></p>
                        <p>
                            <%--<input type="submit" name="action" value="Download" />--%>
                            <%--&nbsp;OR&nbsp;--%>
                            <input type="hidden" name="redirectBase" value="${serverName}${request.contextPath}/occurrences/search"/>
                            <input type="hidden" name="field" value="catalogue_number"/>
                            <input type="submit" name="action" value=<g:message code="home.index.catalogupload.button01" default="Search"/> class="btn"/></p>
                    </form>
                </div><!-- end #catalogUploadDiv div --> --}%
                <div id="spatialSearch" class="tab-pane">
                    <div class="row">
                        <div class="col-md-3">
                            <div>
                                <g:message code="search.map.helpText" default="Select one of the draw tools (polygon, rectangle, circle), draw a shape and click the search link that pops up."/>
                            </div>
                            <br>
                             %{--<div class="accordion accordion-caret" id="accordion2">--}%
                                %{--<div class="accordion-group">--}%
                                    %{--<div class="accordion-heading">--}%
                                        %{--<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">--}%
                                            %{--<g:message code="search.map.importToggle" default="Import WKT"/>--}%
                                        %{--</a>--}%
                                    %{--</div>--}%
                                    %{--<div id="collapseOne" class="accordion-body collapse">--}%
                                        %{--<div class="accordion-inner">--}%
                                            %{--<p><g:message code="search.map.importText"/></p>--}%
                                            %{--<p><g:message code="search.map.wktHelpText" default="Optionally, paste a WKT string: "/></p>--}%
                                            %{--<textarea type="text" id="wktInput"></textarea>--}%
                                            %{--<br>--}%
                                            %{--<button class="btn btn-small" id="addWkt"><g:message code="search.map.wktButtonText" default="Add to map"/></button>--}%
                                        %{--</div>--}%
                                    %{--</div>--}%
                                %{--</div>--}%
                            %{--</div>--}%

                        </div>
                        <div class="col-md-9">
                            <div id="leafletMap" style="height:600px; "></div>
                        </div>
                    </div>
                </div><!-- end #spatialSearch  -->
            </div><!-- end .tab-content -->
        </div><!-- end .span12 -->
    </div><!-- end .row-fluid -->
</div>
</body>
</html>