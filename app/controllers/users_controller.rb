class UsersController < ApplicationController

  def show
    binding.pry
    @user = current_user
  end

  def destroy
    binding.pry
    session[:user_id] = nil
    current_user
    redirect_to root_path
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to user_path(user.id)
    else
      redirect_to new_user_registration_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
