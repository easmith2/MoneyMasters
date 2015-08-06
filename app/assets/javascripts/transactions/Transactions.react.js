var React = require('react');
var List = require('./List.react');
var Form = require('./Form.react');

var Transactions = React.createClass({
  render: function() {
    console.log('Rendering Transactions');
    return (
      <div>
        <List transactions={this.props.transactions} deleteTransaction={this.props.deleteTransaction} createTransaction={this.props.createTransaction} />
      </div>
    )
  }

});

module.exports = Transactions;
