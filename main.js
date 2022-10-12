let p1el = document.getElementById("p1");
let p2el = document.getElementById("p2");
let fish = document.getElementById("fish");
let loot = document.getElementById("img-result");
let methEl = document.getElementById("num-meth");
let $el = document.getElementById("$");
let chickenel = document.getElementById("num-chicken");
let hankel = document.getElementById("num-hank");
let character = ("walt");
let hankel2 = document.getElementById("num-hank2");
let btn2 = document.getElementById("btnopen");
let btn3 = document.getElementById("open3");
let btn4 = document.getElementById("open4");

p1el.addEventListener("click", selectp1());

p2el.addEventListener("click", selectp2());

function selectp1() {
    p1el.classList.add("active");
    p2el.classList.remove("active");
    character ="walt"
}


function selectp2() {
    p2el.classList.add("active");
    p1el.classList.remove("active");
    character ="mike";
}





let numMeth = 0;
let num$ = 0;
let numchicken = 0;
let numhank = 0;
let numhank2 = 0;
let huell= 0;
document.getElementById("num-hank").innerHTML = `${numhank}`;
document.getElementById("num-chicken").innerHTML = `${numchicken}`;

fish.addEventListener("click", grub);
function grub() { 
    imgresult.src = "img/walterloot.png";
    setTimeout(fishin, 300); }

function fishin() {
if (character === "walt"){
    let random = Math.random();
        if (random < 0.7) {
        numMeth++;
        imgresult.src = "img/meth.png";
        document.getElementById("num-meth").innerHTML = `${numMeth}`;
        } else if (random > 0.7 && random < 0.93) {
        num$++;
        imgresult.src = "img/dollar.png";
        document.getElementById("num-$").innerHTML = `${num$}`;
        } else if (random > 0.93 && random < 0.97) {
            num$++;
            imgresult.src = "img/dollar.png";
            document.getElementById("num-$").innerHTML = `${num$}`;
            } else if (random > 0.98) {
                numhank++;
                imgresult.src = "img/hank.png";
                document.getElementById("num-hank").innerHTML = `${numhank}`;
                }            
} else if (character === "mike"){
    let random = Math.random();
    if (random < 0.09) {
        imgresult.src = "img/meth.png";
        numMeth++;
        document.getElementById("num-meth").innerHTML = `${numMeth}`;
        } else if (random > 0.09 && random < 0.75) {
            num$++;
            imgresult.src = "img/dollar.png";
            document.getElementById("num-$").innerHTML = `${num$}`;
        } else if (random < 0.95) {
            numchicken++;
            imgresult.src = "img/chicken.png";
            document.getElementById("num-chicken").innerHTML = `${numchicken}`;
            } else if (random > 0.95) {
                numhank++;
                imgresult.src = "img/hank.png";
                document.getElementById("num-hank").innerHTML = `${numhank}`;
                }
}
}


btn2.addEventListener("click", open2);
function open2() {
    if (character === "walt" && numhank >= 5){
        numhank--;
        numhank--;
        numhank--;
        numhank--;
        numhank--;
        numhank2++;
        imgresult2.src = "img/hank2.png";
        document.getElementById("num-hank2").innerHTML = `${numhank2}`;
        document.getElementById("num-hank").innerHTML = `${numhank}`;
} else if (character === "mike"  && numhank >= 5){
    numhank--;
    numhank--;
    numhank--;
    numhank--;
    numhank--;
    huell++;
    imgresult2.src = "img/download6.png";
    document.getElementById("num-huell").innerHTML = `${huell}`;
    document.getElementById("num-hank").innerHTML = `${numhank}`;}}

    btn3.addEventListener("click", open3)
    function open3() {
        if (numchicken >= 5){
            numhank++;
            numhank++;
            numhank++;
            numchicken--;
            numchicken--;
            numchicken--;
            numchicken--;
            numchicken--;
            document.getElementById("num-hank").innerHTML = `${numhank}`;
            document.getElementById("num-chicken").innerHTML = `${numchicken}`;
        } else {
                alert('need 5 chickens')
            }}
btn4.addEventListener("click", open4)
    function open4() {
        if (numMeth >= 10 && numMeth >= 10){
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        numMeth--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        num$--;
        numchicken++;
        numchicken++;
        numchicken++;
        document.getElementById("num-meth").innerHTML = `${numMeth}`;
        document.getElementById("num-chicken").innerHTML = `${numchicken}`;
        document.getElementById("num-$").innerHTML = `${num$}`;
            } else {
            alert('need 10 $ and 10 meth')
            }}