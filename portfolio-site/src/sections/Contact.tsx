import React from 'react'
import Footer from '../components/Footer'


export default function Contact(){
return (
<section id="contact" className="container py-12">
<h2 className="text-2xl font-semibold">Contact</h2>
<p className="mt-3">Email:  <a href="mailto:leahkerry@gmail.com" target="_blank" className="underline">leahkerry@gmail.com</a></p>
<p className="mt-2">GitHub: <a href="https://github.com/leahkerry" target="_blank" className="underline">github.com/leahkerry</a></p>
<p className="mt-2">LinkedIn: <a href="https://www.linkedin.com/in/leah-kerry-993997101/" target="_blank" className="underline">linkedin.com/in/leah-kerry-993997101/</a></p>
<Footer />
</section>
)
}