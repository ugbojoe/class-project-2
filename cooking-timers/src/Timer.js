import React, {
  Component
} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: 0
    };
  }

  getInitialState() {
    return ;
  }
  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentDidMount() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining
    });
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (<div>Seconds Remaining: {this.state.secondsRemaining}</div>);
  }
}

export default Timer;
