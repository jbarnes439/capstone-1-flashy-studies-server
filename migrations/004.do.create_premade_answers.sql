CREATE TABLE premade_answers (
  id SERIAL PRIMARY KEY,
  answer TEXT NOT NULL,
  correct BOOLEAN NOT NULL,
  question_id INTEGER
    REFERENCES premade_questions(id) ON DELETE CASCADE
);