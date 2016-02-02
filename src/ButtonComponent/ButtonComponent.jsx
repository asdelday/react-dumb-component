import React, { PropTypes } from 'react';
import './ButtonComponent.scss';

export default class ButtonComponent extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    clickEvent: PropTypes.func,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickEvent } = this.props;
    if (typeof clickEvent === 'function') { clickEvent(); }
  }

  render() {
    const { value, className } = this.props;

    return (
      <button className={ `ButtonComponent ${ className }` } onClick={ this.handleClick }>
        {value}
      </button>
    );
  }
}
