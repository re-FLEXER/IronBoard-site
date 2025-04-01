document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const navContainer = document.querySelector(".nav-container");
    const firstSection = document.querySelector("#home");

    // Навігація по дотах
    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            dots.forEach(d => d.classList.remove("active"));
            this.classList.add("active");
        
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
        
            if (!targetSection) {
                console.error("Секція не знайдена:", targetId);
                return;
            }
        
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });    

    // Показ/приховування navbar
    window.addEventListener("scroll", function () {
        const sectionBottom = firstSection.offsetHeight;

        if (window.scrollY > sectionBottom) {
            navContainer.classList.add("hidden"); // Приховуємо navbar
        } else {
            navContainer.classList.remove("hidden"); // Показуємо navbar
        }
    });

    // Активний дот при скролі
    window.addEventListener("scroll", function () {
        let current = "";

        document.querySelectorAll(".section").forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                current = section.getAttribute("id");
            }
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
            if (dot.getAttribute("data-target") === current) {
                dot.classList.add("active");
            }
        });
    });
});

