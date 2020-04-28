import React from 'react'
import { connect } from 'react-redux'

import player_walk from '../../assets/player_walk.png'

import actionCreators from './action-creators'

const Player = (props) => {
  return (
    <div>
      <div
        style={{
          position: 'relative',
          top: props.position[1],
          left: props.position[0],
          background: `url(${player_walk})`,
          backgroundPosition: '0 0',
          width: '40px',
          height: '40px'
        }}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state.player,
  }
}

export default connect(mapStateToProps, actionCreators)(Player)