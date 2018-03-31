class Api::UsersController < ApplicationController
  def create
    @user = User.new()

    if @user.save
      log_in(@user)
      redirect_to api_user_url(@user)
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params(params)
    params.require(:user).permit(:username, :password)
  end
end

#username: params[:user][:username], password: params[:user][:password]
