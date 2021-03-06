"use strict";
import showPokemons from "./showPokemons.js";
// show pagination buttons according to API response
export default function showPagination(next, previous) {
  const $pagination = document.querySelector("nav");
  while ($pagination.firstChild) {
    $pagination.removeChild($pagination.firstChild);
  }
  if (previous !== null) {
    const $previous = document.createElement("button");
    $previous.textContent = "Previous ⏮️";
    $pagination.appendChild($previous);
    $previous.addEventListener("click", () => {
      showPokemons(previous);
    });
  }
  if (next !== null) {
    const $next = document.createElement("button");
    $next.textContent = "⏭️ Next";
    $pagination.appendChild($next);
    $next.addEventListener("click", () => {
      showPokemons(next);
    });
  }
}
