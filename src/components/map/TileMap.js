import React, { useEffect, useRef } from "react";
import { ParticleContainer, withApp } from "react-pixi-fiber";
import Room from "./Room";
import { useDispatch } from "react-redux";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

const axios = axiosWithAuth();
const url = "https://calm-headland-63030.herokuapp.com/api/adv/move";
let current_room;
const directions = {
  37: "w",
  38: "n",
  39: "e",
  40: "s",
};
let moving = false;
function TileMap({ app, rooms, x, y, dispatch }) {
  const container = useRef(null);
  useEffect(() => {
    // app.ticker.add(move);
    window.addEventListener("keydown", handleMoveControls);
    // return () => app.ticker.remove(move);
    return () => window.removeEventListener("keydown", handleMoveControls);
  }, []);

  useEffect(() => {
    if (rooms.length) {
      current_room = rooms[x][y];
      for (let y = 0; y < rooms.length; y++) {
        for (let x = 0; x < rooms[0].length; x++) {
          Room(container.current, rooms[x][y], x * 48, y * 48);
        }
      }
    }
  }, [rooms]);

  function handleMoveControls(event) {
    let delta = 96;
    const { keyCode } = event;
    if ([37, 38, 39, 40].includes(keyCode) && container.current) {
      event.preventDefault();
      if (current_room[`${directions[keyCode]}_to`] && !moving) {
        moving = true;
        axios.post(url, { direction: directions[keyCode] }).then(({ data }) => {
          dispatch({ type: "UPDATE_CURRENT_ROOM", payload: data });
          // Directions inverted cause we are moving the map and not the  player
          switch (keyCode) {
            case 37:
              container.current.x = container.current.x + delta;
              current_room = rooms[current_room.x - 1][current_room.y];
              break;
            case 38:
              container.current.y = container.current.y + delta;
              current_room = rooms[current_room.x][current_room.y - 1];
              break;
            case 39:
              container.current.x = container.current.x - delta;
              current_room = rooms[current_room.x + 1][current_room.y];
              break;
            case 40:
              container.current.y = container.current.y - delta;
              current_room = rooms[current_room.x][current_room.y + 1];
              break;
            default:
              break;
          }
          moving = false;
        });
      }
    }
  }
  return (
    <ParticleContainer
      ref={container}
      scale={2}
      maxSize={10000}
      x={96 * (3 - x) - 48}
      y={96 * (2 - y)}
    />
  );
}

export default withApp(TileMap);
