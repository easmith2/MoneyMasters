class HomeController < ApplicationController
  def index
    if user_signed_in?
      @current_user = current_user
    # else
    end
  end

end
