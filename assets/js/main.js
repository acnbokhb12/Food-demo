const searchBtn = document.querySelector('.js-search-icon');
const tick =document.querySelector('.search-input');
function showSearch(){
    tick.classList.add('open');
}
searchBtn.addEventListener('click', showSearch);
document.addEventListener('click', (event) => {
    if (event.target !== tick && event.target !== searchBtn) {
        // textInput.style.display = 'none';
      tick.classList.remove('open');
      
    }
});

const inforUser = document.querySelector('.header__top-infor-intro');
const detailListUser = document.querySelector('.header__top-infor-welcome-about-acc');
inforUser.addEventListener('click',function(){
    detailListUser.classList.add('open__header__top-infor-welcome-about-acc');
})
inforUser.addEventListener('click',function(event){
    event.stopPropagation();
})
document.addEventListener('click', (event) => {
    if (event.target !== inforUser && event.target !== detailListUser) {
         
        detailListUser.classList.remove('open__header__top-infor-welcome-about-acc');
      
    }
});
detailListUser.addEventListener('click',function(event){
    event.stopPropagation();
})