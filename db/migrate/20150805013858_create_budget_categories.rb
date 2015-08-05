class CreateBudgetCategories < ActiveRecord::Migration
  def change
    create_table :budget_categories do |t|
      t.integer :budget_id, null: false
      t.integer :category_id, null: false
      t.integer :allocation
      t.integer :beginning_balance

      t.timestamps null: false
    end

    add_index :budget_categories, [:budget_id, :category_id]
  end
end
