var picURL = ["1.jpg","2.jpg","3.jpg"];
var picCaption = ["Hot Car","Great Bike","A power brick"];
var picDesc = ["A car that no one wanted", "A bike that was well loved but ultimately broke", "Neither wanted or needed but existed"];

//iterates over the picture array and adds them to the DOM
for (var i = 0; i < picURL.length; i++){
    var image = document.createElement("img");
    image.setAttribute("src", picURL[i]);
    document.getElementById("picture").appendChild(image);

    var caption = document.createElement("p");
    
}

