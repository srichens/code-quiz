let count = 60;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let secondsEl = document.querySelector("#timer-words");
let questionEl = document.querySelector("#question-title");
let answersEl = document.querySelector("#answers");
let answers2El = document.querySelector("#answers2");
let answers3El = document.querySelector("#answers3");
let divEl = document.querySelector("div");
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score = 0;


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
            clearInterval(myInterval); alert("Quiz is done!");
        }
    }
}

startEl.addEventListener("click", countDown);
    
function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Is this the first question?";
    answersEl.style.visibility = "visible";

    let button1El = document.querySelector("#button1");
    let button2El = document.querySelector("#button2");
    let button3El = document.querySelector("#button3");
        
    button1El.textContent = "This is the first answer to the first question";
    button2El.textContent = "This is the second answer to the first question";
    button3El.textContent = "This is the third answer to the first question";
    
    button1El.addEventListener("click", message1);
    button2El.addEventListener("click", message2);
    button3El.addEventListener("click", message3);
  
    function message1(){
        alert("Correct!"); score1 = 1;
         secondQuestion();
    }

    function message2(){
        alert("Incorrect!"); count = count - 5; score1 = 0;
        secondQuestion();
    }

    function message3(){ 
        alert("Incorrect!"); count = count - 5; score1 = 0;
        secondQuestion();
    }
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    
    }    
}

function secondQuestion(){
    console.log("this is the second question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "visible";
    divEl.style.flexDirection = "row";
    divEl.style.justifyContent = "space-between";
    questionEl.textContent = "Is this the second question?";

    let button21El = document.querySelector("#button21");
    let button22El = document.querySelector("#button22");
    let button23El = document.querySelector("#button23");
        
    button21El.textContent = "This is the first answer to second question";
    button22El.textContent = "This is the second answer to the second question";
    button23El.textContent = "This is the third answer to the second question";

    button21El.addEventListener("click", message21);
    button22El.addEventListener("click", message22);
    button23El.addEventListener("click", message23);
   
    function message21(){
        alert("Incorrect!"); count = count - 10; score2 = 0;
        thirdQuestion();
    }

    function message22(){
        alert("Correct!"); score2 = 1;
        thirdQuestion();
    }

    function message23(){
       alert("Incorrect!"); count = count - 10; score2 = 0;
        thirdQuestion();
    }   
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }       
}

function thirdQuestion(){
    console.log("this is the third question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "hidden";
    answers3El.style.visibility = "visible";
    divEl.style.flexDirection = "column-reverse";
    questionEl.textContent = "Is this the third question?";

    let button31El = document.querySelector("#button31");
    let button32El = document.querySelector("#button32");
    let button33El = document.querySelector("#button33");
    
    button31El.textContent = "This is the first answer to the third question";
    button32El.textContent = "This is the second answer to the third question";
    button33El.textContent = "This is the third answer to the third question";

    button31El.addEventListener("click", message31);
    button32El.addEventListener("click", message32);
    button33El.addEventListener("click", message33);
         
    function message31(){
        alert("Incorrect!"); count = count - 10; score3 = 0;
        scorePage();
    }

    function message32(){
       alert("Incorrect!"); count = count - 10; score3 = 0;
        scorePage();
    }

    function message33(){
      alert("Correct!"); score3 = 1;
        scorePage();
    }   
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }          
}

function scorePage(){
    console.log("this is the score page");
    score = score1 + score2 + score3;
    count = 1;
    startEl.style.visibility = "hidden";
    countEl.style.visibility = "hidden";
    secondsEl.style.visibility = "hidden";
    answers3El.style.visibility = "hidden";

    if (score ===1) {questionEl.textContent = "You got " + score + " question correct"} 
    else {questionEl.textContent = "You got " + score + " questions correct"}; 
    
    let form = document.createElement("form");
   
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "FullName");
    nameInput.setAttribute("placeholder", "Full Name:");
    nameInput.setAttribute("id", "name");

    form.appendChild(nameInput);

    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.setAttribute("id", "submit");

    form.appendChild(submit);

    questionEl.appendChild(form);

    let submitEl = document.querySelector("#submit");
    let submissionResponseEl = document.querySelector("#submission");

    let nameAdd = document.querySelector("#name");
       
    submitEl.addEventListener("click", showResponse); 
   

    function showResponse(event) {
        event.preventDefault();
        let name = nameAdd.value;
        let totalScore = score;  
        let response = "Thank you for your submission, " + name + ".";
        submissionResponseEl.textContent = response;
        localStorage.setItem("userScore", totalScore);
        localStorage.setItem("userName", name);
    }
}