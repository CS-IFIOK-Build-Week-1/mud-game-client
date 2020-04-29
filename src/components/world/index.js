import React from 'react';

import MapCanvas from "../map/map-canvas";
import Player from "../player/player";

function World(props) {
  return (
    <div style={{
      position: 'relative',
      width: '800px',
      height: '500px'
    }}>
      <MapCanvas />
      <Player />
    </div>
  );
}

export default World;