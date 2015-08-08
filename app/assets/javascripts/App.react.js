var React = require('react');
var Router = require('director').Router;
var request = require('superagent');
var Header = require('./Header.react');
var Transactions = require('./transactions/Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    console.log('Getting initial state');
    console.log(window.location.pathname);
    var path = window.location.pathname.split('/');
    var currentUser = path[2];
    return {
      userId : currentUser,
      currentView: function() { return null }
    }
  },

  componentWillMount: function() {
    this._initRouter();
  },

  componenDidMount: function() {
    console.log('Setting route to: ' + window.location.pathname);
    this._navigate(window.location.pathname);
  },

  render: function() {
    console.log('Rendering App Class');
    var insert = this.state.currentView();
    return (
      <div className="app">
        <Header navigate={this._navigate} currentUser={this.state.userId} />
        { insert }
      </div>
    );
  },

  _initRouter: function() {
    console.log('Initializing Router');
    var self = this;
    self.router = Router({
      '/users/:user_id'              : self._viewTransactions,
      '/users/:user_id/transactions' : self._viewTransactions,
      '/users/:user_id/profile'      : self._viewProfile,
      '/users/:user_id/budgets'      : self._viewBudgets,
      '/users/:user_id/categories'   : self._viewCategories
    });
    self.router.configure({ html5history: true });
    self.router.init();
  },

  _navigate: function(href) {
    this.router.setRoute(href);
  },

  _getData: function(url, callback) {
    console.log('Fetch Data active');
    request
      .get(url)
      .set('Accept', 'application/json')
      .end(callback);
  },

  _viewTransactions: function() {
    console.log('View Transactions activated');
    window.history.pushState(null, null, '/users/' + this.state.userId + 'transactions');
    this._getData('/users/'+ this.state.userId + '/transactions.json', this._setTransactionsIndex);
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
    data["user_id"] = this.state.userId;
    request
      .post('/users/'+ this.state.userId + '/transactions/')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactions);
  },

  _updateTransaction: function(data) {
    console.log('Updating transaction', data.id);
    data["user_id"] = this.state.userId;
    request
      .patch('/users/'+ this.state.userId + '/transactions/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactions);
  },

  _deleteTransaction: function(transaction) {
    console.log('Deleting Transaction');
    console.log(transaction.id);
    request
      .del('/users/'+ this.state.userId + '/transactions/' + transaction.id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactions);
  },

  _viewProfile: function() {
    console.log('View Profile activated');
  },

  _viewBudgets: function() {
    console.log('View Budgets activated');
  },

  _viewCategories: function() {
    console.log('View Categories activated');
  }

});

module.exports = App;
