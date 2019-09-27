class RemoveColumnsFromArtworkShares < ActiveRecord::Migration[5.2]
  def change
    remove_column :artwork_shares, :artwork_id
    remove_column :artwork_shares, :viewer_id
    add_column :artwork_shares, :artwork_id, :integer, null: false
    add_column :artwork_shares, :viewer_id, :integer, null: false
  end
end
