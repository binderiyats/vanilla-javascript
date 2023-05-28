const quizData = [
  {
    question: "How old is JavaScript ?",
    a: "26",
    b: "27",
    c: "28",
    d: "29",
    e: "25",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "Pyhthon",
    b: "Java",
    c: "JavaScript",
    d: "C",
    e: "TypeScript",
    correct: "c",
  },
  {
    question: "How old is JavaScript ?",
    a: "26",
    b: "27",
    c: "28",
    d: "29",
    e: "25",
    correct: "c",
  },
];

const questionElement = document.getElementById("question");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const answerE = document.getElementById("answerE");
const buttonSubmit = document.getElementById("submit");

let currentQuiz = 0;

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerHTML = currentQuizData.question;
  answerA.innerHTML = currentQuizData.a;
  answerB.innerHTML = currentQuizData.b;
  answerC.innerHTML = currentQuizData.c;
  answerD.innerHTML = currentQuizData.d;
  answerE.innerHTML = currentQuizData.e;

  currentQuiz++;
};

loadQuiz();

buttonSubmit.addEventListener("click", () => {
  currentQuiz++;

  loadQuiz();
});
