import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 40%",
                end: "20% 30%",
                toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            },
        });
        tl.from("#contact h2", {
            duration: 0.5,
            y: -250,
            opacity: 0,
            ease: "power2.out",
        });
        // tl.from("ul li h3", {
        //     duration: 0.8,
        //     y: -50,
        //     opacity: 0,
        //     ease: "power2.out",
        // });
    }, []);
    return (
        <div className="noisy relative z-10 h-dvh bg-orange-950" id="contact">
            <h2>Reach Us</h2>
        </div>
    );
};

export default Contact;
