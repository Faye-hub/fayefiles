  mapboxgl.accessToken = 'pk.eyJ1IjoiM2RidWlsZGluZ3MiLCJhIjoiY2syemRldWFvMDdueDNtcWpiNG8zajhhZSJ9.Zy2CUldC8U-RjcrAvtP6ZA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.2481, 49.0016],
	zoom: 11,
	attributionControl: false
  });
map.addControl(new mapboxgl.NavigationControl());



// BASSINS VERSANTS

map.on('load', function() {
map.addSource('bassins_versants_data', {
'type': 'geojson',
'data': 'https://faye-hub.github.io/fayefiles/BV_DATA_KOHI.geojson'
});

map.addLayer({
'id': 'bassins_versants',
'type': 'circle',
'source': 'bassins_versants_data',
'paint': {
'circle-color': ['get', 'color'],
'circle-opacity': 0.9,
'circle-radius': 17,
}
});



// POPUP FOR RENTAL VALUES DATAS


// When a click event occurs on a feature in the states layer, open a popup at the
// location of the click, with description HTML from its properties.
map.on('click', 'bassins_versants', function(e) {

var k = e.features[0].properties;


new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML('<strong>' + 'Numero : ' + '</strong>' + k.numero + '<br/>' + '<strong>' + 'Nom du Bassin : ' + '</strong>' + k.nom_bv + '<br/>' + '<strong>' + 'Annee de creation : ' + '</strong>' + k.annee + '<br/>' + '<strong>' + 'Maintenance : ' + '</strong>' + k.maintenance +  '<br/>' + '<strong>' + 'Capacite : ' + '</strong>' + k.capacite + '<br/>' + '<strong>' + 'Etat de remplissage : ' + '</strong>' + k.remplissage + '<br/>' + '<strong>' + 'Etat de degradation : ' + '</strong>' + k.degradation + '<br/>' + '<strong>' + 'Specificite : ' + '</strong>' + k.specificite + '<br/>' + '<strong>' + 'Gerant : ' + '</strong>' + k.gerant )
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'bassins_versants', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'bassins_versants', function() {
map.getCanvas().style.cursor = '';
});


});