var React = require('react');

var Transaction = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.data.occurred_on}</td>
        <td>{this.props.data.payee}</td>
        <td>{this.props.data.credit}</td>
        <td>{this.props.data.debit}</td>
        <td>{this.props.data.memo}</td>
        <td>{this.props.data.budget_id}</td>
        <td>{this.props.data.category_id}</td>
      </tr>
    );
  }
});

module.exports = Transaction;
