var React = require('react');
var Router = require('director').Router;
var request = require('superagent');
var Transactions = require('./transactions/Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    console.log('Getting initial state')
    this._initRouter();
    return {
      currentView: this._viewTransactionsIndex
    }
  },

  // componentWillMount: function() {
  // },

  _initRouter: function() {
    console.log('Initializing Router');
  //   var self = this;
  //   self.router = Router({
  //     '/'            : self._showUserBudget,
  //   });
  //   self.router.configure({ html5history: true });
  //   self.router.init();
  },

  // _navigate: function(href) {
  //   this.router.setRoute(href);
  // },

  _getData: function(url, callback) {
    console.log('Fetch Data active');
    request
      .get(url)
      .set('Accept', 'application/json')
      .end(callback);
  },

  _viewTransactionsIndex: function() {
    console.log('Getting all transaction data');
    this._getData('/users/1/transactions.json', this._setTransactionsIndex);
  },

  _setTransactionsIndex: function(err, res) {
    console.log('Setting State for: Transactions Index data and currentView');
    if (err) {
      window.alert('Something went wrong: ' + err);
      return;
    }
    this.setState({
      transactions : res.body,
      currentView  : this._buildTransactionsIndex
    });
  },

  _buildTransactionsIndex: function() {
    console.log('Building Transaction Index View');
    return (
      <Transactions transactions={this.state.transactions} createTransaction={this._createTransaction} updateTransaction={this._updateTransaction} deleteTransaction={this._deleteTransaction} />
    )
  },

  _createTransaction: function(data) {
    console.log('Creating new transaction');
    data["user_id"] = 1;
    request
      .post('/users/1/transactions/')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactionsIndex);
  },

  _updateTransaction: function(data) {
    console.log('Updating transaction', data.id);
    data["user_id"] = 1;
    request
      .patch('/users/1/transactions/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactionsIndex);
  },

  _deleteTransaction: function(transaction) {
    console.log('Deleting Transaction');
    console.log(transaction.id);
    request
      .del('/users/1/transactions/' + transaction.id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactionsIndex);
  },

  render: function() {
    console.log('Rendering App Class');
    var insert = this.state.currentView();
    return (
      <div className="app">
        { insert }
      </div>
    );
  }

});

module.exports = App;
