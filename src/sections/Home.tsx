import React from 'react'
import SocialIcons from '../components/SocialIcons'

export default function Home(){
return (
<section id="home" className="container pt-16 mt-10">
<div className="flex flex-col justify-items-center-safe items-center justify-center justify-self-center-safe">
    <div className="h-56 w-56 my-4 flex items-center justify-center">
        <video src="./assets/td-simulation.mp4" muted autoPlay loop className="aspect-square h-full w-full hover:scale-110 transition-all duration-300 ease-in-out object-cover rounded-full my-4"/>

    </div>
    <div className="flex flex-row justify-items-center items-center gap-4">
        <img src='./assets/staricon2.png'></img>
        <h1 className="hover:tracking-widest hover:cursor-context-menu ease-in-out duration-300 mt-4 text-center">Leah Kerry</h1>
        <img src='./assets/staricon.png'></img>
    </div>
    
    <p className="text-center mt-4 text-lg text-slate-700">
        Hi, I'm Leah! 
        I am a senior at Tufts University studying Computer Science and Art. 
        I love creating tools that bring together code and visual expression. Whether it's creating my own shader, writing my own sudoku algorithm, or animating, I love how software gives me freedom to explore the possibilities of what I can create.
        
    </p>
    <p className="text-center mt-4 text-lg text-slate-700">
        Contact: Leahkerry@gmail.com
    </p>
    <SocialIcons />

</div>
</section>
)
}