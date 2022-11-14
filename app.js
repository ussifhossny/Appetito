let yesBtn = document.getElementById("yesBtn");
let home = document.getElementById("home");
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let howBtn = document.getElementById("howBtn");


yesBtn.addEventListener("click", () => {
    home.classList.add("hide");
    page2.classList.remove("hide")
});
howBtn.addEventListener("click", () => {
    page2.classList.add("hide")
    page3.classList.remove("hide")
});