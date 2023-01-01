let count = 60;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let secondsEl = document.querySelector("#timer-words");
let questionEl = document.querySelector("#question-title");
let answersEl = document.querySelector("#answers");
let answers2El = document.querySelector("#answers2");
let answers3El = document.querySelector("#answers3");
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

    button1El.setAttribute("name", "correct");
    button2El.setAttribute("name", "incorrect");
    button3El.setAttribute("name", "incorrect");

    let button1Name = document.querySelector("#button1").name;
    let button2Name = document.querySelector("#button2").name;
    let button3Name = document.querySelector("#button3").name;

    console.log(button1Name);
    console.log(button2Name);
    console.log(button3Name);       

     
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
    console.log(score1);
    console.log("this is the second question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "visible";
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

    button21El.setAttribute("name", "incorrect");
    button22El.setAttribute("name", "correct");
    button23El.setAttribute("name", "incorrect");

    let button21Name = document.querySelector("#button21").name;
    let button22Name = document.querySelector("#button22").name;
    let button23Name = document.querySelector("#button23").name;

    console.log(button21Name);
    console.log(button22Name);
    console.log(button23Name);  
       
   

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
    console.log(score2);
    console.log("this is the third question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "hidden";
    answers3El.style.visibility = "visible";
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

    button31El.setAttribute("name", "incorrect");
    button32El.setAttribute("name", "incorrect");
    button33El.setAttribute("name", "correct");

    let button31Name = document.querySelector("#button31").name;
    let button32Name = document.querySelector("#button32").name;
    let button33Name = document.querySelector("#button33").name;

    console.log(button31Name);
    console.log(button32Name);
    console.log(button33Name);  
       
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
    console.log(score3);
    score = score1 + score2 + score3;
    console.log(score);
    count = 1;
    startEl.style.visibility = "hidden";
    countEl.style.visibility = "hidden";
    secondsEl.style.visibility = "hidden";
    console.log("this is the score page");
    answers3El.style.visibility = "hidden";
    if (score ===1) {questionEl.textContent = "You got " + score + " question correct"} 
    else {questionEl.textContent = "You got " + score + " questions correct"} 
}