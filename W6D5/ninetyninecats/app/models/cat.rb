# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'action_view'

class Cat < ApplicationRecord

  include ActionView::Helpers::DateHelper

  COLORS = ["Blue", "White", "Brown", "Black", "Calico"]
  SEXES = ["M", "F"]

  validates :color, inclusion: COLORS #CHECK SYNTAX FOR THIS WHEN WE BACK
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :sex, inclusion: SEXES

  def age
    time_ago_in_words(self.birth_date).capitalize
  end

  def self.colors
    COLORS
  end

end
