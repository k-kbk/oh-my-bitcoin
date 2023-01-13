import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { id: '1', name: '홈', href: '/' },
  { id: '2', name: '암호화폐 시세', href: '/coins' },
];

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="flex justify-center items-center">
      <ul className="flex">
        {navItems.map((item) => {
          return (
            <li key={item.id} className="">
              <Link
                href={item.href}
                className={`font-medium text-lg ${
                  item.href === router.asPath
                    ? 'text-blue-500'
                    : 'text-myGray text-opacity-[0.85] hover:text-black'
                } px-6 py-3`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
