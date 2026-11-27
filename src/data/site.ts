export const siteConfig = {
  brandName: "NusaWeb Studio",
  tagline: "Jasa Pembuatan Landing Page Cepat & Konversi Tinggi",
  description:
    "Tingkatkan konversi iklan dan penjualan bisnis Anda dengan landing page modern, mobile-first, dan garansi skor kecepatan Google PageSpeed 95+.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WA Anda (format 62...)
  defaultWaText:
    "Halo, saya tertarik konsultasi pembuatan landing page untuk bisnis saya.",
  email: "halo@nusawebstudio.id",
  instagram: "@nusawebstudio",
};

export function getWaUrl(message: string = siteConfig.defaultWaText) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const features = [
  {
    title: "Loading Instan (Skor 95+)",
    description:
      "Dibangun tanpa beban script berlebih sehingga terbuka dalam hitungan milidetik di jaringan seluler, mencegah calon pembeli kabur sebelum halaman terbuka.",
    icon: "bolt",
  },
  {
    title: "Desain Mobile-First",
    description:
      "Lebih dari 85% trafik iklan berasal dari smartphone. Tata letak dan tombol aksi dirancang presisi untuk kenyamanan layar ponsel.",
    icon: "mobile",
  },
  {
    title: "Fokus Konversi & CTA Jelas",
    description:
      "Alur copywriting terstruktur mulai dari penawaran utama, bukti kepercayaan, hingga tombol WhatsApp otomatis yang siap menutup penjualan.",
    icon: "target",
  },
  {
    title: "Siap Iklan & Ramah SEO",
    description:
      "Struktur meta tag lengkap untuk pratinjau tautan WhatsApp/Instagram yang rapi serta siap dipasangi Meta Pixel maupun Google Analytics.",
    icon: "chart",
  },
];

export const packages = [
  {
    name: "Starter",
    subtitle: "Cocok untuk profil singkat & validasi produk",
    price: "Rp 499.000",
    originalPrice: "Rp 750.000",
    popular: false,
    features: [
      "1 Halaman Landing Page (hingga 4 section)",
      "Desain Responsif (Mobile & Desktop)",
      "Integrasi Tombol WhatsApp Pre-filled Text",
      "Gratis Hosting Cloudflare (Subdomain .pages.dev)",
      "Sertifikat SSL/HTTPS Otomatis",
      "Pengerjaan 2–3 Hari Kerja",
      "2x Revisi Desain & Teks",
    ],
    waMessage:
      "Halo, saya ingin memesan Paket Starter (Rp 499.000) untuk landing page bisnis saya.",
  },
  {
    name: "Business Pro",
    subtitle: "Paling ideal untuk kampanye iklan & UMKM serius",
    price: "Rp 899.000",
    originalPrice: "Rp 1.350.000",
    popular: true,
    features: [
      "1 Halaman Penjualan Lengkap (hingga 7 section)",
      "Bantuan Struktur Copywriting Persuasif",
      "Integrasi WhatsApp + Formulir Lead ke Email/Sheets",
      "Bantuan Setup Custom Domain (.com / .id)*",
      "Optimasi Kecepatan PageSpeed 95+ & SEO Dasar",
      "Pengerjaan 3–5 Hari Kerja",
      "4x Revisi Desain & Konten",
    ],
    waMessage:
      "Halo, saya tertarik dengan Paket Business Pro (Rp 899.000). Boleh diskusi detailnya?",
  },
  {
    name: "Scale & Ads",
    subtitle: "Untuk kebutuhan tracking iklan & halaman tambahan",
    price: "Rp 1.499.000",
    originalPrice: "Rp 2.100.000",
    popular: false,
    features: [
      "Landing Page Utama + Halaman Thank You",
      "Pemasangan Meta Pixel / TikTok Pixel / GA4",
      "Komponen Interaktif (Kalkulator / Filter Katalog)",
      "Bantuan Setup Custom Domain & Cloudflare DNS*",
      "Prioritas Pengerjaan & Dukungan Teknis 30 Hari",
      "Revisi Sepuasnya Hingga Siap Tayang",
    ],
    waMessage:
      "Halo, saya ingin konsultasi Paket Scale & Ads (Rp 1.499.000) untuk kebutuhan iklan.",
  },
];

export const faqs = [
  {
    question: "Apakah harga paket sudah termasuk nama domain (.com atau .id)?",
    answer:
      "Harga di atas adalah biaya jasa pembuatan dan hosting super cepat tanpa biaya bulanan. Jika Anda belum memiliki domain, kami akan bantu proses pembelian domain atas nama Anda (sekitar Rp 160.000–Rp 250.000/tahun) agar hak kepemilikan sepenuhnya milik Anda.",
  },
  {
    question: "Materi apa saja yang perlu saya siapkan sebelum pengerjaan?",
    answer:
      "Anda cukup menyiapkan nama brand/usaha, deskripsi singkat produk atau jasa, daftar harga/paket, foto produk (jika ada), serta nomor WhatsApp tujuan. Jika belum punya teks promosi yang rapi, tim kami akan bantu menyusunnya.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran menggunakan sistem DP (uang muka) sebesar 50% di awal sebagai tanda jadi pengerjaan. Sisa pelunasan 50% dibayarkan setelah preview landing page selesai dan Anda setujui sebelum ditayangkan ke domain utama.",
  },
  {
    question: "Apakah ada biaya perpanjangan hosting setiap bulan?",
    answer:
      "Tidak ada. Kami mendeploy website Anda di infrastruktur edge Cloudflare Pages dengan bandwidth tanpa batas, sehingga Anda bebas dari biaya sewa server bulanan.",
  },
];