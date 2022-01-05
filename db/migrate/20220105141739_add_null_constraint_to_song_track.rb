class AddNullConstraintToSongTrack < ActiveRecord::Migration[6.1]
  def change
    change_column_null :songs, :track, false
  end
end
