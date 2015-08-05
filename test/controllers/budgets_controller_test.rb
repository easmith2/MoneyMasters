require 'test_helper'

class BudgetsControllerTest < ActionController::TestCase
  def setup
    @budget = budgets(:january)
    @user = users(:david)
    @category = categories(:rent)
  end

  test 'creates with valid attributes and redirects' do
    skip
    # assert_difference('Budget.count', 1) do
    #   post :create, format: json,
    #                 user_id: @user.id,
    #                 budget: {
    #                   title: 'ThreeBudgeteers',
    #                   start_date: 2015-03-14,
    #                   end_date: 2015-04-14,
    #                   categories: [{category_id: @category.id, beginning_balance: 0, allocation: 50}]
    #                 }
    # end
    # assert_redirected_to budget_path(assigns(:budget))
  end

  test 'does not create with invalid attributes' do
    skip
    # assert_no_difference('Budget.count') do
    #   post :create, user_id: @budget.user.id, budget: { title: '' }
    # end
  end

  test 'updates with valid attributes and redirects' do
    skip
    # old_title = @budget.title
    # new_title = "CarpeDime"
    # patch :update, user_id: @budget.user.id, id: @budget, budget: { title: new_title }
    # @budget.reload
    # refute @budget.title == old_title
    # assert_equal new_title, @budget.title
    # assert_redirected_to budget_path(@budget)
  end

  test 'does not update with invalid attributes' do
    skip
  end

end
