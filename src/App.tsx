import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Software from './sections/Software'
import ArtSoftware from './sections/ArtSoftware'
import Artwork from './sections/Artwork'


export default function App() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Home />
{/* <About /> */}
<Software />
<ArtSoftware />
<Artwork />

</main>
</div>
)
}