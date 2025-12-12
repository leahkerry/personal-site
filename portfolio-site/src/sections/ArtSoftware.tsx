import React from 'react'
import { artsoftware } from '../data/artsoftware'
import ProjectCard from '../components/ProjectCard'


export default function ArtSoftware(){
return (
<section id="artsoftware" className="container pt-24 pb-2">
<h2>Tech + Art</h2>
<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-1">
{artsoftware.map(p => (
<ProjectCard key={p.id} p={p} />
))}
</div>
</section>
)
}