BEGIN;

TRUNCATE
  users,
  user_flashcards  
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, password)
VALUES
--stickysubject password is 'StickyPassword1'
  ('stickysubject', '$2a$12$6ce.Ta6lashzEWMAyi0a6.Nw34Ns7hpabcmVG4v67PJXs9I7F0cxC'),  
  ('jmoney', '$2a$12$8In2D5xW8L77rCiync1GT.vPdMJkWL8aGWJuSzPPUtgulr4jFGV6G'),
  ('jbarnes439', '$2a$12$enqvtcFrz7/s.IQYTeonC.S/Kj76gjexmsxrddMxzEr8br0N5usfy'),
  ('testuser', '$2a$12$oKY3CA1AjFA0eMDRJC2r2uKe/dTQS8m8kdAs/oTDx/kgoqyf1dhom'),
  ('userflashystudies', '$2a$12$Oco18M66a7iZfOMZvTXgCukBulsIxbwU15Wim8AkNrD2TB3cJtg5G');

INSERT INTO user_flashcards (question, answer, user_id)
VALUES
  ('What did the fish say when it ran into a wall?', 'dam', 1),
  ('What do you call a deer with no eyes?', 'no eye deer', 1),
  ('What is it called when you slip on a bra?', 'A booby trap', 1);

COMMIT;

