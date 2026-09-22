export function HomeSections() {
  return (
    <main className="space-y-16">
      <section className="min-h-[70vh] flex items-center justify-center text-center">
        <div>
          <p className="text-sm tracking-[0.3em]">POODIN</p>
          <h1 className="text-5xl md:text-7xl mt-6">Everyday essentials</h1>
          <p className="mt-6 text-neutral-500">Modern clothing designed for daily life.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl">Shop by category</h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {['Women', 'Men', 'Kids'].map((item) => (
            <div key={item} className="aspect-[3/4] bg-neutral-100 flex items-end p-4">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl">New Arrivals</h2>
      </section>
    </main>
  );
}
