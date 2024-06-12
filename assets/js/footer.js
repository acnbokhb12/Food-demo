document.addEventListener("DOMContentLoaded", function() {
    const footerHtml = `<footer class="footer-distributed">

        <div class="footer-left">

            <h3>Make Or <span>Made</span></h3>

            <p class="footer-links">
                <a href="#" class="link-1">Home</a>

                <a href="#">About </a>

                <a href="#">Menu</a>

                <a href="#">Blog</a>

                <!-- <a href="#">Faq</a> -->

                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Kahof MaKade Prj301 © 2024</p>
        </div>

        <div class="footer-center">

            <div>
                <i class="fa-regular fa-lightbulb"></i>
                <p><span>Fpt University</span> Ho Chi Minh City, Viet Nam</p>
            </div>

            <div>
                <i class="fa-solid fa-phone"></i>
                <p>+84 123 987 456</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">acnbokhb12@company.com</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>About the team</span>
                Kahof is a team professional food photographer and recipe developer who writes the food blog
            </p>

            <div class="footer-icons">

                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-twitch"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>

            </div>

        </div>

    </footer>`;
    document.body.insertAdjacentHTML('beforeend', footerHtml);
})