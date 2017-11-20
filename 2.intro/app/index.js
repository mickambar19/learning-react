var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

class App extends React.Component{
  render(){
    var name='Alexis Miguel';
    var friends=['Luigi', 'Raul', 'Diego'];
    return (
      <div>
        {this.props.name}
        <ul>
          {
            friends.map(function(friend){
              return <li>{friend}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="The name"/>,
  document.getElementById('app')
);