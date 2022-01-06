class AddOptionsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :location, :string 
    add_column :users, :homepage, :string 
    add_column :users, :banner_url, :string
  end
end
