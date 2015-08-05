var React = require('react');
var Router = require('director').Router;
var request = require('superagent');
var Transactions = require('./transactions/Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    console.log('Getting initial state')
    return {
      currentView: this._viewTransactionsIndex
    }
  },

  // componentWillMount: function() {
    // this._initRouter();
  // },

    // _initRouter: function() {
    //   var self = this;
    //   console.log('Initializing Router');
    //   self.router = Router({
    //     '/'            : self._showUserBudget,
    //   });
    //   self.router.configure({ html5history: true });
    //   self.router.init();
    // },
    //
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
    console.log('Setting State for: Transactions Index data and currentView')
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
      <Transactions transactions={this.state.transactions} />
    )
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
