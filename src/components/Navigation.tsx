import { useState, useEffect } from 'react'
import { Home, Grid, User, Mail } from 'lucide-react'
import { logo_name } from '../constants/variables'

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-100 transition-all duration-normal ${scrolled
                    ? 'py-4 bg-black/95 shadow-medium'
                    : 'py-8 bg-black/80 backdrop-blur-md'
                    }`}
            >
                <div className="container max-w-[1400px] mx-auto px-8">
                    <div className="flex justify-between items-center">
                        <a
                            href="#home"
                            className="font-display text-xl md:text-2xl text-white tracking-widest font-medium transition-colors duration-fast hover:text-muted-gray"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('home')
                            }}
                        >
                            {logo_name.toUpperCase()}
                        </a>
                        <ul className="hidden md:flex gap-8 list-none">
                            {['portfolio', 'about', 'contact'].map((section) => (
                                <li key={section}>
                                    <a
                                        href={`#${section}`}
                                        className="text-muted-gray no-underline text-sm font-normal tracking-wider uppercase relative transition-colors duration-fast hover:text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-normal hover:after:w-full"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(section)
                                        }}
                                    >
                                        {section}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="md:hidden fixed bottom-0 left-0 w-full z-200 bg-black/40 backdrop-blur-lg text-white pb-safe">
                <ul className="flex justify-around items-center h-16 m-0 p-0 list-none">
                    <li>
                        <a
                            href="#home"
                            className="flex flex-col bg-black/35 rounded-full h-12 w-12 backdrop-blur-lg items-center justify-center p-2 text-muted-gray hover:text-white transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('home')
                            }}
                        >
                            <Home size={20} className="mb-1" />
                            {/* <span className="text-[10px] uppercase tracking-wider">Home</span> */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            className="flex flex-col bg-black/35 rounded-full h-12 w-12 items-center justify-center p-2 text-muted-gray hover:text-white transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('portfolio')
                            }}
                        >
                            <Grid size={20} className="mb-1" />
                            {/* <span className="text-[10px] uppercase tracking-wider">Work</span> */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="flex flex-col bg-black/35 rounded-full h-12 w-12 items-center justify-center p-2 text-muted-gray hover:text-white transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('about')
                            }}
                        >
                            <User size={20} className="mb-1" />
                            {/* <span className="text-[10px] uppercase tracking-wider">About</span> */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="flex flex-col bg-black/35 rounded-full h-12 w-12 backdrop-blur-lg items-center justify-center p-2 text-muted-gray hover:text-white transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('contact')
                            }}
                        >
                            <Mail size={20} className="mb-1" />
                            {/* <span className="text-[10px] uppercase tracking-wider">Contact</span> */}
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation
