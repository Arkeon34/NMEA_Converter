function makeRequest(){
    query = document.getElementById('req').value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/makeRequest?query=" + encodeURI(query));
    xhr.send();

    xhr.onload = function() {
        console.log(xhr.response)
        response = xhr.response;
        updateResults(response);
    }
}

function updateResults(response){
    var resultsBloc = document.getElementById("results");
    var mapBloc = document.getElementById("mapBloc");

    mapBloc.innerHTML = '';
    resultsBloc.innerHTML = '';

    result_html = '<h3 class="request-result">Résultat de la requête :</h3>'
        var response = JSON.parse(response)
        elem = response['sentences']
        display_map = '<div id="map"></div>'
    resultsBloc.innerHTML = result_html + elem

    if(response['lat'] != undefined){
        mapBloc.innerHTML = display_map;
    }


    var map = L.map('map').setView([response['lat'], response['lon']], 13);
    map.addControl(new L.Control.Fullscreen());

    map.on('fullscreenchange', function () {
        if (map.isFullscreen()) {
            console.log('entered fullscreen');
        } else {
            console.log('exited fullscreen');
        }
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJrZW9uIiwiYSI6ImNremZzbWsxOTB1ZGoyb29jYjllNXRud24ifQ.klow3lsorlmsr6EH-GPT1w', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYXJrZW9uIiwiYSI6ImNremZzbWsxOTB1ZGoyb29jYjllNXRud24ifQ.klow3lsorlmsr6EH-GPT1w'
    }).addTo(map);
    L.marker([response['lat'], response['lon']]).addTo(map)
    .bindPopup('Position exacte de<br> la trame NMEA. 📌')
    .openPopup();

}
