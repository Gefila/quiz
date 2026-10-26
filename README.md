# 🎯 QuizKuy - Aplikasi Web Kuis Interaktif

**QuizKuy** adalah aplikasi web kuis dan latihan ujian interaktif berbasis **React**, **Vite**, **Tailwind CSS**, dan **DaisyUI**. Aplikasi ini dirancang untuk memudahkan mahasiswa atau pengguna dalam berlatih mengerjakan bank soal dengan berbagai mode latihan, pengacakan opsi, umpan balik langsung, pelacakan waktu, serta penyimpanan riwayat skor ke penyimpanan lokal (*LocalStorage*).

---

## 📸 Tangkapan Layar (Screenshots)

<div align="center">

### 1. Halaman Beranda & Riwayat Kuis
![Halaman Beranda & Riwayat Kuis](https://github.com/user-attachments/assets/54c0a67b-2488-448f-b717-b9302df1bc02)

### 2. Halaman Pengerjaan Soal (Quiz Page)
![Halaman Pengerjaan Soal](https://github.com/user-attachments/assets/a592b6b1-89e9-4d79-aee9-e32ba152efd5)

### 3. Halaman Hasil Akhir & Skor (Finish Page)
![Halaman Hasil Akhir](https://github.com/user-attachments/assets/c624a091-5d3f-4b8f-845a-40f8e9619add)

</div>

---

## ✨ Fitur Utama

- **Pilihan Kategori & Tipe Soal Fleksibel**:
  - Memilih mata kuliah / topik soal yang diinginkan.
  - Berbagai pilihan mode pengerjaan:
    - *Semua Soal (Acak)*
    - *Semua Soal (Sesuai Urutan)*
    - *100 Soal Acak*
    - *Batch Parsial* (contoh: Soal 1-20, 21-40, 41-60, dst.)
- **Pengacakan Algoritma Fisher-Yates**:
  - Soal dan urutan opsi pilihan ganda (A, B, C, D, E) diacak secara adil menggunakan algoritma *Fisher-Yates Shuffle*.
- **Umpan Balik Instan (Instant Feedback)**:
  - Jawaban yang dipilih langsung diberi indikator warna: **Hijau** jika benar dan **Merah** jika salah.
  - Menampilkan kunci jawaban yang benar secara otomatis saat jawaban salah dipilih.
- **Timer & Penghitung Waktu Pengerjaan**:
  - Melacak total durasi yang dihabiskan untuk menyelesaikan kuis dalam menit dan detik.
- **Riwayat Kuis Lokal (Quiz History)**:
  - Skor, durasi waktu pengerjaan, nama peserta, tipe soal, dan tanggal pengerjaan tersimpan di *LocalStorage*.
  - Dilengkapi tombol *Clear History* untuk mereset riwayat.
- **Tampilan Gelap & Responsif (Dark Theme)**:
  - Tampilan antarmuka bergaya modern dengan palet gelap (*dark theme*) yang nyaman di mata berkat kombinasi Tailwind CSS dan DaisyUI.

---

## 🛠️ Teknologi yang Digunakan

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **CSS Framework**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Komponen UI**: [DaisyUI v4](https://daisyui.com/)
- **Penyimpanan State & Riwayat**: React `useReducer` & Web Storage API (`localStorage`)

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- Pastikan [Node.js](https://nodejs.org/) (versi 18 ke atas) sudah terpasang di komputer Anda.

### Panduan Instalasi & Menjalankan

1. **Clone repositori**:
   ```bash
   git clone git@github.com:Gefila/quiz.git
   cd quiz
   ```

2. **Pasang dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (development mode)**:
   ```bash
   npm run dev
   ```
   Buka browser dan akses URL lokal yang ditampilkan di terminal (biasanya `http://localhost:5173`).

---

## 📦 Perintah Script yang Tersedia

| Script | Deskripsi |
|---|---|
| `npm run dev` | Menjalankan Vite development server |
| `npm run build` | Mengompilasi kode untuk rilis produksi ke direktori `dist` |
| `npm run preview` | Menjalankan preview lokal dari hasil build produksi |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kualitas dan format kode |

---

## 📁 Struktur Direktori Proyek

```text
quiz/
├── public/                 # File publik & aset avatar statis
├── src/
│   ├── assets/             # Aset gambar/ikon pendukung
│   ├── components/         # Komponen React (StartScreen, Question, Options, Finish, Timer, dll)
│   ├── data/
│   │   └── soal.json       # Bank soal kuis dan konfigurasi tipe soal
│   ├── pages/
│   │   └── QuizPage.jsx    # Halaman utama & pengelolaan state kuis (useReducer)
│   ├── utils.js            # Fungsi algoritma Fisher-Yates Shuffle
│   ├── index.css           # Konfigurasi Tailwind CSS
│   └── main.jsx            # Titik masuk utama aplikasi React
├── package.json            # Manifest paket dependensi & script
├── tailwind.config.js      # Konfigurasi Tailwind & DaisyUI
└── vite.config.js          # Konfigurasi bundler Vite
```

---

## 👤 Pembuat

Dibuat oleh **[Gefila Zona Pranata](https://github.com/Gefila)**
