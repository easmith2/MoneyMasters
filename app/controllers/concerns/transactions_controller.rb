class TransactionsController < ApplicationController
  def index
    respond_to do |format|
      format.json { @transactions = Transaction.all }
    end
  end

end
