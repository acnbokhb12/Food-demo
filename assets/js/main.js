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
 

