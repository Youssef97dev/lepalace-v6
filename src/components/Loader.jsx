"use client";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Slides from "./Slides";
import About from "./About";
import Footer from "./Footer";
import Kitchen from "./Kitchen";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative">
          <Hero />
          <Intro />
          <Slides />
          <About />
          <Kitchen />
          <Footer />
          <div className="fixed bottom-10 left-0 w-full block lg:hidden z-10 px-3">
            <Navbar />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-primary">
          <BounceLoader color="#d7b072" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
