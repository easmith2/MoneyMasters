var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="occurred_on">Date:</label>
          <input ref="occurred_on" id="occurred_on" />
        </div>
        <div>
          <label htmlFor="payee">Payee:</label>
          <input ref="payee" id="payee" />
        </div>
        <div>
          <label htmlFor="credit">Credit:</label>
          <input ref="credit" id="credit" />
        </div>
        <div>
          <label htmlFor="debit">Debit:</label>
          <input ref="debit" id="debit" />
        </div>
        <div>
          <label htmlFor="memo">Memo:</label>
          <input ref="memo" id="memo" />
        </div>
        <div>
          <label htmlFor="budget">Budget:</label>
          <input ref="budget" id="budget" />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input ref="category" id="category" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      // user_id:
      occurred_on: this.refs.occurred_on.getDOMNode().value.trim(),
      payee: this.refs.payee.getDOMNode().value.trim(),
      credit: this.refs.credit.getDOMNode().value.trim(),
      debit: this.refs.debit.getDOMNode().value.trim(),
      memo: this.refs.memo.getDOMNode().value.trim(),
      budget_id: this.refs.budget.getDOMNode().value.trim(),
      category_id: this.refs.category.getDOMNode().value.trim()
    };

    this.props.createTransaction(data);
  }
});

module.exports = Form;
