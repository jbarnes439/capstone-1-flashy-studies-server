CREATE TABLE user_questions (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  date_created TIMESTAMPTZ DEFAULT now() NOT NULL,
  user_id INTEGER
    REFERENCES users(id) ON DELETE CASCADE NOT NULL
);