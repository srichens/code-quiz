let count = 60;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let questionEl = document.querySelector("#question-title");
let answersEl = document.querySelector("#answers");
let answers2El = document.querySelector("#answers2");
/*let button1El = document.querySelector("#button1");
let button2El = document.querySelector("#button2");
let button3El = document.querySelector("#button3");
let rightWrong = document.querySelector("#right-wrong-message");
let button1Name = document.querySelector("#button1").name;
let button2Name = document.querySelector("#button2").name;
let button3Name = document.querySelector("#button3").name;

console.log(button1El.name);
console.log(button2El.name);
console.log(button3El.name);
console.log(button1Name);*/

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

    let button1Name = document.querySelector("#button1").name;
    let button2Name = document.querySelector("#button2").name;
    let button3Name = document.querySelector("#button3").name;

    console.log(button1Name);
    console.log(button2Name);
    console.log(button3Name);       
    
    

    function message1(){
        if (button1Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
        secondQuestion();
    }

    function message2(){
        if (button2Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
         secondQuestion();
    }

    function message3(){
        if (button3Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
        secondQuestion();
    }   

    /*function nextQuestion() {
        if ( questionEl.textContent = "Is this the first question?") {secondQuestion}
        else if (questionEl.textContent = "Is this the second question?") {thirdQuestion};
    }*/

function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Is this the first question?";
    answersEl.style.visibility = "visible";

    let button1El = document.querySelector("#button1");
    let button2El = document.querySelector("#button2");
    let button3El = document.querySelector("#button3");

    button1El.addEventListener("click", message1);
    button2El.addEventListener("click", message2);
    button3El.addEventListener("click", message3);
        
    
    button1El.textContent = "This is the first answer to the first question";
    button2El.textContent = "This is the second answer to the first question";
    button3El.textContent = "This is the third answer to the first question";
          

    button1El.setAttribute("name", "correct");
    button2El.setAttribute("name", "incorrect");
    button3El.setAttribute("name", "incorrect");

    /*let button1Name = document.querySelector("#button1").name;
    let button2Name = document.querySelector("#button2").name;
    let button3Name = document.querySelector("#button3").name;

    console.log(button1Name);
    console.log(button2Name);
    console.log(button3Name);       
    
    button1El.addEventListener("click", message1);
    button2El.addEventListener("click", message2);
    button3El.addEventListener("click", message3);

    function message1(){
        if (button1Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
         secondQuestion();
    }

    function message2(){
        if (button2Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
         secondQuestion();
    }

    function message3(){
        if (button3Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
        secondQuestion();
    }*/   
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    
    }    
}

function secondQuestion(){
    console.log("this is the second question");
    questionEl.textContent = "Is this the second question?";
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "visible";

    let button21El = document.querySelector("#button1");
    let button22El = document.querySelector("#button2");
    let button23El = document.querySelector("#button3");
    
    
    button21El.textContent = "This is the first answer to second question";
    button22El.textContent = "This is the second answer to the second question";
    button23El.textContent = "This is the third answer to the second question";

    button21El.setAttribute("name", "incorrect");
    button22El.setAttribute("name", "correct");
    button23El.setAttribute("name", "incorrect");

    let button21Name = document.querySelector("#button1").name;
    let button22Name = document.querySelector("#button2").name;
    let button23Name = document.querySelector("#button3").name;

    console.log(button21Name);
    console.log(button22Name);
    console.log(button23Name);  
       
    button21El.addEventListener("click", message21);
    button22El.addEventListener("click", message22);
    button23El.addEventListener("click", message23);

    function message21(){
        if (button21Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
        thirdQuestion();
    }

    function message22(){
        if (button22Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
         thirdQuestion();
    }

    function message23(){
        if (button23Name === "correct") {alert("Correct!")} 
        else {alert("Incorrect!")}; 
        thirdQuestion();
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

    button1El.addEventListener("click", correctMessage);
    button2El.addEventListener("click", incorrectMessage);
    button3El.addEventListener("click", incorrectMessage);

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