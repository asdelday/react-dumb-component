import React from 'react';
import s from './SubDumbComponent.scss'; // eslint-disable-line no-unused-vars

class SubDumbComponent extends React.Component {
  render() {
    console.log(s);
    return (
      <div className="SubDumbComponent">
        <h2 className="SubDumbComponent__title">SubComponent</h2>
        <p className="SubDumbComponent__content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dolor
          doloribus eius error explicabo impedit itaque iusto minima quidem recusandae,
          suscipit vero. Deserunt, enim iure labore quam repellendus vel.
        </p>
      </div>
    );
  }
}

export default SubDumbComponent;
