document.addEventListener("DOMContentLoaded", function () {

    const headerHTML = `<header class="header ">
        <!-- header-top -->
        <section class="header__top__nav  ">
            <div class="header__top-container container">
                <div class="header__top-infor  ">


                    <span>+84 123 987 456</span>
                    <ul class="header__infor-link-list">
                        <li class="infor__item">
                            <a href="Product.html" class="header__infor_link">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li class="infor__item">
                            <a href="#" class="header__infor_link">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li class="infor__item">
                            <a href="#" class="header__infor_link">
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </li>
                        <li class="infor__item">
                            <a href="#" class="header__infor_link">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li class="infor__item">

                            <a href="#" class="header__infor_link">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li class="infor__item">

                            <a href="#" class="header__infor_link">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="header__top-infor-account ">
                    <!-- infor login register -->
                    <ul class="infor-account-list">
                        <li class="infor-account strong-column">
                            <a href="login.html" id="login-link">
                                LOGIN
                            </a>
                        </li>
                        <li class="infor-account">
                            <a href="Register.html" id="register-link">
                                REGISTER
                            </a>
                        </li>
                    </ul>
                    <!-- infor user -->
                    <div class="header__top-infor-welcome-user">
                        <div class="header__top-infor-intro">

                            <p class="header__top-infor-welcome-name">
                                <i class="fa-solid fa-user"></i>Khanhhn
                            </p>
                        </div>
                        <div class="header__top-infor-welcome-about-acc">
                            <div class="welcome-about-acc-list">
                                <section class="welcome-about-acc-header">
                                    <div class="welcome-about-detail-account">
                                        <p>
                                            Khanhhn

                                        </p>
                                        <a href="">
                                            View detail your account
                                        </a>
                                    </div>
                                </section>
                                <section class="welcome-about-acc-body">
                                    <ul class="about-acc-header-list">
                                        <li class="about-acc-header-item">
                                            <a href="">
                                                <i class="fas fa-sign-out"></i> Log out
                                            </a>
                                        </li>

                                        <li class="about-acc-header-item">
                                            <a href="">
                                                <i class="fa-regular fa-circle-question"></i> Support
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!-- header-second -->
        <section class="header__second__nav">
            <div class="header__second_nav-container container">
                <div class="row header__second_nav-btn-new">
                    <a href="Home.html" class="header__second-img col-lg-3">
                        <img src="./assets/img/logo/K-Photoroom.png-Photoroom.png" alt="">
                    </a>
                    <div class="row col-lg-9 nav-bar-menu">
                        <span class="close-navbar-icon"><i class="fa-solid fa-xmark close-navbar-icon-btn"></i></span>
                        <div class="header__second-list col-lg-9 ">
                            <ul class="header-list-nav-page">
                                <li><a href="Home.html">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="Menu.html">Menu</a></li>
                                <li><a href="weekly.html">Weekly</a></li>
                                <li><a href="#">Contact</a></li>

                            </ul>
                        </div>
                        <div class="header__second-icon col-lg-3">

                            <div class="header__second-bag-search">
                                <a href="Cart.html" class="header__nav-bag">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </a>

                                <div href="" class="header__nav-search">
                                    <i class="fas fa-search js-search-icon"></i>
                                    <form action="">
                                        <br />
                                        <input type="text" class="search-input" placeholder="Search..." />

                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <span class="hambugu-navbar-icon col-lg-1"><i class="fa-solid fa-bars btn-list-home"></i></span>
                </div>
            </div>
        </section>
    </header>`;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // find food
    const searchBtn = document.querySelector('.js-search-icon');
    const tick = document.querySelector('.search-input');
    function showSearch() {
        tick.classList.add('open');
    }
    searchBtn.addEventListener('click', showSearch);
    document.addEventListener('click', (event) => {
        if (event.target !== tick && event.target !== searchBtn) {
            // textInput.style.display = 'none';
            tick.classList.remove('open');

        }
    });

    // user accout
    const inforUser = document.querySelector('.header__top-infor-intro');
    const detailListUser = document.querySelector('.header__top-infor-welcome-about-acc');
    inforUser.addEventListener('click', function () {
        detailListUser.classList.add('open__header__top-infor-welcome-about-acc');
    })
    inforUser.addEventListener('click', function (event) {
        event.stopPropagation();
    })
    document.addEventListener('click', (event) => {
        if (event.target !== inforUser && event.target !== detailListUser) {

            detailListUser.classList.remove('open__header__top-infor-welcome-about-acc');

        }
    });
    detailListUser.addEventListener('click', function (event) {
        event.stopPropagation();
    })

    //  open navbar
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



})