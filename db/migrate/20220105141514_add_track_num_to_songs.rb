class AddTrackNumToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :track, :integer 
  end
end
