import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    }
  }

  componentDidMount(){
    const {text, speed} = this.props;
    const stopper = `${text}...`;
    
    this.interval = window.setInterval( () => {
      this.state.text === stopper
        ? this.setState(() => ({text}))
        : this.setState((prevState) => ({text: prevState.text + '.'}));
    }, speed);
  }

  componentWillUnmount(){
    window.clearInterval(this.interval);
  }
  
  render() {
    const {text} = this.state;
    const { content } = styles;
    return (
      <p style={content}>
        {text}
      </p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

Loading.PropTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

export default Loading;