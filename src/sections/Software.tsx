import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'


export default function Software(){
return (
<section id="software" className="container pt-24 pb-2">
<h2>Software</h2>
<div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-1">
{projects.map(p => (
<ProjectCard key={p.id} p={p} />
))}
</div>
</section>
)
}