import React from 'react';
import { render } from 'react-dom';
import App from './App';

(() => {
  const app = document.getElementById('react-view');
  render(<App />, app);
})();
