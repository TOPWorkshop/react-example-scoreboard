import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  max-width: 500px;
  margin: auto;
`;

class PlayersList extends Component {
  renderRow = ({ id, name, score }) => (
    <tr key={id}>
      <td>{name}</td>
      <td style={{ textAlign: 'center' }}>
        <Button>{'-'}</Button>
        <label style={{ margin: '0 10px' }}>{score}</label>
        <Button>{'+'}</Button>
      </td>
    </tr>
  )

  render() {
    return (
      <StyledTable striped bordered>
        <thead>
          <tr>
            <th>{'Player Name'}</th>
            <th>{'Score'}</th>
          </tr>
        </thead>

        <tbody>
          {this.props.players.map(player => this.renderRow(player))}
        </tbody>
      </StyledTable>
    );
  }
}

export default PlayersList;
