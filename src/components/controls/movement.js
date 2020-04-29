import store from '../../redux/store';
import * as types from '../player/action-types';

function handleMovement(player) {

  function getnewPosition(direction) {
    const oldPosition = store.getState().player.position;
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

  const dispatchMove = (direction) => {
    store.dispatch({
      type: types.MOVE_PLAYER,
      payload: getnewPosition(direction)
    });
  };

  const handleKeyDown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37:
        return dispatchMove(types.WEST);
      case 38:
        return dispatchMove(types.NORTH);
      case 39:
        return dispatchMove(types.EAST);
      case 40:
        return dispatchMove(types.SOUTH);
      default:
        return console.log(evt.keyCode);
    }
  };

  window.addEventListener('keydown', (evt) => {
    handleKeyDown(evt);
  });

  return (player);
}

export default handleMovement;
