"use strict";

const getHistory = (event) => {
    try {
        const numberOfEntries = history.length;
        
        console.log(`Total number of entries: ${numberOfEntries}`);
        console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`);
        
        history.pushState({ page: 1 }, "title 1", "?page=1");
        history.pushState({ page: 2 }, "title 2", "?page=2");
        history.replaceState({ page: 3 }, "title 3", "?page=3");
        history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
        history.back(); // Logs "location: http://example.com/example.html, state: null"
        history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}"
          

    } catch (error) {
        console.log(error);
    }
    /*
    history.back();
    history.forward();

    // Moving to a specific point in history
    history.go(-1); // the equivalent of calling back();
    history.go(1); // the equivalent of calling forward();

    // refreshing the page
    history.go(0);
    history.go();

    // The history stack
    history.replaceState();
    history.pushState();
    */
};

const doFakePages = () => {
    window.onpopstate = (event) => setTimeout(getHistory(event), 0);
};

const getNetworkInfo = () => {
    try {
        let type = navigator.connection.effectiveType;
        
        const updateConnectionStatus = () => {
            console.log(`Connection type changed from ${type} to ${navigator.connection.effectiveType}`);
            type = navigator.connection.effectiveType;
        };
        
        navigator.connection.addEventListener("change", updateConnectionStatus);
    } catch (error) {
        console.log(error);
    }
};

const goTop = () => {
    // Get the button:
    let mybutton = document.getElementById("goTopBtn");
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 50; // For Safari
        document.documentElement.scrollTop = 50; // For Chrome, Firefox, IE and Opera
    }

    mybutton.onclick = topFunction;
}

export {
    doFakePages,
    getNetworkInfo,
    goTop
};