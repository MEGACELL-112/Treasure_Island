let map = document.getElementsByClassName("map")[0];
let pirate = document.getElementsByClassName("pirate")[0];
let hints = document.getElementsByClassName("hints")[0];
let treasureX = Math.floor(Math.random()*500)
let treasureY = Math.floor(Math.random()*500)
let attempt = 0;
// console.log(treasureX, treasureY);
map.onclick = function (event) {
    // console.log(event.offsetX,event.offsetY);
    attempt = attempt+1;
    hints.innerHTML="Где же она?";
    let pirateX = event.offsetX - 25;
    let pirateY = event.offsetY - 25;
    pirate.style.left = pirateX + "px";
    pirate.style.top = pirateY + "px";
    let X = pirateX - treasureX;
    let Y = pirateY - treasureY;
    let dist = Math.sqrt(X*X + Y*Y);
    console.log(dist)
    if (dist<10) {
        hints.innerHTML="Выигрыш!!! Ты нашел закладку за " + attempt + " шагов";
        map.style.pointerEvents = "none"
    }
    else if (dist<20) {
        hints.innerHTML="Кипяток!!!"
    }
    else if (dist<50) {
        hints.innerHTML="Горячо!!!"
    }
    else if (dist<100) {
        hints.innerHTML="Тепло"
    }
    else if (dist<150) {
        hints.innerHTML="Свежо"
    }
    else if (dist<200) {
        hints.innerHTML="Морозно"
    }
    else if (dist<300) {
        hints.innerHTML="Холодно"
    }
    else{
    hints.innerHTML="Где же она?";
    }
}
// pirate.onclick = function () {
// 
    // console.log("Пират");
    // hints.innerHTML="Пират";
// }
// Дабавить "else if" на дистанции: 50, 100, 150, 300 