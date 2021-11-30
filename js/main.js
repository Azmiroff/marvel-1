
var mainCard = movies.slice(0, 20)
var elList = document.querySelector("#card");

for (let i = 0; i < mainCard.length; i++) {
     
    var newList = document.createElement("div");
    newList.setAttribute("class", "border border-blue p-2 m-3 w-50");
    var newImg = document.createElement("img")
    newImg.setAttribute("src", `http://i3.ytimg.com/vi/${mainCard[i].ytid}/maxresdefault.jpg`);
    newImg.setAttribute("class" , "card-img-top")

    var cardH5 =document.createElement("h5");
    cardH5.setAttribute("class" , "p-3")
    cardH5.textContent = mainCard[i].Title;

    var cardH6 = document.createElement("h6");
    cardH6.textContent = "Year:"+" "+ mainCard[i].movie_year; 

    var cardP = document.createElement("p");
    cardP.textContent = "Rating:"+" "+ mainCard[i].imdb_rating;

    var cardLink = document.createElement("a");
    cardLink.setAttribute("class", "btn btn-outline-primary");
    cardLink.setAttribute("href", `https://www.youtube.com/watch?v=${mainCard[i].ytid}`);
    cardLink.setAttribute("target", "_blank")
    cardLink.textContent = "Watch trailer";

    var cardBTN = document.createElement("button");
    cardBTN.setAttribute("class", "btn btn-outline-secondary ms-1");
    cardBTN.textContent = "More info";


    var bookmarkBTN = document.createElement("button");
    bookmarkBTN.setAttribute("class", "btn btn-outline-success ms-2"),
    bookmarkBTN.textContent = "Bookmarker"


    elList.appendChild(newList);
    newList.appendChild(newImg);
    newList.appendChild(cardH5);
    newList.appendChild(cardH6);
    newList.appendChild(cardP);
    newList.appendChild(cardLink);
    newList.appendChild(cardBTN);
    newList.appendChild(bookmarkBTN)
}

var render = movies.slice(0, 20);


var elList = document.querySelector("#list");

for (let i = 0; i < render.length; i++) {
    
    var new_List = document.createElement("div");
    new_List.setAttribute("class", "border border-dark p-2 m-3 w-50");
    var new_img = document.createElement("img")
    new_img.setAttribute("src", `http://i3.ytimg.com/vi/${render[i].ytid}/maxresdefault.jpg`);
    
    new_img.setAttribute("class" , "card-img-top");
    
    var newH5 = document.createElement("h5");
    newH5.setAttribute("class", "pt-2")
    newH5.textContent = render[i].Title;
    
    var newH6 = document.createElement("h6");
    newH6.textContent = "Released:"+" "+ render[i].movie_year; 

    var newP = document.createElement("p");
    newP.textContent = "Reyting:"+" "+ render[i].imdb_rating;

    var newLink = document.createElement("a");
    newLink.setAttribute("class", "btn btn-outline-primary");
    newLink.setAttribute("href", `https://www.youtube.com/watch?v=${render[i].ytid}`);
    newLink.setAttribute("target", "_blank")
    newLink.textContent = "Watch trailer";

    var btnMore = document.createElement("button");
    btnMore.setAttribute("class", "btn btn-outline-secondary ms-2");
    btnMore.textContent = "More info";

    var btnBookmark = document.createElement("button");
    btnBookmark.setAttribute("class", "btn btn-outline-success ms-2"),
    btnBookmark.textContent = "Bookmarker"

    
    elList.appendChild(new_List);
    new_List.appendChild(new_img);
    new_List.appendChild(newH5);
    new_List.appendChild(newH6);
    new_List.appendChild(newP);
    new_List.appendChild(newLink);
    new_List.appendChild(btnMore);
    new_List.appendChild(btnBookmark);
}
