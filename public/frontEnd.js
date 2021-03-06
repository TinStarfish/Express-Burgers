var burgerPage = {
    "title":"Burgers",
    "content_0":"Cheeseburger- $4.99. The classic Express Cheeseburger.",
    "imgpath_0":"Express_Burger_Assets/Assets_Burgers/burgers_main-bacon-cheeseburger-hamburger-stand.jpg",
    "content_1":"Breakfast Burger- $6.99. Bacon, eggs, hashbrowns, and of course, a juicy sausage patty. What more could you want in a breakfast sandwich?",
    "imgpath_1":"Express_Burger_Assets/Assets_Burgers/carl-s-jrs-breakfast-burger-now-available-all-day.jpg",
    "content_2":"Western Bacon Cheeseburger- $12.99. You ever visit a town in the middle of nowhere? Where the people are good, and the food is good. That's this burger.",
    "imgpath_2":"Express_Burger_Assets/Assets_Burgers/western_bacon_cheeseburger_cke_restaurants_450x360.jpg",
    "content_3":"Veggie Burger- $11.99. For our vegetarian friends. Nothin' like the real thing, but we try our best with what we got.",
    "imgpath_3":"Express_Burger_Assets/Assets_Burgers/veggie-burger-main-main.jpg",
    "content_4":"The Mega Burger- $12.99. This burger will leave you screaming with joy. It's large and in charge, and doesn't care what you think about it.",
    "imgpath_4":"Express_Burger_Assets/Assets_Burgers/10210001-big-jack-daddy-burger.jpg"
    
    

}

var sidesPage = {
    "title":"Sides",
    "content_0":"Medium Crinkle Fries- $2.99. House specialty. Salty, crinkled, Idaho spud Fries.",
    "imgpath_0":"Express_Burger_Assets/Assets_Sides/C93.jpg",
    "content_1":"Mozzarella Sticks- $5.99. Mozzarella sticks are best when shared with friends. Or by yourself. We don't judge.",
    "imgpath_1":"Express_Burger_Assets/Assets_Sides/99-Cent-Mozzarella-Sticks-At-Sonic-On-June-7-2018-678x381.jpg",
    "content_2":"8 Piece Chicken Tenders- $8.99. The classic 'safe choice' when ordering from a new restaraunt.",
    "imgpath_2":"Express_Burger_Assets/Assets_Sides/099490-600x600-A.jpg",
    "content_3":"Lightly Fried Fish Fillets- $9.99. Lightly Fried Fish Fillets.",
    "imgpath_3":"Express_Burger_Assets/Assets_Sides/a0aa52ac-c0fa-4b19-92ef-01c89f2a2e00.jpg",
    "content_4":"Garden Salad- $8.99. Cherry tomatoes, Cucumber slices, and of course, lettuce. These ingredients form our delectible garden salad.",
    "imgpath_4":"Express_Burger_Assets/Assets_Sides/garden-salad-800x800.jpg"
    
    
    
}

var drinksPage = {
    "title":"Sides",
    "content_0":"Fountain Drink (Coca-Cola Products)- $2.99. Coke - Sprite - Coke Light - Coke 2L - Sprite 2L- Fanta 2L",
    "imgpath_0":"/Express_Burger_Assets/Assets_Drinks/coke-all1.png",
    "content_1":"Lemonade- $3.99. Fresh squeezed, with a real lemon slice. Perfect for a hot, summer day.",
    "imgpath_1":"/Express_Burger_Assets/Assets_Drinks/2322CC-lg.jpg",
    "content_2":"Local Beverages- $3.99. These beverages are all selected from local companies.",
    "imgpath_2":"/Express_Burger_Assets/Assets_Drinks/drinks-695x521.jpg",
    "content_3":"Ginger Ale- $2.99. A nice glass of Ginger ale.",
    "imgpath_3":"/Express_Burger_Assets/Assets_Drinks/homemade-hawaiian-ginger-ale-940.jpg",
    "content_4":"Root Beer- $3.99. Homegrown, root cellar root beer.",
    "imgpath_4":"/Express_Burger_Assets/Assets_Drinks/root-beer-677x410.jpg"
    
    
    
}

var dessertsPage = {
    "title":"Desserts",
    "content_0":"Root Beer Float- $3.99. Ice cream and Root beer, in perfect harmony.",
    "imgpath_0":"Express_Burger_Assets/Assets_Desserts/2300-lg.jpg",
    "content_1":"Lava Brownie- $5.99. The chocolate oozes from the side of this delicious brownie.",
    "imgpath_1":"Express_Burger_Assets/Assets_Desserts/Lava-Brownies-Square.jpg",
    "content_2":"Banana Split Sundae- $5.99. A banana. Split right in half. With some ice cream and other toppings down the middle.",
    "imgpath_2":"Express_Burger_Assets/Assets_Desserts/90948598-homemade-banana-split-sundae-american-dessert-isolated-on-white-background.jpg",
    "content_3":"Cookie Pie- $6.99. You ever see one of those monster cookies? Well, this cookie is twice as wide and twice as thick.",
    "imgpath_3":"Express_Burger_Assets/Assets_Desserts/268685-papa-johns-big-cookie-primary.jpg",
    "content_4":"Cheesecake Slice- $6.99. This cheesecake has an almost velvetty texture that leaves you wanting more.",
    "imgpath_4":"Express_Burger_Assets/Assets_Desserts/classic-cheesecake-d104417_horiz.jpg"
    
    
}

function OnLoad() {
    console.log(document.getElementById('title').innerHTML);
    
    /* ["Home", "/"],
        ["Burgers", "burgers"],
        ["Sides", "Sides"],
        ["Desserts", "Desserts"],
        ["Drinks", "DrinksMenu"],
        ["Store Location", "StoreLocation"]
    ],*/
    if(document.getElementById('title').innerHTML=="Burgers") {
        document.getElementById('image_0').src = burgerPage.imgpath_0;
        document.getElementById('item_0').innerHTML = burgerPage.content_0;
        document.getElementById('image_1').src = burgerPage.imgpath_1;
        document.getElementById('item_1').innerHTML = burgerPage.content_1;
        document.getElementById('image_2').src = burgerPage.imgpath_2;
        document.getElementById('item_2').innerHTML = burgerPage.content_2;
        document.getElementById('image_3').src = burgerPage.imgpath_3;
        document.getElementById('item_3').innerHTML = burgerPage.content_3;
        document.getElementById('image_4').src = burgerPage.imgpath_4;
        document.getElementById('item_4').innerHTML = burgerPage.content_4;

    }
    if(document.getElementById('title').innerHTML=="Sides") {
        document.getElementById('image_0').src = sidesPage.imgpath_0;
        document.getElementById('item_0').innerHTML = sidesPage.content_0;
        document.getElementById('image_1').src = sidesPage.imgpath_1;
        document.getElementById('item_1').innerHTML = sidesPage.content_1;
        document.getElementById('image_2').src = sidesPage.imgpath_2;
        document.getElementById('item_2').innerHTML = sidesPage.content_2;
        document.getElementById('image_3').src = sidesPage.imgpath_3;
        document.getElementById('item_3').innerHTML = sidesPage.content_3;
         document.getElementById('image_4').src = sidesPage.imgpath_4;
        document.getElementById('item_4').innerHTML = sidesPage.content_4;
        
    }
    
    if(document.getElementById('title').innerHTML=="Desserts") {
        document.getElementById('image_0').src = dessertsPage.imgpath_0;
        document.getElementById('item_0').innerHTML = dessertsPage.content_0;
        document.getElementById('image_1').src = dessertsPage.imgpath_1;
        document.getElementById('item_1').innerHTML = dessertsPage.content_1;
        document.getElementById('image_2').src = dessertsPage.imgpath_2;
        document.getElementById('item_2').innerHTML = dessertsPage.content_2;
        document.getElementById('image_3').src = dessertsPage.imgpath_3;
        document.getElementById('item_3').innerHTML = dessertsPage.content_3;
         document.getElementById('image_4').src = dessertsPage.imgpath_4;
        document.getElementById('item_4').innerHTML = dessertsPage.content_4;

    }
    
    if(document.getElementById('title').innerHTML=="Drinks Menu") {
        document.getElementById('image_0').src =drinksPage.imgpath_0;
        document.getElementById('item_0').innerHTML = drinksPage.content_0;
        document.getElementById('image_1').src = drinksPage.imgpath_1;
        document.getElementById('item_1').innerHTML = drinksPage.content_1;
        document.getElementById('image_2').src = drinksPage.imgpath_2;
        document.getElementById('item_2').innerHTML = drinksPage.content_2;
        document.getElementById('image_3').src = drinksPage.imgpath_3;
        document.getElementById('item_3').innerHTML = drinksPage.content_3;
        document.getElementById('image_4').src = drinksPage.imgpath_4;
        document.getElementById('item_4').innerHTML = drinksPage.content_4;

    }

    
}

function WhatPage() {
    var title = document.title;
    
    
}
