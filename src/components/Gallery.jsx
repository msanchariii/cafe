import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Gallery = () => {
    const galleryImages = [
        "/images/gallery/coffee1.webp",
        "/images/gallery/coffee2.webp",
        "/images/gallery/coffee3.webp",
        "/images/gallery/coffee4.webp",
        "/images/gallery/coffee5.webp",
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
            "#gallery .noisy-container",
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
            <div
                className="mx-auto grid max-h-[90vh] grid-cols-3 grid-rows-2 place-items-center gap-8 lg:gap-10"
                id="gallery-container"
            >
                <NoisyImage
                    src={galleryImages[1]}
                    alt=""
                    className="aspect-video"
                />
                {/* Image 7 (bottom right) */}
                <NoisyImage
                    src={galleryImages[2]}
                    alt=""
                    className="aspect-video"
                />
                {/* Image 8 (bottom right) */}
                <NoisyImage
                    src={galleryImages[3]}
                    alt=""
                    className="row-span-2 aspect-[2/3]"
                />
                {/* Image 9 (bottom right) */}
                <NoisyImage
                    src={galleryImages[4]}
                    alt=""
                    className="aspect-video"
                />

                {/* Image 10 (bottom right) */}
                <NoisyImage
                    src={galleryImages[0]}
                    alt=""
                    className="aspect-video"
                />
            </div>
        </div>
    );
};

const NoisyImage = ({ src, alt = "", className = "" }) => {
    return (
        <div
            className={`noisy-container relative overflow-hidden ${className}`}
        >
            <img src={src} alt={alt} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 z-30 bg-[url('/images/noise.png')] opacity-80" />
        </div>
    );
};

// export default NoisyImage;

export default Gallery;
