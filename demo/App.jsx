import React from 'react';
import DumbCounter from '../dist/react-dumb-component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Demo Counter</h1>
        <DumbCounter initialValue={50} minValue={0} maxValue={100} step={2} />
      </div>
    );
  }
}
