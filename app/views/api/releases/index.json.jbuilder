@releases.each do |release|
    json.set! release.id do 
        json.partial! 'release', release: release 
    end
end