class Category < ActiveRecord::Base
  belongs_to :user
  has_many :budgetCategories
  has_many :budgets, through: :budgetCategories
  has_many :transactions

end
