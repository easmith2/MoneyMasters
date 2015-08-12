var React = require('react');
var Form = require('./Form.react');
var Category = require('./Category.react');

var List = React.createClass({
  render: function() {
    console.log('Creating categories list');
    return (
      <div className="categories__container">
        <div className="categories__list">
          <div><Form createCategory={this.props.createCategory}/></div>
          {this._buildCategoriesList()}
        </div>
      </div>
    );
  },

  _buildCategoriesList: function() {
    return this.props.categories.map(function(category) {
      return <div key={category.id}><Category data={category} deleteCategory={this.props.deleteCategory} updateCategory={this.props.updateCategory} /></div>
    }.bind(this));
  }
});

module.exports = List;
