---
## KERIS App
---

KERIS merupakan situs web yang berisi informasi seputar karya seni tradisional Indonesia, sesuai dengan kepanjangan dari namanya yaitu Koleksi Kerajinan Seni Tradisional. Proyek ini merupakan sebuah website koleksi kerajinan seni yang dibangun dengan mengikuti langkah-langkah metode Design Thinking. Berikut adalah beberapa poin tambahan tentang pengembangan proyek ini:

1. **Desain Berbasis Design Thinking:**
   - Proyek ini didesain dengan menerapkan prinsip-prinsip Design Thinking, diawali dengan tahap Empathize menggunakan penyebaran kuesioner untuk memahami preferensi pengguna.

2. **Langkah-langkah Design Thinking:**
   - **Empathize:** Melibatkan pengguna dengan menyebarkan kuesioner untuk mendapatkan pemahaman mendalam tentang preferensi dan kebutuhan mereka.
   - **Define:** Mengelompokkan data dan merumuskan masalah yang dihadapi oleh calon pengguna berdasarkan hasil dari tahap Empathize.
   - **Ideate:** Menghasilkan solusi kreatif berupa fitur-fitur seperti galeri seni, detail galeri seni, ulasan seni, berita, acara, dan kalendar budaya.
   - **Prototype:** Menghasilkan flowchart dan desain user interface yang akan digunakan sebagai acuan bagian front-end web.

3. **Teknologi dan Alat yang Digunakan:**
   - Menggunakan _realtime database firebase_ untuk mempermudah manajemen dan tampilan data secara dinamis.
   - Menerapkan teknologi frontend dengan menggunakan Bootstrap dan SASS untuk tata letak dan gaya visual yang responsif.

4. **Penggunaan Webpack dan Node.js:**
   - Selama proses pengembangan, proyek ini menggunakan Webpack dan Node.js untuk manajemen modul, pembuatan _bundle_, dan penyediaan lingkungan pengembangan.

5. **Peningkatan Performa Aplikasi:**
   - Menerapkan Web App Manifest untuk memastikan aplikasi dapat diakses dan digunakan secara _offline_.
   - Menambahkan aksesibilitas _skip to content_ untuk memperbaiki pengalaman pengguna dengan navigasi cepat.
   - Menggunakan Bundle Analyzer dan SplitChunks untuk meningkatkan efisiensi _loading_ dan _caching_.
   - Menggunakan workbox untuk strategi caching agar aplikasi tetap dapat di akses ketika keadaan offline.

6. **Optimasi CSS:**
   - Proyek ini melakukan optimasi CSS dengan meminimalkan ukuran file CSS untuk mempercepat waktu pemuatan halaman.

Dengan menggabungkan prinsip Design Thinking, teknologi modern, dan praktik pengembangan terbaik, proyek ini bertujuan untuk memberikan pengalaman yang memuaskan dan dapat diakses oleh berbagai pengguna dengan preferensi yang beragam.

---
## Cara Berkontribusi atau Menggunakan Proyek
---

1. **Fork Proyek:**
   - Klik tombol "Fork" di sudut kanan atas halaman repositori ini untuk membuat salinan proyek ke akun GitHub Anda.

2. **Clone Repositori:**
   - Clone repositori yang telah di-_fork_ ke lokal IDE Anda: `git clone <url-repo-fork>`

3. **Instal Dependensi:**
   - Pindah ke direktori proyek: `cd <nama-folder-proyek>`
   - Jalankan perintah untuk menginstal dependensi: `npm install`

4. **Kembangkan pada Mode Pengembangan:**
   - Gunakan mode pengembangan untuk melihat perubahan secara real-time: `npm run build:dev`

5. **Build untuk Produksi:**
   - Untuk membangun proyek untuk produksi, jalankan: `npm run build:prod`

6. **Uji Aplikasi:**
   - Pastikan melakukan pengujian untuk memastikan fitur atau perbaikan bekerja dengan baik: `npm test`

7. **Uji End-to-End:**
   - Gunakan perintah untuk menjalankan uji end-to-end: `npm run e2e`

8. **Serve Aplikasi:**
   - Gunakan perintah untuk menyajikan aplikasi lokal pada port 9000: `npm run serve`

9. **Buat Pull Request:**
   - Jika Anda membuat perubahan atau menambah fitur, buat _branch_ baru: `git checkout -b nama-branch`
   - Commit perubahan: `git commit -m "Deskripsi singkat perubahan"`
   - Push ke _branch_ di repositori Anda: `git push origin nama-branch`
   - Buka GitHub, pergi ke _branch_ yang telah Anda _push_, dan klik "Compare & pull request".
   - Berikan deskripsi rinci tentang perubahan yang Anda buat.
   - Tunggu feedback dan diskusi sebelum pull request diterima.

10. **Menggunakan Proyek:**
    - Jika Anda ingin menggunakan proyek ini, Anda dapat mengikuti langkah instalasi dan menjalankan aplikasi seperti yang dijelaskan di bagian "Panduan Pengguna" di atas.

11. **Berikan Masukan atau Laporkan Isu:**
    - Jika Anda menemui masalah atau ingin memberikan masukan, buka _issue_ di repositori ini. Pastikan untuk memberikan deskripsi yang jelas dan detail.

12. **Baca Lisensi:**
    - Pastikan untuk membaca dan memahami lisensi proyek ini sebelum berkontribusi atau menggunakan secara ekstensif.

Dengan mengikuti langkah-langkah di atas, Anda dapat dengan mudah berkontribusi pada proyek ini atau menggunakan proyek sebagai dasar untuk proyek Anda sendiri.

---
## Cara Deploy Aplikasi ke Netlify
---

Berikut adalah langkah-langkah untuk mendeploy aplikasi ke platform Netlify:

1. **Buat Akun Netlify:**
   - Jika Anda belum memiliki akun Netlify, buat akun baru di [Netlify](https://www.netlify.com/).

2. **Login ke Netlify:**
   - Login ke akun Netlify melalui [dashboard](https://app.netlify.com/).

3. **Buat Proyek Baru:**
   - Klik tombol "New site from Git" di dashboard Netlify.
   - Pilih repositori proyek Anda dari GitHub atau platform lainnya.

4. **Konfigurasi Build Settings:**
   - Setelah memilih repositori, Netlify akan mendeteksi otomatis pengaturan build. Pastikan bahwa konfigurasi build script dan direktori output sesuai dengan proyek Anda.
   - Jika proyek menggunakan Webpack atau alat bundling lainnya, pastikan untuk menentukan script build pada pengaturan build.

5. **Atur Environment Variables:**
   - Jika proyek membutuhkan environment variables, pastikan untuk menambahkannya di bagian "Build & Deploy" pada pengaturan Netlify.

6. **Deploy Site:**
   - Klik tombol "Deploy site" untuk memulai proses deployment.

7. **Pantau Status Deployment:**
   - Pantau status deployment melalui dashboard Netlify. Netlify akan memberikan URL unik untuk situs web Anda.

8. **Buka Aplikasi:**
   - Setelah deployment selesai, buka aplikasi dengan mengunjungi URL yang diberikan oleh Netlify.

9. **Pengaturan Tambahan (Opsional):**
   - Sesuaikan pengaturan tambahan di dashboard Netlify sesuai kebutuhan, seperti custom domain, SSL, dan fitur lainnya.

Dengan mengikuti langkah-langkah di atas, Anda dapat dengan mudah mendeploy aplikasi Anda ke Netlify dan menyajikannya secara online. Jangan lupa untuk memantau log deployment untuk memastikan tidak ada kesalahan dan memperbarui situs dengan perubahan terbaru.

