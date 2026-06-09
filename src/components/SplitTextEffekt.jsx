export function spanLetter(letter, index) {
  const bogstav = letter === " " ? "&nbsp;" : letter;
  return `<span aria-hidden="true" class="letter-${index}" style="transition-delay:${index * 15}ms">${bogstav}</span>`;
}

export function splitText(string) {
  return string.split("").map(spanLetter).join("");
}
