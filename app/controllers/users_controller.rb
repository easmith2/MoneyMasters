class UsersController < ApplicationController
  def index
    # respond_to do |format|
    #   format.html
    #   format.json { @users = User.all }
    # end
  end

  def create
    # @user = User.new(user_params)
    # respond_to do |format|
    #   if user.save
    #     format.json { render json: {}, status: 200 }
    #   else
    #     format.json { render json: @task.errors, status: 422 }
    #   end
    # end
  end



private
  def user_params
    params.require(:user).permit(:username)

end
