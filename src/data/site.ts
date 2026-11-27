export const siteConfig = {
  brandName: "Atom Pro83",
  modelCode: "MK913",
  tagline: "Fantech Atom Pro83 (MK913) — 75% Tri-Mode Mechanical Keyboard",
  description:
    "Keyboard mechanical 75% (83 tombol + Rotary Knob) dengan koneksi Tri-Mode, 5-Pin Hot-Swappable, Sound-Absorbing Silicone, dan Side-Panel RGB.",
  whatsappNumber: "6281234567890", // Ganti dengan nomor WA toko Anda (format 62...)
  defaultWaText:
    "Halo, saya tertarik memesan Keyboard Mechanical Fantech Atom Pro83 (MK913).",
  email: "halo@atompro83.id",
  instagram: "@atompro83.id",
};

export function getWaUrl(message: string = siteConfig.defaultWaText) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mk913Specs = [
  { label: "Layout", value: "75% • 83 Keys + Knob" },
  { label: "Koneksi", value: "Wired / 2.4GHz / BT 5.0" },
  { label: "PCB", value: "5-Pin Hot-Swappable" },
  { label: "Baterai", value: "2000 mAh Rechargeable" },
];

export const features = [
  {
    title: "Tri-Mode Connectivity",
    description:
      "Fleksibel dipakai di PC, laptop, tablet, hingga HP lewat kabel Type-C, dongle wireless 2.4GHz low-latency, atau Bluetooth 5.0 hingga 3 perangkat.",
    icon: "wireless",
  },
  {
    title: "5-Pin Hot-Swappable PCB",
    description:
      "Bebas gonta-ganti switch mekanikal 3-pin maupun 5-pin tanpa solder. Tersedia varian bawaan Atom Red (Soft Linear) dan Atom Blue (Clicky).",
    icon: "switch",
  },
  {
    title: "Rotary Knob & Silicone Pad",
    description:
      "Dilengkapi Multi-Function Rotary Knob untuk kontrol volume/RGB serta lapisan Sound-Absorbing Silicone agar suara ketikan padat dan bebas ping.",
    icon: "knob",
  },
  {
    title: "22 Mode RGB + Side Panel",
    description:
      "Pencahayaan per-key RGB (22 mode) dan Side-Panel RGB (11 efek spektrum) dengan baterai 2000 mAh serta dukungan software macro Windows.",
    icon: "rgb",
  },
];

export const packages = [
  {
    name: "Saturn Grey",
    subtitle: "Varian 3-Tone klasik dengan keycaps abu-abu, putih & aksen cyan",
    price: "Rp 499.000",
    originalPrice: "Rp 649.000",
    popular: false,
    features: [
      "Keyboard Fantech Atom Pro83 (MK913) Saturn Grey",
      "Pilihan Switch: Atom Red (Linear) / Atom Blue (Clicky)",
      "Koneksi Tri-Mode (Type-C, 2.4GHz Dongle, BT 5.0)",
      "Multi-Function Rotary Knob & Side-Panel RGB",
      "5-Pin Hot-Swappable PCB + Silicone Dampener",
      "Keycap & Switch Puller dalam box",
      "Garansi Resmi 1 Tahun",
    ],
    waMessage:
      "Halo, saya ingin memesan Fantech Atom Pro83 (MK913) varian Saturn Grey (Rp 499.000).",
  },
  {
    name: "Mercury Black — Pro Bundle",
    subtitle: "Varian gelap ikonik + bonus aksesoris siap pakai di setup",
    price: "Rp 569.000",
    originalPrice: "Rp 749.000",
    popular: true,
    features: [
      "Keyboard Fantech Atom Pro83 (MK913) Mercury Black",
      "Pilihan Switch: Atom Red (Linear) / Atom Blue (Clicky)",
      "Bonus 4x Switch Cadangan + Dust Cover Akrilik",
      "Sound-Absorbing Silicone & Full Anti-Ghosting (NKRO)",
      "Kabel USB Type-C Braided + Dongle 2.4GHz",
      "Pengecekan QC Stabilizer & Switch Sebelum Kirim",
      "Garansi Resmi 1 Tahun",
    ],
    waMessage:
      "Halo, saya tertarik dengan Fantech Atom Pro83 (MK913) Mercury Black Pro Bundle (Rp 569.000). Apakah stok tersedia?",
  },
  {
    name: "Custom Mod — Thocky Edition",
    subtitle: "Sudah di-tune stabilizer & akustiknya untuk suara lebih creamy",
    price: "Rp 699.000",
    originalPrice: "Rp 899.000",
    popular: false,
    features: [
      "Pilih Varian Saturn Grey atau Mercury Black",
      "Pre-Lubed Plate Stabilizer (Spacebar, Enter, Shift)",
      "Tambahan Tape Mod untuk Suara Lebih Deep & Padat",
      "Set Keycaps Aksen Tambahan Stellar Edition",
      "Support Software Remap Key & Macro Windows",
      "Garansi Resmi 1 Tahun + Konsultasi Switch",
    ],
    waMessage:
      "Halo, saya ingin pesan Fantech Atom Pro83 (MK913) Custom Mod Thocky Edition (Rp 699.000).",
  },
];

export const faqs = [
  {
    question: "Apakah Fantech Atom Pro83 (MK913) bisa dipakai tanpa kabel di HP atau tablet?",
    answer:
      "Ya. MK913 mendukung koneksi Tri-Mode: kabel USB Type-C, wireless 2.4GHz (via dongle), dan Bluetooth 5.0 yang bisa terhubung ke 3 perangkat sekaligus (berpindah cepat dengan FN + E / R / T).",
  },
  {
    question: "Apakah switch-nya bisa diganti tanpa solder?",
    answer:
      "Bisa. PCB MK913 sudah mendukung 5-pin hot-swappable socket, sehingga kompatibel dengan hampir semua switch mechanical 3-pin maupun 5-pin di pasaran menggunakan switch puller bawaan.",
  },
  {
    question: "Apa fungsi Rotary Knob di pojok kanan atas keyboard?",
    answer:
      "Multi-Function Rotary Knob berfungsi untuk mengatur tingkat volume atau kecerahan lampu, serta dapat ditekan untuk mute/unmute audio maupun mengganti mode pencahayaan Side-Panel RGB.",
  },
  {
    question: "Lebih cocok pilih switch Atom Red atau Atom Blue?",
    answer:
      "Atom Red (Linear) memiliki tekanan halus tanpa bunyi klik keras sehingga nyaman untuk mengetik lama, kerja kantor, atau gaming malam hari. Atom Blue (Clicky) cocok jika Anda menyukai sensasi klik tegas dan suara renyah.",
  },
];
