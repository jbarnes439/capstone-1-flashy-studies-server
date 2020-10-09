function makePmQuestionsArray() {
  return [
    {
      id: 1,
      question: 'What did the fish say when it ran into a wall?'
    },
    {
      id: 2,
      question: 'What do you call a deer with no eyes?',
    },
    {
      id: 3,
      question: 'Who is the coolest doctor in the hospital',
    },
    {
      id: 4,
      question: 'What do you call slipping on a bra?'
    }
  ];
}

function makePmAnswersArray() {
  return [
    {
      id: 1,
      answer: 'dam',
      correct: true,
      question_id: 1,
    },
    {
      id: 2,
      answer: 'ouch',
      correct: false,
      question_id: 1,
    },
    {
      id: 3,
      answer: 'idk',
      correct: false,
      question_id: 1,
    },
    {
      id: 4,
      answer: 'this is dumb',
      correct: false,
      question_id: 1,
    },
    {
      id: 5,
      answer: 'uhh idk',
      correct: false,
      question_id: 2,
    },
    {
      id: 6,
      answer: 'No Eye Deer',
      correct: true,
      question_id: 2,
    },
    {
      id: 7,
      answer: 'A deer with no eyes?',
      correct: false,
      question_id: 2,
    },
    {
      id: 8,
      answer: 'What a stupid joke',
      correct: false,
      question_id: 2,
    },
    {
      id: 9,
      answer: 'Please stop',
      correct: false,
      question_id: 3,
    },
    {
      id: 10,
      answer: 'I cannot take anymore bad jokes',
      correct: false,
      question_id: 3,
    },
    {
      id: 11,
      answer: 'The hip doctor!',
      correct: true,
      question_id: 3,
    },
    {
      id: 12,
      answer: 'Worst joke yet',
      correct: false,
      question_id: 3,
    },
    {
      id: 13,
      answer: 'How many more are there?',
      correct: false,
      question_id: 4,
    },
    {
      id: 14,
      answer: 'idk what?',
      correct: false,
      question_id: 4,
    },
    {
      id: 15,
      answer: 'slipping on a bra?',
      correct: false,
      question_id: 4,
    },
    {
      id: 16,
      answer: 'A booby trap!',
      correct: true,
      question_id: 4,
    },
  ];
}

module.exports = { 
  makePmQuestionsArray,
  makePmAnswersArray,
};