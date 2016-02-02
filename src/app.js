import React from 'react';
import { render } from 'react-dom';
import DumbCounter from './index';

(() => {
  const app = document.getElementById('react-view');
  render(<DumbCounter initialValue={10} minValue={0} maxValue={100} step={2} />, app);
})();
