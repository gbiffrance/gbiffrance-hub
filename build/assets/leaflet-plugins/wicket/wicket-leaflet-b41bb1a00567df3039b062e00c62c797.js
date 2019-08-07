//# sourceMappingURL=wicket-leaflet.js.map
/*


  Copyright (C) 2012 K. Arthur Endsley (kaendsle@mtu.edu)
  Michigan Tech Research Institute (MTRI)
  3600 Green Court, Suite 100, Ann Arbor, MI, 48105

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
Wkt.Wkt.prototype.isRectangle=!1;Wkt.Wkt.prototype.trunc=function(b){var a,d=[];for(a=0;a<b.length;a+=1)Wkt.isArray(b[a])?d.push(this.trunc(b[a])):0!==a&&this.sameCoords(b[0],b[a])||d.push(b[a]);return d};
Wkt.Wkt.prototype.construct={point:function(b,a){a=a||this.components;a instanceof Array&&(a=a[0]);return L.marker(this.coordsToLatLng(a),b)},multipoint:function(b){var a,d=[],e=this.components;for(a=0;a<e.length;a+=1)d.push(this.construct.point.call(this,b,e[a]));return L.featureGroup(d,b)},linestring:function(b,a){a=this.coordsToLatLngs(a||this.components);return L.polyline(a,b)},multilinestring:function(b){var a=this.coordsToLatLngs(this.components,1);return L.multiPolyline(a,b)},polygon:function(b){var a=
this.trunc(this.components),a=this.coordsToLatLngs(a,1);return L.polygon(a,b)},multipolygon:function(b){var a=this.trunc(this.components),a=this.coordsToLatLngs(a,2);return L.multiPolygon(a,b)},geometrycollection:function(b){var a,d,e;a=this.trunc(this.components);e=[];for(d=0;d<this.components.length;d+=1)e.push(this.construct[a[d].type].call(this,a[d]));return L.featureGroup(e,b)}};
L.Util.extend(Wkt.Wkt.prototype,{coordsToLatLngs:L.GeoJSON.coordsToLatLngs,coordsToLatLng:function(b,a){return L.latLng(a?b.x:b.y,a?b.y:b.x,!0)}});
Wkt.Wkt.prototype.deconstruct=function(b){var a,d,e,f,g,c;d=function(a){var b,c;c=[];for(b=0;b<a.length;b+=1)Wkt.isArray(a[b])?c.push(d(a[b])):c.push({x:a[b].lng,y:a[b].lat});return c};if(b.constructor===L.Marker||b.constructor===L.marker)return{type:"point",components:[{x:b.getLatLng().lng,y:b.getLatLng().lat}]};if(b.constructor===L.Rectangle||b.constructor===L.rectangle)return c=b.getBounds(),{type:"polygon",isRectangle:!0,components:[[{x:c.getSouthWest().lng,y:c.getNorthEast().lat},{x:c.getNorthEast().lng,
y:c.getNorthEast().lat},{x:c.getNorthEast().lng,y:c.getSouthWest().lat},{x:c.getSouthWest().lng,y:c.getSouthWest().lat},{x:c.getSouthWest().lng,y:c.getNorthEast().lat}]]};if(b.constructor===L.Polyline||b.constructor===L.polyline)if(f=[],c=b.getLatLngs(),!c[0].equals(c[c.length-1])){for(a=0;a<c.length;a+=1)f.push({x:c[a].lng,y:c[a].lat});return{type:"linestring",components:f}}if(b.constructor===L.Polygon||b.constructor===L.polygon){g=[];f=[];c=b.getLatLngs();for(a=0;a<b._latlngs.length;a+=1)f.push({x:c[a].lng,
y:c[a].lat});f.push({x:c[0].lng,y:c[0].lat});g.push(f);if(b._holes&&0<b._holes.length)for(f=d(b._holes),a=0;a<f.length;a++)f[a].push(f[a][0]),g.push(f[a]);return{type:"polygon",components:g}}if(b.constructor===L.MultiPolyline||b.constructor===L.MultiPolygon||b.constructor===L.LayerGroup||b.constructor===L.FeatureGroup){e=[];c=b._layers;for(a in c)c.hasOwnProperty(a)&&(c[a].getLatLngs||c[a].getLatLng)&&e.push(this.deconstruct(c[a]));return{type:function(){switch(b.constructor){case L.MultiPolyline:return"multilinestring";
case L.MultiPolygon:return"multipolygon";case L.FeatureGroup:var a,c,d,e;e=d=c=!0;for(a in b._layers)b._layers.hasOwnProperty(a)&&(b._layers[a].constructor!==L.Marker&&(e=!1),b._layers[a].constructor!==L.Polyline&&(d=!1),b._layers[a].constructor!==L.Polygon&&(c=!1));return e?"multipoint":d?"multilinestring":c?"multipolygon":"geometrycollection";default:return"geometrycollection"}}(),components:function(){var a,b;b=[];for(a=0;a<e.length;a+=1)e[a].components&&b.push(e[a].components);return b}()}}b.constructor===
L.Rectangle||b.constructor===L.rectangle?console.log("Deconstruction of L.Circle objects is not yet supported"):console.log("The passed object does not have any recognizable properties.")};