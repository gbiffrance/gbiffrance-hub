//# sourceMappingURL=leaflet-google.js.map
L.Google=L.Class.extend({includes:L.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,continuousWorld:!1,noWrap:!1},initialize:function(a,b){L.Util.setOptions(this,b);this._type=google.maps.MapTypeId[a||"SATELLITE"]},onAdd:function(a,b){this._map=a;this._insertAtTheBottom=b;this._initContainer();this._initMapObject();a.on("viewreset",this._resetCallback,this);this._limitedUpdate=L.Util.limitExecByInterval(this._update,150,this);a.on("move",
this._update,this);this._reset();this._update()},onRemove:function(a){this._map._container.removeChild(this._container);this._map.off("viewreset",this._resetCallback,this);this._map.off("move",this._update,this)},getAttribution:function(){return this.options.attribution},setOpacity:function(a){this.options.opacity=a;1>a&&L.DomUtil.setOpacity(this._container,a)},_initContainer:function(){var a=this._map._container;first=a.firstChild;this._container||(this._container=L.DomUtil.create("div","leaflet-google-layer leaflet-top leaflet-left"),
this._container.id="_GMapContainer");a.insertBefore(this._container,first);this.setOpacity(this.options.opacity);a=this._map.getSize();this._container.style.width=a.x+"px";this._container.style.height=a.y+"px"},_initMapObject:function(){this._google_center=new google.maps.LatLng(0,0);var a=new google.maps.Map(this._container,{center:this._google_center,zoom:0,mapTypeId:this._type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1}),
b=this;this._reposition=google.maps.event.addListenerOnce(a,"center_changed",function(){b.onReposition()});a.backgroundColor="#ff0000";this._google=a},_resetCallback:function(a){this._reset(a.hard)},_reset:function(a){this._initContainer()},_update:function(){this._resize();var a=this._map.getBounds(),b=a.getNorthEast(),a=a.getSouthWest();new google.maps.LatLngBounds(new google.maps.LatLng(a.lat,a.lng),new google.maps.LatLng(b.lat,b.lng));b=this._map.getCenter();b=new google.maps.LatLng(b.lat,b.lng);
this._google.setCenter(b);this._google.setZoom(this._map.getZoom())},_resize:function(){var a=this._map.getSize();if(this._container.style.width!=a.x||this._container.style.height!=a.y)this._container.style.width=a.x+"px",this._container.style.height=a.y+"px",google.maps.event.trigger(this._google,"resize")},onReposition:function(){}});