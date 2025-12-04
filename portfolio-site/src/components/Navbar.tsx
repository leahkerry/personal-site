import React from 'react'


export default function Navbar() {
return (
<header className="fixed w-full bg-blue-200 border-b">
<div className="container flex items-center justify-between h-16">
    <a href="#home" className="font-semibold">Leah Kerry</a>
    <nav className="space-x-4 text-sm">
        <a href="#about"    className="hover:underline">About</a>
        <a href="#software" className="hover:underline">Software</a>
        <a href="#artsoftware" className="hover:underline">Tech + Art</a>
        <a href="#artwork"  className="hover:underline">Artwork</a>
    </nav>
</div>
</header>
)
}