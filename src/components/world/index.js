import React from 'react';

import MapCanvas from "../map/map-canvas";
import Player from "../player/player";
import { tiles } from '../../data/maps/1';

function World(props) {
  return (
    <div style={{
      position: 'relative',
      width: '800px',
      height: '400px'
    }}>
      <MapCanvas tiles={tiles} />
      <Player />
    </div>
  );
}

export default World;