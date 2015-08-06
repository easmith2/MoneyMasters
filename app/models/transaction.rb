class Transaction < ActiveRecord::Base
  belongs_to :user
  belongs_to :budget
  belongs_to :category

  validates :occurred_on, :payee, :credit, :debit, :user_id, presence: true
  validates :credit, :debit, numericality: {greater_than_or_equal_to: 0}
end
