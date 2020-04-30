import React from 'react';

import store from '../../redux/store';
import * as types from '../map/action-types';
import MapCanvas from "../map/map-canvas";
import Player from "../player/player";
import { tiles } from '../../data/maps/1';

function World(props) {
  store.dispatch({
    type: types.ADD_TILES,
    payload: {
      tiles,
    }
  });

  return (
    <div style={{
      position: 'relative',
      width: '800px',
      height: '400px'
    }}>
      <MapCanvas />
      <Player />
    </div>
  );
}

export default World;