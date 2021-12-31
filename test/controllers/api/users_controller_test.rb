require "test_helper"

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get api::sessionscontroller" do
    get api_users_api::sessionscontroller_url
    assert_response :success
  end
end
