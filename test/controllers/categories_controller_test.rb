require 'test_helper'

class CategoriesControllerTest < ActionController::TestCase

  def setup
    @user = users(:foo)
    sign_in :user, @user
  end

  test 'GET #index returns positive status and categories belonging to user' do
    get :index, user_id: @user, format: :json
    assert_response 200
    json = JSON.parse(response.body)
    categories = @user.categories.map { |c| c.id }
    json.each do |category|
      assert_includes categories, category["id"]
    end
  end

  test 'GET #index redirects to login with unauthorized user' do
    sign_out :user
    get :index, user_id: @user, format: :json
    assert_redirected_to root_path
  end

  test 'POST #create works with valid attributes' do
    assert_difference('Category.count', 1) do
      post :create, user_id: @user, category: {title: "test"}, format: :json
      assert_response 201
    end
  end

  test 'POST #create does not work with invalid attributes' do
    assert_no_difference('Category.count') do
      post :create, user_id: @user, category: {title: ""}, format: :json
      assert_response 422
    end
  end

  test 'POST #create will not create a duplicated category title' do
    t = @user.categories[0].title
    assert_no_difference('Category.count') do
      post :create, user_id: @user, category: {title: t}, format: :json
      assert_response 422
    end
  end

  test 'POST #create does not work with unauthorized user' do
    sign_out :user
    assert_no_difference('Category.count') do
      post :create, user_id: @user, category: {title: "test"}, format: :json
      assert_response 401
    end
  end

  test 'PATCH #update works with valid attributes' do
    patch :update, user_id: @user, id: @user.categories[0], category: {title: "test"}, format: :json
    assert_response 202
  end

  test 'PATCH #update does not work with invalid attributes' do
    patch :update, user_id: @user, id: @user.categories[0], category: {title: ""}, format: :json
    assert_response 422
  end

  test 'PATCH #update does not work with unauthorized user' do
    cat_id = @user.categories[0].id
    sign_out :user
    patch :update, user_id: @user, id: cat_id, category: {title: "test"}, format: :json
    assert_response 401
  end

  test 'DELETE #destroy removes a category from the DB' do
    assert_difference('Category.count', -1) do
      delete :destroy, user_id: @user, id: @user.categories[0]
      assert_response 200
    end
  end

  test 'DELETE #destroy does not work with unauthorized user' do
    cat_id = @user.categories[0].id
    sign_out :user
    assert_no_difference('Category.count') do
      delete :destroy, user_id: @user, id: cat_id
      assert_response 401
    end
  end

end
