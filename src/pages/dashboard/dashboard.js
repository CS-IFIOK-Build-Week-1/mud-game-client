import React from 'react'

import { Redirect } from 'react-router-dom'
import MapCanvas from '../../components/map-canvas'

const UserDashboard = props => {

  if (!localStorage.getItem('token')) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <MapCanvas />
    </div>
  )
}

export default UserDashboard
