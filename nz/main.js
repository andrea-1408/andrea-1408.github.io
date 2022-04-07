/* Neuseelandreise Skript */
// einzelner Kommentar
let lat = -38.684444;
let lng = 176.070833;
let zoom = 11;

let coords = [-38.684444, 176.070833];
let popup = `
    <h3>Taupo</h3>
    <ul>
    <li>geogr.Länge: ${lng}</li>
    <li>geogr.Breite: ${lat}</li>
    </ul>
    `;

console.log(coords);
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

console.log("text");
console.log('text');
console.log('id="map"');
console.log(`latitude = ${lat}`);
console.log(ETAPPEN);



let map = L.map('map').setView(lat, lng, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();