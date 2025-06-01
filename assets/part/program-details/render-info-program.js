// BELUM BEKERJA

// /assets/part/program-details/render-info-program.js
// import { programs } from './info-program.js';

// DISINI TEMPAT UNTUK INFO PROGRAM YG AKAN DITAMPILKAN DI PAGE-PAGE PROGRAM DI BAWAH TOMBOL KONSULTASI SEKARANG ATAU BAGIAN PALING ATAS

export const programs = {
   "basic-class": {
    "Durasi Belajar": "90 Menit",
    "Total Pertemuan": "7x Pertemuan",
    "Jam Pelaksanaan": "19:30 WIB",
    "Garansi Mengulang (1x)": true,
    "Bayar DP dan mencicil": true,
    "Konsultasi": true,
    "Recording Kelas": false,
    "eCertificate": true,
    "eBook & eModule": true,
    "Reminder Kelas": true,
    "Materi Pembelajaran": true,
    "Gratis Materi setiap minggu": true,
    "Gratis webinar setiap bulan": true,
    "Praktek & Feedback": "Setiap Kali Pertemuan",
    "Maximum Seat": "9 Member",
    "Bahasa": "Indonesia",
    "Pelaksanaan": "Via Zoom"
  },
  "basic-plus": {
    "Durasi Belajar": "90 Menit",
    "Total Pertemuan": "7x Pertemuan",
    "Jam Pelaksanaan": "19:30 WIB",
    "Garansi Mengulang": true,
    "Bayar DP dan mencicil": true,
    "Konsultasi": true,
    "Recording Kelas": true,
    "eCertificate": true,
    "eBook & eModule": true,
    "Reminder Kelas": true,
    "Materi Pembelajaran": true,
    "Gratis Materi setiap minggu": true,
    "Gratis webinar setiap bulan": true,
    "Praktek & Feedback": "Setiap Kali Pertemuan",
    "Maximum Seat": "9 Member",
    "Bahasa": "Indonesia",
    "Pelaksanaan": "Via Zoom"
  },
  "kids-class": {
    "Garansi Mengulang (1x)": true,
    "Recording Kelas": false,
    "eCertificate": true,
    "eBook & eModule": true,
    "Reminder Kelas": true,
    "Materi Pembelajaran": true,
    "Gratis Materi setiap minggu ": true,
    "Gratis Webinar setiap bulan ": true,
    "DP & Cicil ": true,
    "Durasi Belajar": "90 Menit",
    "Total Pertemuan": "7x Pertemuan",
    "Jam Pelaksanaan": "19:00 WIB ",
    "Praktek & Feedback": "Setiap Kali Pertemuan",
    "Maximum Seat": "9 Member",
    "Bahasa": "Indonesia",
    "Pelaksanaan": "Via Zoom"
  },
  "kids-plus": {
    "Garansi Mengulang": true,
    "Recording Kelas": true,
    "eCertificate": true,
    "eBook & eModule": true,
    "Reminder Kelas": true,
    "Materi Pembelajaran": true,
    "Gratis Materi setiap minggu ": true,
    "Gratis Webinar setiap bulan ": true,
    "DP & Cicil": true,
    "Durasi Belajar": "90 Menit",
    "Total Pertemuan": "7x Pertemuan",
    "Jam Pelaksanaan": "19:00 WIB ",
    "Praktek & Feedback": "Setiap Kali Pertemuan",
    "Maximum Seat": "9 Member",
    "Bahasa": "Indonesia",
    "Pelaksanaan": "Via Zoom"
  }
}



class ProgramDetails extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute('program');
    const data = programs[key];
    console.log(data)
    if (!data) {
      this.innerHTML = `<p>Program "${key}" tidak ditemukan.</p>`;
      return;
    }

    this.innerHTML = '';
    const ICON_CHECK = '✅';
    const ICON_X     = '❌';

    Object.entries(data).forEach(([label, value]) => {
      const info = document.createElement('div');
      info.className = 'course-info d-flex justify-content-between align-items-center';

      const h5 = document.createElement('h5');
      h5.textContent = label;

      const p = document.createElement('p');
      if (typeof value === 'boolean') {
        p.textContent = value ? 'Dapat ' : 'Tidak Dapat ';
        const icon = document.createElement('span');
        icon.textContent = value ? ICON_CHECK : ICON_X;
        p.appendChild(icon);
      } else {
        p.textContent = value;
      }

      info.append(h5, p);
      this.appendChild(info);
    });
  }
}

customElements.define('program-details', ProgramDetails);

