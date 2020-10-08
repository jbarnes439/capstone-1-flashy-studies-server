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
};

module.exports = pmAnswerService;