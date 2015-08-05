class Budget < ActiveRecord::Base
  belongs_to :user
  has_many :budgetCategories
  has_many :categories, through: :budgetCategories
  has_many :transactions

  validates :title, presence: true
end
