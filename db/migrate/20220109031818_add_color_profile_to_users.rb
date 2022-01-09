class AddColorProfileToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :color_profile, :string
  end
end
