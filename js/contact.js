/* Cabanas Cielo Azul - Contacto y WhatsApp */

function enviarWhatsAppConsulta(event) {
    if (event) event.preventDefault();

    const nombre = document.getElementById('form-nombre');
    const telefono = document.getElementById('form-telefono');
    const fechas = document.getElementById('form-fechas');
    const mensaje = document.getElementById('form-mensaje');

    if (!nombre || !telefono || !fechas || !mensaje) return;

    if (!nombre.value.trim() || !telefono.value.trim() || !fechas.value.trim() || !mensaje.value.trim()) {
        alert('Por favor completá todos los campos para enviar la consulta.');
        return;
    }

    const texto = [
        'Hola Cabañas Cielo Azul, quiero consultar disponibilidad.',
        '',
        'Nombre: ' + nombre.value.trim(),
        'Teléfono: ' + telefono.value.trim(),
        'Fechas aproximadas: ' + fechas.value.trim(),
        '',
        'Mensaje: ' + mensaje.value.trim()
    ].join('\n');

    const url = 'https://wa.me/543437000000?text=' + encodeURIComponent(texto);
    window.open(url, '_blank');

    const form = document.querySelector('.contact-form');
    if (form) form.reset();
}

/* Mostrar/ocultar botón flotante de WhatsApp al hacer scroll */
document.addEventListener('DOMContentLoaded', function () {
    const sticky = document.getElementById('whatsapp-sticky');
    if (!sticky) return;

    const toggleSticky = function () {
        if (window.scrollY > 400) {
            sticky.classList.add('sticky-whatsapp--visible');
        } else {
            sticky.classList.remove('sticky-whatsapp--visible');
        }
    };

    window.addEventListener('scroll', toggleSticky, { passive: true });
    toggleSticky();
});
