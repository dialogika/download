const whatsappManusia = "6285162992597";
const whatsappMalika = "6285780007799";

$(document).on("click", ".send_contact", function () {
  var input_blanter = document.getElementById("names");
  // tambahkan data-program-handler="malika" di input select option bila ingin whatsappnya diarahkan ke malika
  // Contoh <option data-program-handler="malika" value="id-program">1 Bulan</option>
  const checkHandler = $("#programs :selected").attr("data-program-handler");

  var walink = "https://web.whatsapp.com/send",
    // Melakukan cek apakah option yang dipilih memiliki attribute "data-program-handler" dengan value "malika"
    // Bila ada attribute "data-program-handler" dengan value "malika", akan kirim pesan ke whatsappMalika
    phone = checkHandler && checkHandler.toString().toLowerCase() == "malika" ? whatsappMalika : whatsappManusia,
    walink2 =
      "Salam Hangat, Saya melihat *Website dialogika.co* dan saya tertarik untuk tahu lebih lanjut." +
      "%0A%0A" +
      "Sebelumnya perkenalkan saya: ",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_name2 = $("#names").val(),
      input_domisili2 = $("#locations").val(),
      input_job2 = $("#works").val(),
      input_program2 = $("#programs :selected").text();
    input_message2 = $("#messages").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*Name*         : " +
      input_name2 +
      "%0A" +
      "*Domisili*     : " +
      input_domisili2 +
      "%0A" +
      "*Program*      : " +
      input_program2 +
      "%0A" +
      "*Perkerjaan*   : " +
      input_job2 +
      "%0A" +
      "*Isi Message*  : " +
      input_message2 +
      "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + "</span>";
  }
});

// Function sendWhatsAppMessage digunakan saat user click tombol DAFTAR SEKARANG di pricing
function sendWhatsAppMessage(button) {
  const checkHandler = button.getAttribute("data-program-handler");
  // WhatsApp Settings
  var walink = "https://web.whatsapp.com/send",
    // Melakukan cek apakah option yang dipilih memiliki attribute "data-program-handler" dengan value "malika"
    // Bila ada attribute "data-program-handler" dengan value "malika", akan kirim pesan ke whatsappMalika
    phone = checkHandler && checkHandler.toString().toLowerCase() == "malika" ? whatsappMalika : whatsappManusia,
    baseMessage = "Salam Hangat, saya melihat *Website dialogika.co* dan tertarik banget dengan program",
    program = button.getAttribute("data-program");

  var additionalMessage = "apakah masih ada quota? - dari website (fb/ig)";

  // Smartphone Support
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    walink = "whatsapp://send";
  }

  // Final WhatsApp Message
  var blanter_whatsapp =
    walink + "?phone=" + phone + "&text=" + baseMessage + " " + program + "%0A%0A" + additionalMessage;

  // Open WhatsApp
  window.open(blanter_whatsapp, "_blank");
}

// Function askAdminMessage digunakan saat user click tombol TANYA ADMIN di pricing
function askAdminMessage(button) {
  const checkHandler = button.getAttribute("data-program-handler");
  // WhatsApp Settings
  var walink = "https://web.whatsapp.com/send",
    // Melakukan cek apakah option yang dipilih memiliki attribute "data-program-handler" dengan value "malika"
    // Bila ada attribute "data-program-handler" dengan value "malika", akan kirim pesan ke whatsappMalika
    phone = checkHandler && checkHandler.toString().toLowerCase() == "malika" ? whatsappMalika : whatsappManusia,
    baseMessage = "Salam Hangat, saya melihat *Website dialogika.co* dan ingin bertanya terkait program",
    program = button.getAttribute("data-program");

  // Smartphone Support
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    walink = "whatsapp://send";
  }

  // Final WhatsApp Message
  var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + baseMessage + " " + `"*  ${program}*"` + "%0A%0A";

  // Open WhatsApp
  window.open(blanter_whatsapp, "_blank");
}
