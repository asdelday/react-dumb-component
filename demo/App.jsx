import React from 'react';
import DumbComponent, { SubDumbComponent, ExtraDumbComponent } from '../dist/react-dumb-component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Demo APP</h1>
        <DumbComponent />
        <SubDumbComponent />
        <ExtraDumbComponent />
      </div>
    );
  }
}
