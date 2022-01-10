json.extract! song, :id, :name, :track, :lyrics, :release_id 

if song.track_audio.attached?
    json.audioUrl url_for(song.track_audio)
end