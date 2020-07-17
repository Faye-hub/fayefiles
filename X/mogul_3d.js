  mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbGxvZmF5ZSIsImEiOiJjank1bGE0amQwODVnM2RvYjQ5M2U3OG9yIn0.0mhPkFadlAQg1jLY5bKDdg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-4.0206, 5.3253],  //[-87.61694, 41.86625],
zoom: 17,
pitch: 40,
bearing: 20,
antialias: true
});
 



//LIGNE 1

map.on('load', function() {
map.addSource('floorplan', {
// GeoJSON Data source used in vector tiles, documented at
// https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
'type': 'geojson',
'data': {

  "features": [
    {
      "type": "Feature",
      "properties": {
        "base_height": 0,
        "color": "red",
        "contribuable": "Boris Kévin",
        "height": 10,
        "impôt_foncier": "300 000 F CFA",
        "level": 0
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020292,
              5.324775
            ],
            [
              -4.020294,
              5.324634
            ],
            [
              -4.020198,
              5.324634
            ],
            [
              -4.020198,
              5.324775
            ],
            [
              -4.020292,
              5.324775
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "9659ca5c4b1e1d7c2d13375a5fae9ab9"
    },
    {
      "type": "Feature",
      "properties": {
        "contribuable": "Jerry Corona",
        "level": 0,
        "height": 10,
        "base_height": 0,
        "color": "blue",
        "impôt_foncier": "90 000 F CFA"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020379,
              5.324777
            ],
            [
              -4.02038,
              5.324635
            ],
            [
              -4.020295,
              5.324634
            ],
            [
              -4.020293,
              5.324775
            ],
            [
              -4.020379,
              5.324777
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "a7e3f38e5a2bc2e84e2b385506e0769a"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 0,
        "color": "yellow",
        "contribuable": "Thierry Mig",
        "height": 10,
        "impôt_foncier": "3 000 000 F CFA",
        "level": 0
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020108,
              5.324634
            ],
            [
              -4.020107,
              5.324774
            ],
            [
              -4.019965,
              5.324772
            ],
            [
              -4.019965,
              5.324632
            ],
            [
              -4.020108,
              5.324634
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "c19493e8aba6426019bc0afc762d4a85"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 0,
        "color": "grey",
        "contribuable": "Kouadio Henry",
        "height": 10,
        "impôt_foncier": "90 000 F CFA",
        "level": 0
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020197,
              5.324635
            ],
            [
              -4.020197,
              5.324774
            ],
            [
              -4.02011,
              5.324775
            ],
            [
              -4.020111,
              5.324634
            ],
            [
              -4.020197,
              5.324635
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "f70cb7828e259825f637e7b2f24a28ad"
    }
  ],
  "type": "FeatureCollection"
}

});


map.addLayer({
'id': 'room-extrusion',
'type': 'fill-extrusion',
'source': 'floorplan',
'paint': {
// See the Mapbox Style Specification for details on data expressions.
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
 
// Get the fill-extrusion-color from the source 'color' property.
'fill-extrusion-color': ['get', 'color'],
 
// Get fill-extrusion-height from the source 'height' property.
'fill-extrusion-height': ['get', 'height'],
 
// Get fill-extrusion-base from the source 'base_height' property.
'fill-extrusion-base': ['get', 'base_height'],
 
// Make extrusions slightly opaque for see through indoor walls.
'fill-extrusion-opacity': 0.8
}
});

});




// LIGNE 2



map.on('load', function() {
map.addSource('floorplan2', {
// GeoJSON Data source used in vector tiles, documented at
// https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
'type': 'geojson',
'data': {

  "features": [
    {
      "type": "Feature",
      "properties": {
        "base_height": 11,
        "color": "grey",
        "contribuable": "Diallo Faye",
        "height": 21,
        "impôt_foncier": "0 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020292,
              5.324775
            ],
            [
              -4.020294,
              5.324634
            ],
            [
              -4.020198,
              5.324634
            ],
            [
              -4.020198,
              5.324775
            ],
            [
              -4.020292,
              5.324775
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "9659ca5c4b1e1d7c2d13375a5fae9ab94"
    },
    {
      "type": "Feature",
      "properties": {
        "contribuable": "Jerry Corona",
        "level": 1,
        "height": 21,
        "base_height": 11,
        "color": "grey",
        "impôt_foncier": "90 000 F CFA"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020379,
              5.324777
            ],
            [
              -4.02038,
              5.324635
            ],
            [
              -4.020295,
              5.324634
            ],
            [
              -4.020293,
              5.324775
            ],
            [
              -4.020379,
              5.324777
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "a7e3f38e5a2bc2e84e2b385506e0769a3"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 11,
        "color": "grey",
        "contribuable": "Thierry Mig",
        "height": 21,
        "impôt_foncier": "3 000 000 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020108,
              5.324634
            ],
            [
              -4.020107,
              5.324774
            ],
            [
              -4.019965,
              5.324772
            ],
            [
              -4.019965,
              5.324632
            ],
            [
              -4.020108,
              5.324634
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "c19493e8aba6426019bc0afc762d4a852"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 11,
        "color": "grey",
        "contribuable": "Kouadio Henry",
        "height": 21,
        "impôt_foncier": "90 000 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020197,
              5.324635
            ],
            [
              -4.020197,
              5.324774
            ],
            [
              -4.02011,
              5.324775
            ],
            [
              -4.020111,
              5.324634
            ],
            [
              -4.020197,
              5.324635
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "f70cb7828e259825f637e7b2f24a28ad1"
    }
  ],
  "type": "FeatureCollection"
}

});


map.addLayer({
'id': 'room-extrusion2',
'type': 'fill-extrusion',
'source': 'floorplan2',
'paint': {
// See the Mapbox Style Specification for details on data expressions.
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
 
// Get the fill-extrusion-color from the source 'color' property.
'fill-extrusion-color': ['get', 'color'],
 
// Get fill-extrusion-height from the source 'height' property.
'fill-extrusion-height': ['get', 'height'],
 
// Get fill-extrusion-base from the source 'base_height' property.
'fill-extrusion-base': ['get', 'base_height'],
 
// Make extrusions slightly opaque for see through indoor walls.
'fill-extrusion-opacity': 0.8
}
});

});






// LIGNE 3



map.on('load', function() {
map.addSource('floorplan3', {
// GeoJSON Data source used in vector tiles, documented at
// https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
'type': 'geojson',
'data': {

  "features": [
    {
      "type": "Feature",
      "properties": {
        "base_height": 22,
        "color": "#11fffa",
        "contribuable": "Diallo Faye",
        "height": 32,
        "impôt_foncier": "0 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020292,
              5.324775
            ],
            [
              -4.020294,
              5.324634
            ],
            [
              -4.020198,
              5.324634
            ],
            [
              -4.020198,
              5.324775
            ],
            [
              -4.020292,
              5.324775
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "9659ca5c4b1e1d7c2d13375a5fae9ab94"
    },
    {
      "type": "Feature",
      "properties": {
        "contribuable": "Jerry Corona",
        "level": 1,
        "height": 32,
        "base_height": 22,
        "color": "#fafafa",
        "impôt_foncier": "90 000 F CFA"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020379,
              5.324777
            ],
            [
              -4.02038,
              5.324635
            ],
            [
              -4.020295,
              5.324634
            ],
            [
              -4.020293,
              5.324775
            ],
            [
              -4.020379,
              5.324777
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "a7e3f38e5a2bc2e84e2b385506e0769a3"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 22,
        "color": "#dcdcdc",
        "contribuable": "Thierry Mig",
        "height": 32,
        "impôt_foncier": "3 000 000 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020108,
              5.324634
            ],
            [
              -4.020107,
              5.324774
            ],
            [
              -4.019965,
              5.324772
            ],
            [
              -4.019965,
              5.324632
            ],
            [
              -4.020108,
              5.324634
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "c19493e8aba6426019bc0afc762d4a852"
    },
    {
      "type": "Feature",
      "properties": {
        "base_height": 22,
        "color": "#fed136",
        "contribuable": "Kouadio Henry",
        "height": 32,
        "impôt_foncier": "90 000 F CFA",
        "level": 1
      },
      "geometry": {
        "coordinates": [
          [
            [
              -4.020197,
              5.324635
            ],
            [
              -4.020197,
              5.324774
            ],
            [
              -4.02011,
              5.324775
            ],
            [
              -4.020111,
              5.324634
            ],
            [
              -4.020197,
              5.324635
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "f70cb7828e259825f637e7b2f24a28ad1"
    }
  ],
  "type": "FeatureCollection"
}

});


map.addLayer({
'id': 'room-extrusion3',
'type': 'fill-extrusion',
'source': 'floorplan3',
'paint': {
// See the Mapbox Style Specification for details on data expressions.
// https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
 
// Get the fill-extrusion-color from the source 'color' property.
'fill-extrusion-color': ['get', 'color'],
 
// Get fill-extrusion-height from the source 'height' property.
'fill-extrusion-height': ['get', 'height'],
 
// Get fill-extrusion-base from the source 'base_height' property.
'fill-extrusion-base': ['get', 'base_height'],
 
// Make extrusions slightly opaque for see through indoor walls.
'fill-extrusion-opacity': 0.8
}
});

}); 