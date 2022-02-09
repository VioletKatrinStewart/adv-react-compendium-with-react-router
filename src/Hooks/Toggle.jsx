import React from 'react';

const Toggle = ({ checked, onChange }) => (
  <span>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
