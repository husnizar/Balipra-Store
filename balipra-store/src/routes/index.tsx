import { createFileRoute } from "@tanstack/react-router";
import { products, STORE_LINK, type Product } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balipra Store — Item & Pet Roblox Build A Zoo" },
      {
        name: "description",
        content:
          "Toko item virtual dan pet game Roblox Build A Zoo. Temukan item favoritmu dan beli langsung lewat itemku.",
      },
      { property: "og:title", content: "Balipra Store — Item & Pet Roblox Build A Zoo" },
      {
        property: "og:description",
        content:
          "Toko item virtual dan pet game Roblox Build A Zoo. Temukan item favoritmu dan beli langsung lewat itemku.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="bg-muted p-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[594/420] w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
          {product.category}
        </span>
        <h3 className="text-base font-semibold text-card-foreground">{product.name}</h3>
        <p className="text-sm font-semibold text-accent-foreground">
          {product.price ? product.price : "Cek di itemku"}
        </p>
        <a
          href={STORE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Beli Sekarang
        </a>
      </div>
    </article>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-border bg-primary">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="/" className="text-lg font-bold tracking-tight text-primary-foreground">
            Balipra <span className="text-accent">Store</span>
          </a>
          <a
            href="#produk"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:text-accent"
          >
            Produk
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Temukan Item Favoritmu di <span className="text-accent-foreground">Build A Zoo!</span>
              </h1>
              <p className="mt-4 max-w-md text-base text-muted-foreground">
                Balipra Store menjual item virtual dan pet game Roblox Build A Zoo. Pilih item-mu,
                beli langsung lewat itemku, dan lengkapi zoomu!
              </p>
              <a
                href={STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Lihat Produk
              </a>
            </div>
            <img
              src="/images/banner.svg"
              alt="Banner Balipra Store"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </section>

        {/* Katalog */}
        <section id="produk" className="border-t border-border bg-secondary/50 py-10 sm:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Produk</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Item dan Limited Pet Build A Zoo yang tersedia.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-6">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-primary-foreground">
          © {new Date().getFullYear()} Balipra Store
        </div>
      </footer>
    </div>
  );
}
