import React, { PropTypes } from 'react';
import cx from 'classnames';
import ButtonComponent from '../ButtonComponent';
import './DumbCounter.scss';

export default class DumbCounter extends React.Component {
  static propTypes = {
    initialValue: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    step: PropTypes.number,
    className: PropTypes.string,
  };

  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };

    this.onMinusValue = this.onMinusValue.bind(this);
    this.onPlusValue = this.onPlusValue.bind(this);
  }

  onMinusValue() {
    const { value } = this.state;
    const { minValue, step } = this.props;
    const newValue = value - step;

    if (!(typeof minValue === 'number') || newValue >= minValue) {
      this.setState({ value: newValue });
    }
  }

  onPlusValue() {
    const { value } = this.state;
    const { maxValue, step } = this.props;
    const newValue = value + step;

    if (!(typeof maxValue === 'number') || newValue <= maxValue) {
      this.setState({ value: newValue });
    }
  }

  render() {
    const { value, className } = this.state;

    return (
      <div className={ cx(className, 'DumbCounter') }>
        <ButtonComponent className="DumbCounter__minus" value="-" clickEvent={this.onMinusValue} />
        <span className="DumbCounter__value">{value}</span>
        <ButtonComponent className="DumbCounter__plus" value="+" clickEvent={this.onPlusValue} />
      </div>
    );
  }
}
