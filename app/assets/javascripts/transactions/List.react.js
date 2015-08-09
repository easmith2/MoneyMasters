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
            <th>Action</th>
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
      return <Transaction data={transaction} updateTransaction={this.props.updateTransaction} deleteTransaction={this.props.deleteTransaction} key={transaction.id} />
    }.bind(this));
  }
});

module.exports = List;
