export function EditorialSection() {
  return (
    <section className="relative my-16 min-h-[420px] overflow-hidden bg-neutral-100 flex items-center justify-center text-center px-6">
      <img
        src="/images/editorial-everyday.jpg"
        alt="Poodin Everyday"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative text-white max-w-xl">
        <h2 className="text-3xl md:text-5xl tracking-[0.18em] uppercase mb-5">
          POODIN EVERYDAY
        </h2>
        <p className="text-sm md:text-base tracking-widest">
          Simple pieces made for everyday living.
        </p>
      </div>
    </section>
  );
}
