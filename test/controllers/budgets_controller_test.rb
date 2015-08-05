require 'test_helper'

class BudgetsControllerTest < ActionController::TestCase
  def setup
    @budget = budgets(:january)
  end

  test 'creates with valid attributes and redirects' do
    assert_difference('Budget.count', 1) do
      post :create, user: @budget.user.id, budget: { username: 'ThreeBudgeteers' }
    end
    assert_redirected_to budget_path(assigns(:budget))
  end

  test 'does not create with invalid attributes' do
    assert_no_difference('Budget.count') do
      post :create, budget: { username: '' }
    end
  end

  test 'updates with valid attributes and redirects' do
    old_username = @budget.username
    new_username = "CarpeDime"
    patch :update, id: @budget, budget: { username: new_username }
    @budget.reload
    refute @budget.username == old_username
    assert_equal new_username, @budget.username
    assert_redirected_to budget_path(@budget)
  end

  test 'does not update with invalid attributes' do
    skip
  end

end
