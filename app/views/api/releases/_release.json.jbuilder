json.extract! release, :id, :title, :description, :artist_id, :created_at

if release.cover_image.attached?
    json.coverArtUrl url_for(release.cover_image)
end