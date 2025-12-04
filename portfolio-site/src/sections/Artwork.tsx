import React from 'react'
import { artworks } from '../data/artworks'
import ProjectCard from '../components/ProjectCard'


export default function Artwork(){
return (
<section id="artwork" className="container py-12">
<h2 className="text-2xl font-semibold">Artwork</h2>
<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-1">
{artworks.map(p => (
<ProjectCard key={p.id} p={p} />
))}
</div>
</section>
)
}