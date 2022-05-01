/* Neuseelandreise Skript */
// einzelner Kommentar
let lat = -38.684444;
let lng = 176.070833;
let zoom = 11;

let coords = [
    ETAPPEN[14].lat,
    ETAPPEN[14].lng ]

//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat}`);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);


let popup = `
    <h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}</li>
        <li><a href="${ETAPPEN[0].wikipedia}">Link zur Wikipedia Seite</a></li>
        <li><a href="${ETAPPEN[0].github}">Link zur Etappenseite</a></li>

        </ul>
    `;

let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


for (let etappe of ETAPPEN) {
    let popup = `
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href="${etappe.wikipedia}">Link zur Wikipedia Seite</a></li>
        <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>

        </ul>
    `;
      //console.log(etappe);
      let navClass = "etappenLink";
      let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
      if (etappe.nr ==  15) {
    mrk.openPopup ();
    navClass = "etappenLink etappeAktuell";
  
      }
      //Etappennavigation erweitern
  
      let link = `<a href="https://${etappe.github}.github.io/nz/"
      class= "${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
      document.querySelector("#navigation").innerHTML += link;
    }


//DOC Hütten anzeigen
for (let hut of HUTS) {
    let popup = `
    <h3>${hut.name}</h3>
    <h4>${hut.region}</h4>
    <hr>
    <p>${hut.info}</p>
    <img src="${hut.image}" alt="Vorschaubild">
    <hr>
    <a href="${hut.link}" target=Neuseeland> Link zur Hütte</a>

    `;
    let statusColor;
    if (hut.open == true){
        statusColor = "green";
    } else {
        statusColor = "red";
    }
    L.circleMarker([hut.lat, hut.lng],{
        color: statusColor
    }).addTo(map).bindPopup(popup);

}

//Maßstab hinzugefügt
L.control.scale({
    imperial: false,
}).addTo(map);

L.control.fullscreen().addTo(map);

//Minimap hinzugefügt
let miniMap = new L.Control.MiniMap (
    L.tileLayer.provider("Stadia.OSMBright")
    
    ).addTo(map);

//Startlayer 
let startLayer = L.tileLayer.provider('OpenTopoMap');

let layerControl = L.control.layers ({
    "OpenTopoMap": startLayer,
    "Open Street Map (DE)": L.tileLayer.provider ("OpenStreetMap.DE"),
    "Open Street Map (FR)": L.tileLayer.provider ("OpenStreetMap.France"),
    "Thunderforest Outdoors":L.tileLayer.provider ("Thunderforest.Outdoors"),
}). addTo(map);
layerControl.expand();

let sightLayer = L.featureGroup();
