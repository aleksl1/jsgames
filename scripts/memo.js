const memoGrid = document.querySelector(".memo-grid");
const scoreSpan = document.querySelector(".memo-score");
const timer = document.querySelector(".timer");
const restartBtn = document.querySelector(".restart");
let score = 0;
let time = 0;
scoreSpan.textContent = score;
timer.textContent = time;
let firstCardName = "";
let secondCardName = "";
let firstCardId;
let secondCardId;
let firstCard;
let secondCard;
let gameStarted = false;
let cardsMatched = [];
let timerIndex;

const memoCards = [
  { name: "cow", url: "assets/cow.png" },
  { name: "deer", url: "assets/deer.png" },
  { name: "dog", url: "assets/dog.png" },
  { name: "monkey", url: "assets/monkey.png" },
  { name: "panda", url: "assets/panda.png" },
  { name: "parrot", url: "assets/parrot.png" },
  { name: "pig", url: "assets/pig.png" },
  { name: "zebra", url: "assets/zebra.png" },
  { name: "cow", url: "assets/cow.png" },
  { name: "deer", url: "assets/deer.png" },
  { name: "dog", url: "assets/dog.png" },
  { name: "monkey", url: "assets/monkey.png" },
  { name: "panda", url: "assets/panda.png" },
  { name: "parrot", url: "assets/parrot.png" },
  { name: "pig", url: "assets/pig.png" },
  { name: "zebra", url: "assets/zebra.png" },
];

const checkForMatch = (first, second) => {
  if (first.dataset.name === second.dataset.name) {
    cardsMatched.push(first.dataset.id);
    cardsMatched.push(second.dataset.id);
    score = score + 1;
    if (score === 8) {
      stopTimer();
    }
    scoreSpan.textContent = score;

    setTimeout(() => {
      first.setAttribute("src", "assets/blank.png");
      first.setAttribute("alt", "blank card");
      second.setAttribute("src", "assets/blank.png");
      second.setAttribute("alt", "blank card");
      firstCardName = "";
      secondCardName = "";
      firstCardId = "";
      secondCardId = "";
      firstCard = "";
      secondCard = "";
    }, 1000);
  } else if (first.dataset.name !== second.dataset.name) {
    setTimeout(() => {
      first.setAttribute("src", "assets/front.png");
      first.setAttribute("alt", "questionmark card");
      second.setAttribute("src", "assets/front.png");
      second.setAttribute("alt", "questionmark card");
      firstCardName = "";
      secondCardName = "";
      firstCardId = "";
      secondCardId = "";
      firstCard = "";
      secondCard = "";
    }, 1000);
  }
};

const startTimer = () => {
  timerIndex = setInterval(() => {
    if (time > 60) {
      stopTimer();
    }
    time += 1;
    timer.textContent = time;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerIndex);
};

const selectCard = (e) => {
  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }
  if (cardsMatched.includes(e.target.dataset.id)) {
    return;
  }
  if (
    firstCardId === e.target.dataset.id ||
    secondCardId === e.target.dataset.id
  ) {
    return;
  }
  if (!secondCardName && !firstCardName) {
    e.target.setAttribute("src", memoCards[e.target.dataset.id].url);
    e.target.setAttribute("alt", memoCards[e.target.dataset.id].name);
    firstCardName = e.target.dataset.name;
    firstCardId = e.target.dataset.id;
    firstCard = e.target;
  } else if (firstCardName && !secondCardName) {
    e.target.setAttribute("src", memoCards[e.target.dataset.id].url);
    e.target.setAttribute("alt", memoCards[e.target.dataset.id].name);
    secondCardName = e.target.dataset.name;
    secondCardId = e.target.dataset.id;
    secondCard = e.target;
    checkForMatch(firstCard, secondCard);
  }
};

const startGame = () => {
  memoCards.sort(() => 0.5 - Math.random());

  for (let i = 0; i < memoCards.length; i++) {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    card.classList.add("card");
    cardImg.classList.add("card-image");
    cardImg.setAttribute("src", "assets/front.png");
    cardImg.setAttribute("alt", "questionmark card");
    cardImg.setAttribute("data-name", memoCards[i].name);
    cardImg.setAttribute("data-id", i);
    card.appendChild(cardImg);
    memoGrid.appendChild(card);
  }

  memoGrid.addEventListener("click", selectCard);
};

const clearBoard = () => {
  for (let i = 0; i < memoCards.length; i++) {
    const memoCard = document.querySelector(".memo-grid div");
    memoGrid.removeChild(memoCard);
  }

  score = 0;
  time = 0;
  scoreSpan.textContent = score;
  timer.textContent = time;
  firstCardName = "";
  secondCardName = "";
  firstCardId;
  secondCardId;
  firstCard;
  secondCard;
  gameStarted = false;
  cardsMatched = [];
  timerIndex;
};

restartBtn.addEventListener("click", () => {
  clearBoard();
  stopTimer();
  startGame();
});

startGame();
