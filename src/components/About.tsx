import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = aboutRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="md:pt-20 relative" ref={aboutRef}>
      <div
        className="
          absolute inset-0 z-0
          bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.9)_45%,rgba(0,0,0,0)_75%)]
        "
      ></div>
       <div className="relative z-10 container hidden md:block max-w-350 mx-auto px-8">
        {/* <div className="text-center mb-4 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8 text-white">About</h2>
                    <p className="text-base md:text-lg text-white">
                        The artist behind the lens
                    </p>
                </div> */}
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="max-w-150">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8 text-white">
              About
            </h2>
            <h3 className="text-2xl text-white md:text-3xl lg:text-4xl mb-4">
              Crafting Stories Through Shadow & Light
            </h3>
            <p className="text-base md:text-lg  text-slate-400 font-light leading-relaxed mb-4">
              With over a decade of experience in fine art photography, I
              specialize in creating cinematic imagery that explores the
              delicate balance between darkness and illumination. My work is
              characterized by deep blacks, subtle gradients, and a minimalist
              aesthetic that emphasizes emotion over exposition.
            </p>
            <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-4">
              Each photograph is a carefully composed narrative, inviting
              viewers to discover hidden details and interpret their own stories
              within the shadows. I believe that what remains unseen is often as
              powerful as what is revealed.
            </p>
            <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-4">
              My approach combines classical low-key lighting techniques with
              modern digital artistry, resulting in timeless images that evoke
              mystery, contemplation, and visual poetry.
            </p>
          </div>
          <div className="reveal">
            <img
              src="/gunjeet_photography/images/image_photo.jpeg"
              alt="About the photographer"
              className="w-full h-auto rounded-lg shadow-strong"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
