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
          <td><input className="transactions__occurredOn" ref="occurred_on" type="text" defaultValue={this.props.data.occurred_on} /></td>
          <td><input className="transactions__budget" ref="budget" type="text" defaultValue={this.props.data.budget_id} /></td>
          <td><input className="transactions__category" ref="category" type="text" defaultValue={this.props.data.category_id} /></td>
          <td><input className="transactions__payee" ref="payee" type="text" defaultValue={this.props.data.payee} /></td>
          <td><input className="transactions__memo" ref="memo" type="text" defaultValue={this.props.data.memo} /></td>
          <td><input className="transactions__credit" ref="credit" type="text" defaultValue={this.props.data.credit} /></td>
          <td><input className="transactions__debit" ref="debit" type="text" defaultValue={this.props.data.debit} /></td>
          <td>
            <button className="transactions__saveEdit" onClick={this._handleSave}>Save</button>
            <button className="transactions__delete" onClick={this._handleDelete}>Delete</button>
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
            <button className="transactions__edit" onClick={this._handleEdit}>Edit</button>
            <button className="transactions__delete" onClick={this._handleDelete}>Delete</button>
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
