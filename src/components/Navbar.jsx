import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        gsap.from("li, p", {
            duration: 0.5,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "power2.out",
        });
        gsap.to("nav", {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            scrollTrigger: {
                trigger: "nav",
                start: "top top",
                end: "bottom top",
                toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            },
        });
    }, []);
    return (
        <nav>
            <div>
                <p>
                    <a href="#hero">Kofi Cafe</a>
                </p>
                <ul>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#contact">Reach Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
