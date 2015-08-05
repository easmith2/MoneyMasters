user = User.create(username: Faker::Internet.user_name);

10.times do
  d = Transaction.create!(
                            occurred_on: Faker::Time.backward(10, :evening),
                            payee: Faker::Company.name,
                            credit: 0,
                            debit: Faker::Number.between(1, 200),
                            user: user
                          )
end

5.times do
  c = Transaction.create!(
                              occurred_on: Faker::Time.backward(10, :evening),
                              payee: Faker::Company.name,
                              credit: Faker::Number.between(1, 200),
                              debit: 0,
                              user: user
                            )
end
