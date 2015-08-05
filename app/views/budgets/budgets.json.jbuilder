json.array! @budgets.each do |budget|
  json.title        budget.title
  json.start_date   budget.start_date
  json.end_date     budget.end_date
  json.categories   budget.categories
  json.transactions budget.transactions
end
