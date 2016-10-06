import React, {PropTypes} from "react"

/**
 * Presentationnal Component only
 */
const AgeInput = () => (
  <div>
    <label htmlFor="age">Age</label>
    <input
      id="age"
      type="text"
      name="age"
    />
  </div>
);

export default AgeInput;
