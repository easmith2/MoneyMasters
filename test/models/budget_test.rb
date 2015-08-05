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

  test 'belongs to a user' do
    assert_respond_to @budget, :user
    assert_instance_of User, @budget.user
  end

end
