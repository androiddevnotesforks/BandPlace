class Release < ApplicationRecord

    validates :title, :artist_id, presence: true 
    validates :title, uniqueness: {scope: :artist_id, message: "You already have a release by that name!"}

    belongs_to :artist, 
    class_name: :User, 
    primary_key: :id, 
    foreign_key: :artist_id 

    has_many :songs,
    class_name: :Song, 
    primary_key: :id, 
    foreign_key: :release_id
    
    has_one_attached :cover_image
    
end
