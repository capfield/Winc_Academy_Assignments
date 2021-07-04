

let textBackground = document.querySelector(".text-background");


    const background = document.querySelector(".body-background");
    const menuDiv = document.querySelector(".menu");
    const dropDownMenu = document.querySelector(".ul-menu");
    const hamburger = document.querySelector(".hamburger");


    const homeBackground = document.querySelector(".home");
    const blueBackground = document.querySelector(".blue");
    const greenBackground = document.querySelector(".green");
    const yellowBackground = document.querySelector(".yellow");
    const greyBackground = document.querySelector(".grey");
    const orangeBackground = document.querySelector(".orange");


hamburger.addEventListener("mouseover", () => {
    dropDownMenu.classList.toggle("visible");
})


homeBackground.addEventListener("click", () => {
    background.className = "home-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is Indianred.";
})


blueBackground.addEventListener("click", () => {
    background.className = "blue-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is blue.";
})


greenBackground.addEventListener("click", () => {
    background.className = "green-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is green.";
})


yellowBackground.addEventListener("click", () => {
    background.className = "yellow-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is yellow.";
})

greyBackground.addEventListener("click", () => {
    background.className = "grey-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is grey.";
})

orangeBackground.addEventListener("click", () => {
    background.className = "orange-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is orange.";
})