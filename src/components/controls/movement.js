
// import React from 'react';

// import useEvent from '../../utilities/hooks/useEvent';

import store from '../../redux/store';
import { SPRITE_SIZE } from '../../utilities/constant';

function handleMovement(player) {

  const getNewPosition = (direction) => {
    const oldPosition = store.getState().player.position;
    switch (direction) {
      case 'WEST':
        return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]];
      case 'EAST':
        return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]];
      case 'NORTH':
        return [oldPosition[0], oldPosition[1] - SPRITE_SIZE];
      case 'SOUTH':
        return [oldPosition[0], oldPosition[1] + SPRITE_SIZE];
      default:
        return [oldPosition[0], oldPosition[1]];
    }
  };


  const dispatchDirection = (direction) => {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: getNewPosition(direction)
      }
    });
  };

  const handleKeyPress = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37:
        return dispatchDirection("West");
      case 38:
        return dispatchDirection("North");
      case 39:
        return dispatchDirection("East");
      case 40:
        return dispatchDirection("South");
      default:
        return console.log(evt.keyCode);
    }
  };

  window.addEventListener('keydown', (evt) => {
    handleKeyPress(evt);
  });

  // const handleKeyPress = (evt) => {
  //   if (evt.key === ' ') {
  //     console.log('You pressed the space bar!');
  //   }
  // };

  // useEvent('keyup', handleKeyPress);

  return (player);
}

export default handleMovement;
