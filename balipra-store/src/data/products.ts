// ============================================================
// DATA PRODUK — edit harga, nama, dan gambar di file ini saja.
// price: isi string harga, mis. "Rp 25.000". Kalau kosong (""),
// kartu menampilkan "Cek di itemku".
// image: file di folder public/images/products/ (ganti file SVG-nya).
// ============================================================

// Tautan penjualan (dipakai tombol "Beli Sekarang" dan tombol utama hero)
export const STORE_LINK = "https://www.itemku.com/id/t/balipra-store";

export type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
};

const IMG = "/images/products";

export const products: Product[] = [
  // ---- Item biasa ----
  { name: "Yogurt Ice Cream", category: "Item", price: "", image: `${IMG}/yogurt-ice-cream.svg` },
  { name: "Volt Ginkgo", category: "Item", price: "", image: `${IMG}/volt-ginkgo.svg` },
  { name: "Pumpkin", category: "Item", price: "", image: `${IMG}/pumpkin.svg` },
  { name: "Durian", category: "Item", price: "", image: `${IMG}/durian.svg` },
  { name: "Dragon Fruit", category: "Item", price: "", image: `${IMG}/dragon-fruit.svg` },

  // ---- Limited Pet ----
  { name: "Voltice", category: "Limited Pet", price: "", image: `${IMG}/voltice.svg` },
  { name: "Aurefang", category: "Limited Pet", price: "", image: `${IMG}/aurefang.svg` },
  { name: "Clover", category: "Limited Pet", price: "", image: `${IMG}/clover.svg` },
  { name: "Slime Orca", category: "Limited Pet", price: "", image: `${IMG}/slime-orca.svg` },
  { name: "Snow Aurefang", category: "Limited Pet", price: "", image: `${IMG}/snow-aurefang.svg` },
];
