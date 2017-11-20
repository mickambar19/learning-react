var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

class Badge extends React.Component{
  render(){
    var name='Alexis Miguel';
    var friends=['Luigi', 'Raul', 'Diego'];
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name='Alexis Jimenez'
    username='mickambar19'
    img='https://avatars3.githubusercontent.com/u/9437615?s=460&v=4'
  />,
  document.getElementById('app')
);