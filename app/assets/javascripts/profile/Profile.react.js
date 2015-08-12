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
          <form className="profile__edit" onSubmit={this._saveEdit}>
            <div className="profile__detail">
              <div>Avatar:</div>
              <input ref="userAvatar" type="file" name="user[avatar]" id="user_avatar" />
            </div>
            <div className="profile__detail">
              <div>User Name</div>
              <input ref="userName" type="text" name="user[user_name]" id="user_name" defaultValue={this.props.user.user_name} />
            </div>
            <div className="profile__detail">
              <div>Email</div>
              <input ref="email" type="text" name="user[email]" defaultValue={this.props.user.email} />
            </div>
            <div className="profile__detail">
              <div>Bank</div>
              <input ref="bank" type="text" name="user[bank]" defaultValue={this.props.user.bank} />
            </div>
            <button>Submit</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="profile">
          <img src={url}></img>
          <div className="profile__show">
            <div className="profile__detail">
              <div>User Name:</div>
              <div>{this.props.user.user_name}</div>
            </div>
            <div className="profile__detail">
              <div>Email:</div>
              <div>{this.props.user.email}</div>
            </div>
            <div className="profile__detail">
              <div>Bank:</div>
              <div>{this.props.user.bank}</div>
            </div>            
            <div className="profile__selectEdit" onClick={this._selectEdit}>Edit Profile</div>
          </div>
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
