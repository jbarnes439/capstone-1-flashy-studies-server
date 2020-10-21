// answer table database query servicess

const pmAnswerService = {

  getAllAnswers(knex) {
    return knex('premade_answers')
      .select('*');
  },

  getAnswersByQuestionId(knex, id) {
    return knex('premade_answers')
      .select('*')
      .where('question_id', id);      
  },

  getCorrectAnswers(knex) {
    return knex('premade_answers')
      .select('*')
      .where('correct', true);
  },
};

module.exports = pmAnswerService;