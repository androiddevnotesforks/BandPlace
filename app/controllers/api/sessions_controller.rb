class Api::SessionsController < ApplicationController
    def create
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            flash.alert = 'Nobody is logged in!'   
            render json: 'Nobody is logged in!', status: 404     
        end
    end
end