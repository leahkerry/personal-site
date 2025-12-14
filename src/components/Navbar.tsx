import React, { useState } from 'react'


export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
e.preventDefault();
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
setIsMenuOpen(false); // Close the menu after clicking a link
};

return (
<header className="fixed w-full bg-primary border-b z-50">
<div className="container flex items-center justify-between h-16">
    <a
      href="#home"
      className="hover:tracking-widest text-slate-500 font-custom text-xl navlink"
      onClick={(e) => handleScroll(e, 'home')}
    >
      Leah Kerry
    </a>
    {/* Hamburger Icon */}
    <button
      className="lg:hidden text-xl"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle Menu"
    >
      {isMenuOpen ? '✖' : '☰'}
    </button>
    {/* Navigation Links */}
    <nav
      className={`lg:flex lg:space-x-8 text-xl ${
        isMenuOpen ? 'block' : 'hidden'
      } absolute lg:static top-16 left-0 w-full lg:w-auto bg-primary lg:bg-transparent`}
    >
      <a
        href="#software"
        className="block lg:inline-block hover:tracking-widest hover:font-semibold navlink p-4 lg:p-0"
        onClick={(e) => handleScroll(e, 'software')}
      >
        Software
      </a>
      <a
        href="#artsoftware"
        className="block lg:inline-block hover:tracking-widest hover:font-semibold navlink p-4 lg:p-0"
        onClick={(e) => handleScroll(e, 'artsoftware')}
      >
        Tech + Art
      </a>
      <a
        href="#artwork"
        className="block lg:inline-block hover:tracking-widest hover:font-semibold navlink p-4 lg:p-0"
        onClick={(e) => handleScroll(e, 'artwork')}
      >
        Artwork
      </a>
    </nav>
  </div>
</header>
)
}