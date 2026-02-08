/* =========================
   MOONSPACE EXPERIENCE JS
========================= */

/* ---------- THERAPY MYTH CARD ---------- */

const myths = [
  {
    myth: "Therapy only works if you know exactly what’s wrong.",
    truth: "Therapy often begins with uncertainty. Not knowing is part of the process, not a failure."
  },
  {
    myth: "You need to be in crisis to start therapy.",
    truth: "Many people come to therapy to understand themselves better, not because something is ‘wrong’."
  },
  {
    myth: "Talking about things too much makes them worse.",
    truth: "When done safely, reflection helps experiences settle instead of staying stuck inside."
  },
  {
    myth: "A good therapist always gives answers.",
    truth: "Therapy is more about helping you discover your own understanding than being told what to do."
  },
  {
    myth: "If therapy is working, it should feel relieving all the time.",
    truth: "Growth can feel quiet, uncomfortable, or neutral before it feels relieving."
  }
];

const mythCard = document.querySelector(".myth-card");
const mythFront = document.getElementById("mythFront");
const mythBack = document.getElementById("mythBack");

if (mythCard && mythFront && mythBack) {
  const randomMyth = myths[Math.floor(Math.random() * myths.length)];
  mythFront.textContent = randomMyth.myth;
  mythBack.textContent = randomMyth.truth;

  mythCard.addEventListener("click", () => {
    mythCard.classList.toggle("flipped");
  });
}

/* ---------- DAILY JOURNAL PROMPT ---------- */

const journalPrompts = [
  "What emotion has been visiting you most often lately, even if you haven’t named it?",
  "Where in your life are you holding yourself together instead of letting yourself rest?",
  "What feels heavy right now that you haven’t spoken about out loud?",
  "What part of your day feels the most like yourself?",
  "What are you expecting of yourself that might be unrealistic right now?",
  "When do you feel most disconnected from your body?",
  "What would slowing down look like for you, even slightly?"
];

const journalElement = document.getElementById("journalPrompt");

if (journalElement) {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem("moonspaceJournalDate");
  const savedPrompt = localStorage.getItem("moonspaceJournalPrompt");

  if (savedDate === today && savedPrompt) {
    journalElement.textContent = savedPrompt;
  } else {
    const newPrompt =
      journalPrompts[Math.floor(Math.random() * journalPrompts.length)];
    journalElement.textContent = newPrompt;
    localStorage.setItem("moonspaceJournalDate", today);
    localStorage.setItem("moonspaceJournalPrompt", newPrompt);
  }
}

/* ---------- BREATHING ORB (INTENTIONAL SILENCE) ---------- */
/*
No instructions.
No text.
No interaction.
The orb exists purely as a visual regulator.
The CSS animation handles everything.
*/

/* ---------- SAFETY CHECK ---------- */
console.log("Moonspace experience loaded ✨");
