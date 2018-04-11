import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class PlayerRow extends Component {
  static propTypes = {
    player: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      score: PropTypes.number,
    }).isRequired,

    handleScore: PropTypes.shape({
      increaseScore: PropTypes.func,
      decreaseScore: PropTypes.func,
    }).isRequired,
  }

  render() {
    const {
      player: { id, name, score },
      handleScore: { increaseScore, decreaseScore },
    } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td style={{ textAlign: 'center' }}>
          <Button onClick={() => decreaseScore(id)}>{'-'}</Button>
          <span style={{ margin: '0 10px' }}>{score}</span>
          <Button onClick={() => increaseScore(id)}>{'+'}</Button>
        </td>
      </tr>
    );
  }
}

export default PlayerRow;
