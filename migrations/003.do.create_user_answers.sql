CREATE TABLE user_answers (
  id SERIAL PRIMARY KEY,
  answer TEXT NOT NULL,
  correct BOOLEAN NOT NULL,
  question_id INTEGER
    REFERENCES user_questions(id) ON DELETE CASCADE NOT NULL
);
