class Transaction < ActiveRecord::Base
  belongs_to :user
  belongs_to :budget
  belongs_to :category

  validates :occurred_on, :payee, :credit, :debit, :user_id, presence: true
  validates :credit, :debit, numericality: {greater_than_or_equal_to: 0}

  def self.export_csv
    CSV.generate do |csv|
      csv << ['Date', 'Budget', 'Category', 'Payee', 'Credit', 'Debit', 'Memo']
      all.each do |transaction|
        transaction.budget == nil ? b = "(No Budget Selected)" : b = transaction.budget.title
        transaction.category == nil ? c = "(No Category Selected)" : c = transaction.category.title
        transaction.memo == nil ? m = "(No Memo Entered)" : m = transaction.memo
        row = [
                transaction.occurred_on.strftime,
                b,
                c,
                transaction.payee,
                transaction.credit,
                transaction.debit,
                m
              ]
        csv << row
      end
    end
  end
end
