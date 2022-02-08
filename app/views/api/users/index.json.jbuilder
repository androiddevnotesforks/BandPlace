
@users.map do |user|
    json.set! user.username do
        json.id user.id
        json.is_artist user.is_artist 
        if user.profile_image.attached?
            json.profPicUrl url_for(user.profile_image)
        end
    end
end