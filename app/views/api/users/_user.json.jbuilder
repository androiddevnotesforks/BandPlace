json.extract! user, :id,  :email, :username, :is_artist, :bio, :location, :homepage, :color_profile

json.profPicUrl url_for(user.profile_image)
json.bannerPicUrl url_for(user.banner_image)