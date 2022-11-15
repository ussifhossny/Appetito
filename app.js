let yesBtn = document.getElementById("yesBtn");
let home = document.getElementById("home");
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")
let howBtn = document.getElementById("howBtn");
let noThanks = document.getElementById("noThanks");



yesBtn.addEventListener("click", () => {
    home.classList.add("hide");
    page2.classList.remove("hide")
});
howBtn.addEventListener("click", () => {
    page2.classList.add("hide")
    page3.classList.remove("hide")
});

noThanks.addEventListener("click", () => {
    page2.classList.add("hide");
    page4.classList.remove("hide")
    document.body.style.background = "black"; 
})
