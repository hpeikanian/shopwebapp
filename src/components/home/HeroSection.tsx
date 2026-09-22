export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-stone-100">
      <div className="absolute inset-0 bg-[url('/images/hero-men.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex min-h-[80vh] items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <p className="mb-6 text-xs tracking-[0.35em] uppercase">New Season</p>
          <h1 className="mb-6 text-5xl font-light leading-tight md:text-7xl">
            Essential for a finer everyday
          </h1>
          <p className="mb-8 max-w-sm text-sm tracking-wide">
            Timeless pieces designed for modern living.
          </p>
          <button className="bg-white px-8 py-3 text-sm text-black transition hover:bg-stone-100">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
}
