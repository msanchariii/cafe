import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText); // register globally

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingDots, setLoadingDots] = useState("");

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoaded(true);
            }, 1000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            setTimeout(() => {
                setIsLoaded(true);
            }, 1000);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    // Loading dot animation
    useEffect(() => {
        if (isLoaded) return; // stop animation once loaded

        let dotCount = 0;
        const interval = setInterval(() => {
            dotCount = (dotCount + 1) % 4; // cycles through 0 to 3
            const dots = ".".repeat(dotCount);
            setLoadingDots(dots);
        }, 500); // change every 0.2s

        return () => clearInterval(interval);
    }, [isLoaded]);

    return (
        <>
            {!isLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-700">
                    <p className="font-modern-negra animate-pulse text-2xl lg:text-[20vw]">
                        Loading<span className="font-sans">{loadingDots}</span>
                    </p>
                </div>
            )}

            {isLoaded && (
                <main className="relative">
                    <div className="pointer-events-none fixed inset-0 z-[60] h-dvh border-x-8 border-b-8 border-amber-200"></div>
                    <Navbar />
                    <Hero />
                    <Menu />
                    <Gallery />
                    <Contact />
                    {/* <div className="h-screen"></div> */}
                </main>
            )}
        </>
    );
};

export default App;
