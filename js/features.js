const pages = ["index", "getTutor", "price", "about"];
let current = "index";

// Switch pages
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

// Show tutors
function showElement(element) {
    element.className += " show";
}

// Hide tutors
function hideElement(element) {
    let name = element.className;
    if (name.indexOf("show") != -1) {
        name = name.substring(0, name.length - 4);
    }
    element.className = name;
}

// Show tutor descriptions
function showDetails(name) {
    let msg = "";

    // Set message to be displayed
    switch (name) {
        case "rami":
            msg = "Hello! My name is Rami, and I am currently completing my PhD in Mathematics at the University of Delhi. My main area of study is in group theory, but I love exploring all areas of mathematics. In my spare time, I like to sing and dance. I look forward to meeting you!";
            break;
        case "michael":
            msg = "Hi, I'm Michael. I am a senior accountant in Belgium with over 10 years of experience in the industry. I love teaching and working with young people, and I hope that you will choose to work with me too.";
            break;
        case "natalie":
            msg = "Hey, Natalie here! I am currently a student majoring in English and History at the University of Sydney. I believe that happiness is the most important thing in the world, and I want to share my positivity with my students. I hope to be a teacher when I graduate!";
            break;
        case "liam":
            msg = "Hi, my name is Liam, and I am a student majoring in Computer Science at the University of Auckland. Coding and creating software is one of my greatest hobbies. Looking forward to meeting you.";
            break;
        case "akash":
            msg = "Hello, I'm Akash. I am an experienced university lecturer in Biology with over 30 years in teaching. Teaching is my favourite thing in the world!";
            break;
        case "malcom":
            msg = "Hello, I'm Malcom. I am an experienced university lecturer in Physics with over 40 years in the industry. I enjoy meeting with students and discussing about recent topics in the biological field.";
            break;
        case "dean":
            msg = "Hey there, my name is Dean and I am a management accountant at ANZ. I love meeting and hanging out with new people. I think that sharing your ideas with others helps each other grow!";
            break;
        case "carmella":
            msg = "How are you doing? I'm Carmella, a Biology student from Belgium. I am passionate about Biology, and I want to pursue a career in laboratory research. When I am not in the lab, I love to go hiking!";
            break;
        case "zhi":
            msg = "Hi, my name is Zhi and I am a student in China currently completing my Masters degree in Physics. My area of research primarily focuses on Astrophysics, and I hope to publish a book about my work :)";
            break;
    }

    // Toggle modal box
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

// Change top tutors slideshow
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

// Default parameters
window.onload = function() {
    window.scrollTo(0, 0);
    changeDisplay("index");
    filterSelection("all");
    showSlides(1);
}