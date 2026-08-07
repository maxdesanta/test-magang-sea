# AGENTS.md

Situs berita berbasis React 19 + Vite (JavaScript/JSX murni, tanpa TypeScript). Menggunakan Redux Toolkit, react-router-dom v7, dan axios. Teks antarmuka dan pesan commit menggunakan Bahasa Indonesia.

## Perintah
- `npm run dev` — server pengembangan (port 5173)
- `npm run build` — build produksi
- `npm run lint` — ESLint (flat config di `eslint.config.js`); aturan `react/prop-types` dan `react/react-in-jsx-scope` dinonaktifkan
- `npm run preview` — menyajikan hasil build (port 4173)
- **Tidak ada framework pengujian atau skrip test di repositori ini.** Verifikasi dengan `npm run lint` lalu `npm run build`.

## Arsitektur / alur data
- Semua kode ada di `src/`. Entry: `src/main.jsx` → `App.jsx` → router `src/router/index.jsx`. Rute: `/` (Homepage), `/terbaru`, halaman kategori (`/hiburan`, `/gaya-hidup`, `/olahraga`, `/nasional`, `/internasional`, `/ekonomi`, `/tekno`, `/politik`) semuanya me-render `News`, dan `/detail/:link` me-render `Details`.
- Data berita berasal dari API eksternal. Instance axios ada di `src/api/api.js` (base `https://berita-indo-api-next.vercel.app/api`); satu modul wrapper per feed di `src/api/` (`newsApi`, `topNewsApi`, `cnnApi`, `slideApi`, `todayNewsApi`).
- Routing endpoint→API ada di `src/redux/newsSlice.js` pada `fetchNewsPageData` (jangan hardcode di halaman): `kumparan-news` → `newsApi`, `otomotif`/`politik`/`ekonomi` → `topNewsApi`, selain itu → `cnnApi`.
- Halaman Homepage dan News menormalkan tiap artikel (menambahkan `categories` sebagai string/array dan `sourcePage`) lalu mengirim objek lengkap sebagai `fullData` → `NewsCardLink` → `<Link state={{ articleData }}>`.
- Halaman `Details` membaca artikel dari `location.state.articleData` — **refresh halaman pada `/detail/:link` menghilangkan state tersebut dan artikel tampil kosong**. Param rute hanya membawa link yang di-encode.

## Konvensi / hal yang perlu diperhatikan
- `image` bisa berupa string atau objek `{ small, medium, large }` — tangani keduanya (gunakan helper `getValidImage`; halaman News juga punya fallback inline).
- Tanggal datang sebagai `isoDate`; format dengan `src/helper/formatDate.js` (mengembalikan `""` untuk tanggal tidak valid). `DateWritter` membutuhkan prop `date`.
- Data berasal dari API publik pihak ketiga: respons bisa lambat/flaky dan gambar bisa hilang; UI sudah punya fallback placeholder/empty state — pertahankan itu.
- CSS per-komponen ada di masing-masing folder komponen sebagai `style.css`; style global dan utilitas responsif di `src/index.css`; token desain di `src/assets/styles/variables.css`.

## Struktur & gaya kode
- Komponen UI berada di `src/components/<Nama>/` berisi `index.jsx` + `style.css`; halaman di `src/pages/<Nama>/` juga `index.jsx` + `style.css`. Impor dari folder cukup `../components/Nama` (tanpa ekstensi).
- Urutan import mengikuti pola yang ada (contoh jelas di `src/pages/Details/index.jsx`): pustaka eksternal (react/react-router/redux) dulu, lalu komponen internal, lalu helper, lalu aset/ikon, lalu style (`./style.css`).
- Tetap JS/JSX murni: jangan menambahkan TypeScript atau `prop-types` (aturan `react/prop-types` dan `react/react-in-jsx-scope` nonaktif di ESLint).
- Jangan rename nama yang salah ketik yang sudah dipakai lintas file (`DateWritter`, `SlideButtom`, `Hompage`, `CardRecomended`, `CardSlider`, `currentBotomSlide`, dll.); perbaikan nama hanya lewat refactor terpisah.

## Manajemen data & state
- Data berita global dikelola lewat Redux Toolkit di `src/redux/newsSlice.js`. Jika menambah slice baru, daftarkan di `src/redux/store.js`; jangan duplikasi slice untuk data yang sudah ada.
- Kontrak artikel dari API: `title`, `link`, `isoDate`, `description`/`contentSnippet`, `image`, `categories`. Sebelum dikirim ke `Details`, artikel harus dinormalkan dengan `categories` dan `sourcePage`; jangan render field tanpa guard (mis. `item.link`, `item.title`) karena bisa kosong.
- Wrapper di `src/api/*` bisa mengembalikan `undefined` saat gagal (catch hanya `console.log`) — selalu fallback ke nilai aman (`|| []`) di halaman/thunk.
- Gunakan helper yang sudah ada di `src/helper/` (`getValidImage`, `getCategoryName`, `formatDate`, `formatDateSlide`, `truncateText`) daripada menulis ulang logika yang sama; fallback inline di halaman News dipertahankan.

## Desain & UX
- Saat menyentuh tampilan/UI/UX (komponen baru, styling, responsive), muat skill `frontend-design` dan `ui-ux-pro-max` yang terdefinisi di `.agents/skills/` untuk panduan arah visual dan aturan UX.
- Ikuti arah visual yang sudah ada (situs berita bersih, konten-first); jangan mengganti total palet/tipe/gaya. Pilih satu elemen "signature" yang menonjol, sisanya tenang dan konsisten — hindari kesan templated/AI-generated.
- Aksesibilitas: kontras teks ≥ 4.5:1; jangan andalkan warna sebagai satu-satunya penanda (tambah ikon/teks); beri `alt` deskriptif pada gambar bermakna; ikon-only button butuh `aria-label`; elemen interaktif punya fokus keyboard yang terlihat; hormati `prefers-reduced-motion`.
- Motion: mikro-interaksi 150–300 ms, animasikan `transform`/`opacity` saja (bukan `width`/`height`/`top`/`left`); animasi harus bermakna, bukan sekadar dekoratif.
- Ikon & aset: gunakan ikon SVG (bukan emoji sebagai ikon struktural); jaga ukuran dan gaya ikon konsisten; jangan mengubah aset merek resmi. Pertahankan aset SVG yang sudah ada di `src/assets/`.
- Gambar & performa: tentukan dimensi/aspect-ratio agar tidak layout-shift (CLS); lazy-load gambar di bawah lipatan; gambar API yang hilang wajib memakai fallback placeholder yang sudah ada.
- Loading/empty/error state: tampilkan state loading, kosong, dan gagal dengan pesan jelas + arah tindakan; tombol saat proses async di-disable + spinner.
- Formulir & feedback: label terlihat (jangan placeholder-only); error tampil dekat field; state disabled memakai opacity rendah + cursor sesuai.
- Navigasi: halaman kunci harus tetap dapat dijangkau via URL/deep-link; perilaku kembali konsisten; penanda menu aktif (`NavLink`) dipertahankan.
- Responsif mobile-first: tanpa scroll horizontal; teks body ≥ 16px di mobile; gunakan `min-h-dvh`/`100svh` alih-alih `100vh`; header fixed tidak boleh menutupi konten.
- Tipografi: line-height isi 1.5–1.75; skala huruf konsisten; batasi panjang baris teks panjang (65–75 karakter di layar besar).
- CSS: hindari selektor yang saling membatalkan (mis. padding/margin antar section); gunakan token `--color-*`/`--spacing-*`/`--radius-*`/`--font-*` dari `src/assets/styles/variables.css`; jangan hardcode hex warna di komponen bila token sudah tersedia.
- Copy antarmuka: tulis teks yang jelas, spesifik, aktif, dan konsisten (Bahasa Indonesia); empty state mengajak bertindak, bukan sekadar suasana.