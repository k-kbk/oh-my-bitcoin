import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="w-full flex justify-center py-5 border-b">
      <div className="max-w-screen-lg w-full flex justify-between">
        <p className="font-bold text-2xl">oh-my-bitcoin</p>
        <NavBar />
      </div>
    </header>
  );
}
