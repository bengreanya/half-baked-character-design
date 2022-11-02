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
let catchphrase = [];
// set state for all of the character's catchphrases
const catchphrases = [];

headDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  headEl.style.backgroundImage = `url("./assets/${value}-head.png")`;
  headCount++;
  displayStats();
});

middleDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  middleCount++;
  middleStyle.src = `./assets/${value}.png`;
  displayStats();
});

bottomDropdown.addEventListener("change", (e) => {
  const value = e.target.value;
  bottomCount++;
  bottomEL.style.backgroundImage = `url("./assets/${value}-pants.png")`;
  displayStats();
});

// catchphraseButton.addEventListener("click", () => {
//   // get the value of the catchphrase input
//   //   is this the state up above?
//   // push the new catchphrase to the catchphrase array in state
//   catchphraseButton.push(catchphraseInput.value);
//   // clear out the form input's value so it's empty to the user

//   // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
//   displayCatchphrases();
//   catchphraseInput.value = "";
// });

function displayStats() {
  // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
  // clear out the DOM for the currently displayed catchphrases
  // loop through each catchphrase in state
  // and for each catchphrase
  // create an HTML element with the catchphrase as its text content
  // and append that HTML element to the cleared-out DOM
}
