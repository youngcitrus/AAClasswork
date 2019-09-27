class AddColumnToArtworksArtistId < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :artist_id, :integer
  end
end
