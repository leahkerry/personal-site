import React from 'react'
import SocialIcons from '../components/SocialIcons'

export default function Home(){
return (
<section id="home" className="container pt-16 mt-10">
<div className="flex flex-col justify-items-center-safe items-center justify-center justify-self-center-safe">
    <video src="/src/assets/td-simulation.mp4" muted autoPlay loop className="aspect-square h-56 hover:cursor-pointer hover:aspect-auto transition-all duration-300 ease-in-out object-cover rounded-full my-4"/>
    <h1 className="mt-4 text-center">Leah Kerry</h1>
    <p className="text-center mt-4 text-lg text-slate-700">
        Hi, I'm Leah! 
        I am a senior at Tufts University studying Computer Science and Art. 
        I love creating tools that bring together code and visual expression. Whether it's creating my own shader, writing my own sudoku algorithm, or animating, I love how software gives me freedom to explore the possibilities of what I can create.
        
    </p>
    <p className="text-center mt-4 text-lg text-slate-700">
        Contact: Leahkerry@gmail.com
    </p>
    <SocialIcons />
    <div> 
        <a href="https://www.linkedin.com/in/leah-kerry-993997101/" target="_blank" className="fa fa-linkedin"></a>
        {/* <a href="https://github.com/leahkerry" target="_blank" className="fa fa-github"></a>
        <a href="mailto:leahkerry@gmail.com" target="_blank" className="fa fa-envelope"></a>
        <a href="https://www.youtube.com/@linfinity9127" target="_blank" className="fa fa-youtube"></a> */}
    </div>
</div>
</section>
)
}