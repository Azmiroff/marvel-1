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