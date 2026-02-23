import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

// Lazy-load route-only pages — they are never needed on the initial render
// and will be code-split into their own chunks automatically by Vite
const Work = lazy(() =>
  import("./components/Work").then((m) => ({ default: m.Work })),
);
const ProjectDetail = lazy(() =>
  import("./components/ProjectDetail").then((m) => ({
    default: m.ProjectDetail,
  })),
);

// Preloader Component
const Preloader = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    className="fixed inset-0 z-[999] bg-white flex items-center justify-center text-black"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
        ALLEN KURIAN THOMAS
      </h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        className="h-px bg-black/20 w-32"
      />
    </motion.div>
  </motion.div>
);

// Enhanced ScrollToTop to handle both routes and hash anchors
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Thin fallback shown while a lazy chunk is loading
const PageFallback = () => (
  <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <TechStack />
    <Projects />
    <Services />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-neutral-950 min-h-screen text-white selection:bg-white/20">
          <Navbar />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </div>
      )}
    </Router>
  );
}

export default App;
