class CreateColorProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :color_profiles do |t|
      t.string :body
      t.string :primary_text
      t.string :secondary_text
      t.string :link
      t.string :background
      t.string :navbar
      t.integer :user_id
      t.timestamps
    end
    add_index :color_profiles, :user_id, unique: true
  end
end
