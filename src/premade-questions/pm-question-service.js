// questions table database query services

const pmQuestionService = {

  getAllQuestions(db) {
    return db
      .from('premade_questions')
      .select('*');      
  },

  getAllTopics(db) {
    return db
      .from('premade_questions')
      .select('topic')
      .distinctOn('topic');
  },

  getById(db, id) {
    return db
      .from('premade_questions')
      .select('*')
      .where('id', id)
      .first();
  },

  getAnswersByQuestionId(db, id) {
    return db
      .from('premade_answers')
      .select('*')
      .where('question_id', id);
  },
};

module.exports = pmQuestionService;


