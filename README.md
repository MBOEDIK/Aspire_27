# Aspire_27: Integrated Library Management System

Aspire_27 adalah sistem manajemen perpustakaan terintegrasi dengan arsitektur monorepo yang memisahkan frontend dan backend secara terstruktur. Sistem ini dirancang untuk memberikan pengalaman pengguna lancar dan memudahkan pengembangan, deployment, serta pemeliharaan.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Arsitektur Sistem](#arsitektur-sistem)
- [Tumpukan Teknologi](#tumpukan-teknologi)
- [Struktur Direktori](#struktur-direktori)
- [Skema Basis Data](#skema-basis-data)
- [Fitur Utama](#fitur-utama)
- [Instalasi](#instalasi)
- [Troubleshooting](#troubleshooting)

## Tentang Proyek

Proyek ini adalah sistem manajemen perpustakaan yang menghubungkan frontend React/Next.js dengan backend Laravel melalui RESTful API. Frontend bertanggung jawab atas tampilan dan interaksi pengguna, sementara backend mengelola logika bisnis, autentikasi, dan penyimpanan data.

## Arsitektur Sistem

- **Frontend**: Menampilkan UI, mengelola state, dan memanggil API.
- **Backend**: Menyediakan data, otentikasi, validasi, dan koneksi database.
- **Koneksi**: Next.js berkomunikasi dengan Laravel melalui endpoint API.

## Tumpukan Teknologi

### Frontend

- Next.js
- React.js
- CSS modul dan variabel global

### Backend

- Laravel 11.x
- PHP 8.2+
- Laravel Sanctum
- MySQL / MariaDB
- Eloquent ORM

## Struktur Direktori

```text
Aspire_27/
├── backend/                  # Laravel API dan server
│   ├── app/Models/           # Model Eloquent
│   ├── database/migrations/  # Definisi skema tabel
│   ├── routes/               # Route web dan API
│   └── .env.example          # Template konfigurasi environment
├── frontend/                 # Next.js Client
│   ├── components/           # Komponen UI reusable
│   ├── pages/                # Halaman aplikasi
│   ├── data/                 # Data statis lokal
│   └── styles/               # CSS global dan halaman
└── README.md                 # Dokumentasi utama
```

## Skema Basis Data

Backend menggunakan entitas utama berikut:

- `users`: kredensial dan data pengguna.
- `books`: katalog buku.
- `authors`: data penulis.
- `categories`: kategori atau genre buku.
- `book_category`: tabel pivot many-to-many antara buku dan kategori.
- `loans`: catatan peminjaman buku.

## Fitur BARU!!!

- Filter kategori dinamis dengan pembaruan UI instan.
- Badge **Baru** untuk buku dengan tahun terbit terbaru.
- Pengelolaan state React yang stabil untuk mencegah re-render berlebihan.
- Home page dinamis dengan data testimonials dan statistik terpisah.
- Notifikasi modern di halaman login dan contact me

## Instalasi

> Pastikan Node.js (v18+) dan PHP (v8.2+) telah terpasang.

### Backend

```bash
cd backend
composer install
cp .env.example .env
```

Edit file `.env` dan atur konfigurasi database:

- `DB_DATABASE`
- `DB_USERNAME`
- `DB_PASSWORD`

```bash
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Backend akan berjalan di:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend akan berjalan di:

```text
http://localhost:3000
```

## Troubleshooting

- **Error 500 / 401 saat Fetch API**
  - Pastikan backend berjalan.
  - Periksa konfigurasi CORS jika frontend dan backend berada di origin berbeda.
- **Buku tidak muncul di katalog**
  - Jalankan `php artisan migrate:fresh --seed` di `backend`.
- **Class not found di Laravel**
  - Jalankan `composer dump-autoload` di `backend`.
- **Error NPM / Node-sass**
  - Hapus `node_modules` dan `package-lock.json`, lalu jalankan `npm install` ulang.

---

Dokumentasi ini disusun untuk menjaga standar proyek dan arsitektur repositori. Hindari perubahan yang melanggar struktur direktori yang sudah ditetapkan.
