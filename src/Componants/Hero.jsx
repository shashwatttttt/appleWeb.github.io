import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"


const Hero = () => {
    const [videoSrc, setVideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSecSet =  () => {
        if(window.innerWidth < 760) {
            setVideosrc(smallHeroVideo)
        } else {
            setVideosrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideoSecSet);
        return () => {
            window.removeEventListener('resize', handleVideoSecSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to("#hero", { opacity: 1, delay:2 })
        gsap.to('#cta', {opacity: 1, y: -40, delay: 2})
    }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p id="hero" className='hero-title'>iPhone 16 SE</p>
            <div className="md:w-10/12 w-9/12">
                <video className="pointer-events-none"
                autoPlay muted playsInline={true} key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div id="cta" className="flex flex-col items-center translate-y-20 opacity-0">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $299</p>
        </div>
    </section>
  )
}

export default Hero