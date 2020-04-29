import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import playerWalk from '../../assets/player_walk.png';

import actionCreators from './action-creators';

const Player = ({ position }) => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          top: position[1],
          left: position[0],
          background: `url('${playerWalk}')`,
          backgroundPosition: '0 0',
          width: '40px',
          height: '40px'
        }}
      />
    </div>
  );
};


Player.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

Player.defaultProps = {
  position: undefined,
};

function mapStateToProps(state) {
  return {
    ...state.player,
  };
}

export default connect(mapStateToProps, actionCreators)(Player);