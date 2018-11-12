var APIKey = 'AIzaSyDJ0F8vVstgnuk5YRi7umJG-ERrcy82ZfI';
var map;
Start();


function Start() {
    InitializeMap();
    
    
}

function InitializeMap() {
    var urluru = {lat: -25.344, lng: 131.036};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: urluru});
    var marker = new google.maps.Marker({position: urluru, map: map});
    
}



