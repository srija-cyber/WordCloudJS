let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById('wordsContainer');
let userInputEl = document.getElementById('userInput');
let errorMsgEl = document.getElementById('errorMsg');
let errorMsg = "Please enter a word";

function CreatewordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add("m-3");
    wordsContainerEl.appendChild(wordEl);
}

for (let word of wordCloud) {
    CreatewordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        CreatewordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }
}