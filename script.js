const mobileQuery = window.matchMedia("(max-width: 760px)");
const stackCards = Array.from(document.querySelectorAll(".stack-card"));

function setCardState(card, open) {
  const toggle = card.querySelector(".stack-toggle");
  card.classList.toggle("is-open", open);
  toggle?.setAttribute("aria-expanded", String(open));
}

function applyResponsiveState() {
  if (mobileQuery.matches) {
    stackCards.forEach((card, index) => {
      setCardState(card, index === 0);
    });
    return;
  }

  stackCards.forEach((card) => setCardState(card, true));
}

stackCards.forEach((card) => {
  const toggle = card.querySelector(".stack-toggle");
  toggle?.addEventListener("click", () => {
    if (!mobileQuery.matches) return;

    const isOpen = card.classList.contains("is-open");
    stackCards.forEach((item) => setCardState(item, false));
    setCardState(card, !isOpen);
  });
});

applyResponsiveState();
mobileQuery.addEventListener("change", applyResponsiveState);
