const express = require('express');
const router = express.Router();

// Hardcoded trivia questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Middleware to track the user's progress and score
router.use((req, res, next) => {
  if (!req.session) {
    req.session = {
      currentQuestionIndex: 0,
      score: 0,
    };
  }
  next();
});

// GET /quiz - Start the quiz and display the first question
router.get('/', (req, res) => {
  const currentQuestion = triviaQuestions[req.session.currentQuestionIndex];
  if (currentQuestion) {
    res.json({
      question: currentQuestion.question,
      message: "Answer the question using a POST request to /quiz",
    });
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit an answer and move to the next question
router.post('/', (req, res) => {
  const currentQuestionIndex = req.session.currentQuestionIndex;
  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return res.redirect('/quiz/score');
  }

  const userAnswer = req.body.answer;
  if (userAnswer && userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
    req.session.score += 1;
    res.json({ message: "Correct!", score: req.session.score });
  } else {
    res.json({ message: `Incorrect! The correct answer was ${currentQuestion.answer}.`, score: req.session.score });
  }

  // Move to the next question
  req.session.currentQuestionIndex += 1;

  // If more questions are left, redirect to next question, else show score
  if (req.session.currentQuestionIndex < triviaQuestions.length) {
    res.redirect('/quiz');
  } else {
    res.redirect('/quiz/score');
  }
});

// GET /quiz/score - Display the user's final score
router.get('/score', (req, res) => {
  res.json({
    message: "Quiz complete!",
    finalScore: req.session.score,
    totalQuestions: triviaQuestions.length,
  });
});

module.exports = router;
