
@users.map do |user|
    json.set! user.username do
        json.id user.id
    end
end