function solicitarPedido(producto) {
    // 1. Validar si el navegador permite geolocalización
    if (!navigator.geolocation) {
        alert("Tu navegador no soporta geolocalización para el envío del pedido.");
        return;
    }

    // 2. Obtener ubicación
    navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
        
        // 3. Configurar el mensaje
        const numero = "573147098072";
        const mensaje = encodeURIComponent(
            `*NUEVO PEDIDO - SHADDAI*\n` +
            `--------------------------\n` +
            `*Producto:* ${producto}\n` +
            `*Ubicación:* ${googleMapsUrl}\n` +
            `--------------------------\n` +
            `Enviado desde mi App Shaddai.`
        );

        // 4. Abrir WhatsApp
        window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');

    }, (error) => {
        alert("Para realizar el pedido es necesario activar el GPS y dar permisos de ubicación.");
    });
}

// Registrar el Service Worker para que sea autoinstalable
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('PWA Lista para usar', reg))
            .catch(err => console.log('Error en registro', err));
    });
}
