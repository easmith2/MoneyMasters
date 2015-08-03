var React = require('react');
var Router = require('director').Router;

var App = React.createClass({

  _initRouter: function() {
    var self = this;
    console.log('Initializing Router');
    self.router = Router({
      '/'            : self._displayIndex,
    });
    self.router.configure({ html5history: true });
    self.router.init();
  },

  _navigate: function(href) {
    this.router.setRoute(href);
  },

  render: function() {
    console.log('Rendering App Class');
    return (
      <div className="app">
        "Halooooooo....."
      </div>
    );
  }

});

module.exports = App;
