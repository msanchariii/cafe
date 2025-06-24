import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Footer = () => {
    useGSAP(() => {
        gsap.from("#footer-container ul li a", {
            duration: 0.5,
            y: -50,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#footer",
                start: "top 80%",
                end: "30% 50%",
                toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <footer
            className="noisy relative z-10 h-[70vh] w-full overflow-y-hidden bg-black pt-10"
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
    );
};

export default Footer;
