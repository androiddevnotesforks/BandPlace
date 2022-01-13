class Api::SongsController < ApplicationController
    
    def create 
        @song = Song.new(song_params)
        if @song.save
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def index
        @songs = Song.where(release_id: params[:release_id])
    end

    def show
        @song = Song.find(params[:id])
    end

    def destroy 
    end

    private 

    def song_params
        params[:song].permit(:name, :lyrics, :track, :release_id, :track_audio)
    end
    
end
