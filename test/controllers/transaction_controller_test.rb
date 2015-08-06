require 'test_helper'

class TransactionsControllerTest < ActionController::TestCase
  def setup
    @user = users(:david)
    @transaction = transactions(:one)
  end

  test 'GET #index returns positive status and items belonging to user' do
    get :index, user_id: @user, format: :json
    assert_response 200
    json = JSON.parse(response.body)
    json.each do |transaction|
      assert_equal @user.id, transaction["user_id"]
    end
  end

  test 'GET #index returns 404 with invalid user_id' do
    get :index, user_id: 7, format: :json
    assert_response 404
  end

  test 'update transaction when valid attributes submitted' do
    old_payee = @transaction.payee
    new_payee = 'Some New Vendor'
    patch :update, format: :json, user_id: @user, id: @transaction, transaction: { payee: new_payee }
    @transaction.reload
    refute @transaction.payee == old_payee
    assert_equal new_payee, @transaction.payee
    assert_response 202
  end

  test 'does not update transaction when invalid attributes submitted' do
    old_payee = @transaction.payee
    new_payee = ''
    patch :update, format: :json, user_id: @user, id: @transaction, transaction: { payee: new_payee }
    @transaction.reload
    refute @transaction.payee == new_payee
    assert_equal old_payee, @transaction.payee
    assert_response 422
  end

  test 'DELETE #destroy' do
    assert_difference('Transaction.count', -1) do
      delete :destroy, user_id: @user, id: @transaction
    end
    assert_response 200
  end
end
