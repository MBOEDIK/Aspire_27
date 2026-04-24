# Dokumentasi Struktur Proyek

Dokumen ini menjelaskan struktur proyek `Aspire_27` setelah pemisahan aplikasi menjadi dua bagian utama:

- `backend/` untuk Laravel
- `frontend/` untuk Next.js

Tujuan dokumentasi ini adalah agar struktur proyek mudah dibaca, dipelihara, dan dikembangkan tanpa kebingungan tentang file mana yang termasuk backend, frontend aktif, atau aset lama.

## Ringkasan Arsitektur

Proyek ini sekarang memakai pendekatan `decoupled frontend-backend`:

- Laravel berada di folder `backend/` dan berfungsi sebagai backend aplikasi.
- Next.js berada di folder `frontend/` dan berfungsi sebagai frontend aplikasi.
- Route web di Laravel mengarahkan browser ke frontend Next.js melalui `FRONTEND_URL`.
- Frontend saat ini masih memakai data statis/hardcoded untuk tampilan, tetapi strukturnya sudah siap untuk disambungkan ke API Laravel.

Secara sederhana:

1. User membuka URL aplikasi.
2. Laravel dapat dipakai sebagai backend utama dan pengelola data.
3. Frontend Next.js merender halaman user-facing seperti `home`, `about`, `catalog`, `contact`, dan `login`.
4. Integrasi data dinamis ke Laravel API masih bisa dikembangkan pada tahap berikutnya.

## Struktur Root Repo

Struktur level atas repo saat ini:

```text
Aspire_27/
├── backend/
├── frontend/
├── OLD/
├── README.md
└── Dokumentasi.md
```

Penjelasan:

- `backend/`
  Berisi aplikasi Laravel aktif.
- `frontend/`
  Berisi aplikasi Next.js aktif, plus aset HTML/CSS/image lama yang sudah ada sebelumnya.
- `OLD/`
  Folder arsip/lama yang tidak dipakai langsung oleh aplikasi aktif saat ini.
- `README.md`
  Dokumentasi singkat awal proyek.
- `Dokumentasi.md`
  Dokumentasi lengkap struktur proyek ini.

## Struktur Backend

Folder backend aktif:

```text
backend/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
├── routes/
├── storage/
├── tests/
├── vendor/
├── artisan
├── composer.json
├── composer.lock
└── .env
```

### `backend/app/`

Folder inti kode backend Laravel.

Isi penting yang terlihat:

- `app/Models/User.php`
- `app/Models/Loan.php`
- `app/Models/Category.php`
- `app/Models/Book.php`
- `app/Models/Author.php`
- `app/Providers/AppServiceProvider.php`

Fungsi:

- `Models`
  Merepresentasikan entitas data utama aplikasi perpustakaan.
- `AppServiceProvider`
  Dipakai Laravel untuk bootstrap service aplikasi.

Makna model yang tersedia:

- `User`
  Entitas pengguna aplikasi.
- `Loan`
  Entitas peminjaman buku.
- `Category`
  Entitas kategori buku.
- `Book`
  Entitas buku.
- `Author`
  Entitas penulis.

### `backend/bootstrap/`

Dipakai Laravel untuk proses bootstrap aplikasi.

Isi penting:

- `bootstrap/app.php`
- `bootstrap/providers.php`

Fungsi:

- Menginisialisasi kernel aplikasi Laravel.
- Mendaftarkan provider yang diperlukan saat runtime.

### `backend/config/`

Berisi konfigurasi sistem Laravel.

File penting:

- `config/app.php`
- `config/auth.php`
- `config/cache.php`
- `config/database.php`
- `config/filesystems.php`
- `config/logging.php`
- `config/mail.php`
- `config/queue.php`
- `config/sanctum.php`
- `config/services.php`
- `config/session.php`

Fungsi:

- Menyimpan seluruh konfigurasi perilaku framework.
- Menentukan koneksi database, auth, cache, mail, queue, session, dan layanan lain.

### `backend/database/`

Berisi migrasi, factory, dan seeder.

Subbagian penting:

- `database/migrations/`
- `database/factories/`
- `database/seeders/`

File penting:

- `database/migrations/2026_04_09_000001_create_authors_table.php`
- `database/migrations/2026_04_09_000002_create_books_table.php`
- `database/migrations/2026_04_09_000002_create_categories_table.php`
- `database/migrations/2026_04_09_000003_create_book_category_table.php`
- `database/migrations/2026_04_09_150000_create_loans_table.php`
- `database/seeders/DatabaseSeeder.php`
- `database/seeders/LibrarySeeder.php`

Fungsi:

- `migrations`
  Mendefinisikan struktur tabel database.
- `factories`
  Membantu pembuatan data dummy untuk testing/seeding.
- `seeders`
  Mengisi data awal atau data contoh ke database.

### `backend/public/`

Entry publik untuk Laravel.

Isi penting:

- `public/index.php`
- `public/.htaccess`
- `public/favicon.ico`
- `public/robots.txt`

Fungsi:

- Menjadi titik masuk request HTTP untuk Laravel ketika backend di-serve secara langsung.

### `backend/resources/`

Saat ini masih menyimpan aset CSS lama hasil tahap sebelumnya.

Isi penting:

- `resources/css/variables.css`
- `resources/css/home.css`
- `resources/css/about.css`
- `resources/css/catalog.css`
- `resources/css/contact.css`
- `resources/css/auth.css`

Catatan penting:

- Folder `resources/views/` sudah tidak dipakai untuk frontend aktif.
- CSS di `backend/resources/css/` saat ini tidak lagi menjadi sumber utama frontend aktif.
- Frontend Next.js sekarang menggunakan CSS yang ada di `frontend/css/`.

### `backend/routes/`

Berisi definisi routing Laravel.

File penting:

- `routes/web.php`
- `routes/api.php`
- `routes/console.php`

#### `routes/web.php`

Fungsi saat ini:

- Bukan lagi merender Blade frontend.
- Mengarahkan route browser ke frontend Next.js dengan `Route::redirect(...)`.

Peran file ini sekarang:

- `/` diarahkan ke frontend.
- `/home`, `/about`, `/catalog`, `/contact`, `/login` diarahkan ke frontend.

`routes/web.php` memakai helper `frontend_url()` yang membaca:

- `FRONTEND_URL`

Default fallback:

- `http://localhost:3000`

Artinya jika frontend Next.js dijalankan lokal di port `3000`, Laravel akan mengarahkan browser ke sana.

#### `routes/api.php`

Tempat yang semestinya dipakai untuk endpoint API Laravel.

Saat pengembangan berikutnya, endpoint seperti daftar buku, kategori, login, atau data dashboard sebaiknya diletakkan di sini.

### `backend/storage/`

Dipakai Laravel untuk file runtime:

- log
- cache tertentu
- compiled files
- data aplikasi sementara

Isi penting:

- `storage/logs/laravel.log`

### `backend/tests/`

Berisi struktur testing Laravel.

Isi penting:

- `tests/Feature/ExampleTest.php`
- `tests/Unit/ExampleTest.php`
- `tests/TestCase.php`

### `backend/vendor/`

Berisi dependency PHP hasil `composer install`.

Folder ini tidak diedit manual.

### File backend penting lain

#### `backend/artisan`

CLI utama Laravel.

Contoh pemakaian:

```bash
php artisan serve
php artisan migrate
php artisan test
```

#### `backend/composer.json`

Konfigurasi dependency PHP dan script Composer backend.

Poin penting:

- `composer install` menginstal dependency Laravel.
- Script `setup` sekarang juga menginstal dan build frontend dari folder `../frontend`.
- Script `dev` menjalankan:
  - Laravel server
  - queue listener
  - Next.js dev server dari folder frontend

Jadi `composer dev` di backend menjadi entry point gabungan untuk development.

#### `backend/.env`

Konfigurasi environment backend.

Yang penting untuk integrasi frontend:

```env
FRONTEND_URL=http://localhost:3000
```

## Struktur Frontend

Folder frontend aktif:

```text
frontend/
├── components/
├── css/
├── data/
├── hooks/
├── html/
├── image/
├── js/
├── pages/
├── styles/
├── next.config.mjs
├── package.json
└── package-lock.json
```

Frontend aktif adalah aplikasi Next.js. Namun di dalam folder ini juga masih ada aset lama seperti `html/`, `css/`, `image/`, dan `js/`.

### Pemisahan penting di frontend

Dalam `frontend/` ada dua kategori file:

1. File aplikasi Next.js aktif
2. File aset lama yang belum dihapus

#### Bagian aktif untuk Next.js

- `pages/`
- `components/`
- `data/`
- `hooks/`
- `styles/`
- `package.json`
- `next.config.mjs`

#### Bagian lama/nonaktif utama

- `html/`
- `js/`
- sebagian `css/` dan `image/` sebagai aset/style sumber

Catatan:

- `frontend/js/` saat ini kosong.
- `frontend/html/` masih berisi file statis lama.
- `frontend/css/` masih dipakai oleh `styles/globals.css` sebagai sumber style global.

## Struktur Next.js Aktif

### `frontend/pages/`

Ini adalah routing utama Next.js karena proyek memakai `Pages Router`.

Isi:

- `pages/_app.js`
- `pages/index.js`
- `pages/home.js`
- `pages/about.js`
- `pages/catalog.js`
- `pages/contact.js`
- `pages/login.js`

Fungsi masing-masing:

- `_app.js`
  Wrapper global Next.js. Mengimpor CSS global.
- `index.js`
  Mengarahkan root page ke halaman home.
- `home.js`
  Halaman Home.
- `about.js`
  Halaman About.
- `catalog.js`
  Halaman Catalog.
- `contact.js`
  Halaman Contact.
- `login.js`
  Halaman Login/Register.

### `frontend/components/`

Berisi komponen reusable yang dipakai banyak halaman.

Isi:

- `components/AppShell.jsx`
- `components/Header.jsx`
- `components/Footer.jsx`
- `components/AnimatedNumber.jsx`
- `components/BookCard.jsx`
- `components/PasswordField.jsx`

Fungsi:

- `AppShell`
  Layout wrapper utama frontend. Biasanya membungkus header, footer, dan halaman aktif.
- `Header`
  Navigasi utama situs.
- `Footer`
  Footer situs.
- `AnimatedNumber`
  Komponen angka animasi.
- `BookCard`
  Komponen tampilan satu kartu buku.
- `PasswordField`
  Input password dengan toggle tampil/sembunyi.

### `frontend/components/pages/`

Berisi komponen halaman terpisah agar file lebih mudah dirawat.

Isi:

- `components/pages/HomePage.jsx`
- `components/pages/AboutPage.jsx`
- `components/pages/CatalogPage.jsx`
- `components/pages/ContactPage.jsx`
- `components/pages/AuthPage.jsx`

Fungsi:

- Menyimpan isi tiap halaman secara modular.
- Membuat route file di `pages/` tetap tipis dan mudah dibaca.

Alur umumnya:

1. `pages/home.js` memanggil `AppShell`
2. `AppShell` merender `Header`, isi halaman, dan `Footer`
3. Isi halaman diambil dari `components/pages/HomePage.jsx`

### `frontend/data/`

Isi:

- `data/siteData.js`

Fungsi:

- Menyimpan data statis frontend seperti:
  - daftar menu navigasi
  - kategori buku
  - daftar buku
  - statistik
  - contact info
  - anggota tim

Catatan penting:

- Data di file ini masih hardcoded.
- Tahap berikutnya yang lebih benar adalah memindahkan sumber data ke API Laravel lalu Next.js melakukan fetch ke backend.

### `frontend/hooks/`

Isi:

- `hooks/useReveal.js`

Fungsi:

- Custom hook untuk animasi reveal/scroll effect berbasis DOM observer.

### `frontend/styles/`

Isi:

- `styles/globals.css`

Fungsi:

- CSS global untuk aplikasi Next.js.
- File ini mengimpor CSS lain dari `frontend/css/`.
- Juga menyimpan style tambahan seperti:
  - `.reveal`
  - `.reveal.visible`
  - `.hamburger-btn`
  - `.shake`
  - media query mobile

### `frontend/css/`

Berisi CSS per halaman yang saat ini masih dipakai sebagai sumber style.

Isi:

- `css/variables.css`
- `css/home.css`
- `css/about.css`
- `css/catalog.css`
- `css/contact.css`
- `css/auth.css`

Peran:

- Menjadi basis visual utama frontend.
- Diimpor oleh `styles/globals.css`.

### `frontend/image/`

Berisi asset gambar lama:

- `image/Atomic Habits.png`
- `image/The Subtle Art of Not Giving a Fck.png`
- `image/library.png`

Catatan:

- Sebagian halaman Next saat ini masih memakai URL gambar eksternal.
- Folder `image/` ini bisa dipakai nanti jika ingin memigrasikan semua asset menjadi lokal.

### `frontend/html/`

Berisi file statis lama:

- `html/home.html`
- `html/about.html`
- `html/catalog.html`
- `html/contact.html`
- `html/auth.html`

Status:

- Bukan bagian dari frontend aktif.
- Disimpan sebagai referensi/arsip.

### `frontend/js/`

Saat ini kosong.

Status:

- Tidak dipakai oleh frontend aktif.
- Bisa dihapus nanti jika memang tidak lagi diperlukan.

### `frontend/package.json`

Konfigurasi dependency dan script Next.js frontend.

Script utama:

```json
"dev": "next dev --webpack",
"build": "next build",
"start": "next start"
```

Alasan `--webpack` dipakai:

- Untuk menghindari masalah runtime Turbopack yang sebelumnya muncul pada environment ini.

### `frontend/next.config.mjs`

Konfigurasi Next.js.

Saat ini memuat:

- `reactStrictMode: true`
- `turbopack.root` diarahkan ke folder frontend

Walaupun mode `dev` saat ini memakai webpack, pengaturan root tetap dipertahankan untuk menghindari warning deteksi root yang salah saat ada banyak lockfile di lingkungan kerja.

## Alur Integrasi Backend dan Frontend

Alur saat ini:

1. Developer menjalankan Laravel di `backend/`
2. Developer menjalankan Next.js di `frontend/`
3. Laravel web route melakukan redirect ke Next.js
4. Next.js merender tampilan
5. Data yang ditampilkan frontend masih berasal dari file statis `frontend/data/siteData.js`

Ini berarti:

- Pemisahan folder sudah benar
- Integrasi visual sudah berjalan
- Tetapi integrasi data belum penuh

Supaya integrasi Laravel + Next.js menjadi matang, langkah lanjutan seharusnya:

1. Buat endpoint API di `backend/routes/api.php`
2. Tambahkan controller Laravel untuk buku, kategori, auth, dan sebagainya
3. Ubah komponen Next.js agar fetch data dari Laravel API
4. Kurangi ketergantungan pada data hardcoded di `frontend/data/siteData.js`

## Cara Menjalankan Proyek

### Menjalankan backend saja

```bash
cd backend
composer install
php artisan serve
```

### Menjalankan frontend saja

```bash
cd frontend
npm install
npm run dev
```

### Menjalankan keduanya dari backend

```bash
cd backend
composer dev
```

Perintah ini akan menjalankan:

- Laravel server
- Queue listener
- Next.js dev server dari folder `../frontend`

## Variabel Environment Penting

Di backend, variabel penting yang harus tersedia:

```env
FRONTEND_URL=http://localhost:3000
```

Fungsi:

- Digunakan oleh `backend/routes/web.php` untuk menentukan alamat frontend yang dituju.

## Status Saat Ini

Status struktur proyek saat ini dapat diringkas sebagai berikut:

### Sudah benar

- Frontend dan backend sudah dipisah ke folder berbeda.
- Laravel tidak lagi merender Blade frontend aktif.
- Next.js sudah memiliki struktur modular:
  - `pages`
  - `components`
  - `components/pages`
  - `data`
  - `hooks`
  - `styles`
- Composer backend sudah diarahkan untuk menyalakan frontend terpisah.

### Belum final

- Frontend masih memakai data statis.
- API Laravel belum menjadi sumber data utama frontend.
- Folder `frontend/html/` dan `frontend/js/` masih merupakan sisa struktur lama.
- Folder `backend/resources/css/` masih tersimpan meskipun frontend aktif memakai CSS dari `frontend/css/`.

## Saran Penataan Lanjutan

Jika proyek ini ingin dirapikan lebih jauh, urutan yang masuk akal adalah:

1. Jadikan Laravel sebagai API backend sungguhan
   Tempat kerja utama: `backend/routes/api.php`, controller, model, resource.

2. Sambungkan Next.js ke API Laravel
   Tempat kerja utama: `frontend/components/pages/*`, data fetching, auth flow.

3. Rapikan aset lama
   Evaluasi apakah folder berikut masih diperlukan:
   - `frontend/html/`
   - `frontend/js/`
   - `backend/resources/css/`

4. Pindahkan asset gambar lokal ke lokasi yang lebih standar untuk Next.js
   Misalnya ke folder `frontend/public/` jika nanti dibutuhkan.

## Kesimpulan

Struktur proyek saat ini sudah berada pada arah yang benar untuk arsitektur `Laravel backend + Next.js frontend` karena kedua aplikasi sudah dipisahkan ke folder masing-masing.

Namun, pemisahan ini baru menyelesaikan aspek struktur dan delivery frontend. Integrasi data dan API masih merupakan pekerjaan tahap berikutnya.

Dengan memahami pembagian folder berikut:

- `backend/` untuk logika server, database, auth, API, dan Laravel runtime
- `frontend/` untuk UI, routing halaman, komponen React, dan rendering Next.js

pengembangan selanjutnya akan jauh lebih mudah dilakukan secara terarah.
