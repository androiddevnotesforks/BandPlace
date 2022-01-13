class RemoveExtraneousColumnsFromTables < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :profile_image_url, :string 
    remove_column :users, :banner_url, :string 
    remove_column :songs, :source_url, :string 
    remove_column :releases, :cover_art_url, :string
  end
end
