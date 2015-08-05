json.array! @transactions.each do |transaction|
  json.user_id transaction.user_id
  json.occured_on transaction.occured_on
  json.budget_id transaction.budget_id
  json.category_id transaction.category_id
  json.credit transaction.credit
  json.debit transaction.debit
  json.payee transaction.payee
  json.memo transaction.memo
end
