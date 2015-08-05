class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.json { render nothing: true, status: 200 }
      else
        format.json { render nothing: true, status: 422 }
      end
    end
  end



private
  def user_params
    params.require(:user).permit(:username)
  end
end
