var React = require('react');

var Form = React.createClass({
  componentWillUpdate: function() {
    this._clearInputs();
  },

  render: function() {
    return (
      <tr>
        <form>
          <td>
            <div>
              <input ref="occurred_on" id="occurred_on" placeholder="year/month/day"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="budget" id="budget" placeholder="budget"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="category" id="category" placeholder="category"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="payee" id="payee" placeholder="payee"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="memo" id="memo" placeholder="memo"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="credit" id="credit" placeholder="credit"/>
            </div>
          </td>
          <td>
            <div>
              <input ref="debit" id="debit" placeholder="debit"/>
            </div>
          </td>
          <td colSpan="2">
            <div>
              <button onClick={this._handleSubmit}>Submit</button>
            </div>
          </td>
        </form>
      </tr>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      occurred_on: this.refs.occurred_on.getDOMNode().value.trim(),
      budget_id: this.refs.budget.getDOMNode().value.trim(),
      category_id: this.refs.category.getDOMNode().value.trim(),
      payee: this.refs.payee.getDOMNode().value.trim(),
      memo: this.refs.memo.getDOMNode().value.trim(),
      credit: this.refs.credit.getDOMNode().value.trim(),
      debit: this.refs.debit.getDOMNode().value.trim(),
    };

    this.props.createTransaction(data);
  },

  _clearInputs: function() {
    var self = this;
    [ 'occurred_on', 'budget', 'category', 'payee', 'memo', 'credit', 'debit' ].forEach(function(ref) {
      self.refs[ref].getDOMNode().value = '';
    });
  }
});

module.exports = Form;
