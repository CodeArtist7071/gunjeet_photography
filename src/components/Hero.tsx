import { useEffect, useRef } from 'react'

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current)
            }
        }
    }, [])

    return (
        <section
            id="home"
            className="min-h-screen pt-25 md:mt-2.5 flex items-center justify-center relative overflow-hidden bg-black"
            ref={heroRef}
        >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-350 mx-auto px-8">
                <div className=" animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h1 className="text-5xl text-white md:text-7xl lg:text-8xl font-light mb-4 leading-[1.1]">
                        Capturing
                        <br />
                        Moments in
                        <br />
                        Emotions
                    </h1>
                    <p className="text-xl md:text-2xl text-white font-light mb-8 font-body">
                       Event Photographer & Cinematographer
                    </p>
                    <p className="text-base md:text-lg text-white leading-relaxed max-w-125">
                        Exploring the interplay of light and shadow, creating cinematic narratives
                        through the lens. Every frame tells a story of mystery, emotion, and artistry.
                    </p>
                    <a
                        href="#portfolio"
                        className="inline-block mt-8 px-10 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
                        onClick={(e) => {
                            e.preventDefault()
                            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        View Portfolio
                    </a>
                </div>
                <div className="opacity-55 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <img
                        src="/gunjeet_photography/images/image-portrait.png"
                        alt="Photographer Portrait"
                        className="w-full h-auto block rounded-lg shadow-2xl transition-transform duration-75 hover:scale-105"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
