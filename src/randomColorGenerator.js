function randomColorGenerator() {
  let newHexColorCode = "#";
  const hexColorCodeElements = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  /**
   * The hex color code has in total six elements. Therefor the for-loop
   * passes trough six times in order to get a correct hex color code.
   */
  for (let i = 0; i < 6; i++) {
    //For each loop pass a random element from the array above is choosen.
    let randomHexColorCodeElement =
      hexColorCodeElements[Math.floor(Math.random() * 16)];
    //This random element then is added to the literal string newHexColorCode in order to build the hex color code
    newHexColorCode += randomHexColorCodeElement;
  }

  //Set the random background color for the body once the loop is done
  document.body.style.backgroundColor = newHexColorCode;

  //Display new hex color code in the frontend
  document.getElementById("currentHexColorCode").innerHTML =
    "Current background color: <b>" + newHexColorCode + "</b>";
}

function clickCounter(newKeyRelease) {
  let currentClickAmount = 0 + newKeyRelease;

  //Display amount of enter key clicksin the frontend
  document.getElementById("currentClickAmount").innerHTML =
    "Amount of clicks on the enter key: <b>" + currentClickAmount + "</b>";
}

//call randomColorGenerator() and clickCounter() if the enter key is released to update background color and click counter
let newKeyRelease = 0;
document.body.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    randomColorGenerator();
    //Increase newKeyRelease once when enter key is release once and set it as a function parameter
    newKeyRelease += 1;
    clickCounter(newKeyRelease);
  }
});

//call randomColorGenerator() and clickCounter() once to set background color and click counter
randomColorGenerator();
clickCounter(0);
