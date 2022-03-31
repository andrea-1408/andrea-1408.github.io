/* Neuseelandreise Skript */
// einzelner Kommentar

var map = L.map('map').setView([-38.684444, 176.070833], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-38.684444, 176.070833]).addTo(map)
            .bindPopup('<h3>Taupo (Stadt)</h3>')
            .openPopup();