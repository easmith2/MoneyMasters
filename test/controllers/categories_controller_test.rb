require 'test_helper'

class CategoriesControllerTest < ActionController::TestCase

  def setup
    @user = users(:foo)
  end

  test 'GET #index returns positive status and categories belonging to user' do
    get :index, user_id: @user, format: :json
    assert_response 201
    json = JSON.parse(response.body)
    json.each do |category|
      assert_equal @user.id, category["user_id"]
    end
  end

  test 'GET #index returns 404 with invalid user_id' do

  end

end
