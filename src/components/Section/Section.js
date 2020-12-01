import React from 'react';

export default function FeedbackOptions({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
