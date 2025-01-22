"use client";

import Image from 'next/legacy/image';
import Link from 'next/link';
import logo from '../Assets/logo.png';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Set a default language
  const defaultLocale = 'fr';

  // Update the handleLanguageChange function to use defaultLocale
  const handleLanguageChange = (newLocale) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${currentPath}`);
  };

  const menuItems = [
    { href: '/nous_sommes', label: 'about' },
    { href: '/actualites', label: 'news' },
    { href: '/projets', label: 'projects' },
    { href: '/contact', label: 'contact' }
  ];

  return (
<div className="navbar bg-transparent backdrop-blur-md mx-4 my-2 px-8 py-4 rounded-b-lg">      {/* Logo centered */}
      <div className="navbar-center w-full flex justify-center">
        <Link href="/" className="">
          <Image src={logo} alt="Fondation Assalam" width={20} height={40} className="rounded-lg" />
        </Link>
      </div>

      {/* Nav items below the logo */}
      <div className="navbar-end w-full flex justify-center mt-4">
        <ul className="menu menu-horizontal px-1 gap-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-lg font-serif hover:bg-base-200 px-4 py-2 rounded-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;