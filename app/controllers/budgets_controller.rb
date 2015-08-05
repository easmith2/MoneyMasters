class BudgetsController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { @budgets = Budget.all }
    end
  end

  def show
    respond_to do |format|
      @budget = get_budget
      format.json { @budget }
    end
  end

  def create
  end

  private

  def get_budget
    Budget.find(params[:id])
  end

  def budget_params
  params.require(:budget).permit(:title, :start_date, :end_date)
end

end
