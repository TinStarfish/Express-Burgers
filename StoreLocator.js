var APIKey = 'AIzaSyDshVGuIxeUlk7BOJEmTR512a00C_DRmIU';
var map;
var ZOOM_DEFAULT = 10;
var DEFAULT_LOCATION;
var storeX = 39;
var storeY = -112;

window.onload = function() {
    InitializeMap();
    
};

function Start() {
    InitializeMap();
    
    
}

function InitializeMap() {
    var urluru = {lat: 40.758480, lng:  -111.888138};
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 10, center: urluru});
    var marker = new google.maps.Marker({
        position: urluru,
        title: "Express Burger",
        icon: "mapIcon.png",
        map: map});
    //var marker = new google.maps.Marker({position: {lat: storeX, lng: storeY}, map: map})
    
}

function AddMapMarkers() {
    
    
    
}

