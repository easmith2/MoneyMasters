var React = require('react');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    }
  },

  render: function() {
    var url;
    if (this.props.user.avatar) {
      url = this.props.user.avatar.url;
    } else {
      url = null;
    }
    if (this.state.isEditing) {
      return (
        <div className="profile">
          <img src={url}></img>
          <form onSubmit={this._saveEdit}>
            <div>Avatar:</div>
            <div><input ref="userAvatar" type="file" name="user[avatar]" id="user_avatar" /></div>
            <div>User Name</div>
            <div><input ref="userName" type="text" name="user[user_name]" id="user_name" defaultValue={this.props.user.user_name} /></div>
            <div>Email</div>
            <div><input ref="email" type="text" name="user[email]" defaultValue={this.props.user.email} /></div>
            <div>Bank</div>
            <div><input ref="bank" type="text" name="user[bank]" defaultValue={this.props.user.bank} /></div>
            <button>Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="profile__edit">
          <img src={url}></img>
          <div>User Name:</div>
          <div>{this.props.user.user_name}</div>
          <div>Email:</div>
          <div>{this.props.user.email}</div>
          <div>Bank:</div>
          <div>{this.props.user.bank}</div>
          <div className="profile__selectEdit" onClick={this._selectEdit}>Edit Profile</div>
        </div>
      )
    }
  },

  _selectEdit: function(e) {
    e.preventDefault();
    this.setState({
      isEditing: true
    });
  },

  _saveEdit: function(e) {
    e.preventDefault();
    this.props.updateProfile(e);
    this.setState({
      isEditing: false
    })
  }

});

module.exports = Profile;
