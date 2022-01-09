class DropColorProfiles < ActiveRecord::Migration[6.1]
  def change
    drop_table :color_profiles
  end
end
