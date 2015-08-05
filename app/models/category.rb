class Category < ActiveRecord::Base
  belongs_to :user
  has_many :budget_categories
  has_many :budgets, through: :budget_categories
  has_many :transactions

end
