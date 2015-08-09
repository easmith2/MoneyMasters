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
          <td><input className="transactions__budget" ref="budget" type="text" defaultValue={this.props.data.budget} /></td>
          <td><input className="transactions__category" ref="category" type="text" defaultValue={this.props.data.category} /></td>
          <td><input className="transactions__payee" ref="payee" type="text" defaultValue={this.props.data.payee} /></td>
          <td><input className="transactions__memo" ref="memo" type="text" defaultValue={this.props.data.memo} /></td>
          <td><input className="transactions__credit" ref="credit" type="text" defaultValue={this.props.data.credit} /></td>
          <td><input className="transactions__debit" ref="debit" type="text" defaultValue={this.props.data.debit} /></td>
          <td className="transactions__actionTd">
            <button className="transactions__saveEdit" onClick={this._handleSave}>Edit</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr onClick={this._handleEdit}>
          <td>{this.props.data.occurred_on}</td>
          <td>{this.props.data.budget}</td>
          <td>{this.props.data.category}</td>
          <td>{this.props.data.payee}</td>
          <td>{this.props.data.memo}</td>
          <td>{this.props.data.credit}</td>
          <td>{this.props.data.debit}</td>
          <td className="transactions__actionTd">
            <a className="transactions__delete" onClick={this._handleDelete}>
              <img src="/assets/delete.svg"></img>
              <div>Delete</div>
            </a>
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
      budget: this.refs.budget.getDOMNode().value.trim(),
      category: this.refs.category.getDOMNode().value.trim(),
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
