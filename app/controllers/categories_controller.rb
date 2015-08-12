class CategoriesController < ApplicationController

  def index
    respond_to do |format|
      format.html { render template: 'users/show' }
      format.json { @categories = current_user.categories.order(title: :asc) }
    end
  end

  def create
    @category = Category.new(category_params)
    respond_to do |format|
      if current_user.categories.find_by(title: @category.title) || @category.title == ""
        format.json { render nothing: true, status: 422 }
      else
        @category.user = current_user
        if @category.save
          format.json { render nothing: true, status: 201 }
        end
      end
    end
  end

  def update
    @category = get_category
    respond_to do |format|
      if params[:category][:title] != ""
        if @category.update_attributes(category_params)
          format.json { render nothing: true, status: 202 }
        end
      else
        format.json { render json: @category.errors, status: 422 }
      end
    end
  end

  def destroy
    @category = get_category
    @category.destroy
    render nothing: true, status: 200
  end

  private

  def category_params
    params.require(:category).permit(:title)
  end

  def get_category
    current_user.categories.find(params[:id])
  end
end
