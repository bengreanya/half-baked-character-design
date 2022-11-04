// import functions and grab DOM elements
const headDropdown = document.getElementById("head-dropdown");
const middleDropdown = document.getElementById("middle-dropdown");
const bottomDropdown = document.getElementById("bottom-dropdown");
const headEl = document.getElementById("head");
const middleEl = document.getElementById("middle");
const bottomEl = document.getElementById("bottom");
const reportEl = document.getElementById("report");
const catchphrasesEl = document.getElementById("catchphrases");
const catchphraseInput = document.getElementById("catchphrase-input");
const catchphraseButton = document.getElementById("catchphrase-button");

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
let catchphrases = [];
// set state for all of the character's catchphrases

headDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
  headCount++;
  displayStats();
});

middleDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  middleEl.style.backgroundImage = `url("./assets/${value}-middle.png")`;
  middleCount++;
  displayStats();
});

bottomDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  bottomEl.style.backgroundImage = `url("./assets/${value}-pants.png")`;
  bottomCount++;
  displayStats();
});

catchphraseButton.addEventListener("click", () => {
  catchphrases.push(catchphraseInput.value);
  displayCatchphrases();
  catchphraseInput.value = "";
});
function displayStats() {
  // text content of the reportEl to tell the user how many times they've changed each piece of the state
  reportEl.textContent = `You have changed heads ${headCount} times! You have changed middles ${middleCount} times! You have changed bottoms ${bottomCount} times!`;
  // headCount.textContent = "You have changed heads ${headCount} times!";
  // middleCount.textContent = "You have changed middles ${headCount} times!";
  // bottomCount.textContent = "You have changed bottoms ${bottomCount} times!";
}

function displayCatchphrases() {
  // clear out the DOM for the currently displayed catchphrases
  catchphrasesEl.textContent = "";
  // loop through each catchphrase in state
  for (let catchphrase of catchphrases) {
    const p = document.createElement("p");
    p.classList.add("catchphrase");
    g;
    p.textContent = catchphrase;
    catchphrasesEl.append(p);
  }
  // and for each catchphrase
  // create an HTML element with the catchphrase as its text content
  // and append that HTML element to the cleared-out DOM
}
