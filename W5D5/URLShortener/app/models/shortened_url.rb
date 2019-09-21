class Shortened_Url < ApplicationRecord
  validates :long_url, :short_url, presence:true, uniqueness:true
  validates :user_id, presence:true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end