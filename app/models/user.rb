class User < ApplicationRecord
    
    validates :email, :username, :password_digest, presence: true
    validates :email, :username, uniqueness: true 
    validates :is_artist, inclusion: {in: [true, false]}
    validates :password, length: {minimum: 6}, allow_nil: true 

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :releases,
    class_name: :Release, 
    primary_key: :id, 
    foreign_key: :artist_id 

    has_many :released_songs, through: :releases, source: :songs

    has_one_attached :profile_image
    has_one_attached :banner_image

    def self.find_by_credentials(idString, password)
        user = User.find_by(username: idString) || User.find_by(email: idString)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end
