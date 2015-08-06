var React = require('react');

var Transaction = React.createClass({
  getInitialState: function() {
    return { isEditing: false };
  },

  render: function() {
    return this._buildRows();
  },

  _buildRows: function() {
    if (this.state.isEditing) {
      return (
        <tr>
          <td><input ref="occurred_on" type="text" defaultValue={this.props.data.occurred_on} /></td>
          <td><input ref="budget" type="text" defaultValue={this.props.data.budget_id} /></td>
          <td><input ref="category" type="text" defaultValue={this.props.data.category_id} /></td>
          <td><input ref="payee" type="text" defaultValue={this.props.data.payee} /></td>
          <td><input ref="memo" type="text" defaultValue={this.props.data.memo} /></td>
          <td><input ref="credit" type="text" defaultValue={this.props.data.credit} /></td>
          <td><input ref="debit" type="text" defaultValue={this.props.data.debit} /></td>
          <td>
            <button onClick={this._handleSave}>Save</button>
            <button onClick={this._handleDelete}>Delete</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.data.occurred_on}</td>
          <td>{this.props.data.budget_id}</td>
          <td>{this.props.data.category_id}</td>
          <td>{this.props.data.payee}</td>
          <td>{this.props.data.memo}</td>
          <td>{this.props.data.credit}</td>
          <td>{this.props.data.debit}</td>
          <td>
            <button onClick={this._handleEdit}>Edit</button>
            <button onClick={this._handleDelete}>Delete</button>
          </td>
        </tr>
      );
    }
  },

  _handleEdit: function() {
    event.preventDefault();
    this.setState({ isEditing: true })
  },

  _handleSave: function() {
    event.preventDefault();
    var data = {
      id: this.props.data.id,
      occurred_on: this.refs.occurred_on.getDOMNode().value.trim(),
      budget_id: this.refs.budget.getDOMNode().value.trim(),
      category_id: this.refs.category.getDOMNode().value.trim(),
      payee: this.refs.payee.getDOMNode().value.trim(),
      memo: this.refs.memo.getDOMNode().value.trim(),
      credit: this.refs.credit.getDOMNode().value.trim(),
      debit: this.refs.debit.getDOMNode().value.trim(),
    };
    this.props.updateTransaction(data);
    this.setState({ isEditing: false })
  },

  _handleDelete: function() {
    event.preventDefault();
    this.props.deleteTransaction(this.props.data);
  }

});

module.exports = Transaction;
