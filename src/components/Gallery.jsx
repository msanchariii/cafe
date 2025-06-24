import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Gallery = () => {
    const galleryImages = [
        "/images/gallery/coffee1.jpg",
        "/images/gallery/coffee2.jpg",
        "/images/gallery/coffee3.jpg",
        "/images/gallery/coffee4.jpg",
        "/images/gallery/coffee5.jpg",
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
        tl.from("#gallery .noisy-container", {
            opacity: 0.5,
            scale: 0.9,
            duration: 1.5,
            ease: "power2.out",
        });
    }, []);

    return (
        <div
            className="gallery noisy border-x-8 border-amber-200 bg-black"
            id="gallery"
        >
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
            <div className="pointer-events-none absolute inset-0 z-10 bg-[url('/images/noise.png')] bg-cover opacity-20 mix-blend-overlay" />
        </div>
    );
};

// export default NoisyImage;

export default Gallery;
