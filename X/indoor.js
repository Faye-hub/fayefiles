	mapboxgl.accessToken = 'pk.eyJ1IjoiZGlhbGxvZmF5ZSIsImEiOiJjank1bGE0amQwODVnM2RvYjQ5M2U3OG9yIn0.0mhPkFadlAQg1jLY5bKDdg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-87.61694, 41.86625],
zoom: 15.99,
pitch: 40,
bearing: 20,
antialias: true
});
 
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
        "level": 1,
        "name": "Bird Exhibit",
        "height": 10,
        "base_height": 0,
        "color": "orange"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.618312,
              41.866282
            ],
            [
              -87.61832,
              41.866674
            ],
            [
              -87.618087,
              41.866676
            ],
            [
              -87.618087,
              41.866661
            ],
            [
              -87.617423,
              41.86667
            ],
            [
              -87.617416,
              41.8663
            ],
            [
              -87.618312,
              41.866282
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "06e8fa0b3f851e3ae0e1da5fc17e111e"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Bird Exhibit",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617808,
              41.866266
            ],
            [
              -87.617806,
              41.866293
            ],
            [
              -87.617415,
              41.866298
            ],
            [
              -87.617424,
              41.866671
            ],
            [
              -87.617382,
              41.866669
            ],
            [
              -87.617371,
              41.866274
            ],
            [
              -87.617808,
              41.866266
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "08a10ab2bf15c4d14669b588062f7f08"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "East Hallway",
        "base_height": 0,
        "height": 0,
        "color": "indigo"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616704,
              41.866141
            ],
            [
              -87.616707,
              41.866338
            ],
            [
              -87.61572,
              41.866355
            ],
            [
              -87.61572,
              41.866148
            ],
            [
              -87.616704,
              41.866141
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "09ead44537d94ece576c7bc001c33e53"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "East Entrance",
        "base_height": 0,
        "height": 0,
        "color": "violet"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.61544,
              41.866149
            ],
            [
              -87.615449,
              41.866358
            ],
            [
              -87.615721,
              41.866355
            ],
            [
              -87.61572,
              41.866143
            ],
            [
              -87.61544,
              41.866149
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "12251ebf764b36cf3b8c5ad42e2deb29"
    },
    {
      "type": "Feature",
      "properties": {
        "height": 0,
        "base_height": 0,
        "level": 1,
        "name": "Under the Earth",
        "color": "red"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616701,
              41.865816
            ],
            [
              -87.616705,
              41.866115
            ],
            [
              -87.615712,
              41.866125
            ],
            [
              -87.615706,
              41.865802
            ],
            [
              -87.615936,
              41.865801
            ],
            [
              -87.615938,
              41.865824
            ],
            [
              -87.616701,
              41.865816
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "1ce4f8c186a40b9927006644e27bfd69"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Atrium",
        "base_height": 0,
        "height": 0,
        "color": "yellow"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617365,
              41.865799
            ],
            [
              -87.6167,
              41.865815
            ],
            [
              -87.616718,
              41.866672
            ],
            [
              -87.617384,
              41.86667
            ],
            [
              -87.617365,
              41.865799
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "369f5d8865e677120b7576b1de6082eb"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Ancient Egypt",
        "height": 0,
        "base_height": 0,
        "color": "blue"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.61807,
              41.865761
            ],
            [
              -87.618299,
              41.865758
            ],
            [
              -87.618307,
              41.866139
            ],
            [
              -87.617407,
              41.86615
            ],
            [
              -87.617399,
              41.865799
            ],
            [
              -87.61807,
              41.865789
            ],
            [
              -87.61807,
              41.865761
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "3e9f198afe6d7dff01ac81c6eaa511fb"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "West Arch",
        "height": 40,
        "base_height": 30,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617424,
              41.86667
            ],
            [
              -87.617384,
              41.86667
            ],
            [
              -87.617365,
              41.865799
            ],
            [
              -87.617405,
              41.865799
            ],
            [
              -87.617424,
              41.86667
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "402706f28b793d27c78d9615fff747f2"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Bird Exhibit",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.618312,
              41.866283
            ],
            [
              -87.61797,
              41.866288
            ],
            [
              -87.617972,
              41.866265
            ],
            [
              -87.618312,
              41.866259
            ],
            [
              -87.618312,
              41.866283
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "43e1e2fc8399dee075ad59764f2a2878"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Arch",
        "level": 1,
        "color": "grey",
        "base_height": 30,
        "height": 40
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617971,
              41.866291
            ],
            [
              -87.617973,
              41.866265
            ],
            [
              -87.617805,
              41.866267
            ],
            [
              -87.617806,
              41.866294
            ],
            [
              -87.617971,
              41.866291
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "4528ad9b9264cbec65bb2e55ac0012c1"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "color": "red",
        "base_height": 30,
        "height": 40,
        "name": "Arch"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617979,
              41.866167
            ],
            [
              -87.617797,
              41.866168
            ],
            [
              -87.617799,
              41.866145
            ],
            [
              -87.617976,
              41.866144
            ],
            [
              -87.617979,
              41.866167
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "4be6817c3b595042c8d971eebd0c4fd3"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kids Zone",
        "level": 1,
        "base_height": 0,
        "height": 0,
        "color": "green"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616718,
              41.866675
            ],
            [
              -87.616709,
              41.866371
            ],
            [
              -87.615725,
              41.866381
            ],
            [
              -87.615732,
              41.866711
            ],
            [
              -87.61596,
              41.866711
            ],
            [
              -87.61596,
              41.866688
            ],
            [
              -87.616718,
              41.866675
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "5775eba03674ea1cb3550ffb38321432"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "color": "grey",
        "name": "Arch",
        "height": 40,
        "base_height": 30
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616286,
              41.866119
            ],
            [
              -87.616286,
              41.866144
            ],
            [
              -87.616089,
              41.866149
            ],
            [
              -87.616086,
              41.86612
            ],
            [
              -87.616286,
              41.866119
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "598832b1512dc9facc855c5367251531"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Arch",
        "color": "grey",
        "height": 40,
        "base_height": 30
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616287,
              41.866343
            ],
            [
              -87.616288,
              41.866374
            ],
            [
              -87.616076,
              41.866378
            ],
            [
              -87.616077,
              41.866347
            ],
            [
              -87.616287,
              41.866343
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "59ed13d4411ff5f88714d9af539788d2"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "color": "grey",
        "name": "center_arch",
        "base_height": 30,
        "height": 40
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.61737,
              41.866198
            ],
            [
              -87.617372,
              41.86624
            ],
            [
              -87.616708,
              41.866243
            ],
            [
              -87.616708,
              41.866203
            ],
            [
              -87.61737,
              41.866198
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "67f8952a18dfe21ee0744a3e86bc41d8"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Kids Zone",
        "height": 0,
        "base_height": 40,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.615719,
              41.866354
            ],
            [
              -87.615718,
              41.866381
            ],
            [
              -87.616077,
              41.866378
            ],
            [
              -87.616077,
              41.866347
            ],
            [
              -87.615719,
              41.866354
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "6bb2c92386bcf4678113d6b3e400ae3b"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Under the Earth",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616089,
              41.866149
            ],
            [
              -87.616089,
              41.866119
            ],
            [
              -87.615711,
              41.866124
            ],
            [
              -87.615713,
              41.866147
            ],
            [
              -87.616089,
              41.866149
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "844c87987089df6b9db3923f6a00e4d6"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Under the Earth",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616707,
              41.866115
            ],
            [
              -87.616286,
              41.866119
            ],
            [
              -87.616285,
              41.866144
            ],
            [
              -87.616705,
              41.866141
            ],
            [
              -87.616707,
              41.866115
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "85547a1ecdbd2ca1fdc6324aea3c6b70"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "North Entrance",
        "height": 0,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617386,
              41.86667
            ],
            [
              -87.617388,
              41.866786
            ],
            [
              -87.617228,
              41.866786
            ],
            [
              -87.617226,
              41.866848
            ],
            [
              -87.616867,
              41.866849
            ],
            [
              -87.616868,
              41.866791
            ],
            [
              -87.616718,
              41.866791
            ],
            [
              -87.616718,
              41.866672
            ],
            [
              -87.617386,
              41.86667
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "91ab1ee01729c33568c7b57eb258e699"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Ancient Egypt",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617394,
              41.865799
            ],
            [
              -87.617405,
              41.86615
            ],
            [
              -87.617802,
              41.866147
            ],
            [
              -87.6178,
              41.866167
            ],
            [
              -87.617369,
              41.866172
            ],
            [
              -87.617364,
              41.865799
            ],
            [
              -87.617394,
              41.865799
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "943171d55d207024791e15294def7e8f"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Ancient Egypt",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617976,
              41.866166
            ],
            [
              -87.617976,
              41.866143
            ],
            [
              -87.618309,
              41.866139
            ],
            [
              -87.618309,
              41.866161
            ],
            [
              -87.617976,
              41.866166
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "a37230898905988cab9b72927dc99258"
    },
    {
      "type": "Feature",
      "properties": {
        "name": "West Hallway",
        "level": 1,
        "base_height": 0,
        "height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.618309,
              41.866161
            ],
            [
              -87.618312,
              41.86626
            ],
            [
              -87.61737,
              41.866272
            ],
            [
              -87.61737,
              41.86617
            ],
            [
              -87.618309,
              41.866161
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "c7cc79da8711d746985f23a9b22c1d5e"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "Kids Zone",
        "height": 40,
        "base_height": 0,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616286,
              41.866343
            ],
            [
              -87.616286,
              41.866374
            ],
            [
              -87.61671,
              41.866371
            ],
            [
              -87.616708,
              41.866338
            ],
            [
              -87.616286,
              41.866343
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "cfbf2aee6a73a45c12e7fc7432d6009e"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "South Entrance",
        "height": 0,
        "base_height": 0,
        "color": "teal"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.617359,
              41.865801
            ],
            [
              -87.617355,
              41.865674
            ],
            [
              -87.617221,
              41.865677
            ],
            [
              -87.617219,
              41.86559
            ],
            [
              -87.616824,
              41.865595
            ],
            [
              -87.616826,
              41.86568
            ],
            [
              -87.616695,
              41.865683
            ],
            [
              -87.6167,
              41.865813
            ],
            [
              -87.617359,
              41.865801
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "d71ab89467076ad023161c37f4ff0d5f"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "East Arch",
        "height": 40,
        "base_height": 30,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.616688,
              41.866675
            ],
            [
              -87.616716,
              41.866675
            ],
            [
              -87.616699,
              41.865814
            ],
            [
              -87.616665,
              41.865814
            ],
            [
              -87.616688,
              41.866675
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "dd2baec57e4079eb65dcae5be495da62"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 1,
        "name": "outer-walls",
        "base_height": 0,
        "height": 40,
        "color": "grey"
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.618087,
              41.86666
            ],
            [
              -87.618087,
              41.866674
            ],
            [
              -87.618319,
              41.866674
            ],
            [
              -87.618298,
              41.865757
            ],
            [
              -87.618326,
              41.865756
            ],
            [
              -87.618347,
              41.866693
            ],
            [
              -87.618068,
              41.866696
            ],
            [
              -87.618067,
              41.866675
            ],
            [
              -87.61741,
              41.866684
            ],
            [
              -87.617416,
              41.866802
            ],
            [
              -87.617247,
              41.866803
            ],
            [
              -87.617246,
              41.866866
            ],
            [
              -87.616846,
              41.866868
            ],
            [
              -87.616848,
              41.866807
            ],
            [
              -87.61669,
              41.866811
            ],
            [
              -87.616693,
              41.866693
            ],
            [
              -87.615992,
              41.866701
            ],
            [
              -87.615992,
              41.866729
            ],
            [
              -87.615703,
              41.866733
            ],
            [
              -87.615689,
              41.866377
            ],
            [
              -87.615412,
              41.866382
            ],
            [
              -87.615411,
              41.866122
            ],
            [
              -87.615689,
              41.866119
            ],
            [
              -87.615682,
              41.865781
            ],
            [
              -87.615966,
              41.865779
            ],
            [
              -87.615969,
              41.865798
            ],
            [
              -87.616669,
              41.865794
            ],
            [
              -87.616663,
              41.865662
            ],
            [
              -87.6168,
              41.865661
            ],
            [
              -87.616796,
              41.865571
            ],
            [
              -87.61726,
              41.865559
            ],
            [
              -87.617258,
              41.865654
            ],
            [
              -87.617388,
              41.865652
            ],
            [
              -87.617395,
              41.865778
            ],
            [
              -87.618045,
              41.865773
            ],
            [
              -87.618044,
              41.865742
            ],
            [
              -87.618325,
              41.865739
            ],
            [
              -87.618326,
              41.865758
            ],
            [
              -87.61807,
              41.865761
            ],
            [
              -87.61807,
              41.865789
            ],
            [
              -87.617356,
              41.8658
            ],
            [
              -87.617356,
              41.865672
            ],
            [
              -87.617218,
              41.865677
            ],
            [
              -87.617215,
              41.86559
            ],
            [
              -87.616822,
              41.865595
            ],
            [
              -87.616827,
              41.86568
            ],
            [
              -87.616694,
              41.865681
            ],
            [
              -87.616697,
              41.865813
            ],
            [
              -87.615939,
              41.865824
            ],
            [
              -87.615937,
              41.8658
            ],
            [
              -87.615706,
              41.865802
            ],
            [
              -87.615713,
              41.866143
            ],
            [
              -87.615441,
              41.86615
            ],
            [
              -87.61545,
              41.866357
            ],
            [
              -87.615724,
              41.866353
            ],
            [
              -87.615733,
              41.866712
            ],
            [
              -87.615959,
              41.86671
            ],
            [
              -87.615959,
              41.866688
            ],
            [
              -87.616719,
              41.866672
            ],
            [
              -87.61672,
              41.866791
            ],
            [
              -87.616869,
              41.86679
            ],
            [
              -87.616868,
              41.86685
            ],
            [
              -87.617223,
              41.866847
            ],
            [
              -87.617227,
              41.866786
            ],
            [
              -87.617387,
              41.866785
            ],
            [
              -87.617383,
              41.86667
            ],
            [
              -87.618087,
              41.86666
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "ef6512f46485e27963c248bcc945c3db"
    },
    {
      "type": "Feature",
      "properties": {
        "level": 2,
        "name": "building",
        "height": 140,
        "base_height": 120,
        "color": "rgba(255, 255, 255, .4)",
      },
      "geometry": {
        "coordinates": [
          [
            [
              -87.618303,
              41.866673
            ],
            [
              -87.618087,
              41.866677
            ],
            [
              -87.618089,
              41.866662
            ],
            [
              -87.617379,
              41.866667
            ],
            [
              -87.617381,
              41.866784
            ],
            [
              -87.617217,
              41.866784
            ],
            [
              -87.617219,
              41.866848
            ],
            [
              -87.616855,
              41.866851
            ],
            [
              -87.616855,
              41.866794
            ],
            [
              -87.616717,
              41.866794
            ],
            [
              -87.616717,
              41.866684
            ],
            [
              -87.615961,
              41.866685
            ],
            [
              -87.615965,
              41.866705
            ],
            [
              -87.615734,
              41.86671
            ],
            [
              -87.615722,
              41.866359
            ],
            [
              -87.615456,
              41.866361
            ],
            [
              -87.615449,
              41.866151
            ],
            [
              -87.615707,
              41.866145
            ],
            [
              -87.615704,
              41.865963
            ],
            [
              -87.61571,
              41.865823
            ],
            [
              -87.615933,
              41.86582
            ],
            [
              -87.616514,
              41.865817
            ],
            [
              -87.617349,
              41.865796
            ],
            [
              -87.617777,
              41.865789
            ],
            [
              -87.618061,
              41.865791
            ],
            [
              -87.618071,
              41.865761
            ],
            [
              -87.618293,
              41.865761
            ],
            [
              -87.618303,
              41.866673
            ]
          ]
        ],
        "type": "Polygon"
      },
      "id": "8094287d043d2038625b4087983ca545"
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

map.on('load', function() {
map.addSource('floorplan1', {

'type': 'geojson',
'data':
'indoor3dmap.geojson'
});
map.addLayer({
'id': 'room-extrusion1',
'type': 'fill-extrusion',
'source': 'floorplan1',
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
'fill-extrusion-opacity': 0.9
}
});
});