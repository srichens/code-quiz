var count = 0;
var startEl = document.querySelector("#start-button");
var countEl = document.querySelector("#timer-count");

function countDown() {
    count = 60; 
    let myInterval = setInterval(counting,1000); 
    function counting(){
        count--; 
        countEl.textContent = count; 
        if(count === 0) {
            clearInterval(myInterval);
        if (document.querySelector(".word-blanks").innerHTML = "Javascript"){clearInterval(myInterval); }
        }
    }
}

startEl.addEventListener("click", countDown);