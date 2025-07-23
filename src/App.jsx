import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center h-screen'>
      <h3 className='text-3xl text-indigo-300'>Hello Gsap</h3>
    </div>
  )
}

export default App