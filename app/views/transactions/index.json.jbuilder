json.array! @transactions.each do |transaction|
  json.id transaction.id
  json.user_id transaction.user_id
  json.occurred_on transaction.occurred_on
  json.budget_id transaction.budget_id
  if transaction.category
    json.category transaction.category.title
  else
    json.category nil
  end
  json.credit transaction.credit
  json.debit transaction.debit
  json.payee transaction.payee
  json.memo transaction.memo
end
