var React = require('react');
var List = require('./List.react');
var Form = require('./Form.react');

var Transactions = React.createClass({
  render: function() {
    console.log('Rendering Transactions');
    return (
      <div>
        <List transactions={this.props.transactions} createTransaction={this.props.createTransaction} updateTransaction={this.props.updateTransaction} deleteTransaction={this.props.deleteTransaction} />
      </div>
    )
  }

});

module.exports = Transactions;
