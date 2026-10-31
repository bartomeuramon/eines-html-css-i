import feather from "feather-icons";

// Dependència npm visible. Les icones decoratives acompanyen text real.
feather.replace({
  "aria-hidden": "true",
  focusable: "false",
  "stroke-width": 1.5,
});
const page = document.body.getAttribute("data-page");
const section =
  page === "inici" ? "inici" : page === "links" ? "links" : "categoria";
const currentLink = document.querySelector('[data-nav="' + section + '"]');
if (currentLink)
  currentLink.setAttribute(
    "aria-current",
    page === "det1" || page === "det2" ? "true" : "page",
  );

// Totes les receptes es poden consultar encara que JavaScript estigui desactivat.
const filters = document.querySelector(".filtres");
if (filters) {
  filters.hidden = false;
  const buttons = filters.querySelectorAll("[data-filtre]");
  const cards = document.querySelectorAll("[data-tipus]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      const value = this.getAttribute("data-filtre");
      let count = 0;
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].setAttribute(
          "aria-pressed",
          buttons[j] === this ? "true" : "false",
        );
      }
      for (let j = 0; j < cards.length; j++) {
        const visible =
          value === "totes" || cards[j].getAttribute("data-tipus") === value;
        cards[j].hidden = !visible;
        if (visible) count++;
      }
      document.getElementById("resultats").textContent =
        count === 1
          ? "1 recepta per descobrir"
          : count + " receptes per descobrir";
    });
  }
}

// Càlcul a partir de quantitats originals, sense acumular arrodoniments.
const ingredients = document.querySelector("[data-base]");
if (ingredients) {
  document.querySelector(".selector-racions").hidden = false;
  const base = Number(ingredients.getAttribute("data-base"));
  document.getElementById("racions").addEventListener("change", function () {
    const servings = Number(this.value);
    const amounts = ingredients.querySelectorAll("[data-quantitat]");
    for (let i = 0; i < amounts.length; i++) {
      const amount =
        (Number(amounts[i].getAttribute("data-quantitat")) * servings) / base;
      amounts[i].textContent = String(Math.round(amount * 100) / 100).replace(
        ".",
        ",",
      );
    }
    const message = "Ingredients per a " + servings + " racions";
    document.getElementById("racions-text").textContent = message;
    document.getElementById("avis-racions").textContent = message;
  });
}
