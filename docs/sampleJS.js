function no18(){
    alert("If you are under eighteen years old, please close this window.")
}

function animearray(){
    var anime = ['Jujutsu Kaisen','Gin Tama','Fate/Zero'];
    var animestr = "";
    for (let i=0; i<anime.length; i++){
        console.log(anime[i]);
        alert(anime[i]);
    };
}
  
function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];

    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
    var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

    var map = L.map('map', {
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    //Click event
    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}


  
function add() {
    var newWord = document.getElementById("inputWord").value.trim();
    if (newWord==""){
        document.getElementById("inputWord").value = "";
        return;
    }
    document.getElementById("words").innerHTML = document.getElementById("words").innerHTML + " " + newWord;
    document.getElementById("inputWord").value = "";
  }

function parseArray(arr){
    return arr.sort();
}

function sortWords(textId) {
    var text = document.getElementById(textId).innerHTML;
    var wordArray = text.split(" ");
    wordArray.shift();

    var sortedArray = parseArray(wordArray);
    document.getElementById("sorted").innerHTML = sortedArray;
  }