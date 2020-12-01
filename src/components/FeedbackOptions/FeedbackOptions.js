import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <p>Please leave feedback</p>
      {options.map(option => (
        <button key={option} name={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
