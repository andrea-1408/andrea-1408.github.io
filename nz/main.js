/* Neuseelandreise Skript */
// einzelner Kommentar
let lat = -38.684444;
let lng = 176.070833;
let zoom = 11;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Taupo (Stadt)</h3>')
    .openPopup();