let count = 60;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let questionEl = document.querySelector("#question-title");
let answersEl = document.querySelector("#answers");
let button1El = document.querySelector("#button1");
let button2El = document.querySelector("#button2");
let button3El = document.querySelector("#button3");
let rightWrong = document.querySelector("#right-wrong-message");

function countDown() {
    count = 60; 
    let myInterval = setInterval(counting,1000); 
    function counting(){
        count--; 
        countEl.textContent = count;
        if (countEl.textContent == 59){
            startQuiz();
        } 
        if(count === 0) {
            clearInterval(myInterval); alert("Time is up!");
        }
    }
}

startEl.addEventListener("click", countDown);


/*var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
let rightWrong = document.querySelector("#right-wrong-message");
let timesUp = document.querySelector("#times-up-message");
let rwMess = document.createElement("p");
rwMess.textContent = "Correct!"*/

function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Is this the first question?";
    answersEl.setAttribute("style", "color:black");
    button1El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button2El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button3El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");

    button1El.textContent = "This is the first answer to the first question";
    button2El.textContent = "This is the second answer to the first question";
    button3El.textContent = "This is the third answer to the first question";

    /*button1El.addEventListener("click", correctMessage);
    function correctMessage(){rightWrong.appendChild(rwMess); 
        rwMess.textContent = "Correct!"
        secondQuestion();
    }*/

    button1El.addEventListener("click", correctMessage);
    button2El.addEventListener("click", incorrectMessage);
    button3El.addEventListener("click", incorrectMessage);

    function correctMessage(){
        alert("Correct!"); secondQuestion();
    }

    function incorrectMessage(){
        alert("Incorrect!"); secondQuestion();
    }

    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }
     /*questionEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    li1.textContent = "This is the first answer";
    li2.textContent = "This is the second";
    li3.textContent = "This is the third";

    let firstAnswer = document.querySelector(li1);

    firstAnswer.addEventListener("click", correctMessage);*/
    
}

function secondQuestion(){
    console.log("this is the second question");
    questionEl.textContent = "Is this the second question?";
    answersEl.setAttribute("style", "color:black");
    button1El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button2El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button3El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");

    button1El.textContent = "This is the first answer to the second question";
    button2El.textContent = "This is the second answer to the second question";
    button3El.textContent = "This is the third answer to the second question";

    button1El.addEventListener("click", incorrectMessage);
    button2El.addEventListener("click", correctMessage);
    button3El.addEventListener("click", incorrectMessage);

    function correctMessage(){
        alert("Correct!"); thirdQuestion();
    }

    function incorrectMessage(){
        alert("Incorrect!"); thirdQuestion();
    }

    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }
      
    
    
}

function thirdQuestion(){
    console.log("this is the third question");
    questionEl.textContent = "Is this the third question?";
    answersEl.setAttribute("style", "color:black");
    button1El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button2El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");
    button3El.setAttribute("style", "color:black; background-color:lightgrey; border:solid;");

    button1El.textContent = "This is the first answer to the third question";
    button2El.textContent = "This is the second answer to the third question";
    button3El.textContent = "This is the third answer to the third question";

    button1El.addEventListener("click", incorrectMessage);
    button2El.addEventListener("click", incorrectMessage);
    button3El.addEventListener("click", correctMessage);

    function correctMessage(){
        alert("Correct!"); scorePage();
    }

    function incorrectMessage(){
        alert("Incorrect!"); scorePage();
    }

    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }
        
    
}

function scorePage(){
    console.log("this is the score page");
    questionEl.textContent = "You got __ questions correct";
}