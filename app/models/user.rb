class User < ActiveRecord::Base
  has_many :budgets
  has_many :categories
  has_many :transactions

  validates :username, presence: true
end
