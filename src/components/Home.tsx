import { Suspense, useEffect, useState } from "react";
import { fetchFolders, fetchImagesByFolderId } from "../hooks/events";
import About  from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import { Portfolio } from "./Portfolio";


// const Home = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black/50 text-white">

//       {/* Background Image */}
//       <div className="absolute inset-0 object-top -z-10">
//         <img
//           src="/gunjeet_photography/images/image_photo_1.jpeg"
//           alt="background"
//           className="w-full h-full object-top object-cover scale-x-[-1] grayscale"
//         />

//         {/* Vignette Overlay */}
//         <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/60 to-black"></div>
//       </div>

//       {/* Content */}
//       <Hero />
//       <Portfolio />
//       <About />
//       <Contact />

//     </div>
//   )
// }

// export default Home
import { motion, useScroll, useTransform } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../store/slice/driveSlice";
import { AppDispatch, RootState } from "../store/store";


const Home = () => {
   const { scrollY } = useScroll();
  // Background moves slower than scroll
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <Hero />
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_80%,rgba(0,0,0,1)_100%)]"
        ></div>
        <img
          src="/gunjeet_photography/images/image_photo_1.jpeg"
          alt="background"
          className="w-full h-full object-cover object-[60%_center] md:object-cover grayscale brightness-75"
        />

        {/*<div className="absolute inset-0
          bg-[radial-gradient(circle_at_left,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_80%,rgba(0,0,0,1)_100%)]">
        </div>*/}
      </motion.div>
      <Portfolio/>         
      <About />
      <Contact />
    </div>
  );
};

export default Home;
