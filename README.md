# Next.js App Router dengan Feature-Sliced Design (FSD)

Project ini dibangun menggunakan **Next.js (App Router)** dan menerapkan metodologi arsitektur frontend **Feature-Sliced Design (FSD)** yang dimodifikasi agar dinamis dan sesuai dengan standar industri saat ini.

## 🗂 Struktur Folder (Layering)

Arsitektur project dibagi menjadi 5 layer utama di dalam folder `src/`. Pergerakan *import* HANYA BOLEH satu arah dari layer atas ke layer bawah (Linear).

1. **`app/`** (Layer 1): *Entry point* untuk routing Next.js, Layout global, dan Provider. Halaman sebagai perakit (*assembler*) akhir.
2. **`widgets/`** (Layer 2): Komposisi blok UI mandiri berukuran besar (misal: Sidebar, Footer, Tabel Kompleks). Menggabungkan banyak *features* dan *entities*. 
3. **`features/`** (Layer 3): Interaksi user spesifik dan logika bisnis parsial (interaksi tombol/action, manipulasi form). Biasanya berupa *Client Components*.
4. **`entities/`** (Layer 4): Entitas bisnis inti dari data aplikasi kamu (model data, API endpoint/fetcher, cardkeleton UI pasif).
5. **`shared/`** (Layer 5): Infrastruktur murni & UI reusables (Button, Input, formatters, konfigurasi axios/API). Tidak peduli dengan konteks bisnis/domain.

## 🚀 Aturan Emas (The Golden Rule)

**Cross-Import HANYA KE BAWAH!**
- Komponen di `features/` BOLEH mengimpor dari `entities/` atau `shared/`.
- Komponen di `entities/` HANYA BOLEH mengimpor dari `shared/`.
- Komponen di `shared/` BISA SAJA mengimpor sesama file di dalam `shared/`, tapi TIDAK BOLEH mengimpor apa pun dari 4 layer di atasnya.
- Sebaiknya hindari import lintas *slice* di layer yang sama (Kecuali layer `shared/`).

## 🛠 Cara Menjalankan Project

Jalankan Development Server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya. Proyek akan me-redirect secara default ke `/dashboard`.
