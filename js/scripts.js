/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ---------- Certificate carousel ----------

    var certCarousel = document.getElementById('certCarousel');
    if (certCarousel) {
        fetch('data/certificates.json')
            .then(function (res) { return res.json(); })
            .then(function (certs) {
                certs.forEach(function (cert) {
                    var card = document.createElement('article');
                    card.className = 'journey-card text-center cert-card';

                    var icon = document.createElement('i');
                    icon.className = 'fas fa-certificate';
                    card.appendChild(icon);

                    var title = document.createElement('h3');
                    title.className = 'h4 mb-1';
                    title.textContent = cert.title;
                    card.appendChild(title);

                    var issuer = document.createElement('span');
                    issuer.className = 'cert-issuer';
                    issuer.textContent = cert.issuer + ' \u00B7 ' + cert.date;
                    card.appendChild(issuer);

                    var desc = document.createElement('p');
                    desc.textContent = cert.description;
                    card.appendChild(desc);

                    if (cert.verifyUrl) {
                        var link = document.createElement('a');
                        link.className = 'sl';
                        link.href = cert.verifyUrl;
                        link.target = '_blank';
                        link.rel = 'noreferrer';
                        link.textContent = 'Verify';
                        card.appendChild(link);
                    }

                    certCarousel.appendChild(card);
                });

                // Carousel navigation
                var prevBtn = document.querySelector('.cert-carousel-btn--prev');
                var nextBtn = document.querySelector('.cert-carousel-btn--next');
                var scrollAmount = 320;

                if (prevBtn) {
                    prevBtn.addEventListener('click', function () {
                        certCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    });
                }
                if (nextBtn) {
                    nextBtn.addEventListener('click', function () {
                        certCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    });
                }
            });
    }

});
