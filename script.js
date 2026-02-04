// =====================
// DOWNLOAD CV
// =====================
const downloadBtn = document.getElementById("downloadCV");

if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
        window.open("./resume.pdf", "_blank");
    });
}

// =====================


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const STAR_COUNT = 220;

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random(),
      delta: Math.random() * 0.015 + 0.008,
      glow: Math.random() * 8 + 4
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.shadowBlur = star.glow;
    ctx.shadowColor = "rgba(18, 153, 231, 0.8)";
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(230, 255, 255, ${star.alpha})`;
    ctx.fill();

    star.alpha += star.delta;
    if (star.alpha <= 0.2 || star.alpha >= 1) {
      star.delta = -star.delta;
    }
  });

  requestAnimationFrame(drawStars);
}

createStars();
drawStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
});




// SMOOTH SCROLL FOR NAV LINKS
// =====================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// =====================
// ACTIVE NAV LINK ON SCROLL
// =====================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// =====================
// AUTO-HIDE NAVBAR ON SCROLL
// =====================
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down → hide navbar
        navbar.style.top = "-100px";
    } else {
        // Scrolling up → show navbar
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
 JAVASCRIPT
