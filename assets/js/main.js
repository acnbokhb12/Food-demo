
const btnHome = document.querySelector('.btn-list-home');
const spanbtnHome = document.querySelector('.hambugu-navbar-icon');
const listHome = document.querySelector('.nav-bar-menu');
const btncloseNav = document.querySelector('.close-navbar-icon-btn');

btnHome.addEventListener('click', function (event) {
    spanbtnHome.classList.add('active-btn-navbar-off');
    listHome.classList.add('active-btn-navbar-on');
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
});

btncloseNav.addEventListener('click', function (event) {
    listHome.classList.remove('active-btn-navbar-on');
    spanbtnHome.classList.remove('active-btn-navbar-off');
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
});

document.addEventListener('click', function (event) {
    if ((!listHome.contains(event.target) && event.target !== btnHome) || event.target === btncloseNav) {
        listHome.classList.remove('active-btn-navbar-on');
        spanbtnHome.classList.remove('active-btn-navbar-off');
    }
});

// Ngăn sự kiện click từ bên trong menu làm ẩn menu
listHome.addEventListener('click', function (event) {
    event.stopPropagation();
});

// scroll content most popular of Home not header
document.querySelectorAll('.home-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = 116; // Chiều cao của header hoặc offset bạn muốn
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
