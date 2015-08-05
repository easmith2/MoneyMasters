var React = require('react');
var List = require('./List.react');
// var Form = require('./Form.react');

var Transactions = React.createClass({
  render: function() {
    console.log('Rendering Transactions')
    return (
      <div>
        <List transactions={this.props.transactions} />
      </div>
    );
  },
  // <Form createTransaction={this._createTransaction} />

  // _createTransaction: function() {
    // request
    //   .post('/users/:user_id/transactions')
    //   .send(data)
    //   .set('Accept', 'application/json')
    //   .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
    //   .end(this._handleCreate);
  // }

  // _handleFetch: function(err, res) {
  //   if (err) { console.log(err.response); return; }
  //   this.setState({ items: res.body });
  // },

  // _handleCreate: function(err, res) {
  //   if (err) { console.log(err.response); return; }
  //   // this._fetchTransactions();
  // }

});

module.exports = Transactions;
