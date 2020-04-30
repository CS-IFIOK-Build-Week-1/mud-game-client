import store from '../../redux/store';
import * as types from '../player/action-types';

function handleMovement(player) {

  function getnewPosition(oldPosition, direction) {
    switch (direction) {
      case types.WEST:
        return [oldPosition[0] - types.SPRITE_SIZE, oldPosition[1]];
      case types.EAST:
        return [oldPosition[0] + types.SPRITE_SIZE, oldPosition[1]];
      case types.NORTH:
        return [oldPosition[0], oldPosition[1] - types.SPRITE_SIZE];
      case types.SOUTH:
        return [oldPosition[0], oldPosition[1] + types.SPRITE_SIZE];
      default:
        return oldPosition;
    }
  };

  function observeBoundaries(newPos) {
    return (newPos[0] >= 0 && newPos[0] <= types.MAP_WIDTH - types.SPRITE_SIZE) &&
      (newPos[1] >= 0 && newPos[1] <= types.MAP_HEIGHT - types.SPRITE_SIZE);
  }

  function observeBlockage(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const yAxis = newPos[1] / types.SPRITE_SIZE;
    const xAxis = newPos[0] / types.SPRITE_SIZE;
    const nextTile = tiles[yAxis][xAxis];
    return nextTile < 5;
  }

  function dispatchMove(newPos) {
    store.dispatch({
      type: types.MOVE_PLAYER,
      payload: newPos,
    });
  };

  function attemptMove(direction) {
    const oldPos = store.getState().player.position;
    const newPos = getnewPosition(oldPos, direction);

    if (observeBoundaries(newPos) && observeBlockage(oldPos, newPos)) {
      dispatchMove(newPos);
    }
  }

  const handleKeyDown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37:
        return attemptMove(types.WEST);
      case 38:
        return attemptMove(types.NORTH);
      case 39:
        return attemptMove(types.EAST);
      case 40:
        return attemptMove(types.SOUTH);
      default:
        return evt.keyCode;
    }
  };

  window.addEventListener('keydown', (evt) => {
    handleKeyDown(evt);
  });

  return (player);
}

export default handleMovement;
