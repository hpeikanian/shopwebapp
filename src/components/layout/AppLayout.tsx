import Header from './Header';
import BottomNav from '../navigation/BottomNav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>{children}</main>
      <BottomNav />
    </div>
  );
}
