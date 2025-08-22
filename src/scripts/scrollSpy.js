// src/scripts/scrollSpy.js
export default function setupScrollSpy() {
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    document.querySelectorAll("nav a").forEach((link) => {
                        link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
                    });
                }
            }
        },
        {
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
    });
}

if (typeof window !== "undefined") {
    setupScrollSpy();
}