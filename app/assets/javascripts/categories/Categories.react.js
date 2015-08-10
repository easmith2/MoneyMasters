var React = require('react');
var List = require('./List.react');

var Categories = React.createClass({
  render: function() {
    console.log('Rendering Categories');
    return (
      <div>
        <h3 className="categories__header">My Categories</h3>
        <List categories={this.props.categories} createCategory={this.props.createCategory}
        deleteCategory={this.props.deleteCategory}
        updateCategory={this.props.updateCategory}/>
      </div>
    )
  }

});

module.exports = Categories;
