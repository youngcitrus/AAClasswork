require_relative 'super_useful'

puts "'five' == #{convert_to_int('five')}"

feed_me_a_fruit
begin
    purnima = BestFriend.new('Purnima', 6, 'eat sushi')
rescue NotMyBestFriendError => e
    puts e.message
end
    
purnima.talk_about_friendship
purnima.do_friendstuff
purnima.give_friendship_bracelet
