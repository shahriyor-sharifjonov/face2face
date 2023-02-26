import imagesLoaded from 'imagesloaded';
import gsap from 'gsap';

export function init() {
    const images = document.querySelectorAll("img");
    const loader = document.querySelector(".preloader__p");

    const updateProgress = (instance) => {
        const prc = Math.round((instance.progressedCount * 100) / images.length);
        loader.innerHTML = prc + "%";
    }

    const showDemo = () => {
        setTimeout(() => {
            const tl = gsap.timeline()
            tl.to('.preloader', {
                yPercent: -100,
                ease: "power4",
                duration: 1,
            })
            
        }, 1000);
    }

    setTimeout(() => imagesLoaded(images).on("progress", updateProgress).on("always", showDemo), 500)
}