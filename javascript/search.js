let search = document.getElementById("search"); // On récupère le div qui a pour id, search
let text = document.getElementById("text") ;
let iconSearch = document.getElementById("iconSearch");
let iconBack = document.getElementById("iconBack");


search.addEventListener('click', ()=>{
    text.style.display = "none";
    iconSearch.style.display = "none";
    iconBack.style.display = "block";
});
