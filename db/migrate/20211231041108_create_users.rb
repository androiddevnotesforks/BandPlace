class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.boolean :is_artist
      t.string :profile_image_url
      t.text :bio
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
    add_index :users, :username 
    add_index :users, :email 
    add_index :users, :session_token
  end
end
