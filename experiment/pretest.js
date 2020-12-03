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
      question: "In digital logic, a counter is a device which ____________",  ///// Write the question inside double quotes
      answers: {
        a: "Counts the number of outputs",                  ///// Write the option 1 inside double quotes
        b: "Stores the number of times a particular event or process has occurred",                  ///// Write the option 2 inside double quotes
        c: "Stores the number of times a clock pulse rises and falls",                  ///// Write the option 3 inside double quotes
        d: "Counts the number of inputs"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
     question: "A counter circuit is usually constructed of ____________ .",  ///// Write the question inside double quotes
      answers: {
        a: "A number of latches connected in cascade form",                  ///// Write the option 1 inside double quotes
        b: "A number of NAND gates connected in cascade form",                  ///// Write the option 2 inside double quotes
        c: "A number of flip-flops connected in cascade",                  ///// Write the option 3 inside double quotes
        d: "A number of NOR gates connected in cascade form"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }, 

    {
     question: "Ripple counters are also called ____________ .",  ///// Write the question inside double quotes
      answers: {
        a: "SSI counters",                  ///// Write the option 1 inside double quotes
        b: "Synchronous counters",                  ///// Write the option 2 inside double quotes
        c: "VLSI counters",                  ///// Write the option 3 inside double quotes
        d: "Asynchronous counters"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "The parallel outputs of a counter circuit represent the _____________ .",  ///// Write the question inside double quotes
      answers: {
        a: "Parallel data word",                  ///// Write the option 1 inside double quotes
        b: "Clock frequency",                  ///// Write the option 2 inside double quotes
        c: "Clock count",                  ///// Write the option 3 inside double quotes
        d: "Counter modulus"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "What is the maximum possible range of bit-count specifically in n-bit binary counter consisting of ‘n’ number of flip-flops?",  ///// Write the question inside double quotes
      answers: {
        a: "0 to 2^n",                  ///// Write the option 1 inside double quotes
        b: "0 to 2^n + 1",                  ///// Write the option 2 inside double quotes
        c: "0 to 2^n – 1",                  ///// Write the option 3 inside double quotes
        d: "0 to 2^n + 1/2"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                 ///// To add more questions, copy the section below 
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