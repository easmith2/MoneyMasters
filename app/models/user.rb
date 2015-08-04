class User < ActiveRecord::Base
  has_many :budgets

  validates :username, presence: true
end
