var React = require('react');

var Header = React.createClass({
  render: function() {
    console.log('Rendering app header');
    var currentUser = this.props.currentUser;
    return (
      <div className="app__header">
        <h1>Money Manager</h1>
        <a href={'/users/' + currentUser + '/profile'} onClick={this._handleProfileLink} >Profile</a>
        <a href={'/users/' + currentUser + '/budgets'} onClick={this._handleBudgetLink} >Budgets</a>
        <a href={'/users/' + currentUser + '/categories'} onClick={this._handleCategoriesLink} >Categories</a>
        <a href={'/users/' + currentUser + '/transactions'} onClick={this._handleTransactionsLink} >Transactions</a>
        <a href='/users/sign_out'>Log Out</a>
      </div>
    );
  },

  _handleProfileLink: function() {
    event.preventDefault();
    this.props.navigate('/users/' + this.props.currentUser + '/profile');
  },

  _handleBudgetLink: function() {
    event.preventDefault();
    this.props.navigate('/users/' + this.props.currentUser + '/budgets');
  },

  _handleCategoriesLink: function() {
    event.preventDefault();
    this.props.navigate('/users/' + this.props.currentUser + '/categories');
  },

  _handleTransactionsLink: function() {
    event.preventDefault();
    this.props.navigate('/users/' + this.props.currentUser + '/transactions');
  }

});

module.exports = Header;
