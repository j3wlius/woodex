import React from 'react'
import Hero from './Hero'
import About from './About'
import Products from './Products'
import Blog from './Blog'
import NewsLetter from './NewsLetter'


function Main() {
  return (
    <article>
      <Hero/>
      <About/>
      <Products/>
      <Blog/>
      <NewsLetter/>
    </article>
  )
}

export default Main
