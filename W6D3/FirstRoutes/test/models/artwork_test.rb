# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer          not null
#

require 'test_helper'

class ArtworkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
