class UsersController < ApplicationController

  def show
    if current_user
      @user = current_user
      respond_to do |format|
        format.html { render template: 'users/show'}
        format.json { render json: @user, status: 200 }
      end
    else
      redirect_to root_path
    end
  end

  def edit
    if current_user
      @user = current_user
    else
      redirect_to root_path
    end
  end

  def update
    @user = current_user
    respond_to do |format|
      if @user.update_attributes(user_params)
        format.html { render template: 'users/show' }
        format.json { render json: {}, status: 201 }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: 422 }
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :user_name, :avatar, :bank)
  end

end
