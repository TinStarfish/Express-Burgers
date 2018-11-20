var APIKey = 'AIzaSyDshVGuIxeUlk7BOJEmTR512a00C_DRmIU';
var map;
var ZOOM_DEFAULT = 10;
var DEFAULT_LOCATION;
var storeX = 39;
var storeY = -112;

window.onload = function() {
    document.getElementById("image_0").source = burgerPage.imgpath_1;
    
};

function Start() {
    //InitializeMap();
    
    
}

function InitializeMap() {
    var urluru = {lat: 40.758480, lng:  -111.888138};
    var map = new google.maps.Map(document.getElementById("map"), {zoom: 10, center: urluru});
    var marker = new google.maps.Marker({
        position: urluru,
        title: "Express Burgers",
        icon: "Express_Burger_Assets/mapIcon.png",
        scaledSize: "[25,25]",
        map: map});
    //var marker = new google.maps.Marker({position: {lat: storeX, lng: storeY}, map: map})
    
}

function AddMapMarkers() {
    
    
    
}

var burgerPage = {
    "title":"Burgers",
    "content_1":"Cheeseburger- $4.99",
    "imgpath_1":"/Express_Burger_Assets/Assets_Burgers/burgers_main-bacon-cheeseburger-hamburger-stand.jpg",
    "content_2":"Breakfast Burger- $6.99",
    "imgpath_2":"/Express_Burger_Assets/Assets_Burgers/",
    "content_3":"Western Bacon Cheeseburger- $12.99",
    "imgpath_3":"/Express_Burger_Assets/Assets_Burgers/",
    "content_4":"Veggie Burger- $11.99",
    "imgpath_4":"/Express_Burger_Assets/Assets_Burgers/"
    

}

var sidesPage = {
    "title":"Sides",
    "content_1":"Medium Crinkle Fries- $2.99",
    "imgpath_1":"/Express_Burger_Assets/Assets_Sides/C93.jpg",
    "content_2":"Mozzarella Sticks- $5.99",
    "imgpath_2":"/Express_Burger_Assets/Assets_Sides/99-Cent-Mozzarella-Sticks-At-Sonic-On-June-7-2018-678x381.jpg",
    "content_3":"8 Piece Chicken Tenders- $8.99",
    "imgpath_3":"/Express_Burger_Assets/Assets_Sides/099490-600x600-A.jpg",
    "content_4":"Lightly Fried Fish Fillets- $9.99",
    "imgpath_4":"/Express_Burger_Assets/Assets_Sides/a0aa52ac-c0fa-4b19-92ef-01c89f2a2e00.jpg"
    
    
    
}

var drinksPage = {
    "title":"Sides",
    "content_1":"Medium Crinkle Fries- $2.99",
    "imgpath_1":"/Express_Burger_Assets/Assets_Sides/C93.jpg",
    "content_2":"Mozzarella Sticks- $5.99",
    "imgpath_2":"/Express_Burger_Assets/Assets_Sides/99-Cent-Mozzarella-Sticks-At-Sonic-On-June-7-2018-678x381.jpg",
    "content_3":"8 Piece Chicken Tenders- $8.99",
    "imgpath_3":"/Express_Burger_Assets/Assets_Sides/099490-600x600-A.jpg",
    "content_4":"Lightly Fried Fish Fillets- $9.99",
    "imgpath_4":"/Express_Burger_Assets/Assets_Sides/a0aa52ac-c0fa-4b19-92ef-01c89f2a2e00.jpg"
    
    
    
}

var dessertsPage = {
    "title":"Sides",
    "content_1":"Medium Crinkle Fries- $2.99",
    "imgpath_1":"/Express_Burger_Assets/Assets_Sides/C93.jpg",
    "content_2":"Mozzarella Sticks- $5.99",
    "imgpath_2":"/Express_Burger_Assets/Assets_Sides/99-Cent-Mozzarella-Sticks-At-Sonic-On-June-7-2018-678x381.jpg",
    "content_3":"8 Piece Chicken Tenders- $8.99",
    "imgpath_3":"/Express_Burger_Assets/Assets_Sides/099490-600x600-A.jpg",
    "content_4":"Lightly Fried Fish Fillets- $9.99",
    "imgpath_4":"/Express_Burger_Assets/Assets_Sides/a0aa52ac-c0fa-4b19-92ef-01c89f2a2e00.jpg"
    
    
    
}

function OnLoad() {
    console.log(burgerPage);
   
    
    
}

function WhatPage() {
    var title = document.title;
    
    
}

OnLoad();

