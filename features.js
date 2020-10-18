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

changeDisplay("index");