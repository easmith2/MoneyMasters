class TransactionsController < ApplicationController
  def index
    if current_user
      respond_to do |format|
        format.html { render template: 'users/show' }
        format.json do
          @transactions = current_user.transactions.order(occurred_on: :desc)
          render status: 200
        end
        format.csv do
          @transactions = current_user.transactions.order(occurred_on: :desc)
          send_data @transactions.export_csv
        end
      end
    else
      redirect_to root_path
    end
  end

  def create
    @transaction = Transaction.new(transaction_params)
    respond_to do |format|
      if current_user
        if category = Category.find_by(title: params[:category])
          @transaction.category = category
          unless @transaction[:debit]
            @transaction[:debit] = 0
          end
          unless @transaction[:credit]
            @transaction[:credit] = 0
          end
          if @transaction.save
            format.json { render nothing: true, status: 201 }
          end
        else
          format.json { render json: @transaction.errors, status: 422 }
        end
      end
    end
  end

  def update
    @transaction = get_transaction
    respond_to do |format|
      if category = Category.find_by(title: params[:category])
        @transaction.category = category
        if @transaction.update_attributes(transaction_params)
          format.json { render nothing: true, status: 202 }
        end
      else
        format.json { render json: @transaction.errors, status: 422 }
      end
    end
  end

  def destroy
    @transaction = get_transaction
    @transaction.destroy
    render nothing: true, status: 200
  end

  def import

  end

private

  def get_transaction
    current_user.transactions.find(params[:id])
  end

  def transaction_params
    params.require(:transaction).permit(:user_id, :occurred_on, :payee, :memo, :budget, :category, :credit, :debit)
  end

end
