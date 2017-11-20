var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var uuid4 = require('uuid/v4');
require('./index.css');

class Badge extends React.Component{
  render(){
    return (
      <div>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
        <div>
          <h4>Contact info:</h4>
          <ul>
            {
              this.props.contactNumbers.map((contactNumber) =>{
                return <li key={uuid4()}>{contactNumber.type}: {contactNumber.number}</li>
              })
            }
          </ul>

        </div>

      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  contactNumbers: PropTypes.array
};

ReactDOM.render(
  <Badge
    name='Alexis Jimenez'
    username='mickambar19'
    img='https://avatars3.githubusercontent.com/u/9437615?s=460&v=4'
    contactNumbers='dsds'
    // contactNumbers={[
    //   { type: 'home', number: '33392809'},
    //   { type: 'cellphone', number: '0443333392809'}
    // ]}
  />,
  document.getElementById('app')
);
