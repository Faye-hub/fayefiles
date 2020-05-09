mapboxgl.accessToken = 'pk.eyJ1IjoiM2RidWlsZGluZ3MiLCJhIjoiY2syemRldWFvMDdueDNtcWpiNG8zajhhZSJ9.Zy2CUldC8U-RjcrAvtP6ZA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-4.0190, 5.3233],
zoom: 16,
pitch: 45,
attributionControl: false //Delete improve map, osm & mapbox
});


// Add zoom and rotation controls to the map.
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');













// Adding 3D-layer


// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.

map.on('load', function() {
// Insert the layer beneath any symbol layer.
var layers = map.getStyle().layers;
 
var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}
 
map.addLayer(
{
'id': '3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'layout': {'visibility': 'visible'},
'paint': {
'fill-extrusion-color': '#555b61',
 
// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
'fill-extrusion-height': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'height']
],
'fill-extrusion-base': [
'interpolate',
['linear'],
['zoom'],
15,
0,
15.05,
['get', 'min_height']
],
'fill-extrusion-opacity': 0.9
}
},
labelLayerId
);
});








// 3D-Building datas shaping

map.on('load', function() {
map.addSource('floorplan', {
'type': 'geojson',
'data': 'https://faye-hub.github.io/fayefiles/3d_building_block_datas.geojson'
});

map.addLayer({
'id': 'Floor-Elevation',
'type': 'fill-extrusion',
'source': 'floorplan',
'paint': {
'fill-extrusion-color': ['get', 'color'],
'fill-extrusion-height': ['get', 'height'],
'fill-extrusion-base': ['get', 'base_height'],
'fill-extrusion-opacity': 0.8
}
});



// POPUP FOR BUILDING BLOCK DATAS


// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
map.on('click', 'Floor-Elevation', function(e) {

var p = e.features[0].properties;


new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML('<strong>' + 'NCC : ' + '</strong>' + p.ncc + '<br/>' + '<strong>' + 'Arriérés IF : ' + '</strong>' + p.arrieres + '<br/>' + '<strong>' + 'Ecart émission : ' + '</strong>' + p.ecart + '<br/>' + '<strong>' + 'Nature occupation : ' + '</strong>' + p.nat_occup + '<br/>' + '<strong>' + 'Nombre de pièces : ' + '</strong>' + p.nb_de_pieces +  '<br/>' + '<strong>' + 'Type : ' + '</strong>' + p.type + '<br/>' + '<strong>' + 'Hauteur : ' + '</strong>' + p.height)
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'Floor-Elevation', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'Floor-Elevation', function() {
map.getCanvas().style.cursor = '';
});



});













// RENTAL VALUES

map.on('load', function() {
map.addSource('rental_values', {
'type': 'geojson',
'data': 'https://faye-hub.github.io/fayefiles/valeurs_locatives.geojson'
});

map.addLayer({
'id': 'Land_Taxes',
'type': 'fill-extrusion',
'source': 'rental_values',
'paint': {
'fill-extrusion-color': ['get', 'color'],
'fill-extrusion-opacity': 0.5
}
});



// POPUP FOR RENTAL VALUES DATAS


// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
map.on('click', 'Land_Taxes', function(e) {

var k = e.features[0].properties;


new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML('<strong>' + 'NVL : ' + '</strong>' + k.nvl + '<br/>' + '<strong>' + 'Valeur Locative: ' + '</strong>' + k.val_loc + '<br/>' + '<strong>' + 'Commune : ' + '</strong>' + k.commune + '<br/>' + '<strong>' + 'Nombre de vl dans la commune : ' + '</strong>' + k.nb_vl_commune +  '<br/>' + '<strong>' + 'IFmin (Magasin/Studio) : ' + '</strong>' + '<br/>' + ' Location : ' + k.ifm_mag_studio_location + '<br/>' + '  Principale : ' + k.ifm_mag_studio_principale + '<br/>' + '   Société : ' + k.ifm_mag_studio_societe + '<br/>' + '<strong>' + 'IFmin (2 pièces) : ' + '</strong>' + '<br/>' + ' Location : ' + k.ifm_2pieces_location + '<br/>' + '  Principale : ' + k.ifm_2pieces_principale + '<br/>' + '   Société : ' + k.ifm_2pieces_societe + '<br/>' + '<strong>' + 'IFmin (3pieces) : ' + '</strong>' + '<br/>' + ' Location : ' + k.ifm_3pieces_location + '<br/>' + '  Principale : ' + k.ifm_3pieces_principale + '<br/>' + '   Société : ' + k.ifm_3pieces_societe + '<br/>' + '<strong>' + 'IFmin (4 pièces) : ' + '</strong>' + '<br/>' + ' Location : ' + k.ifm_4pieces_location + '<br/>' + '  Principale : ' + k.ifm_4pieces_principale + '<br/>' + '   Société : ' + k.ifm_4pieces_societe)
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'Land_Taxes', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'Land_Taxes', function() {
map.getCanvas().style.cursor = '';
});



});




























//SHOW AND HIDE LAYERS 

var toggleableLayerIds = ['3d-buildings', 'Floor-Elevation', 'Land_Taxes'];
 
for (var i = 0; i < toggleableLayerIds.length; i++) {
var id = toggleableLayerIds[i];
 
var link = document.createElement('a');
link.href = '#';
link.className = 'active';
link.textContent = id;
 
link.onclick = function(e) {
var clickedLayer = this.textContent;
e.preventDefault();
e.stopPropagation();
 
var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
 
if (visibility === 'visible') {
map.setLayoutProperty(clickedLayer, 'visibility', 'none');
this.className = '';
} else {
this.className = 'active';
map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
}
};
 
var layers = document.getElementById('menu_layer');
layers.appendChild(link);
}
