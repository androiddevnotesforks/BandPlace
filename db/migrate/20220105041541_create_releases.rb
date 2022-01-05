class CreateReleases < ActiveRecord::Migration[6.1]
  def change
    create_table :releases do |t|
      t.string :title, null: false
      t.text :description
      t.string :cover_art_url, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end

    add_index :releases, :title 
    add_index :releases, :artist_id 

  end
end
