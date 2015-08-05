require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  def setup
    @user = users(:david)
  end

  test 'GET #index' do
    get :index
    assert_equal [@user], assigns(:users)
    assert_response :success
  end

  test 'creates with valid attributes and redirects' do
    assert_difference('User.count', 1) do
      post :create, user: { username: 'ThreeBudgeteers' }
    end
    assert_redirected_to user_path(assigns(:user))
  end

  test 'renders new, does not create with invalid attributes' do
    assert_no_difference('User.count') do
      post :create, user: { username: '' }
    end
    assert_template :new # will we actually have a 'new' template?
  end

  test 'updates with valid attributes and redirects' do
    old_username = @user.username
    new_username = "CarpeDime"
    patch :update, id: @user, user: { username: new_username }
    @user.reload
    refute @user.username == old_username
    assert_equal new_username, @user.username
    assert_redirected_to user_path(@user)
  end

  test 'renders edit, does not update with invalid attributes' do
    skip
  end
end