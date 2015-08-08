require 'test_helper'

class HomeControllerTest < ActionController::TestCase
include Devise::TestHelpers

  test 'GET #index renders template' do
    get :index
    assert_response :success
  end

end
