/* Cabanas Cielo Azul - Interactividad */

document.addEventListener('DOMContentLoaded', () => {

    /* ===== MENÚ HAMBURGUESA MÓVIL ===== */
    const menuBtn = document.querySelector('.menu-btn');
    const navbarList = document.querySelector('.navbar__list');

    if (menuBtn && navbarList) {
        menuBtn.addEventListener('click', () => {
            navbarList.classList.toggle('active');
            const isOpen = navbarList.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isOpen);
            menuBtn.innerHTML = isOpen
                ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.navbar__list a').forEach(link => {
            link.addEventListener('click', () => {
                navbarList.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    /* ===== HEADER AL SCROLLAR ===== */
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* ===== BOTONES RESERVAR → WHATSAPP (con confirmación) ===== */
    const cabins = {
        1: 'Cabaña N°1',
        2: 'Cabaña N°2',
        3: 'Cabaña N°3'
    };

    const cabinMessages = {
        1: 'Hola Cabañas Cielo Azul, me interesa reservar la Cabaña N°1 para [número de personas] y fechas [fecha de llegada] a [fecha de salida].',
        2: 'Hola Cabañas Cielo Azul, me interesa reservar la Cabaña N°2 para [número de personas] y fechas [fecha de llegada] a [fecha de salida].',
        3: 'Hola Cabañas Cielo Azul, me interesa reservar la Cabaña N°3 para [número de personas] y fechas [fecha de llegada] a [fecha de salida].'
    };

    document.querySelectorAll('.btn[data-cabin]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cabinId = btn.getAttribute('data-cabin');
            const cabinName = cabins[cabinId] || 'Cabaña';
            const messageTemplate = cabinMessages[cabinId] || `Hola Cabañas Cielo Azul, me interesa reservar la ${cabinName}. ¿Podrían darme disponibilidad?`;
            
            const message = messageTemplate;
            const url = `https://wa.me/543437000000?text=${encodeURIComponent(message)}`;
            
            if (confirm(`Desea reservar la ${cabinName}? Por favor indique fechas y número de huéspedes.`)) {
                window.open(url, '_blank');
            }
        });
    });

    /* ===== SCROLL SUAVE ===== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ===== ANIMACIÓN DE ENTRADA ===== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.cabin-card, .amenity-card, .gallery__item, .location-info, .contact-card, .testimonial').forEach(el => {
        observer.observe(el);
    });

    /* ===== GALERÍA: LIGHTBOX ===== */
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lbImg = document.getElementById('lightbox-img');
        const lbClose = lightbox.querySelector('.lightbox__close');
        let lastTrigger = null;

        const openLightbox = (src, alt, trigger) => {
            lastTrigger = trigger;
            lbImg.src = src;
            lbImg.alt = alt;
            lightbox.hidden = false;
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            lbClose.focus();
        };

        const closeLightbox = () => {
            lightbox.hidden = true;
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            lbImg.src = '';
            if (lastTrigger) {
                lastTrigger.focus();
                lastTrigger = null;
            }
        };

        document.querySelectorAll('.gallery__item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                openLightbox(item.dataset.full || img.src, img.alt, item);
            });
        });

        lbClose.addEventListener('click', closeLightbox);

        // Cerrar al hacer clic fuera de la imagen (fondo)
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (!lightbox.hidden && e.key === 'Escape') closeLightbox();
        });
    }

});
