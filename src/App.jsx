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
                <main className="relative w-dvw">
                    <div className="pointer-events-none fixed inset-0 z-[60] h-dvh border-x-8 border-b-8 border-amber-200"></div>
                    <Navbar />
                    <Hero />
                    <Menu />
                    <Gallery />
                    <Contact />
                    <footer
                        className="relative z-10 h-[70vh] w-full overflow-y-hidden bg-black pt-10"
                        id="footer"
                    >
                        <h1 className="font-modern-negra h-content absolute -bottom-[12vw] left-0 mx-auto w-full pb-0 text-center text-[20vw] text-amber-200">
                            KoFi Cafe
                        </h1>
                        <div
                            id="footer-container"
                            className="flex flex-col items-center justify-evenly gap-4 text-left md:flex-row"
                        >
                            <div className="self-stretch text-white">
                                <img
                                    src="/images/cat.gif"
                                    alt=""
                                    className="h-24 w-24 rounded-full border-4 border-amber-200 object-cover shadow-lg md:h-32 md:w-32"
                                />
                                <p className="font-modern-negra mt-4 text-amber-200">
                                    your daily dose of coffee and
                                </p>
                            </div>
                            <ul className="text-left">
                                <li className="">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="e">
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li className="text-left">
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="">
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    {/* <div className="h-screen"></div> */}
                </main>
            )}
        </>
    );
};

export default App;
