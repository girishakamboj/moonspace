/* =====================================
   MOONSPACE THERAPY – SCRIPT.JS
===================================== */

/* ===============================
   FADE IN ANIMATION (Intersection Observer)
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});


/* ===============================
   FAQ COLLAPSIBLE (Accessible)
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {

    button.addEventListener("click", function () {

      const answer = this.nextElementSibling;
      const isOpen = answer.style.display === "block";

      // Close all first (accordion behavior)
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.display = "none";
      });

      if (!isOpen) {
        answer.style.display = "block";
      }

    });

  });

});


/* ===============================
   THERAPY MYTH FLIP
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const mythCard = document.querySelector(".myth-card");
  const mythFront = document.getElementById("mythFront");
  const mythBack = document.getElementById("mythBack");

  const myths = [
    {
      front: "Therapy is only for crisis.",
      back: "Therapy can also be for reflection, growth and understanding patterns."
    },
    {
      front: "If I am functioning, I don’t need therapy.",
      back: "High-functioning stress can still carry emotional strain."
    },
    {
      front: "Therapy gives advice.",
      back: "Therapy often helps you hear your own thinking more clearly."
    }
  ];

  let currentMyth = 0;

  function loadMyth(index) {
    mythFront.textContent = myths[index].front;
    mythBack.textContent = myths[index].back;
  }

  if (mythCard) {

    loadMyth(currentMyth);

    mythCard.addEventListener("click", function () {

      this.classList.toggle("flipped");

      if (!this.classList.contains("flipped")) {
        currentMyth = (currentMyth + 1) % myths.length;
        loadMyth(currentMyth);
      }

    });

  }

});


/* ===============================
   JOURNAL PROMPTS ROTATION
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const journalElement = document.getElementById("journalPrompt");

  const prompts = [
    "Where do I feel the most pressure to appear composed?",
    "What emotion have I been postponing?",
    "What would slowing down look like for me?",
    "Where do I feel misunderstood?",
    "What feels heavier than it needs to be?"
  ];

  if (journalElement) {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    journalElement.textContent = prompts[randomIndex];
  }

});


/* ===============================
   PERFORMANCE SAFE FALLBACK
================================ */

/* If IntersectionObserver is not supported */

if (!("IntersectionObserver" in window)) {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("visible");
  });
}
