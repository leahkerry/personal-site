import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'


export default function Software(){
return (
<section id="software" className="container py-12">
<h2 className="text-2xl font-semibold">Software</h2>
<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-1">
{projects.map(p => (
<ProjectCard key={p.id} p={p} />
))}
</div>
</section>
)
}