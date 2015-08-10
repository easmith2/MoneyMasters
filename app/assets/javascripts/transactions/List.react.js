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
            <th className="transactions__occurredOn">Date</th>
            <th className="transactions__budget">Budget</th>
            <th className="transactions__category">Category</th>
            <th className="transactions__payee">Payee</th>
            <th className="transactions__memo">Memo</th>
            <th className="transactions__credit">Credit</th>
            <th className="transactions__debit">Debit</th>
            <th className="transactions__actionTd">Action</th>
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
