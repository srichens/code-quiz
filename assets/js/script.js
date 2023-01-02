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
            clearInterval(myInterval); scorePage();
        }
    }
}

startEl.addEventListener("click", countDown);
    
function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Who invented Javascript and in what year?";
    answersEl.style.visibility = "visible";

    let button1El = document.querySelector("#button1");
    let button2El = document.querySelector("#button2");
    let button3El = document.querySelector("#button3");
        
    button1El.textContent = "1. Brendan Eich in 1995";
    button2El.textContent = "2. Steve Jobs in 1984";
    button3El.textContent = "3. Elon Musk in 2053";
    
    button1El.addEventListener("click", message1);
    button2El.addEventListener("click", message2);
    button3El.addEventListener("click", message3);
  
    function message1(){
        alert("Correct!"); score1 = 1;
         secondQuestion();
    }

    function message2(){
        alert("Incorrect!"); count = count - 10; score1 = 0;
        secondQuestion();
    }

    function message3(){ 
        alert("Incorrect!"); count = count - 10; score1 = 0;
        secondQuestion();
    }
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    
    }    
}

function secondQuestion(){
    console.log("This is the second question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "visible";
    divEl.style.flexDirection = "row";
    divEl.style.justifyContent = "space-evenly";
    questionEl.textContent = "What method attaches an event handler to a specified element?";

    let button21El = document.querySelector("#button21");
    let button22El = document.querySelector("#button22");
    let button23El = document.querySelector("#button23");
        
    button21El.textContent = "1. toUpperCase()";
    button22El.textContent = "2. addEventListener()";
    button23El.textContent = "3. addButtonClick()";

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
    questionEl.textContent = "What method cancels an event (if it is cancelable)?";

    let button31El = document.querySelector("#button31");
    let button32El = document.querySelector("#button32");
    let button33El = document.querySelector("#button33");
    
    button31El.textContent = "1. Event Bubbling";
    button32El.textContent = "2. getElementById()";
    button33El.textContent = "3. preventDefault()";

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
    count = 2;
    startEl.style.visibility = "hidden";
    countEl.style.visibility = "hidden";
    secondsEl.style.visibility = "hidden";
    answers3El.style.visibility = "hidden";
    
    if (score ===1) {questionEl.textContent = "You got " + score + " question correct"} 
    else {questionEl.textContent = "You got " + score + " questions correct"}; 
    
    let form = document.createElement("form");
   
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "Initials");
    nameInput.setAttribute("placeholder", "Please enter your intials");
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
        console.log(score);
        console.log(nameAdd.value);
        let lastUserName = nameAdd.value;
        let lastTotalScore = score;  
        let response = "Thank you. Your score has been recorded.";
        //let lastScore = localStorage.getItem("lastTotalScore");
       // let lastName = localStorage.getItem("lastUserName");
        let highScoreEl = document.querySelector("#high-score");
        let highScoreMessage = "The last score was " + lastTotalScore + " by " + lastUserName;
        highScoreEl.textContent = highScoreMessage;
       
        submissionResponseEl.textContent = response;
        

        localStorage.setItem("lastTotalScore", lastTotalScore);
        localStorage.setItem("lastUserName", lastUserName);          
               
    }
}





