class Api::UsersController < ApplicationController
  
  def create 
    @user = User.new(user_params)
    if @user.save 
      login!(@user)
      redirect_to api_user_url(@user.id)
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params) 
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def search
    upper_query = params[:q].upcase;
    @users = User.where('UPPER(username) LIKE ? and is_artist = ?', '%' + upper_query + '%', 'true')
    render :index
  end

  private 

  def user_params
    params[:user].permit(:id, :email, :username, :password, :is_artist, :bio, :location, :homepage, :color_profile, :profile_image)
  end

end
