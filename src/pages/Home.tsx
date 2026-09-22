import { HeroSection } from '../components/home/HeroSection';
import { CategoryCards } from '../components/home/CategoryCards';
import { NewArrivals } from '../components/home/NewArrivals';
import { EditorialSection } from '../components/home/EditorialSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CategoryCards />
      <NewArrivals />
      <EditorialSection />
    </main>
  );
}
