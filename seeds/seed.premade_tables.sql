BEGIN;

TRUNCATE
  premade_questions,
  premade_answers
  RESTART IDENTITY CASCADE;

INSERT INTO premade_questions (question)
  VALUES
    ('What is the anatomical name for all of the bones in the head?'),
    ('What is the name of the first cervical vertebra?'),
    ('What is the name of the second cervical vertebra?'),
    ('What is the name of the artery that supplies blood to the head?'),
    ('Which bloodvessels are responsible for supplying blood to the right atrium?'),
    ('What type of tissue is attached to bones and makes up the joints?'),
    ('Which body structure allows air to pass into the lungs?'),
    ('Which bone is proximal to the tibia and distal to the femur?'),
    ('What disorder is characterized by episodes of falling asleep throughout the day?'),
    ('Which part of the brain controls body temperature, appetite, and sleep?');    

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
    ('prefrontal cortex', false, 10);    

COMMIT;
