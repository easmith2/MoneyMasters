var React = require('react');

var Category = React.createClass({
  getInitialState: function() {
    return { isEditing: false };
  },

  render: function() {
    return this._buildDiv();
  },

  _buildDiv: function() {
    if (this.state.isEditing) {
      return (
        <div>
          <input className="category__title" ref="title" type="text" defaultValue={this.props.data.title} />
          <button className="transactions__saveEdit" onClick={this._handleSave}>Save</button>
        </div>
      );
    } else {
      return (
        <div onClick={this._handleEdit}>
          {this.props.data.title}
          <a className="transactions__delete" onClick={this._handleDelete}>
            <img src="/assets/delete.svg"></img>
            <div>Delete</div>
          </a>
        </div>
      );
    }
  },

  _handleEdit: function() {
    event.preventDefault();
    this.setState({ isEditing: true })
  },

  _handleSave: function() {
    event.preventDefault();
    var data = {
      id: this.props.data.id,
      title: this.refs.title.getDOMNode().value.trim(),
    };
    this.props.updateCategory(data);
    this.setState({ isEditing: false })
  },

  _handleDelete: function() {
    event.preventDefault();
    this.props.deleteCategory(this.props.data);
  }

});

module.exports = Category;
