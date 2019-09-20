require 'sqlite3'
require 'singleton'

class QuestionsDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end

end

class User

  attr_reader :id, :fname, :lname
  
  def initialize(user_hash)
    
    @id = user_hash['id']
    @fname = user_hash['fname']
    @lname = user_hash['lname']

  end

  def self.find_by_id(id)
    query = QuestionsDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        users.id = ?  
    SQL

    User.new(query[0])
  end

  def self.find_by_name(fname, lname)
    query = QuestionsDBConnection.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        users.fname = ?
          AND
        users.lname = ?
    SQL

    User.new(query[0]) unless query.empty?
  end

  def authored_questions
    Question.find_by_user_id(@id)
  end


  def create
    QuestionsDBConnection.instance.execute(<<-SQL, self.fname, self.lname)
      INSERT INTO
        users
        (fname, lname)
      VALUES
        (?, ?)
      ;
    SQL
    
    @id = QuestionsDBConnection.instance.last_insert_row_id
    
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(@id)
  end

end


class Question

  attr_reader :id, :title, :body, :user_id

  def self.find_by_question_id(num)
    query = QuestionsDBConnection.instance.execute(<<-SQL, num)
      SELECT
        *
      FROM
        questions
      WHERE
        questions.id = ?
    SQL

    Question.new(query[0]) unless query.empty?
  end


  def initialize(question_hash)
    @id = question_hash['id']
    @title = question_hash['title']
    @body = question_hash['body']
    @user_id = question_hash['user_id']
  end

  def self.find_by_user_id(user_id)
    query = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      WHERE
        questions.user_id = ?
    SQL

    Question.new(query[0]) unless query.empty?
  end
  
  def author
    query = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        users.id, users.fname, users.lname
      FROM
        users
      WHERE
        users.id = ?
    SQL

    User.new(query[0]) unless query.empty?
  end

  def followers
    QuestionFollow.followers_for_question_id(@id)
  end

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

end

class QuestionLike

  def self.likers_for_question_id(question_id)
    query = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        users.id, users.fname, users.lname
      FROM
        users
      JOIN
        question_likes ON users.id = question_likes.user_id
      WHERE
        question_likes.question_id = ?
    SQL

    query.map {|datum| User.new(datum)}

  end

end




class QuestionFollow

  def initialize(question_follow_hash)
    @id = question_follow_hash['id']
    @user_id = question_follow_hash['user_id']
    @question_id = question_follow_hash['question_id']
  end

  def self.followers_for_question_id(question_id)
    query = QuestionsDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        users.id, users.fname, users.lname
      FROM
        question_follows
      JOIN
        users ON users.id = question_follows.user_id
      WHERE
        question_follows.question_id = ?
    SQL

    query.map {|user| User.new(user)}

  end

  def self.followed_questions_for_user_id(user_id)
    query = QuestionsDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      JOIN
        question_follows ON questions.id = question_follows.question_id
      WHERE
        question_follows.user_id = ?
    SQL

    query.map {|question| Question.new(question)}

  end


#questions.id, questions.title, questions.body, questions.user_id


  def self.most_followed_questions(n)
    query = QuestionsDBConnection.instance.execute(<<-SQL, n)
      SELECT
        questions.id, questions.title, questions.body, questions.user_id, COUNT(question_follows.user_id) as FollowerCount
      FROM
        questions
      JOIN
        question_follows ON questions.id = question_follows.question_id
      GROUP BY
        question_follows.question_id
      ORDER BY
        FollowerCount DESC
      LIMIT ?
    SQL

    query.map {|datum| Question.new(datum)}

  end

end
