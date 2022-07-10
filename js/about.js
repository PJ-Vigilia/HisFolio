
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).srollTop() > 20){
            $(".A").toggleClass("about-a");
        }
    })
    
})
/*
const about = document.querySelectorAll("#about");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            aboutA.classList.add("about-a");
            return;
        }
        aboutA.classList.remove("about-a");
    })

})

observer.observe(document.querySelector('.about-a'));
*/