
import { useState } from 'react';
import Hero from "./hero";


function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-gray-200 bg-white/90 px-6 py-3 shadow-sm backdrop-blur-md">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Aseel<span className="text-blue-600">Khanfar</span>
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-600 md:block"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;