import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

import PlayerRow from './PlayerRow';

const StyledTable = styled(Table)`
  max-width: 500px;
  margin: auto;
`;

class PlayersList extends Component {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      score: PropTypes.number,
    })).isRequired,

    handleScore: PropTypes.shape({
      increaseScore: PropTypes.func,
      decreaseScore: PropTypes.func,
    }).isRequired,
  }

  render() {
    const { players, handleScore } = this.props;

    return (
      <StyledTable striped bordered>
        <thead>
          <tr>
            <th>{'Player Name'}</th>
            <th>{'Score'}</th>
          </tr>
        </thead>

        <tbody>
          {players.map(player => (
            <PlayerRow
              key={player.id}
              player={player}
              handleScore={handleScore}
            />
          ))}
        </tbody>
      </StyledTable>
    );
  }
}

export default PlayersList;
