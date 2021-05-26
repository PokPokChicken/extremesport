const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const sync = document.querySelector('.controls ul');
var page = 0;


document.querySelectorAll('.controls li').forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        page = index;
        document.querySelector('.controls .current').classList.remove('current'); 
        indicator.classList.add('current');
        slider.style.transform = 'translate(' + (page) * -25 + '%)';
    });
    });


arrowRight.addEventListener('click', function() {
    if ( page < 3) {
        page += 1;} 
    else {page = 0}
    document.querySelector('.controls .current').classList.remove('current');
    sync.children[page].classList.add('current');
slider.style.transform = 'translate(' + (page) * -25 + '%)';
})

arrowLeft.addEventListener('click', function() {
    if ( page > 0) {
        page -= 1;} 
    else {page = 3;}
    document.querySelector('.controls .current').classList.remove('current');
    sync.children[page].classList.add('current');
slider.style.transform = 'translate(' + (page) * -25 + '%)';
})


