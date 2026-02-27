import { useEffect, useRef } from 'react'
import { email_id, instagram_id, phone_no } from '../constants/variables'
import { useIsMobile } from '../hooks/useIsMobile'
import { ArrowLeftCircle, Instagram, MailIcon, PhoneCall, PhoneCallIcon, ShareIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import FloatingActionButton from '../components/FloatingActionButton'

export const Contact = () => {
    const contactRef = useRef<HTMLDivElement>(null)
    const isMobile = useIsMobile();
    const navigate = useNavigate();

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

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current)
            }
        }
    }, [])

    return (
        (isMobile)?(
           <ContactPage navigate={navigate}/>
        ):(
        <section id="contact" className="hidden md:block py-20 md:py-32 relative">
            <div className="container max-w-350 mx-auto px-8">
                <div className="text-center mb-6 md:mb-24">
                    <h2 className="text-4xl text-white md:text-5xl lg:text-6xl mb-8">Get in Touch</h2>
                    <p className="text-base md:text-lg text-white">
                        Let's create something extraordinary together
                    </p>
                </div>
                <div className="text-center max-w-150 mx-auto reveal" ref={contactRef}>
                    <p className="text-base md:text-lg text-white font-light leading-relaxed mb-4">
                        Available for commissioned work, collaborations, and fine art prints.
                        Whether you're looking for editorial photography, portrait sessions,
                        or custom artwork, I'd love to hear about your vision.
                    </p>
                    <div className="grid grid-cols-2 md:flex  justify-center gap-4 md:gap-8 mt-10 md:mt-16 flex-wrap">
                        <a
                            href={`mailto:${email_id}`}
                            className="inline-block md:mt-8 px-5 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
                        >
                            Email Me
                        </a>
                        <a
                            href={`tel:${phone_no}`}
                            className="inline-block md:mt-8 px-5 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
                        >
                            Call
                        </a>
                        <a
                            href={instagram_id}
                            id='instagram'
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    document.getElementById('instagram')?.scrollIntoView({ behavior: 'smooth' })
                                }
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block col-span-full md:mt-8 px-10 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
        )
      
    )
}



const ContactPage = ({navigate}:any) => {

  function handleSubmit(e:any) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.fullName.value;
    const email = form.email.value;
    const message = form.message.value;

    window.location.href = `mailto:${email_id}?subject=Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
  }
  return (
    <div id="contact-mobile" className=" md:hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
  <header className="flex items-center justify-between p-6 w-full fixed top-0 left-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
    <a
      className="text-slate-900 cursor-pointer dark:text-slate-100 transition-opacity hover:opacity-70"
      onClick={()=>navigate(-1)}
    >
      <ArrowLeftCircle size={35} color="white"  />
    </a>
    <h1 className="text-sm uppercase tracking-[0.2em] font-medium">Contact</h1>
  </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-6 py-24">
        {/* Title */}
        <div className="mb-12">
          <div className='flex justify-between items-center mb-8'>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
              Get in Touch
            </h2>
            <Link to={`tel:${phone_no}`} className='border hover:border-white hover:animate-ping transition-all rounded-full p-3'>
               <PhoneCallIcon/>
            </Link>
           
          </div>
         
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md">
            Available for bookings and collaborations worldwide. Let's create something timeless.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8"  onSubmit={(e)=>handleSubmit(e)}>
          <div className="space-y-6">
            {/* Full Name */}
            <div className="group">
              <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-2 group-focus-within:text-primary transition-colors">
                Full Name
              </label>
              <input
                className="w-full px-4 bg-transparent border-0 border-b border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary px-0 py-3 text-lg placeholder:text-slate-300 dark:placeholder:text-slate-700 transition-all"
                placeholder="e.g. Julian Montgomery"
                type="text"
                name="fullName"
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-2 group-focus-within:text-primary transition-colors">
                Email Address
              </label>
              <input
                className="w-full px-4 bg-transparent border-0 border-b border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary py-3 text-lg placeholder:text-slate-300 dark:placeholder:text-slate-700 transition-all"
                placeholder="name@example.com"
                type="email"
                name="email"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500 mb-2 group-focus-within:text-primary transition-colors">
                How can I help?
              </label>
              <textarea
                className="w-full px-4 bg-transparent border-0 border-b border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-primary py-3 text-lg placeholder:text-slate-300 dark:placeholder:text-slate-700 resize-none transition-all"
                placeholder="Tell me about your project..."
                rows={4}
                name="message"
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-slate-100 text-white dark:text-slate-900 font-bold py-5 rounded-lg hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </form>

        {/* Footer Info */}
        <div className="mt-auto pt-16 pb-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-10">
              <Link
                className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors"
                to={instagram_id}>
                  <Instagram size={20}/>
              </Link>
              <a
                className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
                <PhoneCall size={20}/>
              </a>
              <a
                className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-slate-100 transition-colors"
                href="#"
              >
               <MailIcon/>
              </a>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">
              © 2024 Portfolio Studio
            </p>
          </div>
        </div>
      </main>
      {/*<div className='pb-20'>
         <FloatingActionButton/>
      </div>*/}
    
      {/* Bottom Navigation */}
      {/*<nav className="sticky bottom-0 w-full border-t border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex max-w-2xl mx-auto px-4 py-3 justify-around items-center">
          <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">home</span>
          </a>
          <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">grid_view</span>
          </a>
          <a className="flex flex-col items-center text-primary" href="#">
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a className="flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-primary transition-colors" href="#">
            <span className="material-symbols-outlined">person</span>
          </a>
        </div>
      </nav>*/}
    </div>
  );
};


