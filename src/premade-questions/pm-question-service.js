const pmQuestionService = {

  getAllQuestions(db) {
    return db
      .from('premade_questions')
      .select(
        'premade_questions.id',
        'premade_questions.question',        
      )      
  },

  getById(db, id) {
    return db
      .from('premade_questions')
      .select('*')
      .where('id', id)
      .first();
  },

  getAnswersByQuestionId(db, id) {
    return knex('premade_answers')
      .select('*')
      .where('question_id', id);
  }
};



module.exports = pmQuestionService;


