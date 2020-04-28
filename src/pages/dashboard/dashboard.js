import React from 'react'

import Player from '../../components/player/player'
import { Redirect } from 'react-router-dom'

const UserDashboard = props => {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <h3>Game Dashboard</h3>

      <Player />
    </div>
  )
}

export default UserDashboard
