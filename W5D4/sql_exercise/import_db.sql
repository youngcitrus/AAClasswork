PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255),
  body TEXT NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  author_id INTEGER NOT NULL,  
  body TEXT,

  FOREIGN KEY(parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)

);

INSERT INTO
  users
  (fname, lname)
VALUES
  ('Justin', 'Nguyen'),
  ('Steve', 'Kleha'),
  ('Arthur', 'Miller'),
  ('Babe', 'Ruth'),
  ('Barrack', 'Obama')

;

INSERT INTO
  questions
  (title, body, user_id)
VALUES
  ('Lunchtime', 'When is lunch?', (SELECT id FROM users WHERE users.fname = 'Justin')),
  ('Homework', 'What is homework for today?', (SELECT id FROM users WHERE users.fname = 'Steve')),
  ('Theatre Club', 'Want to start a theatre club?', (SELECT id FROM users WHERE users.fname = 'Arthur')),
  ('Exercise', 'Want to go for a run?', (SELECT id FROM users WHERE users.fname = 'Babe')),
  ('Yes we can', 'You need to care!', (SELECT id FROM users WHERE users.fname = 'Barrack'))
;

INSERT INTO
  question_follows
  (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE users.fname = 'Steve'), (SELECT id FROM questions WHERE title = 'Lunchtime')),
  ((SELECT id FROM users WHERE users.fname = 'Barrack'), (SELECT id FROM questions WHERE title = 'Exercise')),
  ((SELECT id FROM users WHERE users.fname = 'Justin'), (SELECT id FROM questions WHERE title = 'Theatre Club')),
  ((SELECT id FROM users WHERE users.fname = 'Steve'), (SELECT id FROM questions WHERE title = 'Theatre Club')),
  ((SELECT id FROM users WHERE users.fname = 'Babe'), (SELECT id FROM questions WHERE title = 'Theatre Club'))
;

INSERT INTO
  replies
  (question_id, parent_id, author_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Lunchtime'), NULL, (SELECT id FROM users WHERE fname = 'Babe'), 'It is 12:30'),
  ((SELECT id FROM questions WHERE title = 'Theatre Club'), NULL, (SELECT id FROM users WHERE fname = 'Steve'), 'Yes!')
;

INSERT INTO
  replies
  (question_id, parent_id, author_id, body)
VALUES
  ((SELECT id FROM questions WHERE title = 'Theatre Club'), (SELECT id FROM replies WHERE body = 'Yes!'), (SELECT id FROM users WHERE fname = 'Arthur'), 'Great!')
;

INSERT INTO
  question_likes
  (user_id, question_id)
VALUES
  ((SELECT id FROM users WHERE fname = 'Justin'), (SELECT id FROM questions WHERE title = 'Lunchtime')),
  ((SELECT id FROM users WHERE fname = 'Steve'), (SELECT id FROM questions WHERE title = 'Lunchtime')),
  ((SELECT id FROM users WHERE fname = 'Barrack'), (SELECT id FROM questions WHERE title = 'Lunchtime')),
  ((SELECT id FROM users WHERE fname = 'Justin'), (SELECT id FROM questions WHERE title = 'Yes we can')),
  ((SELECT id FROM users WHERE fname = 'Babe'), (SELECT id FROM questions WHERE title = 'Yes we can'))
;