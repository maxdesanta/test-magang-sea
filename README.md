# Test Magang Sea — Website Berita (React + Vite)

Proyek ini adalah situs berita sederhana yang dibangun dengan React dan Vite. Tujuan utamanya adalah menampilkan kumpulan berita (feed) dengan halaman beranda, halaman detail artikel, dan beberapa komponen UI seperti slider, kartu berita populer, serta rekomendasi terkait. Situs ini ditujukan sebagai proyek magang / demo frontend untuk menampilkan integrasi API RSS/feeds, manajemen state ringan, dan tata letak responsif.

Live (deployed): https://test-magang-sea-goch.vercel.app/

## Fitur Utama

- Halaman Beranda menampilkan daftar artikel dan slider headline.
- Halaman Detail artikel dengan konten lengkap dan daftar rekomendasi terkait.
- Komponen kartu berita (populer, rekomendasi, slider) yang dapat digunakan ulang.
- Pengambilan data dari API (beberapa file di `src/api/`) dan normalisasi data.
- Format tanggal lokal menggunakan `Intl.DateTimeFormat` (format Indonesia).
- Routing client-side menggunakan `react-router-dom`.
- Styling modular per-komponen (CSS file per komponen) dan variabel CSS global.

## Teknologi / Stack

- React + Vite
- JavaScript (ESNext) + JSX
- CSS modular (file .css per-komponen) dan variabel di `src/assets/styles/variables.css`
- Redux (slice sederhana) untuk state yang diperlukan (`src/redux`)
- Fetch/axios (atau fetch native) untuk panggilan API di `src/api`

## Struktur Projek (penjelasan singkat)

Berikut struktur folder relevan dan penjelasan fungsinya:

- `src/`
  - `App.jsx` — Root React component dan setup dasar routing.
  - `main.jsx` — Entry point aplikasi (render React ke DOM).
  - `index.css` — Styling global dan variabel (tambahkan utilitas responsif di sini).
  - `api/` — Modul untuk pemanggilan API/feeds (contoh: `newsApi.js`, `topNewsApi.js`, `cnnApi.js`).
  - `assets/styles/variables.css` — Variabel CSS (warna, spasi, radius, dsb.).
  - `components/` — Komponen UI yang dapat digunakan ulang, contohnya:
    - `CardPopular/` — Kartu untuk berita populer.
    - `CardRecomended/` — Kartu untuk rekomendasi terkait.
    - `CardSlider/`, `SlideCard/`, `SlideButton/` — Komponen slider.
    - `Header/`, `Footer/` — Navigasi dan footer.
    - `DateWritter/` — Komponen pembantu untuk menampilkan tanggal dan kategori.
  - `helper/` — Fungsi pembantu seperti `formatDate.js`, `getValidImage.js`, `truncateText.js`.
  - `layout/` — Layout umum aplikasinya.
  - `pages/` — Halaman aplikasi:
    - `Hompage/` — Halaman beranda.
    - `Details/` — Halaman detail artikel.
    - `News/` — Halaman daftar berita per-kategori.
  - `redux/` — Store dan slice untuk state global (mis. `newsSlice.js`, `store.js`).
  - `router/` — Definisi route aplikasi (`index.jsx`).

Catatan: File CSS per-komponen berada di folder masing-masing dengan nama `style.css`.

## Cara Menjalankan Secara Lokal

Prasyarat:

- Node.js LTS (mis. 18.x atau 20.x) dan npm/yarn terinstal.

Langkah singkat:

1. Clone atau salin repositori ke mesin lokal Anda.

   Contoh menggunakan HTTPS:

   ```bash
   git clone https://github.com/<username>/test-magang-sea.git
   ```

   Atau menggunakan SSH:

   ```bash
   git clone git@github.com:<username>/test-magang-sea.git
   ```

   Ganti `<username>` dengan nama pengguna GitHub Anda.

2. Masuk ke direktori proyek:

```bash
cd test-magang-sea
```

3. Install dependensi:

```bash
npm install
# atau
# yarn install
```

4. Jalankan mode pengembangan (development):

```bash
npm run dev
# aplikasi biasanya tersedia di http://localhost:5173
```

5. Build untuk production:

```bash
npm run build
```

6. Preview hasil build secara lokal (opsional):

```bash
npm run preview
# lalu buka http://localhost:4173 (default preview port)
```

Jika aplikasi sudah dideploy, Anda bisa mengunjungi versi live di: https://test-magang-sea-goch.vercel.app/

## Catatan Pengembangan / Troubleshooting

- Jika menemui masalah layout pada perangkat mobile/tablet, periksa file CSS per-komponen di `src/components/*/style.css` dan helper global di `src/index.css`.
- Untuk memastikan tanggal tampil, periksa bahwa komponen yang merender `DateWritter` menerima prop `date` (contoh: `date={item.isoDate}`).
- Jika ada dependensi yang perlu ditambahkan (mis. `axios`), jalankan `npm install axios`.

## Kontribusi

- Terima pull request (PR) kecil untuk perbaikan bug, perbaikan responsif, atau dokumentasi.
- Untuk perubahan besar, buat issue terlebih dahulu agar kita bisa diskusikan cakupan dan kompatibilitas.

## Lisensi

Lisensi tidak diatur dalam repositori ini. Tambahkan file `LICENSE` jika Anda ingin menentukan lisensi proyek.

---

Jika Anda ingin, saya dapat langsung menerapkan perbaikan responsif yang direncanakan (Details, CardRecomended, CardPopular, Hompage) setelah README ini disetujui.
