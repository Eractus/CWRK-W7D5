class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      redirect_to api_user(user)
    else
      render json: ['Invalid Credentials'], status: 404 
    end
  end

  def destroy
    @user = User.find_by(session_token: session[:session_token])
    if @user
      @user.log_out
      render json: {}
    else
      render json: ['RESPONSE ABOUTR INVALID LOGOUT'], status: 404
      # flash.now[:errors] = error.status
      # How Can We Destory What Was Never There

    end
  end
end
