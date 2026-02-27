import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import {
  ArrowLeftCircle,
  CameraIcon,
  IdCardIcon,
  UserCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  const isMobile = useIsMobile();
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
  return isMobile ? (
    <MobileProfilePage />
  ) : (
    <section id="about" className="md:pt-20 relative" ref={aboutRef}>
      <div
         className="absolute inset-0 z-0
         bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.9)_45%,rgba(0,0,0,0.9)_65%,rgba(0,0,0,0)_75%)]"
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
            <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-4">
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

function MobileProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      id="about-mobile"
      className="relative md:hidden flex min-h-screen w-full  flex-col max-w-md mx-auto shadow-2xl overflow-x-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 w-full fixed top-0 left-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
        {/* <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button> */}
        <ArrowLeftCircle size={35} color="white" />

        <h1 className="text-sm font-bold tracking-widest uppercase">Profile</h1>

        {/* <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button> */}
      </div>

      {/* Main */}
      <main className="flex-1 px-6 pb-24 pt-24">
        {/* Hero */}
        <div className="relative mb-8">
          <div className="aspect-4/5 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {isLoading && (
              <div className="absolute w-full h-full inset-0 animate-pulse bg-slate-200 dark:bg-slate-500" />
            )}
            <img
              src="/gunjeet_photography/images/image_photo.jpeg"
              alt="Portrait"
              className="w-full h-full object-cover object-right opacity-90"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-xl">
            <p className="text-xs font-bold uppercase">Est.</p>
            <p className="text-xl font-bold">2012</p>
          </div>
        </div>

        {/* Identity */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-2">Gunjeet Bhansingh</h2>
          <p className="text-primary font-medium uppercase text-xs mb-4">
            Event Photographer & Cinematographer
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-5 text-slate-500 dark:text-slate-400">
            <div className="flex flex-col items-center gap-">
              <span className="material-symbols-outlined underline text-xs">
                LOCATION
              </span>
              <span className="text-xs font-medium">Bhubaneshwar,ODISHA</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined underline text-xs">
                VERIFIED
              </span>
              <span className="text-xs font-medium">10+ Years Exp.</span>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="mb-12">
          <h3 className="text-lg font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
            About Me
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
            My work is an exploration of the quiet moments. I believe that
            photography is more than just a captured frame.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Specializing in monochromatic portraiture and minimalist commercial
            projects.
          </p>
        </section>

        {/* Specializations */}
        <section className="mb-12">
          <h3 className="text-lg font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
            Specializations
          </h3>

          <div className="grid gap-3">
            {[
              {
                icon: <UserCircle size={24} color="white" />,
                title: "Fine Art Portraiture",
                desc: "Character-driven studio sessions.",
              },
              {
                icon: <IdCardIcon size={24} color="white" />,
                title: "Commercial Branding",
                desc: "Visual assets for minimalist brands.",
              },
              {
                icon: <CameraIcon size={24} color="white" />,
                title: "Editorial Direction",
                desc: "Creative concepting and execution.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg  bg-slate-900/50 border border-slate-800"
              >
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <Link to={"/contact-mobile"} className="w-full text-center bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase shadow-lg hover:opacity-90 active:scale-[0.98] transition-all">
            Contact for Project
          </Link>

          <Link to={"/portfolio-m"} className="w-full text-center border border-slate-700 py-4 rounded-xl font-bold text-sm uppercase hover:bg-slate-800 transition-all">
            View Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}
