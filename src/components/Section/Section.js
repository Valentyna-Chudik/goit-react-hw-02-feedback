import React from 'react';
import PropTypes from 'prop-types';

// import styles from './Section.module.css';

export default function FeedbackOptions({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
