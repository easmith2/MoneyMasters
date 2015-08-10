require 'test_helper'

class UserTransactionsTest < ActionDispatch::IntegrationTest
  def setup
    ActionController::Base.allow_forgery_protection = true
  end

  def teardown
    ActionController::Base.allow_forgery_protection = false
  end

  test 'existing user adds a transaction' do
    user = 'foo@bar.foo'
    password = 'password1'
    js do
      visit('/')
      click_on 'Log In'
      fill_in 'user_email', with: user
      fill_in 'user_password', with: password
      click_on 'Enter'

      occurred_on = Date.today
      category = 'food'
      payee = Faker::Company.name
      credit = Faker::Number.between(1, 200)
      debit = 0
      memo = Faker::Lorem.words(3).join(" ")

      js do
        fill_in 'occurred_on', with: occurred_on
        fill_in 'category', with: category
        fill_in 'payee', with: payee
        fill_in 'credit', with: credit
        fill_in 'debit', with: debit
        fill_in 'memo', with: memo
        click_on 'Add New'

        within 'table' do
          assert page.has_content?(occurred_on)
          assert page.has_content?(payee)
          assert page.has_content?(credit)
          assert page.has_content?(debit)
          assert page.has_content?(memo)
        end
      end
    end
  end
end
