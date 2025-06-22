

// const words = [
//     "Hello",
//     "Programming",
//     "Code",
//     "Javascript",
//     "Town",
//     "Country",
//     "Testing",
//     "Youtube",
//     "Linkedin",
//     "Twitter",
//     "Github",
//     "Leetcode",
//     "Internet",
//     "Python",
//     "Scala",
//     "Destructuring",
//     "Paradigm",
//     "Styling",
//     "Cascade",
//     "Documentation",
//     "Coding",
//     "Funny",
//     "Working",
//     "Dependencies",
//     "Task",
//     "Runner",
//     "Roles",
//     "Test",
//     "Rust",
//     "Playing"
// ];

// const lvls = {
//     "Easy": 6,
//     "Normal": 3,
//     "Hard": 2,
// }

// let defaultLevelName = "Easy"
// let defaultLevelSecound = lvls[defaultLevelName];


// let startButton = document.querySelector(".start");
// let lvlNameSpan = document.querySelector(".message .lvl");
// let secondsSpan = document.querySelector(".message .seconds");
// let theWord = document.querySelector(".the-word");
// let upcomingWords = document.querySelector(".upcoming-words");
// let input = document.querySelector(".input");
// let timeLeftSpan = document.querySelector(".time span");
// let scoreGot = document.querySelector(".score .got");
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");


// lvlNameSpan.innerHTML = defaultLevelName;
// secondsSpan.innerHTML = defaultLevelSecound;
// timeLeftSpan.innerHTML = defaultLevelSecound;
// scoreTotal.innerHTML = words.length;

// input.onpaste = function() {
//     return false;
// }
// startButton.onclick = function () {
//     this.remove();
//     input.focus();
//     // Generate Word Function
//     getWoeds();
// }

// function getWoeds() { 

//     let rendomWords = words[Math.floor(Math.random() *words.length)]

//     let wordIndex = words.indexOf(rendomWords);

//     words.splice(wordIndex, 1);

//     theWord.innerHTML = rendomWords;

//     upcomingWords.innerHTML = '';

//     for (let i = 0; i < words.length; i++) {
//         let div = document.createElement("div");
//         let txt = document.createTextNode(words[i]);
//         div.appendChild(txt)
//         upcomingWords.appendChild(div)
//     }

// }



const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];
  
  // Setting Levels
  const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
  };
  
  // Default Level
  let defaultLevelName = "Easy"; // Change Level From Here
  let defaultLevelNormal = "Normal"; // Change Level From Here
  let defaultLevelHard = "Hard"; // Change Level From Here
  let defaultLevelSeconds = lvls[defaultLevelName];
  
  // Catch Selectors
  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message .lvl");
  let secondsSpan = document.querySelector(".message .seconds");
  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector(".input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");
  
  // Setting Level Name + Seconds + Score
  lvlNameSpan.innerHTML = defaultLevelName;
  secondsSpan.innerHTML = defaultLevelSeconds;
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  scoreTotal.innerHTML = words.length;
  
  // Disable Paste Event
  input.onpaste = function () {
    return false;
  }
  
  // Start Game
  startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function
    genWords();
  }
  
  function genWords() {
    // Get Random Word From Array
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // Get Word Index
    let wordIndex = words.indexOf(randomWord);
    // Remove WordFrom Array
    words.splice(wordIndex, 1);
    // Show The Random Word
    theWord.innerHTML = randomWord;
    // Empty Upcoming Words
    upcomingWords.innerHTML = '';
    // Generate Words
    for (let i = 0; i < words.length; i++) {
      // Create Div Element
      let div = document.createElement("div");
      let txt = document.createTextNode(words[i]);
      div.appendChild(txt);
      upcomingWords.appendChild(div);
    }
    // Call Start Play Function
    startPlay();
  }

  function startPlay() {

    timeLeftSpan.innerHTML = defaultLevelSeconds;

    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;

        if (timeLeftSpan.innerHTML === '0') {
            clearInterval(start)

            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {

                input.value = '';

                scoreGot.innerHTML++;

                if (words.length > 0) {
                    genWords();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let spanText = document.createTextNode("Wins");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                }

            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
  }
