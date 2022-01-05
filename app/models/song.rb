class Song < ApplicationRecord

    validates :name, :source_url, :release_id, presence: true 
    validates :name, uniqueness: {scope: :release_id, message: "There's already a song by that name on this release!"}

    belongs_to :release,
    class_name: :Release,
    primary_key: :id, 
    foreign_key: :release_id 

    has_one :track_artist, through: :release, source: :artist

end
