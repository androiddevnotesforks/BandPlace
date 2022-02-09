json.extract! song, :id, :name, :track, :lyrics, :release_id, :track_artist

if song.release.cover_image.attached?
    json.albumArtUrl url_for(song.album_art)
end

if song.track_audio.attached?
    json.audioUrl url_for(song.track_audio)
end