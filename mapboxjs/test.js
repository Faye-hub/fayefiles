mapboxgl.accessToken = 'pk.eyJ1IjoiM2RidWlsZGluZ3MiLCJhIjoiY2syemRldWFvMDdueDNtcWpiNG8zajhhZSJ9.Zy2CUldC8U-RjcrAvtP6ZA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom : 1.5,
    attributionControl: false
  });


map.on('load', function() {
map.addSource('corona', {
'type': 'geojson',
'data': 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=standard&f=pgeojson&token='
});

map.addLayer({
'id': 'virus',
'type': 'circle',
'source': 'corona',
'paint': {
	'circle-radius': 15,
	'circle-color': '#ff0000',
	'circle-opacity': 0.8
}
})

map.on('click', 'virus', function(e) {

var k = e.features[0].properties;


new mapboxgl.Popup()
.setLngLat(e.lngLat)
.setHTML('<strong>' + 'Country Region : ' + '</strong>' + k.Country_Region +'<br/>' + '<strong>' + 'Confirmed : ' + '</strong>' + k.Confirmed + '<br/>' + '<strong>' + 'Deaths : ' + '</strong>' + k.Deaths + '<br/>' + '<strong>' + 'Recovered : ' + '</strong>' + k.Recovered + '<br/>' + '<strong>' + ' Last Update : ' + '</strong>' + new Date(k.Last_Update).toLocaleString())
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the states layer.
map.on('mouseenter', 'virus', function() {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'virus', function() {
map.getCanvas().style.cursor = '';
});




});
