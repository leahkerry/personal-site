import React from 'react'


export default function Navbar() {
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
e.preventDefault();
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
};

return (
<header className="fixed w-full bg-primary border-b">
<div className="container flex items-center justify-between h-16">
    <a href="#home" className="font-semibold text-lg" onClick={(e) => handleScroll(e, 'home')}>Leah Kerry</a>
    <nav className="space-x-4 text-lg">
        {/* <a href="#about"    className="hover:underline" onClick={(e) => handleScroll(e, 'about')}>About</a> */}
        <a href="#software" className="hover:underline" onClick={(e) => handleScroll(e, 'software')}>Software</a>
        <a href="#artsoftware" className="hover:underline" onClick={(e) => handleScroll(e, 'artsoftware')}>Tech + Art</a>
        <a href="#artwork"  className="hover:underline" onClick={(e) => handleScroll(e, 'artwork')}>Artwork</a>
    </nav>
</div>
</header>
)
}