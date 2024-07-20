const hambuguricon = document.querySelector('.hambu-icon-detail');
const headerLeft = document.querySelector('.left-navbar-staff-manage');
const RightPage = document.querySelector('.right-navbar-staff-manage');
const containInfor = document.querySelector('.container-content-admin')

let c = false;

hambuguricon.addEventListener('click', function () {
    if (c == false) {
        headerLeft.classList.add('left-navbar-staff-manage-close');
        RightPage.classList.add('right-navbar-staff-manage-big');
        containInfor.classList.add('container-content-admin-expand');
        c = true;
    } else {
        headerLeft.classList.remove('left-navbar-staff-manage-close');
        RightPage.classList.remove('right-navbar-staff-manage-big');
        containInfor.classList.remove('container-content-admin-expand');

        c = false;
    }
});
const boxAdmin = document.querySelector('.box-admin'),
    modalAdminInfor = document.querySelector('.modal-more-info');

boxAdmin.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the document
    modalAdminInfor.classList.add('modal-more-info-open');
});

document.addEventListener('click', (event) => {
    // Check if the click is outside the modal and the boxAdmin
    if (!boxAdmin.contains(event.target) && !modalAdminInfor.contains(event.target)) {
        modalAdminInfor.classList.remove('modal-more-info-open');
    }
});

modalAdminInfor.addEventListener('click', function (event) {
    event.stopPropagation();
})
document.getElementById('searchChoice').addEventListener('change', function () {
    var searchInput = document.getElementById('searchInput');
    var searchDate = document.getElementById('searchDate');

    if (this.value === 'date') {
        searchInput.style.display = 'none';
        searchDate.style.display = 'inline-block';
    } else {
        searchInput.style.display = 'inline-block';
        searchDate.style.display = 'none';
        searchInput.placeholder = this.value.charAt(0).toUpperCase() + this.value.slice(1) + '...';
    }
});

// Initialize the form based on the default selected option
document.getElementById('searchChoice').dispatchEvent(new Event('change'));

const today = new Date();

// Get the current year, month, and day with leading zeros if needed
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

// Format the date as YYYY-MM-DD
const formattedDate = `${year}-${month}-${day}`;

// Set the value of the date input
document.getElementById('searchDate').value = formattedDate;

const totalElements = document.querySelectorAll('.cell-col-price');

totalElements.forEach(function (element) {
    let price = parseInt(element.innerText);
    let formattedAmount = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    element.innerText = formattedAmount;
});