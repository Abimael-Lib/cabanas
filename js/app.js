/* Cabanas San Luis - Interactividad */

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

    // Añadir labels de accesibilidad a los botones de reserva
    document.querySelectorAll('.btn[data-cabin]').forEach(btn => {
        const cabinId = btn.getAttribute('data-cabin');
        const cabinName = cabins[cabinId] || 'Cabaña';
        btn.setAttribute('aria-label', `Reservar ${cabinName}`);
    });

    document.querySelectorAll('.btn[data-cabin]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cabinId = btn.getAttribute('data-cabin');
            const cabinName = cabins[cabinId] || 'Cabaña';
            const message = `Hola Cabañas San Luis, me interesa reservar la ${cabinName}. ¿Podrían darme disponibilidad?`;
            const url = `https://wa.me/543437000000?text=${encodeURIComponent(message)}`;

            // Confirmación al usuario antes de abrir WhatsApp
            confirm(`Desea reservar la ${cabinName}? Por favor indique fechas y número de huéspedes.`);

            window.open(url, '_blank');
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

    document.querySelectorAll('.cabin-card, .amenity-card, .review-card, .location-info, .whatsapp-reserve').forEach(el => {
        observer.observe(el);
    });

});