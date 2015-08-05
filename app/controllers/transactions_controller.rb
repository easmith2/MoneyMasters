class TransactionsController < ApplicationController
  def index
    if user = User.find_by(id: (params[:user_id]))
      respond_to do |format|
        format.json { @transactions = user.transactions }
      end
    else
      respond_to do |format|
        format.json { render nothing: true, status: 404 }
      end
    end
  end

end
