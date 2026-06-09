export function spanLetter(letter, index) {
  const bogstav = letter === " " ? "&nbsp;" : letter;
  return `<span aria-hidden="true" class="letter-${index}" style="transition-delay:${index * 15}ms">${bogstav}</span>`;
}

export function splitText(string) {
  return string.split("").map(spanLetter).join("");
}

export function textSplitTargets(selectors) {
  const targets = document.querySelectorAll(selectors);
  targets?.forEach((target) => {
    const originalTekst = target.dataset.original;
    if (!originalTekst) return;

    const isActive = target.hasAttribute("data-active");

    target.innerHTML = `
      <span class="layer layer--top">${splitText(originalTekst)}</span>
      <span class="layer layer--bottom">${splitText(originalTekst)}</span>
    `;

    if (isActive) {
      target.setAttribute("data-active", "true");
    }
  });
}
