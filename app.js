function enviarPedido() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const mensaje = `Hola Shaddai! Quiero pedir el Almuerzo Ejecutivo ($18.000). Mi ubicación: https://www.google.com/maps?q=${lat},${lon}`;
            const url = `https://wa.me/573147098072?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        }, () => {
            alert("Para procesar su pedido, por favor active la geolocalización.");
        });
    } else {
        alert("Su navegador no soporta geolocalización.");
    }
}

// Registro del Service Worker para PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
