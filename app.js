const shareBtn_div = document.querySelectorAll('.share-btn-container');
const shareButtons_div = document.querySelector('.share-buttons');
const socialInfo_div = document.querySelector('.social-information');
const popUp_div = document.querySelector('.pop-up');

window.addEventListener('resize', () => {
    shareButtons_div.classList.remove('active');
    socialInfo_div.classList.remove('hidden');
    popUp_div.classList.remove('active');
})
        
window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popUp_div.classList.contains('active')) {
        popUp_div.classList.remove('active');
    }
})

shareBtn_div.forEach(button => button.addEventListener('click', () => {           
    if (window.innerWidth < 767) {               
        shareButtons_div.classList.toggle('active');               
        socialInfo_div.classList.toggle('hidden');          
    } else {    
        popUp_div.classList.toggle('active');       
    }       
})    
);
