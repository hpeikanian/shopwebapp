import { Header } from './Header';
import { BottomNav } from '../navigation/BottomNav';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <BottomNav />
    </div>
  );
}
