var picURL = ["1.jpg","2.jpg","3.jpg"];
var picCaption = ["Hot Car","Great Bike","A power brick"];
var picDesc = ["A car that no one wanted", "A bike that was well loved but ultimately broke", "Neither wanted or needed but existed"];

//iterates over the picture arrays and adds them to the DOM
for (var i = 0; i < picURL.length; i++){

    //creates a div to contain each picture and caption
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id","container" + i);
    newDiv.setAttribute("class","picture");
    document.getElementById("picture").appendChild(newDiv);

    //creates the URL for the details of the image
    var url = "details.html?pic=" +  picURL[i] + 
    "&caption=" + picCaption[i] + "&details=" + picDesc[i];
    console.log("theurl: " + url);

    //creates the a tag and adds the details page URL to it
    var a = document.createElement("a");
    a.setAttribute("href",url);
    a.setAttribute("id","imageLink" + i);
    document.getElementById("container"+i).appendChild(a);

    //creates the image and adds it to the div container
    var image = document.createElement("img");
    image.setAttribute("src", picURL[i]);
    image.setAttribute("id","picture" + i);
    image.setAttribute("class","picture");
    document.getElementById("imageLink"+i).appendChild(image);

    //creates the caption and adds it to the div container
    var caption = document.createElement("p");
    caption.innerHTML = picCaption[i];
    caption.setAttribute("id", "caption" + i);
    document.getElementById("container"+i).appendChild(caption);
}

    // var url = "details.html?pic=1.jpg&details=This is the end of the road for this car";