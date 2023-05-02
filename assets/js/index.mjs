import { doFakePages, getNetworkInfo, goTop } from "nav";

document.addEventListener("DOMContentLoaded", (event) => {
    doFakePages();
    getNetworkInfo();
    goTop();
});


var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

let x = window.scrollY;

let start = 100;


const applyMagic = (items, start, end = start + 3, time = 1000) => {
    setTimeout(()=> {
        for (let i = start; i < items.length && i < end; i++) {
            items[i].classList.remove("magic");
        }
    }, time);
    time += 500;
};

let breaking = 0.20;
let begin = 8;
const magicItems = document.querySelectorAll("article.category-item");

window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    /*if (start >= scroll) {
        console.log(scroll);
        start += scroll
    }*/
    console.log(start);
    console.log(scroll);
    console.log(height);

    let percentage = scroll / height * 100;
    console.log(`percentage: ${percentage}`);

    
    if (percentage > breaking) {
        if (percentage > 10) {
            applyMagic(magicItems, begin);
            breaking = percentage + 1.5;
            begin += 3;
        } else if (percentage > 0) {
            applyMagic(magicItems, begin);
            breaking = percentage * 2;
            begin += 3;
        }

    }
    

});

applyMagic(magicItems, 0, 8);

/*
var options = {
    root: document.getElementById("maincontent"),
    rootMargin: "0px",
    threshold: 1.0
};

const doThis = () => {
    console.log(target);
}

var observer = new IntersectionObserver(doThis, options);

var target = document.querySelector("article.category-item");
observer.observe(target);
*/