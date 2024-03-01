import React, { Component } from 'react';

const withTimeTracking = (WrappedComponent) => {
  return class WithTimeTracking extends Component {
    state = {
      timeSpent: 0,
      currentTime: new Date().toLocaleTimeString(), 
    };

    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          timeSpent: this.props.isTrackingTime ? prevState.timeSpent + 1 : prevState.timeSpent,
          currentTime: new Date().toLocaleTimeString(),
        }));
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          timeSpent={this.props.isTrackingTime ? this.state.timeSpent : undefined}
          currentTime={this.state.currentTime} 
        />
      );
    }
  };
};

export default withTimeTracking;
