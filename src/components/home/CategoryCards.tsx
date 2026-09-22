const categories = [
  { title: 'Women', image: '/images/hero-women.jpg', href: '/shop/women' },
  { title: 'Men', image: '/images/hero-men.jpg', href: '/shop/men' },
  { title: 'Kids', image: '/images/hero-kids.jpg', href: '/shop/kids' },
];

export default function CategoryCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 py-12">
      {categories.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group relative aspect-[3/4] overflow-hidden bg-neutral-100"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10" />
          <span className="absolute bottom-6 left-6 text-white text-sm tracking-[0.3em] uppercase">
            {item.title}
          </span>
        </a>
      ))}
    </section>
  );
}
