import React from 'react';
import { render } from 'react-dom';
import DumbComponent, { ExtraDumbComponent } from './index';

(() => {
  const app = document.createElement('div');
  window.document.body.appendChild(app);
  render(
    <div>
      <DumbComponent />
      <ExtraDumbComponent />
    </div>
    , app
  );
})();
