CREATE TABLE user_flashcards (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);