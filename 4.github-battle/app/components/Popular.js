var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {
        languages.map(function (lan) {
          return (
            <li
              style={lan === props.selectedLanguage ? {color: 'red'}: null }
              onClick={props.onSelectLanguage.bind(null, lan)}
              key={lan}>{lan}</li>
          )
        })
      }
    </ul>
  )
}


SelectLanguage.propType={
  selectedLanguage: PropTypes.string.isRequired,
  onSelectLanguage: PropTypes.func.isRequired
};

class Popular extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang){
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {

      return (
        <div>
          <SelectLanguage
            onSelectLanguage={this.updateLanguage}
            selectedLanguage={this.state.selectedLanguage}
          />
        </div>
      )
  }
}

module.exports = Popular;