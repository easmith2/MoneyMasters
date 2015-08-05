require 'test_helper'

class BudgetTest < ActiveSupport::TestCase
  def setup

    @budget = budgets(:january)

  end

  test 'the fixture is valid' do
    assert @budget.valid?
  end

  test 'is invalid without title' do
    @budget.title = nil
    refute @budget.valid?
    assert @budget.errors.keys.include?(:title)
  end

  test 'is invalid without start_date' do
    @budget.start_date = nil
    refute @budget.valid?
    assert @budget.errors.keys.include?(:start_date)
  end

  test 'is invalid without end_date' do
    @budget.end_date = nil
    refute @budget.valid?
    assert @budget.errors.keys.include?(:end_date)
  end

  test 'start_date must be a date' do
    @budget.start_date = 'worst month of the year'
    refute @budget.valid?
    assert @budget.errors.keys.include?(:start_date)
  end

  test 'end_date must be a date' do
    @budget.end_date = 'best month of the year'
    refute @budget.valid?
    assert @budget.errors.keys.include?(:end_date)
  end

  test 'belongs to a user' do
    assert_respond_to @budget, :user
    assert_instance_of User, @budget.user
  end

  test 'has many categories' do
    assert_respond_to @budget, :categories
    assert_instance_of Category, @budget.categories.new
  end

  test 'has many transactions' do
    assert_respond_to @budget, :transactions
    assert_instance_of Transaction, @budget.transactions.new
  end

end
