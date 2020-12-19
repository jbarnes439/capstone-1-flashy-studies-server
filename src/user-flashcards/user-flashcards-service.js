const xss = require('xss');

const userFlashcardService = {

    getAllUserFlashcards(db, id) {
        return db
            .from('user_flashcards')
            .select('*')
            .where('user_id', id)
    },

    insertUserFlashcard(db, flashcard) {
        return db
            .insert(flashcard)
            .into('user_flashcards')
            .returning('*')            
    },
    
    serializeUserFlashcard(flashcard, userId) {
        return {
            user_id: userId,
            question: xss(flashcard.question),
            answer: xss(flashcard.answer)
        }
    },
}

module.exports = userFlashcardService;