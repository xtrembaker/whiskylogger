import React from 'react';
import WhiskyList from '../WhiskyList.js';
import WhiskyInfo from '../WhiskyInfo.js';
import WhiskyForm from './WhiskyForm.js';

/**
 * Presentationnal Component only
 */
const App = () => (
  <div>
  <div id="whiskyList"><WhiskyList /></div>
  <div id="whiskyInfo"><WhiskyInfo /></div>
  <div id="whiskyForm"><WhiskyForm /></div>
  </div>
);

export default App;
