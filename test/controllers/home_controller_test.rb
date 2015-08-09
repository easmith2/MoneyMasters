require 'test_helper'

class HomeControllerTest < ActionController::TestCase

  test 'GET #index renders template' do
    get :index
    assert_response :success
  end

end
