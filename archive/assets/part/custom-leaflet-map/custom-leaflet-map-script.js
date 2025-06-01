// Daftar informasi dialogika
const dialogikaJogja = {
  coordinates: [-7.755023108799819, 110.37858779538364],
  name: "Dialogika Yogyakarta",
  adress:
    "Jl. Pandega Marta No.39, Manggung, Caturtunggal, Kec. Depok, Daerah Istimewa Yogyakarta",
  city: "Catur tunggal",
  website: ["https://www.dialogika.co/", "link-1→"],
  socialMedia: ["https://www.linkedin.com/", "Linkedin →"],
  gmaps: ["https://maps.app.goo.gl/KaFAhUUySyo4FBBM9", "Gmaps →"],
};

const dialogikaBintaro = {
  coordinates: [-6.27447562183671, 106.74480284273528],
  name: "Dialogika Bintaro",
  adress:
    "Jl. W R Supratman No.8, Pd. Karya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten",
  city: "Tangerang Selatan",
  website: ["https://www.dialogika.co/", "link-1→"],
  socialMedia: ["https://www.linkedin.com/", "Linkedin →"],
  gmaps: ["https://maps.app.goo.gl/kuKaRnQqXWF9XNjw6", "Gmaps →"],
};

const dialogikaSolo = {
  coordinates: [-7.543299352507649, 110.76120199999998],
  name: "Dialogika Solo",
  adress:
    "Jl Permata Raya, Ginung RT : 001 RW : 002, Gatak, Gajahan, Colomadu, Karanganyar Regency, Central Java",
  city: "Gatak",
  website: ["https://www.dialogika.co/", "link-1→"],
  socialMedia: ["https://www.linkedin.com/", "Linkedin →"],
  gmaps: ["https://maps.app.goo.gl/Ja9ymWssyymKkJNZ9", "Gmaps →"],
};



document.addEventListener("DOMContentLoaded", function () {
  let map = L.map("map", {
    zoomMap: 6,
    scrollWheelZoom: true,
  });

  // Set custom icon bg
  let myIcon = L.divIcon({
    className: "logo",
    iconSize: [45, 72],
    iconAnchor: [22.5, 72],
    popupAnchor: [0, -72],
  });

  // Tampilan Layer map
  // Untuk ganti, bisa tanya chatgpt "beri saya daftar tilelayer leaflet map tanpa api key"
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Change clicked map navigation button color
  const iconBoxes = document.querySelectorAll(".icon-box");
  let isMapFocused = false;
  let lastFocusedLocation = null;

  iconBoxes.forEach((iconBox) => {
    iconBox.addEventListener("click", function () {
      var checkValue = this.getAttribute("data-map-src");

      if (checkValue != "") {
        iconBoxes.forEach((box) => box.classList.remove("active-map"));

        this.classList.add("active-map");
      }
    });
  });

  // change focus on list click

  focusLocation = (location) => {
    if (isMapFocused && lastFocusedLocation === location) {
      map.fitBounds(bounds);
      isMapFocused = false;
      iconBoxes.classList.remove("active-map");
    } else {
      map.setView(location.coordinates, 18);
      if (location === dialogikaJogja) {
        isMapFocused = true;
        lastFocusedLocation = dialogikaJogja;
        markerJogja.openPopup();
      } else if (location === dialogikaBintaro) {
        isMapFocused = true;
        lastFocusedLocation = dialogikaBintaro;
        markerBintaro.openPopup();
      } else if (location === dialogikaSolo) {
        isMapFocused = true;
        lastFocusedLocation = dialogikaSolo;
        markerSolo.openPopup();
      } 
    }
  };

  // show marker deskripsi popup on click
  const markerJogja = L.marker(dialogikaJogja.coordinates, { icon: myIcon })
    .addTo(map)
    .bindPopup(
      L.popup({}).setContent(
        `<h3 style="font-weight:600;">${dialogikaJogja.name}</h3>
      <p>${dialogikaJogja.adress}</p>
      <p> ${dialogikaJogja.city}</p>
      <div class="links">
      <a href="${dialogikaJogja.website[0]}">${dialogikaJogja.website[1]}</a>
      <a href="${dialogikaJogja.socialMedia[0]}">${dialogikaJogja.socialMedia[1]}</a>
      <a href="${dialogikaJogja.gmaps[0]}" target="_blank">${dialogikaJogja.gmaps[1]}</a>
      </div>`
      )
    );
  const markerBintaro = L.marker(dialogikaBintaro.coordinates, { icon: myIcon })
    .addTo(map)
    .bindPopup(
      L.popup({}).setContent(
        `<h3 style="font-weight:600;">${dialogikaBintaro.name}</h3>
      <p>${dialogikaBintaro.adress}</p>
      <p> ${dialogikaBintaro.city}</p>
      <div class="links">
      <a href="${dialogikaBintaro.website[0]}">${dialogikaBintaro.website[1]}</a>
      <a href="${dialogikaBintaro.socialMedia[0]}">${dialogikaBintaro.socialMedia[1]}</a>
      <a href="${dialogikaBintaro.gmaps[0]}" target="_blank">${dialogikaBintaro.gmaps[1]}</a>
      </div>`
      )
    );
  const markerSolo = L.marker(dialogikaSolo.coordinates, { icon: myIcon })
    .addTo(map)
    .bindPopup(
      L.popup({}).setContent(
        `<h3 style="font-weight:600;">${dialogikaSolo.name}</h3>
      <p>${dialogikaSolo.adress}</p>
      <p> ${dialogikaSolo.city}</p>
      <div class="links">
      <a href="${dialogikaSolo.website[0]}">${dialogikaSolo.website[1]}</a>
      <a href="${dialogikaSolo.socialMedia[0]}">${dialogikaSolo.socialMedia[1]}</a>
      <a href="${dialogikaSolo.gmaps[0]}" target="_blank">${dialogikaSolo.gmaps[1]}</a>
      </div>`
      )
    );

  const bounds = L.latLngBounds([
    [6.0749, 94.5581],
    [-8.3702, 141.0194],
  ]);
  map.fitBounds(bounds);
});
