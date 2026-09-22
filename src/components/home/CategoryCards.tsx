const categories = [
  { title: 'Women', href: '/shop/women' },
  { title: 'Men', href: '/shop/men' },
  { title: 'Kids', href: '/shop/kids' },
];

export default function CategoryCards() {
  return (
    <section className="grid grid-cols-3 gap-3 px-4">
      {categories.map((item) => (
        <a key={item.title} href={item.href} className="aspect-[3/4] bg-neutral-100 flex items-end p-4">
          <span className="text-sm tracking-widest uppercase">{item.title}</span>
        </a>
      ))}
    </section>
  );
}
