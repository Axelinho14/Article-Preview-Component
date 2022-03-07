var clickOn = document.querySelectorAll(".bck-share")
var shareVisible = document.getElementById("hidden-share")

clickOn.forEach(clickOn =>{
clickOn.addEventListener("click", event =>{
    if(getComputedStyle(shareVisible).display != "flex"){
        shareVisible.style.display = "flex";
        clickOn.style.backgroundColor = "hsl(214, 17%, 51%)";
        clickOn.style.color = "white";
    }
    else{
        shareVisible.style.display = "none";
        clickOn.style.backgroundColor = "hsl(210, 46%, 95%)";
        clickOn.style.color = "hsl(214, 17%, 51%)";
    };
});
});