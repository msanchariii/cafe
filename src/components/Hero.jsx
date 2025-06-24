import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const videoRef = useRef();
    // const videoTimelineRef = useRef();
    const isMobile = useMediaQuery({
        maxWidth: 768,
    });
    useGSAP(() => {
        const heroSplit = new SplitText(".title", {
            type: "words, chars",
        });
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        heroSplit.chars.forEach((char) => {
            char.classList.add("text-yellow");
        });

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: {
                amount: 0.6,
                from: "start",
            },
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.2,
            ease: "expo.out",
            delay: 1.2,
            stagger: {
                amount: 0.7,
                from: "start",
            },
        });

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
                // markers: true,
            },
        });

        // ✅ Wait for video metadata
        videoRef.current.onloadedmetadata = () => {
            const duration = videoRef.current.duration;

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true,
                },
            }).to(videoRef.current, {
                currentTime: duration,
                ease: "none",
            });
        };
    }, []);

    // });
    return (
        <>
            <section className="noisy" id="hero">
                <h1 className="title text-yellow uppercase">coffee</h1>
                <div className="body">
                    <div className="content">
                        <div className="hidden space-y-5 md:block">
                            <p className="ml-6">Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Winter
                            </p>
                        </div>
                        <div className="view-coffee">
                            <p className="subtitle">
                                Every coffee tells a story. <br /> Discover
                                yours.
                            </p>
                            <a href="#menu">View Coffees</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed inset-0 top-0 left-0 border-8 border-amber-200">
                <video
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                    ref={videoRef}
                    className="brightness-90 contrast-150 sepia-50"
                />
            </div>
        </>
    );
};

export default Hero;
