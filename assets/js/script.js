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

var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");


function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Is this the first question?";
    questionEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    li1.textContent = "This is the first answer";
    li2.textContent = "This is the second";
    li3.textContent = "This is the third";
    
}