clear the form on submit:
```
componentWillUpdate: function() {
  this._clearInputs()
},

_clearInputs: function() {
  var self = this;
  ['refName1', 'refName2', 'refName3', 'refName4'].forEach(function(item) {
    this.refs[item].getDOMNode().value = '';
  });
}
```

edit the table's data in place...
```
getInitialState: function() {
  return: {
    isEditing: false
  }
},

render: function() {
  return this._buildCells();
},

_buildCells: function() {
  if (isEditing) {
    // trigger editing version
    return (
      <tr>
        <td><input type="text" ref="name" defaultValue={this.props.data.name} /></td>
        <td><button>Save</button></td>
      </tr>
      )
  } else {
    // trigger display version
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td><button>Edit</td>
      </tr>
      )
  }
},

_handleEdit: function(e) {
  event.prevent.Default();
  this.setState({ isEditing: true })
}
```


to order something on server side

```
@tasks = Task.order({id: :asc}).all
```


weekend

full crud through react for expenses
plus user authentication
