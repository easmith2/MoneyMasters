var React = require('react');

var Form = React.createClass({
  componentWillUpdate: function() {
    this._clearInputs();
  },

  render: function() {
    return (
      <form>
        <div>
          <input className="category__title" ref="title" id="title" placeholder="title" />
        </div>
        <div>
          <button className="transactions__submitNew" onClick={this._handleSubmit}>Add New</button>
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
