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
        // tl.from(
        //     "#left-container p",
        //     {
        //         opacity: 0,
        //         y: 50,
        //         ease: "power1.inOut",
        //     },
        // );
    }, []);
    return (
        <section className="noisy relative z-10 bg-[#1a0800]" id="contact">
            <h2>Reach Us</h2>
            <div id="contact-container">
                <div id="left-container">
                    <h3>Address</h3>
                    <p>
                        <span>1234</span> Street Name <span>,</span> City{" "}
                        <span>,</span> State <span>,</span> Zip Code
                        <br />
                        Country
                    </p>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:example@example.com">
                            example<span>@</span>example<span>.</span>com
                        </a>
                    </p>
                    <h3>Phone</h3>
                    <p>
                        <a href="tel:+1234567890">
                            <span>+1 (234) 567-890</span>
                        </a>
                    </p>
                </div>
                <div
                    id="right-container"
                    className="outline-coffee-light aspect-square overflow-hidden rounded-xl outline-4 outline-dashed md:h-96"
                >
                    <img
                        src="/cafe/images/gallery/coffee1.webp"
                        alt="coffee"
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
