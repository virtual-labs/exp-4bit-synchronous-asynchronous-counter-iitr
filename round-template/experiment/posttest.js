/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "One of the major drawbacks to the use of asynchronous counters is that ____________",  ///// Write the question inside double quotes
      answers: {
        a: "Low-frequency applications are limited because of internal propagation delays",                  ///// Write the option 1 inside double quotes
        b: "High-frequency applications are limited because of internal propagation delays",                  ///// Write the option 2 inside double quotes
        c: "Asynchronous counters do not have major drawbacks and are suitable for use in high- and low-frequency counting applications",                  ///// Write the option 3 inside double quotes
        d: "Asynchronous counters do not have major drawbacks and are suitable for use in high- and low-frequency counting applications"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: "A counter is implemented using three (3) flip-flops, possibly it will have ________ maximum output status.",  ///// Write the question inside double quotes
      answers: {
        a: "3",                  ///// Write the option 1 inside double quotes
        b: "7",                  ///// Write the option 2 inside double quotes
        c: "8",                  ///// Write the option 3 inside double quotes
        d: "15"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "Which sequential circuits are applicable for counting pulses?",  ///// Write the question inside double quotes
      answers: {
        a: "Counters",                  ///// Write the option 1 inside double quotes
        b: "Flip Flops",                  ///// Write the option 2 inside double quotes
        c: "Registers",                  ///// Write the option 3 inside double quotes
        d: "Latches"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

    {
      question: "A decimal counter has ______ states.",  ///// Write the question inside double quotes
      answers: {
        a: "5",                  ///// Write the option 1 inside double quotes
        b: "10",                  ///// Write the option 2 inside double quotes
        c: "15",                  ///// Write the option 3 inside double quotes
        d: "20"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
      question: "Counter is a ____________ .",  ///// Write the question inside double quotes
      answers: {
        a: "Combinational circuit",                  ///// Write the option 1 inside double quotes
        b: "Sequential circuit",                  ///// Write the option 2 inside double quotes
        c: "Both",                  ///// Write the option 3 inside double quotes
        d: "None"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


                                      ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////