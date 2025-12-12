import React from 'react'
import SocialIcons from '../components/SocialIcons'

export default function Home(){
return (
<section id="home" className="container pt-16 mt-10">
<div className="flex flex-col justify-items-center-safe items-center justify-center justify-self-center-safe">
    <video src="/src/assets/td-simulation.mp4" muted autoPlay loop className="aspect-square h-56 object-cover rounded-full my-4"/>
    <h1 className="mt-4 text-center">Leah Kerry</h1>
    <p className="text-center mt-4 text-lg text-slate-700">Hi, I'm Leah! I am a Tufts CS student who loves 3D rendering and creative tools. 
                               I’m a senior at Tufts University studying Computer Science and Art. I make 3D graphics projects and build tools that bridge art and software.
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