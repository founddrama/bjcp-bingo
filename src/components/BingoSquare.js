import React from 'react';
import { FREE } from '../phrases/bingo-phrases';

class BingoSquare extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { selected: false };
  }

  setSelected = () => {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  };

  generateCssClassNames = (phrase) => {
    const classNames = ['bingo-square'];
    if (this.state.selected) {
      classNames.push('selected');
    }
    if (phrase === FREE) {
      classNames.push('free-square');
    }

    return classNames.join(' ');
  };

  render() {
    const { phrase } = this.props;
    const classNames = this.generateCssClassNames(phrase);

    return (
      <div className={classNames} onClick={this.setSelected}>
        <span>{phrase}</span>
      </div>
    );
  }
}

export default BingoSquare;
