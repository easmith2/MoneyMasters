require 'test_helper'

class UserTransactionsTest < ActionDispatch::IntegrationTest
  def setup
    ActionController::Base.allow_forgery_protection = true
  end

  def teardown
    ActionController::Base.allow_forgery_protection = false
  end

  # test 'the transaction index loads' do
  #   visit '/users/1/transactions.json'
  #   assert page.has_selector?('[data-js="transactions-index"]')
  #   assert page.has_content?('Loading...')
  # end

  test 'creating a new transaction' do
    occurred_on = Date.today
    payee = Faker::Company.name
    credit = Faker::Number.between(1, 200)
    debit = 0
    memo = Faker::Lorem.words(3).join(" ")

    js do
      visit ('/users/1')
      fill_in 'Date', with: occurred_on
      fill_in 'Payee', with: payee
      fill_in 'Credit', with: credit
      fill_in 'Debit', with: debit
      fill_in 'Memo', with: memo
      click_on 'Submit'

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
