var React = require('react');
var Router = require('director').Router;
var request = require('superagent');
var Header = require('./Header.react');
var Profile = require('./profile/Profile.react');
var Categories = require('./categories/Categories.react');
var Transactions = require('./transactions/Transactions.react');

var App = React.createClass({
  getInitialState: function() {
    console.log('Getting initial state');
    console.log(window.location.pathname);
    var path = window.location.pathname.split('/');
    var currentUser = path[2];
    return {
      userId       : currentUser,
      transactions : '',
      currentView  : function() { return null }
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
      '/users/:user_id'              : self._viewTransactionsIndex,
      '/users/:user_id/transactions' : self._viewTransactionsIndex,
      '/users/:user_id/profile'      : self._viewProfile,
      '/users/:user_id/budgets'      : self._viewBudgetsIndex,
      '/users/:user_id/categories'   : self._viewCategoriesIndex
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


  _viewTransactionsIndex: function() {
    console.log('View Transactions activated');
    this._getData('/users/'+ this.state.userId + '/transactions.json', this._setTransactionsIndex);
  },

  _setTransactionsIndex: function(err, res) {
    console.log('Setting State for: Transactions Index');
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
      .post('/users/'+ this.state.userId + '/transactions')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(function(err, res) {
        if (err) {
          window.alert("Something went wrong: \n" + res.error.message );
          return;
        } else {
          this._viewTransactionsIndex();
        }
      }.bind(this));
  },

  _updateTransaction: function(data) {
    console.log('Updating Transaction: ', data.id);
    data["user_id"] = this.state.userId;
    request
      .patch('/users/'+ this.state.userId + '/transactions/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(function(err, res) {
        if (err) {
          window.alert("Something went wrong: \n" + res.error.message );
          return;
        } else {
          this._viewTransactionsIndex();
        }
      }.bind(this));
  },

  _deleteTransaction: function(transaction) {
    console.log('Deleting Transaction: ' + transaction.id);
    request
      .del('/users/'+ this.state.userId + '/transactions/' + transaction.id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewTransactionsIndex);
  },


  _viewCategoriesIndex: function() {
    console.log('View Categories activated');
    this._getData('/users/'+ this.state.userId + '/categories.json', this._setCategoriesIndex);
  },

  _setCategoriesIndex: function(err, res) {
    console.log('Setting State for: Categories Index');
    if (err) {
      window.alert('Something went wrong: ' + err);
      return;
    }
    this.setState({
      categories   : res.body,
      currentView  : this._buildCategoriesIndex
    });
  },

  _buildCategoriesIndex: function() {
    console.log('Building Categories Index View');
    return (
      <Categories categories={this.state.categories} createCategory={this._createCategory}
      deleteCategory={this._deleteCategory} updateCategory={this._updateCategory}/>
    )
  },

  _createCategory: function(data) {
    console.log('Creating new category');
    data["user_id"] = this.state.userId;
    request
      .post('/users/'+ this.state.userId + '/categories')
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(function(err, res) {
        if (err) {
          window.alert("Something went wrong: \n" + res.error.message );
          return;
        } else {
          this._viewCategoriesIndex();
        }
      }.bind(this));
  },

  _deleteCategory: function(category) {
    console.log('Deleting Category: ' + category.id);
    request
      .del('/users/'+ this.state.userId + '/categories/' + category.id)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewCategoriesIndex);
  },

  _updateCategory: function(data) {
    console.log('Updating Category: ', data.id);
    data["user_id"] = this.state.userId;
    request
      .patch('/users/'+ this.state.userId + '/categories/' + data.id)
      .send(data)
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(function(err, res) {
        if (err) {
          window.alert("Something went wrong: \n" + res.error.message );
          return;
        } else {
          this._viewCategoriesIndex();
        }
      }.bind(this));
  },


  _viewProfile: function() {
    console.log('View Profile activated');
    this._getData('/users/'+ this.state.userId + '.json', this._setProfile);
  },

  _setProfile: function(err, res) {
    console.log('Setting State for: Profile');
    if (err) {
      window.alert('Something went wrong: ' + err);
      return;
    }
    this.setState({
      user   : res.body,
      currentView  : this._buildProfile
    });
  },

  _buildProfile: function() {
    console.log('Building Profile View');
    return (
      <Profile user={this.state.user} updateProfile={this._updateProfile}/>
    )
  },

  _updateProfile: function(e) {
    console.log('Updating User Profile');
    var fd = new FormData(e.target);
    request
      .patch('/users/' + this.state.userId)
      .set('Accept', 'application/json')
      .send(fd)
      .set('X-CSRF-Token', document.querySelector('meta[name="csrf-token"]').content)
      .end(this._viewProfile);
  },


  _viewBudgetsIndex: function() {
    console.log('View Budgets activated');
  },


});

module.exports = App;
