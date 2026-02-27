import { useEffect, useRef } from "react";
import { email_id, instagram_id, phone_no } from "../constants/variables";
import ActionButton from "./ActionButton";


const links = [
  {
    index:1,
    title: "Email",
    to: `mailto:${email_id}`,
  },
  { 
    index:2,
    title: "Call",
    to: `tel:${phone_no}`,
  },
  {
    index:3,
    title: "Instgram",
    to:instagram_id
  },
];

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container max-w-350 mx-auto px-8">
        <div className="text-center mb-6 md:mb-24">
          <h2 className="text-4xl dark:text-white text-black md:text-5xl lg:text-6xl mb-8">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-black dark:text-white">
            Let's create something extraordinary together
          </p>
        </div>
        <div className="text-center max-w-150 mx-auto reveal" ref={contactRef}>
          <p className="text-base md:text-lg text-black dark:text-white font-light leading-relaxed mb-4">
            Available for commissioned work, collaborations, and fine art
            prints. Whether you're looking for editorial photography, portrait
            sessions, or custom artwork, I'd love to hear about your vision.
          </p>
          <div className="grid grid-cols-2 md:flex  justify-center gap-4 md:gap-8 mt-10 md:mt-16 flex-wrap">
            {links.map((e, i) => (
              <ActionButton id={i} link={e.to} title={e.title} />
            ))}

            {/*<a
              href={`tel:${phone_no}`}
              className="inline-block md:mt-8 px-5 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
            >
              Call
            </a>
            <a
              href={instagram_id}
              id="instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block col-span-full md:mt-8 px-10 py-4 bg-transparent text-white border border-white font-body text-sm font-normal tracking-widest uppercase cursor-pointer relative overflow-hidden transition-all duration-normal hover:text-black before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-white before:transition-all before:duration-normal before:z-[-1] hover:before:left-0"
            >
              Instagram
            </a>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
