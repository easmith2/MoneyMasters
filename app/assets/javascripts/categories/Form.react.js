var React = require('react');

var Form = React.createClass({
  componentWillUpdate: function() {
    this._clearInputs();
  },

  render: function() {
    return (
      <form className="categories__singleCateg">
        <div className="categories__title">
          <input ref="title" id="title" placeholder="title" />
        </div>
        <div className="categories__action">
          <a className="categories__submitNew" onClick={this._handleSubmit}>
            <div>+</div>
            <p>Add New</p>
          </a>
        </div>
      </form>
    );
  },

  _handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      title: this.refs.title.getDOMNode().value.trim(),
    };

    this.props.createCategory(data);
  },

  _clearInputs: function() {
    this.refs['title'].getDOMNode().value = '';
  }

});

module.exports = Form;
