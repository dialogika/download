// SCRIPT INI DIGUNAKAN PIN POINT LOKASI LOKASI PELATIHAN DIALOGIKA DI PETA PROGRAM ATAU DI SECTION FORM REGISTRATION

// Daftar informasi dialogika
const dialogikaJogja = {
  coordinates: [-7.755023108799819, 110.37858779538364],
  name: "Dialogika Yogyakarta",
  adress:
    "Jl. Pandega Marta No.39, Manggung, Caturtunggal, Kec. Depok, Daerah Istimewa Yogyakarta",
  city: "Caturtunggal",
  website: ["https://www.dialogika.co/program/index-jogja.html", "Website →"],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/KaFAhUUySyo4FBBM9", "Gmaps →"],
};

const dialogikaBintaro = {
  coordinates: [-6.27447562183671, 106.74480284273528],
  name: "Dialogika Bintaro",
  adress:
    "Jl. W R Supratman No.8, Pd. Karya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten",
  city: "Tangerang Selatan",
  website: [
    "https://www.dialogika.co/program/index-tangsel.html",
    "Website →",
  ],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/kuKaRnQqXWF9XNjw6", "Gmaps →"],
};

const dialogikaSolo = {
  coordinates: [-7.543299352507649, 110.76120199999998],
  name: "Dialogika Solo",
  adress:
    "Jl Permata Raya, Ginung RT : 001 RW : 002, Gatak, Gajahan, Colomadu, Karanganyar Regency, Central Java",
  city: "Gatak",
  website: ["https://www.dialogika.co/program/index-solo.html", "Website →"],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/Ja9ymWssyymKkJNZ9", "Gmaps →"],
};

const dialogikaBanjarbaru = {
  coordinates: [-3.4405526971594282, 114.83696919666075], 
  name: "Dialogika Banjarbaru",
  adress:
    "Comet Coffee , Loktabat Utara, Kec. Banjarbaru Utara, Kota Banjar Baru, Kalimantan Selatan 70714",
  city: "Banjarbaru",
  website: [
    "https://www.dialogika.co/program/index-banjarbaru.html",
    "Website →",
  ],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/U36sA9JRdfXvnKMN8", "Gmaps →"],
};

const dialogikaJakbar = {
  coordinates: [-6.165760658098328, 106.79031677950233],
  name: "Dialogika Jakarta Barat",
  adress:
  "Libero Coffee, Jl. Dr. Susilo Raya No.C4, Grogol, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11450",
  city: "Jakarta Barat",
  website: [
    "https://www.dialogika.co/page/kelas-public-speaking-jakarta",
    "Website →",
  ],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/ZDRB8f58ozrEXLKVA", "Gmaps →"],
};

const dialogikaJaktim = {
  coordinates: [-6.254988429504797, 106.90993721018226],
  name: "Dialogika Jakarta Timur",
  adress:
  "Kyō Coffee, Jl. Wirajasa Jl. Raya Jatiwaringin No.1 Blok ZN, Cipinang Melayu, Makasar, East Jakarta City, Jakarta 13620",
  city: "Jakarta Timur",
  website: [
    "https://www.dialogika.co/page/kelas-public-speaking-jakarta",
    "Website →",
  ],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/BotGD1UpDLw2MZ9K7", "Gmaps →"],
};

const dialogikaSurabaya = {
  coordinates: [-7.289853210188593, 112.70644353086703],
  name: "Dialogika Surabaya",
  adress:
  "Lagoon Avenue Mall Lantai G (MCAFE) Jl. KH Abdul Wahab Siamin Surabaya No.Kav. 9-10, Putat Gede, Kec. Dukuhpakis, Surabaya, Jawa Timur 60225",
  city: "Jakarta Timur",
  website: [
    "https://www.dialogika.co/page/kelas-public-speaking-surabaya",
    "Website →",
  ],
  socialMedia: [
    "https://www.linkedin.com/company/dialogika/posts/?feedView=all",
    "Linkedin →",
  ],
  gmaps: ["https://maps.app.goo.gl/ymr93bP8djLNhDib9", "Gmaps →"],
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
      isMapFocused = true;
      lastFocusedLocation = location;
  
      if (location === dialogikaJogja) {
        markerJogja.openPopup();
      } else if (location === dialogikaBintaro) {
        markerBintaro.openPopup();
      } else if (location === dialogikaSolo) {
        markerSolo.openPopup();
      } else if (location === dialogikaBanjarbaru) {
        markerBanjarbaru.openPopup();
      } else if (location === dialogikaJakbar){
        markerJakbar.openPopup();
      } else if (location === dialogikaJaktim){
        markerJaktim.openPopup();
      } else if (location === dialogikaSurabaya){
        markerSurabaya.openPopup();
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

  const markerBanjarbaru = L.marker(dialogikaBanjarbaru.coordinates, {
    icon: myIcon,
  })
    .addTo(map)
    .bindPopup(
      L.popup({}).setContent(
        `<h3 style="font-weight:600;">${dialogikaBanjarbaru.name}</h3>
      <p>${dialogikaBanjarbaru.adress}</p>
      <p> ${dialogikaBanjarbaru.city}</p>
      <div class="links">
      <a href="${dialogikaBanjarbaru.website[0]}">${dialogikaBanjarbaru.website[1]}</a>
      <a href="${dialogikaBanjarbaru.socialMedia[0]}">${dialogikaBanjarbaru.socialMedia[1]}</a>
      <a href="${dialogikaBanjarbaru.gmaps[0]}" target="_blank">${dialogikaBanjarbaru.gmaps[1]}</a>
      </div>`
      )
    );

    const markerJakbar = L.marker(dialogikaJakbar.coordinates, {
      icon: myIcon,
    })
      .addTo(map)
      .bindPopup(
        L.popup({}).setContent(
          `<h3 style="font-weight:600;">${dialogikaJakbar.name}</h3>
        <p>${dialogikaJakbar.adress}</p>
        <p> ${dialogikaJakbar.city}</p>
        <div class="links">
        <a href="${dialogikaJakbar.website[0]}">${dialogikaJakbar.website[1]}</a>
        <a href="${dialogikaJakbar.socialMedia[0]}">${dialogikaJakbar.socialMedia[1]}</a>
        <a href="${dialogikaJakbar.gmaps[0]}" target="_blank">${dialogikaJakbar.gmaps[1]}</a>
        </div>`
        )
      );

    const markerJaktim = L.marker(dialogikaJaktim.coordinates, {
      icon: myIcon,
    })
      .addTo(map)
      .bindPopup(
        L.popup({}).setContent(
          `<h3 style="font-weight:600;">${dialogikaJaktim.name}</h3>
        <p>${dialogikaJaktim.adress}</p>
        <p> ${dialogikaJaktim.city}</p>
        <div class="links">
        <a href="${dialogikaJaktim.website[0]}">${dialogikaJaktim.website[1]}</a>
        <a href="${dialogikaJaktim.socialMedia[0]}">${dialogikaJaktim.socialMedia[1]}</a>
        <a href="${dialogikaJaktim.gmaps[0]}" target="_blank">${dialogikaJaktim.gmaps[1]}</a>
        </div>`
        )
      );

    const markerSurabaya = L.marker(dialogikaSurabaya.coordinates, {
      icon: myIcon,
    })
      .addTo(map)
      .bindPopup(
        L.popup({}).setContent(
          `<h3 style="font-weight:600;">${dialogikaSurabaya.name}</h3>
        <p>${dialogikaSurabaya.adress}</p>
        <p> ${dialogikaSurabaya.city}</p>
        <div class="links">
        <a href="${dialogikaSurabaya.website[0]}">${dialogikaSurabaya.website[1]}</a>
        <a href="${dialogikaSurabaya.socialMedia[0]}">${dialogikaSurabaya.socialMedia[1]}</a>
        <a href="${dialogikaSurabaya.gmaps[0]}" target="_blank">${dialogikaSurabaya.gmaps[1]}</a>
        </div>`
        )
      );

    
    

  const bounds = L.latLngBounds([
    [6.0749, 94.5581],
    [-8.3702, 141.0194],
  ]);
  map.fitBounds(bounds);
});
