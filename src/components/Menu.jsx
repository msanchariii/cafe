import React from "react";
import { coffeeMenu } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "top 40%",
                end: "20% 30%",
                toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            },
        });
        tl.from("#menu h2", {
            duration: 0.5,
            y: -250,
            opacity: 0,
            ease: "power2.out",
        });
        tl.from("ul li h3", {
            duration: 0.8,
            y: -50,
            opacity: 0,
            ease: "power2.out",
        });
    }, []);

    return (
        <div id="menu" className="noisy">
            <h2>Menu</h2>
            {/* coffee */}
            <div className="menu-container">
                <ul>
                    {coffeeMenu.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                            <p className="description">{item.description}</p>
                        </li>
                    ))}
                </ul>
                <ul>
                    {coffeeMenu.map((item, index) => (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p className="price">${item.price.toFixed(2)}</p>
                            <p className="description">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <ul></ul>
        </div>
    );
};

export default Menu;
