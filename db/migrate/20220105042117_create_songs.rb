class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.text :lyrics
      t.string :source_url, null: false
      t.integer :release_id, null: false

      t.timestamps
    end

    add_index :songs, :name 
    add_index :songs, :release_id
  end
end
