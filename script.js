// Balãozinho do WhatsApp
const bubble = document.getElementById("fabBubble");
const BUBBLE_SHOW = 5000;   // quanto tempo a frase fica na tela
const BUBBLE_PAUSE = 15000; // intervalo entre uma frase e outra

const bubbleMsgs = [
  "Bora reservar sua mesa?",
  "Aniversário chegando? Fala com a gente!",
  "Sushi, carnes ou burger? Reserve já!",
  "Happy hour hoje? Chama no Whats!",
  "Drinks autorais te esperando!",
  "Chopp gelado e boa companhia?",
  "Precisa de ajuda? Estamos aqui!",
];
let bubbleIndex = 0;

const cycleBubble = () => {
  bubble.textContent = bubbleMsgs[bubbleIndex];
  bubble.classList.add("is-visible");
  bubbleIndex = (bubbleIndex + 1) % bubbleMsgs.length;
  setTimeout(() => {
    bubble.classList.remove("is-visible");
    setTimeout(cycleBubble, BUBBLE_PAUSE);
  }, BUBBLE_SHOW);
};

setTimeout(cycleBubble, 5000);

// Animação de entrada
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Menu mobile
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);