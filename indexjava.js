const btnquery=document.querySelector(".contact-form-btn");


btnquery.addEventListener("click",function(event){
    event.preventDefault();
    var elem = document.getElementById("abc");
    elem.classList.add("hidecss")
    var elem2=document.querySelector(".thankyoumsg");
    elem2.classList.remove("thankyoumsg")
    elem2.classList.add("showcss")
})