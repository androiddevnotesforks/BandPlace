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

    def search
        upper_query = params[:q].upcase;
        @releases = Release.where('UPPER(title) LIKE ?', '%' + upper_query + '%')
        render :index
    end

    def update
        @release = Release.find(params[:id])
        if @release.update(title: params[:release][:title], description: params[:release][:description], cover_image: params[:release][:cover_image])
                render :show
        else 
            render json: @release.errors.full_messages, status: 422
        end
    end

    def destroy 
        @release = Release.find(params[:id])
        if @release.destroy 
            render :show 
        else 
            render json: @release.errors.full_messages, status: 422
        end
    end

    private 

    def release_params
        params[:release].permit(:title, :description, :artist_id, :cover_image)
    end

end
