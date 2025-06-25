import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Gallery = () => {
    const galleryImages = [
        "/cafe/images/gallery/coffee1.webp",
        "/cafe/images/gallery/coffee2.webp",
        "/cafe/images/gallery/coffee3.webp",
        "/cafe/images/gallery/coffee4.webp",
        "/cafe/images/gallery/coffee5.webp",
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#gallery",
                start: "top 40%",
                end: "20% 30%",
                toggleActions: "play none none reverse",
                scrub: 1,
                // markers: true,
            },
        });
        tl.from("#gallery-heading", {
            duration: 0.5,
            y: -250,
            opacity: 0,
            ease: "power2.out",
        });
        tl.from(
            "#gallery img",
            {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                stagger: 0.04,
            },
            "-=0.5",
        );
    }, []);

    return (
        <div className="gallery noisy w-full bg-black" id="gallery">
            <h2 id="gallery-heading">Gallery</h2>
            <div>
                <div
                    className="mx-auto grid grid-cols-3 grid-rows-2 place-items-center gap-8 lg:gap-10"
                    id="gallery-container"
                >
                    <img
                        src="/cafe/images/gallery/coffee1.webp"
                        alt=""
                        className="aspect-video h-full w-full object-cover"
                    />
                    <img
                        src="/cafe/images/gallery/coffee2.webp"
                        alt=""
                        className="aspect-video h-full w-full object-cover"
                    />
                    <img
                        src="/cafe/images/gallery/coffee3.webp"
                        alt=""
                        className="row-span-2 aspect-[2/3] h-full w-full object-cover"
                    />
                    <img
                        src="/cafe/images/gallery/coffee4.webp"
                        alt=""
                        className="aspect-video h-full w-full object-cover"
                    />
                    <img
                        src="/cafe/images/gallery/coffee5.webp"
                        alt=""
                        className="aspect-video h-full w-full object-cover"
                    />
                </div>
                <img
                    src="/cafe/images/noise.png"
                    alt=""
                    className="pointer-events-none absolute inset-0 z-[10] h-full w-full opacity-80"
                />
            </div>
        </div>
    );
};

export default Gallery;
