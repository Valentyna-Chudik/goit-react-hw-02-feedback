import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Statistics.module.css';

export default class Statistics extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  addFeedback = e => {
    const buttonName = e.target.name;
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total) || 0;
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div>
          <button type="button" name="good" onClick={this.addFeedback}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.addFeedback}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.addFeedback}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <div>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.countTotalFeedback()}</span>
          <span>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </div>
    );
  }
}
