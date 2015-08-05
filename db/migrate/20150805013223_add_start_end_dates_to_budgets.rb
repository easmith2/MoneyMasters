class AddStartEndDatesToBudgets < ActiveRecord::Migration
  def change
    add_column :budgets, :start_date, :date, null: false
    add_column :budgets, :end_date, :date, null: false
  end
end
