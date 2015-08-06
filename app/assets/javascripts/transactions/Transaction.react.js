var React = require('react');

var Transaction = React.createClass({
  _handleDelete: function() {
    event.preventDefault();
    this.props.deleteTransaction(this.props.data);
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.data.occurred_on}</td>
        <td>{this.props.data.budget_id}</td>
        <td>{this.props.data.category_id}</td>
        <td>{this.props.data.payee}</td>
        <td>{this.props.data.memo}</td>
        <td>{this.props.data.credit}</td>
        <td>{this.props.data.debit}</td>
        <td>Edit</td>
        <td>
          <button onClick={this._handleDelete}>Delete</button>
        </td>
      </tr>
    );
  },

});

module.exports = Transaction;
