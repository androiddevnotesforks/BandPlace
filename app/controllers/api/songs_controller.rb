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

    def update
        @song = Song.find(params[:id])
        if @song.update(name: params[:song][:name], lyrics: params[:song][:lyrics])
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def destroy 
        @song = Song.find(params[:id])
        if @song.destroy 
            render :show 
        else 
            render json: @song.errors.full_messages, status: 422
        end
    end

    private 

    def song_params
        params[:song].permit(:name, :lyrics, :track, :release_id, :track_audio)
    end
    
end
