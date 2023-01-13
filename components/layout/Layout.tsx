import Header from '../common/Header';
import Footer from '../common/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <Header />
      <div className="w-full flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
}
