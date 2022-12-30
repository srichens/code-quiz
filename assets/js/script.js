let count = 60;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let questionEl = document.querySelector("#question-title");

function countDown() {
    count = 60; 
    let myInterval = setInterval(counting,1000); 
    function counting(){
        count--; 
        countEl.textContent = count;
        if (count === 59){
            startQuiz();} 
        if(count === 0) {
            clearInterval(myInterval);
        }
    }
}

startEl.addEventListener("click", countDown);

/*let question = document.createElement(questionSentence);
let answerOne = document.createElement(firstOption);
let answerTwo = document.createElement(seconOption);
let answerThree = document.createElement(thirdOption);*/

function startQuiz(){
    console.log("quiz has started");
    //questionEl.textContent = "";
    //question.textContent = "Is this the first question?"
    //document.body.appendChild(question);
    
}