BEGIN;

TRUNCATE
  premade_questions,
  premade_answers
  RESTART IDENTITY CASCADE;

INSERT INTO premade_questions (question, topic)
  VALUES
    ('What is the anatomical name for all of the bones in the head?', 'anatomy'),
    ('What is the name of the first cervical vertebra?', 'anatomy'),
    ('What is the name of the second cervical vertebra?', 'anatomy'),
    ('What is the name of the artery that supplies blood to head?', 'anatomy'),
    ('Which bloodvessels are responsible for supplying blood to the right atrium?', 'anatomy'),
    ('What type of tissue is attached to bones and makes up the joints?', 'anatomy'),
    ('Which body structure allows air to pass into the lungs?', 'anatomy'),
    ('Which bone is proximal to the ulna and distal to the femur?', 'anatomy'),
    ('What disorder is characterized by episodes of falling asleep throughout the day?', 'anatomy'),
    ('Which part of the brain controls body temperature, appetite, and sleep?', 'anatomy'),
    ('What is the operator used for checking strict equality?', 'coding');

INSERT INTO premade_answers (answer, correct, question_id)
  VALUES
    ('skull', true, 1),
    ('scapula', false, 1),
    ('humerus', false, 1),
    ('femur', false, 1),
    ('axis', false, 2),
    ('atlas', true, 2),
    ('lumbar', false, 2),
    ('thoracic', false, 2),
    ('axis', true, 3),
    ('atlas', false, 3),
    ('stapes', false, 3),
    ('malleus', false, 3),
    ('jugular', false, 4),
    ('subclavian', false, 4),
    ('carotid', true, 4),
    ('brachial', false, 4),
    ('The pulmonary veins', false, 5),
    ('The superior and inferior vena cava', true, 5),
    ('The aorta', false, 5),
    ('The brachiocephalic vein', false, 5),
    ('adipose', false, 6),
    ('cartilage', true, 6),
    ('muscle', false, 6),
    ('nerve', false, 6),
    ('trachea', true, 7),
    ('esophagus', false, 7),
    ('aorta', false, 7),
    ('epiglottis', false, 7),
    ('patella', true, 8),
    ('fibula', false, 8),
    ('calcaneus', false, 8),
    ('radius', false, 8),
    ('dyslexia', false, 9),
    ('epilepsy', false, 9),
    ('narcolepsy', true, 9),
    ('hydrocephalus', false, 9),
    ('hypothalmus', true, 10),
    ('cerebellum', false, 10),
    ('cerebrum', false, 10),
    ('prefrontal cortex', false, 10),
    ('=', false, 11),
    ('==', false, 11),
    ('===', true, 11),
    ('!=', false, 11);

COMMIT;
