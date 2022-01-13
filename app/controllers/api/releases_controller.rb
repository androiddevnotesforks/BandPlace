class Api::ReleasesController < ApplicationController

    def create 
        @release = Release.new(release_params)
        if @release.save
            @tracks = @release.songs
            render :show
        else
            render json: @release.errors.full_messages, status: 422
        end
    end

    def index
        @releases = Release.where(artist_id: params[:artist_id])
    end

    def show 
        @release = Release.find(params[:id])
        @tracks = @release.songs
    end

    def destroy 
    end

    private 

    def release_params
        params[:release].permit(:title, :description, :artist_id)
    end

end
