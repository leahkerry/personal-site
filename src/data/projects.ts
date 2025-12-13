import type { Project } from '../types/project'


export const projects: Project[] = [
{
id: 'raytracer',
title: 'Recursive Raytracer',
video: '/src/assets/software/shader_demo.mp4',
description: 'A GLSL + WebGL recursive raytracer. Implements reflections, shadows, and textures.',
technologies: ['GLSL', 'WebGL', 'JavaScript'],
repo: 'https://github.com/leahkerry/Recursive-Raytracer'
},

{
id: 'sudoku',
title: 'Sudoku Generator',
image: '/personal-site/src/assets/software/sudokupage2.png',
link: 'https://leahkerry.github.io/sudoku-website/',
description: 'Implemented sudoku generation algorithm for different difficulties in C++. Created API for puzzles hosted through Render. Created website using React that calls API.',
technologies: ['C++', 'FastAPI', 'Pybind', 'React'],
repo: 'https://github.com/leahkerry/sudoku'
},

// {
// id: 'minecraft',
// title: 'Minecraft Shader',
// image: '/src/assets/software/sudokupage.png',
// link: 'https://leahkerry.github.io/sudoku-website/',
// description: 'Implemented sudoku generation algorithm for different difficulties in C++. Created API for puzzles hosted through Render. Created website using React that calls API.',
// technologies: ['C++', 'FastAPI', 'Pybind', 'React'],
// repo: 'https://github.com/leahkerry/sudoku'
// },

{
id: 'portfolio',
title: 'Portfolio (this site)',
description: 'Built with React, TypeScript, & Tailwind.',
technologies: ['React', 'TypeScript', 'Tailwind'],
repo: 'https://github.com/leahkerry/personal-site'
}, 



{
id: 'lantern-club',
image: './assets/software/lantern-thumbnail.png',
link: 'https://the-lantern.vercel.app/',
title: 'The Lantern Club Webapp',
description: 'Created database for uploading magazine issues using Prisma, MongoDB, and NodeJS. Implemented front end of homepage, about us page, and magazine pages using React and Tailwind CSS',
technologies: ['React', 'TypeScript', 'Tailwind'],
repo: 'https://github.com/JumboCode/the-lantern'
}

]