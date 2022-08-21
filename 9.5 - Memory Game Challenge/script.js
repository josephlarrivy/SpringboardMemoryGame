// my todo list
// 1) DONE figure out how to get background colors to change on click
// 2) figure out how to get background colors to disappear after second card is clicked
// 3) figure out how to get cards to stay "up" for one second before changing back to blank
// 4) DONE figure out how to compare the two clicked card's classes to see if they match 


const gameContainer = document.getElementById("game");
const COLORS = ["red", "blue", "green", "orange", "purple", "red", "blue", "green", "orange", "purple"];
// helper function shuffles an array
function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  };
  return array;
};
//shuffledColors calls shuffle on the array of colors and returns them
let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
    i=1;
    i++;
    newDiv.setAttribute('id', `card${i}`)
  };
};

let clickedArray = [];

function handleCardClick(event) {
  
  const cardColor = event.target.className;
  event.target.style.backgroundColor = cardColor;

  clickedArray.push(event.target.className);
  console.log(clickedArray);

  function removeBackground () {
    firstTarget.style.backgroundColor = 'white';
    secondTarget.style.backgroundColor = 'white';
  }

  if (clickedArray.length === 1) {
    console.log('first choice made');
    firstTarget = event.target;

  } else if (clickedArray[0].getAttribute('id') === event.target.getAttribute('id')) {
    console.log(event.target.getElementById);
    console.log('clicked same card twice');

  } else if (clickedArray[0] == clickedArray[1]) {
    console.log('they match');
    clickedArray = [];
    secondTarget = event.target;

  } else if (clickedArray[0] != clickedArray[1]) {
    console.log('they don\'t match');
    clickedArray = [];
    secondTarget = event.target;
    setTimeout(removeBackground, 1000);

  }
  
};

// when the DOM loads
createDivsForColors(shuffledColors);
