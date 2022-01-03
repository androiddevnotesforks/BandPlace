class Api::SessionsController < ApplicationController
    def create
        idString = params[:user][:idString]
        user = User.find_by_credentials(idString, params[:user][:password])
        if user 
            login!(user)
            redirect_to api_user_url(user.id)
        else
            render json: 'Something went wrong'
        end
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