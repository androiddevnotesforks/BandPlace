class Api::UsersController < ApplicationController
  
  def create 
    @user = User.new(user_params)
    # debugger
    if @user.save 
      login!(@user)
      redirect_to api_user_url(@user.id)
    else 
      render json: 'Something went wrong'
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private 

  def user_params
    params[:user].permit(:email, :username, :password, :is_artist)
  end

end
