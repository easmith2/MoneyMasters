 - _Transactions_
 - _Accounts_
 - _Users_
 - _Categories_
 - _Budget_

-----------------

### DATA

**Transaction**
 - [ ] has amount (integer, value in cents)
 - [ ] has date
 - [ ] has payee (or belongs to, if we're feeling ambitious?)
 - [ ] has memo
 - [ ] income/expense (boolean for either income or expense)
 - [ ] cleared (boolean)
 - [ ] belongs to a user
 - [ ] belongs to a category (no splits, for now)
 - [ ] belongs to an account

**Account**
 - [ ] has balance
 - [ ] has many transactions
 - [ ] belongs to a budget (and thus a user)

**User**
 - [ ] has budget (hard mode: has many budgets)
 - [ ] has many accounts
 - [ ] has many transactions

**Category**
 - [ ] belongs to a budget (and thus a user)
 - [ ] has many transactions
 - [ ] has budgeted amount
 - [ ] has current expenditure total (calculate programmatically based on transactions)

**Budget**
 - [ ] has many categories
 - [ ] has many accounts
 - [ ] belongs to a user (hard mode: has one admin/owner and many authorized users)

-----------------

### VIEWS

**Home**
 - index (login page, no access if not authorized)

**User**
 - index (nav avail to budget(s), accounts, user profile)
 - show (user profile)

**Budget**
 - show
   - nav avail to user/owner profile, accounts, reports
   - display:
     - categories,
     - budgeted amounts,
     - current expenditures,
     - remaining budgeted amount

**Accounts**
 - index
   - all transactions from all accounts shown
 - show
   - all transactions from selected account shown
