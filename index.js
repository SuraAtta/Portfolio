// window.addEventListener('scroll', function () {
//     var footer = document.getElementById('footer');
//     var scrollPosition = window.scrollY + window.innerHeight;
//     var body = document.body,
//         html = document.documentElement;

//     var documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
//         html.clientHeight, html.scrollHeight, html.offsetHeight);

//     if (scrollPosition >= documentHeight) {
//         footer.classList.add('visible');
//     } else {
//         footer.classList.remove('visible');
//     }
// });
// index.js
document.addEventListener("DOMContentLoaded", function () {
    // Options for the observer
    let options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    // Callback function to execute when observations occur
    let callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to animate or directly apply styles
                if (entry.target.classList.contains("background-image") || entry.target.classList.contains("project-card") || entry.target.classList.contains("screen")) {
                    entry.target.classList.add("slide-in");
                } else if (entry.target.classList.contains("about-left")) {
                    entry.target.classList.add("fade-in");
                }
            } else {
                // Optional: Remove the class if you want the animation to trigger every time
                if (entry.target.classList.contains("background-image") || entry.target.classList.contains("project-card") || entry.target.classList.contains("screen")) {
                    entry.target.classList.remove("slide-in");
                } else if (entry.target.classList.contains("about-left")) {
                    entry.target.classList.remove("fade-in");
                }
            }
        });
    };

    // Create the observer
    let observer = new IntersectionObserver(callback, options);

    // Target elements to observe
    document.querySelectorAll('.background-image, .project-card, .screen, .about-left').forEach(element => {
        observer.observe(element);
    });
});


let isDrawing = false;
document.addEventListener("mousemove", function (event) {
    if (!isDrawing) {
        isDrawing = true;
        setTimeout(function () {
            const star = document.createElement("div");
            star.className = "star";
            star.style.left = (event.clientX - 15) + "px";
            star.style.top = (event.clientY - 15) + "px";

            document.body.appendChild(star);

            setTimeout(function () {
                star.style.opacity = 0;
                setTimeout(function () {
                    star.remove();
                }, 500);
            }, 500);
            isDrawing = false;
        }, 100);
    }
});
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'surarafe@gmail.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}



let slideIndex = 0;

function moveSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const container = document.querySelector(".slide-container");
    const totalSlides = slides.length;
    slideIndex += n;

    if (slideIndex > totalSlides - 1) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const moveAmount = slideIndex * -100;
    container.style.transform = `translateX(${moveAmount}%)`;
}


const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
});

// Check for previously set theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme + '-mode');
}

// Function to handle button click event
function handleDownload() {
    const pdfPath = 'images/SuraAtta.pdf';
    const anchor = document.createElement('a');
    anchor.href = pdfPath;
    anchor.download = 'SuraAtta.pdf';

    anchor.click();
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', handleDownload);
