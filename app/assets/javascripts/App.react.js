var React = require('react');
var Router = require('director').Router;
var Budgets = require('./Budgets.react');
var Transactions = require('./transactions/Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    return {
      data: '',
      currentView: this._showUserTransactions
    }
  },

  componentWillMount: function() {
    this._initRouter();
  },

  _fetchData: function(url, callback) {
    request
      .get(url)
      .set('Accept', 'application/json')
      .end(this._handleFetch);
  },

  //   ._handleFetch: function() {
  //     if (err) {
  //       window.alert('OMGEEE');
  //       return;
  //     }
  //     this.setState({ items: res.body });
  //   },

  _initRouter: function() {
    var self = this;
    console.log('Initializing Router');
    self.router = Router({
      '/'            : self._showUserBudget,
    });
    self.router.configure({ html5history: true });
    self.router.init();
  },

  _navigate: function(href) {
    this.router.setRoute(href);
  },

  _showUserBudget: function() {
    this.setState({
      data       : JSON.parse('users/:user_id/budgets/index.json'),
      currentView: this._buildUserBudgetView
    });
    return (
      <div className="show_user_budget">
        <Budgets />
        <Transactions />
      </div>
    )
  },

  _showUserTransactions: function() {
    console.log('Displaying transactions index');
    this.setState({
      data       : JSON.parse('users/:user_id/transactions/index.json'),
      currentView: this._buildUserTransactionsView
    });
  },

  _buildUserTransactionsView: function() {
    var self = this;
    if(typeof(self.state.data) === "object") {
      console.log('Building transactions index view');
      return (
        <Transactions transactions={self.state.data} />
      )
    };
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
