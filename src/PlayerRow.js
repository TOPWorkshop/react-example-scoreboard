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
      resetScore: PropTypes.func,
      resetAllScore: PropTypes.func,
    }).isRequired,
  }

  render() {
    const {
      player: { id, name, score },
      handleScore: { increaseScore, decreaseScore, resetScore },
    } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td style={{ textAlign: 'center' }}>
          <Button onClick={() => decreaseScore(id)}>{'-'}</Button>

          <span style={{ margin: '0 10px' }}>{score}</span>

          <Button onClick={() => increaseScore(id)}>{'+'}</Button>

          <Button
            onClick={() => resetScore(id)}
            bsStyle={'danger'}
            style={{ float: 'right' }}
          >
            {'Reset'}
          </Button>
        </td>
      </tr>
    );
  }
}

export default PlayerRow;
