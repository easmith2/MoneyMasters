var React = require('react');
var Transaction = require('./Transaction.react');

var List = React.createClass({
  render: function() {
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Budget</th>
          <th>Category</th>
          <th>Payee</th>
          <th>Memo</th>
          <th>Credit</th>
          <th>Debit</th>
        </tr>
        {this._buildTransactionList()}
      </table>
    );
  },

  _buildTransactionList: function() {
    return this.props.transactions.map(function(transaction) {
      return <Transaction data={transaction} key={transaction.id} />
    });
  }
});

module.exports = List;
