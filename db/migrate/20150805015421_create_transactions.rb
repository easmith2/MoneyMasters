class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.date :occurred_on, null: false
      t.string :payee, null: false
      t.integer :credit, null: false, default: 0
      t.integer :debit, null: false, default: 0
      t.string :memo
      t.integer :budget_id
      t.integer :category_id
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
