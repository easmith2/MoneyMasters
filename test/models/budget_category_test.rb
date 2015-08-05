require 'test_helper'

class BudgetCategoryTest < ActiveSupport::TestCase
  def setup
    @rent = budget_categories(:rent)
    @food = budget_categories(:food)
  end

  test "fixture is valid" do
    assert @rent.valid?
    assert @food.valid?
  end


end
