require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = users(:one)
    @budget = budgets(:one)
  end

  test 'the fixture is valid' do
    assert @user.valid?
  end

  test 'is invalid without a username' do
    @user.username = nil
    refute @user.valid?
    assert @user.errors.keys.include?(:username)
  end

  test 'has many budgets' do
    assert_respond_to @user, :budgets
    assert_instance_of Budget, @user.budgets.new
  end



end
