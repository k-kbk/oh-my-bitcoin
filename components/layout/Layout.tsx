import Center from '../common/Center';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <Header />
      <Center>{children}</Center>
      <Footer />
    </div>
  );
}
