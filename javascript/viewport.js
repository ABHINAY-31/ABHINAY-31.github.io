var slideIndex = 1;
sSlides(slideIndex);

function pSlides(n){
    sSlides(slideIndex += n);
}
function cSlides(n){
    sSlides(slideIndex = n);

}
 function sSlides(n){
     var i;
     var slides = document.getElementsByClassName("Slides");
     var dots = document.getElementsByClassName("dot-1");
     if(n>slides.length){
         slideIndex = 1;
     }
     if(n < 1){
         slideIndex = slides.length
     }
     for(i=0;i<slides.length;i++){
         slides[i].style.display = "none";
     }
     for(i=0;i<dots.length;i++){
         dots[i].className = dots[i].className.replace(" active" , "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className +=" active";
 }