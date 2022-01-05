class AddUniqueCombinationsToReleasesAndSongs < ActiveRecord::Migration[6.1]
  def change
    add_index :releases, [:title, :artist_id], unique: true 
    add_index :songs, [:name, :release_id], unique: true
  end
end
