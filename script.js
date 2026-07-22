/* ==========================================================
   SpeakAI Pro Enterprise
   File: js/app.js
   Version: 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       LOADER
    ====================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });

    /* ======================================================
       MOBILE MENU
    ====================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");

            }

        });

    }

    /* ======================================================
       DARK MODE
    ====================================================== */

    const themeBtn = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );

            themeBtn.innerHTML = dark
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';

        });

    }

    /* ======================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target =
                document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

            navMenu?.classList.remove("active");

        });

    });

    /* ======================================================
       FAQ
    ====================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const btn =
            item.querySelector(".faq-question");

        btn?.addEventListener("click", () => {

            faqItems.forEach(f => {

                if (f !== item) {

                    f.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ======================================================
       SCROLL REVEAL
    ====================================================== */

    const revealItems = document.querySelectorAll(

        ".feature-card,.course-card,.testimonial-card,.pricing-card,.stat-card,.why-content,.why-image"

    );

    const reveal = () => {

        const trigger = window.innerHeight * 0.85;

        revealItems.forEach(el => {

            const top =
                el.getBoundingClientRect().top;

            if (top < trigger) {

                el.classList.add("fade-up");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);

    /* ======================================================
       COUNTER
    ====================================================== */

    const counters =
        document.querySelectorAll(".stat-card h2");

    let counted = false;

    function runCounter() {

        if (counted) return;

        const section =
            document.querySelector(".statistics");

        if (!section) return;

        const top =
            section.getBoundingClientRect().top;

        if (top > window.innerHeight * 0.8) return;

        counted = true;

        counters.forEach(counter => {

            const text =
                counter.textContent;

            const number =
                parseInt(text.replace(/\D/g, ""));

            const suffix =
                text.replace(/[0-9]/g, "");

            let value = 0;

            const step =
                Math.max(1, Math.ceil(number / 80));

            const timer = setInterval(() => {

                value += step;

                if (value >= number) {

                    value = number;

                    clearInterval(timer);

                }

                counter.textContent =
                    value + suffix;

            }, 20);

        });

    }

    runCounter();

    window.addEventListener("scroll", runCounter);

    /* ======================================================
       BACK TO TOP BUTTON
    ====================================================== */

    const topBtn = document.createElement("button");

    topBtn.className = "back-to-top";

    topBtn.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ======================================================
       ACTIVE NAV LINK
    ====================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === "#" + current

            ) {

                link.classList.add("active");

            }

        });

    });

    /* ======================================================
       CONTACT FORM
    ====================================================== */

    const contactForm =
        document.querySelector(".contact form");

    contactForm?.addEventListener("submit", e => {

        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        contactForm.reset();

    });

    /* ======================================================
       NEWSLETTER
    ====================================================== */

    const newsForm =
        document.querySelector(".newsletter-form");

    newsForm?.addEventListener("submit", e => {

        e.preventDefault();

        const email =
            newsForm.querySelector("input").value.trim();

        if (!email) {

            alert("Please enter your email.");

            return;

        }

        alert("🎉 Successfully subscribed!");

        newsForm.reset();

    });

    /* ======================================================
       CHAT BUTTON
    ====================================================== */

    const chatBtn =
        document.querySelector(".chat-btn");

    chatBtn?.addEventListener("click", () => {

        window.location.href = "register.html";

    });

});
