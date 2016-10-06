import React from 'react';
/**
 * Presentationnal Component only
 */
const NameInput = () => (
    <div>
      <label htmlFor="name">Whisky name</label>
      <input
        id="name"
        type="text"
        name="name"
      />
    </div>
);

export default NameInput;
