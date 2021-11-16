const shareBtn_img = document.querySelectorAll('.share-btn');
const shareButtons_div = document.querySelector('.share-buttons');
const socialInfo_div = document.querySelector('.social-information');


shareBtn_img.forEach(button => button.addEventListener('click', () => {
    shareButtons_div.classList.toggle('active');
    socialInfo_div.classList.toggle('hidden');
})
);

// shareBtn_img.addEventListener('click', () => {
//     shareButtons_div.classList.toggle('active');
//     socialInfo_div.classList.toggle('hidden');
// });