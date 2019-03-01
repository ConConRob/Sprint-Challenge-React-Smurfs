import React, { Component } from 'react';
import styled from 'styled-components';
import Smurf from './Smurf';

const StyledSmurfs = styled.div`
  h1{
    text-align: center;
    color: #C52733;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  }
`

class Smurfs extends Component {
  render() {
    return (
      <StyledSmurfs>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </StyledSmurfs>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
