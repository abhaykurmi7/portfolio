function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  star.style.opacity = Math.random();

  document.querySelector(".stars").appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
}

setInterval(createStar, 120);

/* =========================
   SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Stop observing after first animation
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.2
});

reveals.forEach(section => observer.observe(section));