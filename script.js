mybutton = document.getElementById("my-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

function scrollButton() {
    window.scrollTo({top:0, behavior:'smooth'})
}

document.querySelectorAll('a[href^="#"]').forEach(link =>{
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});