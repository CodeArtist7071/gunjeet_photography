import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import EventGallery from "./components/EventGallery";
import { Portfolio } from "./components/Portfolio";
import { Portfolio as MobilePortfolioPage } from "../src/pages/Portfolio";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./components/About";
import { About as MobileAboutPage } from "../src/pages/About";
import Contact from "./components/Contact";
import { Contact as MobileContactPage } from "../src/pages/Contact";
import { useIsMobile } from "./hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./utils/ScrollToTop";
import { useEffect } from "react";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "./store/slice/driveSlice";







function App() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
 
  useEffect(() => {
     dispatch(loadData());
   }, [dispatch]);
  return (
    <div className=" min-h-screen text-white bg-black md:bg-transparent">
      <ScrollToTop/>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/gallery/:eventType"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <EventGallery />
              </motion.div>
            }
          />
          <Route
            path="/portfolio"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Portfolio />
              </motion.div>
            }
          />
          <Route
            path="/portfolio-m"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <MobilePortfolioPage />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/about-mobile"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <MobileAboutPage />
              </motion.div>
            }
          />
          <Route
            path="/contact"
            element={
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/contact-mobile"
            element={
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <MobileContactPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      {isMobile ? null : <Footer />}
    </div>
  );
}

export default App;
