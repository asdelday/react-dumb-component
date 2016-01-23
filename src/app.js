import React from 'react';
import { render } from 'react-dom';
import DumbCounter from './index';

(() => {
  const app = document.createElement('div');
  window.document.body.appendChild(app);

  render(
    <div>
      <DumbCounter initialValue={10} minValue={0} maxValue={100} step={2} />
    </div>
    , app
  );
})();
