5.times do
  @user = User.create!(
                       email: Faker::Internet.email,
                       password: 'password1',
                       password_confirmation: 'password1'
                       )

  10.times do
    cat = Category.create!(
                           title: Faker::Commerce.department(1, true),
                           user: @user
                          )
  end

  10.times do
    d = Transaction.create!(
                            occurred_on: Faker::Time.backward(10, :evening),
                            category: @user.categories.sample,
                            payee: Faker::Company.name,
                            memo: Faker::Company.bs,
                            credit: 0,
                            debit: Faker::Number.between(1, 200),
                            user: @user
                            )
  end

  5.times do
    c = Transaction.create!(
                            occurred_on: Faker::Time.backward(10, :evening),
                            category: @user.categories.sample,
                            payee: Faker::Company.name,
                            memo: Faker::Company.bs,
                            credit: Faker::Number.between(1, 200),
                            debit: 0,
                            user: @user
                            )
  end


end
