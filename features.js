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
        window.scrollTo(0, 0);
    }
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

// Highlight selected group
let container = document.getElementById("filterButtons");
let buttons = container.getElementsByClassName("filterBtn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

changeDisplay("index");
filterSelection("all");