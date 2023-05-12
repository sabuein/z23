import { doFakePages, getNetworkInfo, goTop, reveal, toggled } from "nav";

document.addEventListener("DOMContentLoaded", (event) => {
    doFakePages();
    getNetworkInfo();
    goTop();
    toggled("button#menuToggle", 'ul[role="menu"]');
    window.addEventListener("scroll", () => reveal(".category-item"));
});

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