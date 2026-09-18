const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultsMessage = document.querySelector(".no-results-message");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index}`;

  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
  console.log("hey");
});

seasonalFilter.addEventListener("change", (e) => {
  currentFilters.season = e.target.value;

  if (!document.startViewTransition()) {
    filterCards();
    return;
  }

  document.startViewTransition(() => filterCards());
});
edibleFilter.addEventListener("change", (e) => {
  currentFilters.edible = e.target.value;

  if (!document.startViewTransition()) {
    filterCards();
    return;
  }

  document.startViewTransition(() => filterCards());
});

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;
    // console.log(season, edible);

    const matchesSeason =
      currentFilters.season === season || currentFilters.season == "all";
    const matchesEdible =
      currentFilters.edible === edible || currentFilters.edible == "all";

    if (matchesEdible && matchesSeason) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });

  if (hasVisibleCards) {
    noResultsMessage.hidden = true;
  } else {
    noResultsMessage.hidden = false;
  }
}

function enable() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enable();
