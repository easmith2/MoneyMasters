var React = require('react');
var Form = require('./Form.react');
var Category = require('./Category.react');

var List = React.createClass({
  render: function() {
    console.log('Creating categories list');
    return (
      <div className="categories__container">
        <ul className="categories__list">
          <li><Form createCategory={this.props.createCategory}/></li>
          {this._buildCategoriesList()}
        </ul>
      </div>
    );
  },

  _buildCategoriesList: function() {
    return this.props.categories.map(function(category) {
      return <li key={category.id}><Category data={category} deleteCategory={this.props.deleteCategory} updateCategory={this.props.updateCategory} /></li>
    }.bind(this));
  }
});

module.exports = List;
