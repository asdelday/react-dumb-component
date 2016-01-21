import React from 'react';
import SubDumbComponent from '../SubDumbComponent';
import s from './DumbComponent.scss'; // eslint-disable-line no-unused-vars

class DumbComponent extends React.Component {
  render() {
    return (
      <div className="DumbComponent">
        <h1>Hello World!</h1>
        <SubDumbComponent />
      </div>
    );
  }
}

export default DumbComponent;
