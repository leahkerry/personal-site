import React from 'react'
import type { Project } from '../types/project'


export default function ProjectCard({ p }: { p: Project }){
return (
    <article className="bg-secondary border rounded-lg p-4">
    
    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer">
        <h3 className="text-xl font-semibold">{p.title}</h3>

        {p.image && <img src={p.image} className="w-full h-96 object-cover rounded mt-2"/>}
    </a>}
    {!p.link && 
    <div>
        <h3 className="text-xl font-semibold">{p.title}</h3>

        {p.image && <img src={p.image} className="w-full h-96 object-cover rounded mt-2"/>}
    </div>}
    {p.video && <video src={p.video} muted controls className="w-full h-96 object-cover rounded mt-2"/>}
    
    {p.youtube && 
        <iframe className="mt-3 w-full h-96 rounded" 
                title="YouTube video player" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                src={p.youtube} >
        </iframe>}
    
    {p.gallery && (
        <div className="mt-3 text-lg grid grid-cols-1 sm:grid-flow-col sm:grid-rows-1 items-stretch gap-2">
          {p.gallery.map((t, index) => (
            <img
              key={index}
              src={t}
              className="w-full h-96 object-cover rounded mt-2"
            />
          ))}
        </div>
      )}

    <p className="mt-2 text-lg">{p.description}</p>
    <div className="mt-3 text-lg flex flex-wrap gap-2">
        {p.technologies.map(t => (
        <span key={t} className="px-2 py-1 bg-accent rounded">{t}</span>
        ))}
    </div>
    <div className="mt-3">
        {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-lg underline hover:text-blue-600">Source</a>}
    </div>
    </article>
    )
}