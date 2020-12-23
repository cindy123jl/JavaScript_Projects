var slideIndex=1;// variable slideIndex is assigned a value of 1
showSlides(slideIndex);

//next/previous controls
function plusSlides(n){ //plusSlides has a parameter n
    showSlides(slideIndex +=n);
}

//thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(n){
    var i; //variable is i
    var slides=document.getElementsByClassName("mySlides");//variable slides is retrieving elements of mySlides
    var dots=document.getElementsByClassName("dot"); //variable dots is retrieving elements of dot
    if(n>slides.length){slideIndex=1}//if slides length is less than n
    if(n<1){slideIndex=slides.length}//if n is less than 1 than the slide index = slides.length
    for(i=0; i<slides.length; i++){//for i = 0 i is less than the slides length increment by one
        slides[i].style.display="none";//display none
    }
    for(i=0; i<dots.length;i++){// for i = 0 i is less than dots increment by 1
        dots[i].className=dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className+=" active";
}