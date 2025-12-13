import React from 'react'
import { artworks } from '../data/artworks'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

export default function Artwork(){
return (
<section id="artwork" className="container pt-24 pb-2">
<h2>Artwork</h2>
<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-1">
{artworks.map(p => (
<ProjectCard key={p.id} p={p} />
))}
</div>
<Footer />
</section>
)

}