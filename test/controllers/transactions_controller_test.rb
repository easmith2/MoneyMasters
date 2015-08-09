require 'test_helper'

class TransactionsControllerTest < ActionController::TestCase
  def setup
    @user = users(:foo)
    @transaction = transactions(:one)
    sign_in :user, @user
  end

  test 'GET #index returns transactions belonging to an authenticated user' do
    get :index, user_id: @user, format: :json
    json = JSON.parse(response.body)
    json.each do |transaction|
      assert_equal @user.id, transaction["user_id"]
    end
    assert_response 200
  end

  test 'GET #index redirects to login with unauthorized user' do
    sign_out :user
    get :index, user_id: -7, format: :json
    assert_redirected_to root_path
  end

  test 'update transaction when valid attributes submitted' do
    old_payee = @transaction.payee
    new_payee = 'Some New Vendor'
    patch :update, format: :json,
                   user_id: @user,
                   category: @transaction.category.title,
                   id: @transaction,
                   transaction: { payee: new_payee }
    @transaction.reload
    refute @transaction.payee == old_payee
    assert_equal new_payee, @transaction.payee
    assert_response 202
  end

  # test 'does not update transaction when invalid attributes submitted' do
  #   old_payee = @transaction.payee
  #   new_payee = nil
  #   patch :update, format: :json,
  #                  user_id: @user,
  #                  category: @transaction.category.title,
  #                  id: @transaction,
  #                  transaction: { payee: new_payee }
  #   @transaction.reload
  #   refute @transaction.payee == new_payee
  #   assert_equal old_payee, @transaction.payee
  #   assert_response 422
  # end

  test 'DELETE #destroy' do
    assert_difference('Transaction.count', -1) do
      delete :destroy, user_id: @user, id: @transaction
    end
    assert_response 200
  end
end
