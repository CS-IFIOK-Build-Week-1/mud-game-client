import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import playerWalk from '../../assets/player_walk.png';

import actionCreators from './action-creators';
import handleMovement from '../controls/movement';

const Player = ({ position }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: position[1],
        left: position[0],
        background: `url('${playerWalk}')`,
        backgroundPosition: '0 0',
        width: '40px',
        height: '40px'
      }}
    />
  );
};


Player.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

Player.defaultProps = {
  position: [0, 0],
};

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps, actionCreators)(handleMovement(Player));