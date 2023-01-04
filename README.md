# Code Quiz
Bootcamp Week 4 Challenge 

## This week’s bootcamp challenge for Web APIs was to create a code quiz with the following criteria:
1.  Includes a start button that starts counting down when clicked.
2.	First question appears when start button clicks.
3.	There are multiple choice answers, and when you choose one, you’re told whether it’s correct or incorrect and sent to the next question.
4.	When the timer gets to 0, the quiz ends, and the user can save their initials and score and compare the score to other users.

## Here are the two main challenges I had and how I solved them:

Switching to each question
1. In the quiz example, it showed each question appearing as if clicking through the pages of a PowerPoint slide. I decided the best way to do that would be with a function for each question.

2. At first, I had only one list of questions in the html, and then I would just change the text for each new question. But then the click event for each multiple-choice answer would remain even if you switched text and added a new click event. So, I changed it to three (I only had three questions in the quiz) lists in html.

3. With the three lists, the lists’ visibility started out as hidden on the Start page, and then each list would be visible at the beginning of the corresponding question function. That worked well, except the questions each showed up in a different place on the page.

4. To get them to all show up in the (basically) same spot, I put them in a flex container and then changed each list’s position at the start of the corresponding question function. (That worked, except for different screen sizes. But it basically worked.)

Comparing user scores and showing the high score
1. In the end, I was unable to compare more than the current and previous score using localstorage.setItem and localstorage.getItem.  However, even saving the last score before it turned into the current score was a challenge.

2. I ended up following the example in the week’s class for saving and rendering the last score (call the renderLastScore function before the submit button’s function, and then also call it again within the submit button’s function after the saveScore function). That was great for showing the previous score and the current score before the current score was submitted, but then I lost it after the current score was submitted and couldn’t state the high score.

3. The solution was creating a saveLastScore function that saved the properties of rendered last score as variables that could be compared to the current user name and score. That was called right after the renderLastScore was first called. And then the high score message was displayed in the submit button function after the saveScore function was called and before the renderLastScore function was called.

[Link to deployed web page](https://srichens.github.io/code-quiz/)

![Screenshot 2023-01-03 at 2 55 56 PM](https://user-images.githubusercontent.com/117301473/210440308-52b00b5a-03d8-4ffa-a280-6908cf790ab9.png)
