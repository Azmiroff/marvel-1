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

