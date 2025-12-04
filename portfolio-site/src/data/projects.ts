import type { Project } from '../types/project'


export const projects: Project[] = [
{
id: 'raytracer',
title: 'Recursive Raytracer',
video: 'src/assets/shader_demo.mp4',
description: 'A GLSL + WebGL recursive raytracer. Implements reflections, shadows, and simple textures.',
technologies: ['GLSL', 'WebGL', 'TypeScript'],
repo: 'https://github.com/leahkerry/Recursive-Raytracer'
},

{
id: 'portfolio',
title: 'Portfolio (this site)',
description: 'Built with React + TypeScript + Tailwind; responsive design and deployable to Vercel.',
technologies: ['React', 'TypeScript', 'Tailwind'],
repo: 'https://github.com/leahkerry/personal-site'
}, 

{
id: 'sudoku',
title: 'Sudoku Generator',
image: '/src/assets/sudokupage.png',
description: 'Built with React + TypeScript + Tailwind; responsive design and deployable to Vercel.',
technologies: ['React', 'TypeScript', 'Tailwind'],
repo: 'https://github.com/leahkerry/sudoku'
},

{
id: 'lantern-club',
image: 'src/assets/lantern-thumbnail.png',
// video: '',
title: 'Lantern Club Website',
description: 'Built with React + TypeScript + Tailwind; responsive design and deployable to Vercel.',
technologies: ['React', 'TypeScript', 'Tailwind'],
repo: 'https://github.com/leahkerry/sudoku'
}

]