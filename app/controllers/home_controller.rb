class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: :index

  def index
    if user_signed_in?
      @current_user = current_user
      redirect_to user_path(current_user)
    end
  end

end
