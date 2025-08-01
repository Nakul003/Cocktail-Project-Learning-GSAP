import React from 'react'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(()=>{
        const herosplit = new SplitText(".title", { type:"chars, words" });
        const paragraphsplit = new SplitText(".subtitle", { type:"lines" });
        herosplit.chars.forEach((char)=>char.classList.add("text-gradient"));

        gsap.from(herosplit.chars, {
            yPercent:50,
            duration:1.8,
            ease:"expo.out",
            stagger:0.05,
            opacity:0
        })

        gsap.from(paragraphsplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.0,
            ease:"expo.out",
            stagger:0.06,
            delay:1
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        })
        .to(".right-leaf",{y:-200},0)
        .to(".left-leaf",
        {y:200},0)

    }, [])

  return (
    <>
        <section id='hero' className="noisy">
            <h1 className='title'>MOJITO</h1>
            <img src="/images/hero-right-leaf.png" alt="right-leaf"
            className='right-leaf' />
            <img src="/images/hero-left-leaf.png" alt="left-leaf"
            className='left-leaf' />

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Cool. Crisp. Classic.</p>
                        <p className='subtitle'>
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>
                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses.
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero