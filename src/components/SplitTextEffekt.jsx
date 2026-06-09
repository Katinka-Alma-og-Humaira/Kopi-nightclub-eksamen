export function spanLetter(letter, index) {
  const bogstav = letter === " " ? "&nbsp;" : letter;
  return `<span aria-hidden="true" class="letter-${index}" style="transition-delay:${index * 35}ms">${bogstav}</span>`;
}

export function splitText(string) {
  return string.split("").map(spanLetter).join("");
}

export function textSplitTargets(selectors) {
  const targets = document.querySelectorAll(selectors);
  targets?.forEach((target) => {
    if (target.dataset.splitDone) return;
    target.dataset.splitDone = "true";
    target.ariaLabel = target.textContent;
    target.innerHTML = `
      <span class="layer layer--top">${splitText(target.textContent)}</span>
      <span class="layer layer--bottom">${splitText(target.textContent)}</span>
    `;
  });
}
