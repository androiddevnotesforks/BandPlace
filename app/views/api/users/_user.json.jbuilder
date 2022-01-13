json.extract! user, :id,  :email, :username, :is_artist, :bio, :location, :homepage, :color_profile

if user.profile_image.attached?
    json.profPicUrl url_for(user.profile_image)
end

if user.banner_image.attached?
    json.bannerPicUrl url_for(user.banner_image)
end

