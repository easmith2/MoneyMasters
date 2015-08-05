require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  def setup
    @user = users(:david)
  end

  test 'creates with valid attributes and redirects' do
    assert_difference('User.count', 1) do
      post :create, format: :json, user: { username: 'ThreeBudgeteers' }
    end
    assert_response 200
  end

  test 'does not create with invalid attributes' do
    assert_no_difference('User.count') do
      post :create, format: :json, user: { username: '' }
    end
  end

  test 'updates with valid attributes and redirects' do
    skip
    # old_username = @user.username
    # new_username = "CarpeDime"
    # patch :update, id: @user, user: { username: new_username }
    # @user.reload
    # refute @user.username == old_username
    # assert_equal new_username, @user.username
    # assert_redirected_to user_path(@user)
  end

end
