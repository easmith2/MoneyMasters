var React = require('react');
var Transaction = require('./Transaction.react');

var List = React.createClass({
  render: function() {
    return (
      <table>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Credit</th>
          <th>Debit</th>
          <th>Memo</th>
          <th>Budget</th>
          <th>Category</th>
        </tr>
        {this._buildItems()}
      </table>
    );
  },

  _buildItems: function() {
    return this.props.transactions.map(function(item) {
      return <Transaction data={item} key={item.id} />
    });
  }
});

module.exports = List;
