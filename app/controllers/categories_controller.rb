class CategoriesController < ApplicationController

  def index
    if current_user
      respond_to do |format|
        format.html { redirect_to user_path(current_user) }
        format.json { @categories = current_user.categories.order(title: :asc) }
      end
    else
      redirect_to root_path
    end
  end

  def create
  end

  def update
  end

  def destroy
  end

end
