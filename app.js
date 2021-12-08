const shareBtn_div = document.querySelectorAll('.share-btn-container');
const shareButtons_div = document.querySelector('.share-buttons');
const socialInfo_div = document.querySelector('.social-information');
const modal_div = document.querySelector('.modal');

// window.addEventListener('resize', () => {
//     shareButtons_div.classList.remove('active');
//     socialInfo_div.classList.remove('hidden');
// })
        
shareBtn_div.forEach(button => button.addEventListener('click', () => {           
    if (window.innerWidth < 767) {               
        shareButtons_div.classList.toggle('active');               
        socialInfo_div.classList.toggle('hidden');          
    } else {    
        modal_div.classList.toggle('active');       
    }       
})    
);