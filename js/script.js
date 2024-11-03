const toggleButton = document.getElementById('theme-toggle');
        const body = document.body;
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav ul');
        const loaderContainer = document.getElementById('loaderContainer');

        // Show loader on page load
        window.addEventListener('load', function() {
            setTimeout(function() {
                loaderContainer.style.display = 'none';
            }, 2000); // Hide loader after 2 seconds
        });

        // Show loader on page refresh
        window.addEventListener('beforeunload', function() {
            loaderContainer.style.display = 'flex';
        });

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const isDarkTheme = body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDarkTheme);
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('darkTheme');
        if (savedTheme === 'true') {
            body.classList.add('dark-theme');
        }

        document.getElementById('topupForm').addEventListener('submit', function (e) {
            e.preventDefault();
            document.getElementById('modalOverlay').style.display = 'flex';
            this.reset(); // Reset the form fields after submission
        });

        document.getElementById('closeModal').addEventListener('click', function () {
            document.getElementById('modalOverlay').style.display = 'none';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Hamburger menu functionality
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show');
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('show');
            }
        });

        const scrollToTop = document.getElementById('scrollToTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTop.classList.add('show');
            } else {
                scrollToTop.classList.remove('show');
            }
        });

        scrollToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });