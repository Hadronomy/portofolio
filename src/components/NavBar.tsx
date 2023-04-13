import Image from 'next/image';
import Link from 'next/link';
import { HiMoon, HiMenuAlt1 } from 'react-icons/hi';
import { useRouter } from 'next/router';

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="fixed top-0 z-20 w-full border-b-[1px] border-white/20 bg-white/40 backdrop-blur-[8px] dark:bg-black/40">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-5 md:px-10">
        <div className="flex md:order-2 md:hidden">
          <button
            data-collapse-toggle="navbar-menu"
            type="button"
            className="inline-flex h-10 w-10 items-center rounded-lg p-3 text-sm text-white ring-slate-50 hover:ring-2 md:hidden"
            aria-controls="navbar-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt1 className="h-full w-full" />
          </button>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={80}
          height={80}
          priority
        />
        <div
          id="navbar-menu"
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        >
          <ul className="flex w-full flex-col gap-x-10 p-4 capitalize md:flex-row md:p-0 ">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="aria-selected:border-b-2 dark:hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  aria-current={router.route === href ? 'page' : undefined}
                  aria-selected={router.route === href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center md:flex">
          <button className="inline-flex h-10 w-10 items-center rounded-lg p-3 text-sm text-white ring-slate-50 hover:ring-2 md:hidden">
            <HiMoon className="h-full w-full" />
          </button>
        </div>
      </div>
    </nav>
  );
}
