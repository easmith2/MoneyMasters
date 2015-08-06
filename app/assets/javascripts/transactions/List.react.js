var React = require('react');
var Form = require('./Form.react');
var Transaction = require('./Transaction.react');

var List = React.createClass({
  render: function() {
    console.log('Creating transaction list');
    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Budget</th>
            <th>Category</th>
            <th>Payee</th>
            <th>Memo</th>
            <th>Credit</th>
            <th>Debit</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <Form createTransaction={this.props.createTransaction} />
          {this._buildTransactionList()}
        </tbody>
      </table>
    );
  },

  _buildTransactionList: function() {
    return this.props.transactions.map(function(transaction) {
<<<<<<< 7bca3dedb9fee9587f54cf22a78667fad0b80f69
      return <Transaction data={transaction} deleteTransaction={this.props.deleteTransaction} key={transaction.payee + transaction.id} />
=======
      return <Transaction data={transaction} updateTransaction={this.props.updateTransaction} key={transaction.id} />
>>>>>>> transaction edit functionality added to the transactions table
    }.bind(this));
  }
});

module.exports = List;
