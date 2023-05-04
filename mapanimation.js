const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];

let APIKEY = prompt("Please enter API KEY");
  
mapboxgl.accessToken = APIKEY
  
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542,42.358862],
    zoom: 12
});

  var marker = new mapboxgl.Marker()
      .setLngLat(busStops[0])
      .addTo(map);

  let counter = 0;
  let isGoingUp = true;
  
  function move() {
    if (isGoingUp){counter++}
    else {counter--}
    if (counter == 0 || counter == busStops.length-1){
        isGoingUp = !isGoingUp
    }

    marker.setLngLat(busStops[counter]);
    setTimeout(move, 1000);
  }