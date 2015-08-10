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
        <div className="categories__singleCateg">
          <input className="categories__title" ref="title" type="text" autofocus="true" defaultValue={this.props.data.title} />
          <div className="categories__action">
            <a className="categories__saveEdit" onClick={this._handleSave}>
              <img src="/assets/save.svg"></img>
              <div>Save</div>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="categories__singleCateg" onClick={this._handleEdit}>
          <div className="categories__title">
            {this.props.data.title}
          </div>
          <div className="categories__action">
            <a className="categories__delete" onClick={this._handleDelete}>
              <img src="/assets/delete.svg"></img>
              <div>Delete</div>
            </a>
          </div>
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
