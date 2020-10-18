const pages = ["index", "getTutor", "price", "about"];
let current = "index";

// Switching pages

function changeDisplay(name) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i] == name) {
            document.getElementById(pages[i]).style.display = "block";
        } else {
            document.getElementById(pages[i]).style.display = "none";
        }
        current = name;
    }

    // Reset tutor filter
    filterSelection("all");
    let container = document.getElementById("filterButtons");
    let buttons = container.getElementsByClassName("filterBtn");
    for (let i = 0; i < buttons.length; i++) {
        let current = document.getElementsByClassName("filterBtn active");
        current[0].className = current[0].className.replace(" active", "");
        buttons[0].className += " active";
    }

    // Scroll to top of page
    window.scrollTo(0, 0);
}

// Filter content
function filterSelection(c) {
    let elements = document.getElementsByClassName("column");
    if (c == "all") c = "";

    for (let i = 0; i < elements.length; i++) {
        hideElement(elements[i]);
        if (elements[i].className.indexOf(c) != -1) {
            showElement(elements[i]);
        };
    }

    // Highlight selected group
    let container = document.getElementById("filterButtons");
    let buttons = container.getElementsByClassName("filterBtn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("filterBtn active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

// Show elements
function showElement(element) {
    element.className += " show";
}

// Hide elements
function hideElement(element) {
    let name = element.className;
    if (name.indexOf("show") != -1) {
        name = name.substring(0, name.length - 4);
    }
    element.className = name;
}

function showDetails(name) {
    let msg = "";

    switch (name) {
        case "rami":
            msg = "Hi I'm Rami";
            break;
        case "michael":
            msg = "Hi I'm Michael";
            break;
        case "natalie":
            msg = "Hi I'm Natalie";
            break;
        case "liam":
            msg = "Hi I'm Liam";
            break;
        case "akash":
            msg = "Hi I'm Akash";
            break;
        case "malcom":
            msg = "Hi I'm Malcom";
            break;
        case "dean":
            msg = "Hi I'm Dean";
            break;
        case "carmella":
            msg = "Hi I'm Carmella";
            break;
        case "zhi":
            msg = "Hi I'm Zhi";
            break;
    }

    document.getElementById("msg").innerHTML = msg;
    document.getElementById("notif").style.display = "block";
    document.getElementsByClassName("close")[0].onclick = function() {
        document.getElementById("notif").style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == document.getElementById("notif")) {
            document.getElementById("notif").style.display = "none";
        }
    }
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slideshowSlides");
    let info = document.getElementsByClassName("tutorInfo");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < slides.length; i++) {
        info[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n - 1].style.display = "block";
    info[n - 1].style.display = "block";
    dots[n - 1].className += " active";
}

changeDisplay("index");
filterSelection("all");
showSlides(1);