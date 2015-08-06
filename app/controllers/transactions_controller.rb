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

  def create
    @transaction = Transaction.new(transaction_params)
    unless @transaction[:debit]
      @transaction[:debit] = 0
    end
    unless @transaction[:credit]
      @transaction[:credit] = 0
    end
    respond_to do |format|
      if @transaction.save
        format.json { render nothing: true, status: 201}
      else
        format.json { render json: @transaction.errors, status: 422}
      end
    end
  end

  def destroy
    @transaction = get_transaction
    @transaction.destroy
    render nothing: true, status: 200
  end

private

  def get_transaction
    Transaction.find(params[:id])
  end

  def transaction_params
    params.require(:transaction).permit(:user_id, :occurred_on, :payee, :memo, :budget_id, :category_id, :credit, :debit)
  end

end
