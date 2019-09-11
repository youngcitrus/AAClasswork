# PHASE 2
def convert_to_int(str)
  
    begin
     Integer(str)
    rescue ArgumentError
      puts "Can't convert letters to numbers"
      # s "Error was: #{e.message}"
     "nil"
    end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

class CoffeeError < StandardError
end

def reaction(maybe_fruit)
  # needs_Coffee = false
  # while needs_Coffee == true && maybe_fruit == "coffee"
  #   needs_Coffee = false
  # else
  #   raise StandardError
  # end
  if FRUITS.include? maybe_fruit 
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    # needs_Coffee = true
    puts "Thats not a fruit but I do like..."
    raise CoffeeError 
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"
  needs_coffee? = false
  begin
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeError
    retry
  end
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


