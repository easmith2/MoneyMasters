var React = require('react');
var Router = require('director').Router;
var Budgets = require('./Budgets.react');
var Transactions = require('./Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    return {
      currentView: this._show_user_budget
    }
  },

  componentWillMount: function() {
    this._initRouter();
    // this.setState = {
    //   currentView: this.show_user_budget
    // }
  },

  // ._fetchTask: function() {
  //     request
  //       .get(url)
  //       .set('Accept', 'application/json')
  //       .end(this._handleFetch);
  //   },
  //
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
      '/'            : self._show_user_budget,
    });
    self.router.configure({ html5history: true });
    self.router.init();
  },

  _navigate: function(href) {
    this.router.setRoute(href);
  },

  _show_user_budget: function() {
    return (
      <div className="show_user_budget">
        <Budgets />
        <Transactions />
      </div>
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
