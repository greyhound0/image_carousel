const slider = document.querySelector('.slider');
const slidedImage = document.querySelectorAll('.slider img')
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
 let counter = 1;
 const size = slidedImage[0].clientWidth;
 console.log("@@@@size",size);

 slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

 nextBtn.addEventListener('click', function(){
    if(counter >= slidedImage.length -1) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
 });

 prevBtn.addEventListener('click', function(){
    if(counter <= 0) return;
    slider.style.transition = "transform 0.5s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
 });

 slider.addEventListener('transitionend', ()=>{
    if(slidedImage[counter].id === 'lastClone'){
        slider.style.transition = "none";
        console.log("@@@@length",counter);
        counter = slidedImage.length -6 ;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';     
    }
    if(slidedImage[counter].id === 'firstClone'){
        slider.style.transition = "none";
        console.log("@@@@newlength",counter);
        counter = slidedImage.length - 2 ;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';     
    }
 });
 