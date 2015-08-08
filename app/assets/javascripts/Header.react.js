var React = require('react');

var Header = React.createClass({
  render: function() {
    console.log('Rendering app header');
    return (
      <div className="app__header">
        <a href={'/users/' + this.props.currentUser + '/profile'} onClick={this._handleProfileLink}>Profile</a>
        <a>Budgets</a>
        <a>Categories</a>
        <a>Log Out</a>
      </div>
    );
  },

  _handleProfileLink: function() {
    event.preventDefault();
    this.props.navigate('/users/' + this.props.currentUser + '/profile');
  }

});

module.exports = Header;
