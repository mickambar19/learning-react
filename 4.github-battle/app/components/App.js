var React = require('react');
var Popular = require('./Popular');
class App extends React.Component{
    render() {
        return (
            <div>
               Hello world
              <Popular/>
            </div>
        )
    }
}

module.exports = App;