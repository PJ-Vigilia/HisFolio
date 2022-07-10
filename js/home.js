window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i =0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop =reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');

            var aboutA = document.querySelector('.A');
            var aboutB = document.querySelector('.B');
            var aboutO = document.querySelector('.O');
            var aboutU = document.querySelector('.U');
            var aboutT = document.querySelector('.T');
            var aboutP1 = document.querySelector('.p1');
            var aboutP2 = document.querySelector('.p2');
            var aboutP3 = document.querySelector('.p3');
            var aboutP4 = document.querySelector('.p4');

            var about = document.querySelector('#about');
            if(about.classList.contains('active')){                
                aboutA.classList.add("aot")                
                aboutB.classList.add("bu")                
                aboutO.classList.add("aot")                
                aboutU.classList.add("bu")                
                aboutT.classList.add("aot")

                aboutP1.classList.add("p1p3")
                aboutP3.classList.add("p1p3")
                aboutP2.classList.add("p2p4")
                aboutP4.classList.add("p2p4")
            }else{
                aboutA.classList.remove("aot")
                aboutB.classList.remove("bu")
                aboutO.classList.remove("aot")
                aboutU.classList.remove("bu")
                aboutT.classList.remove("aot")

                aboutP1.classList.remove("p1p3")
                aboutP3.classList.remove("p1p3")
                aboutP2.classList.remove("p2p4")
                aboutP4.classList.remove("p2p4")
            }

            var contact = document.querySelector('#contact');
            var contactAnimation = document.querySelector('.div-contact');
            if(contact.classList.contains('active')){ 
                contactAnimation.classList.add("contact-animation")
            } 
            else{
                contactAnimation.classList.remove("contact-animation")
            }             
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}