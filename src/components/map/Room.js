import React from "react";
import { TilingSprite } from "react-pixi-fiber";
import { textures, TILE_HEIGHT, TILE_WIDTH } from "./constants";

export default function Room({ room, x, y }) {
  const children = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let nextTile, tileIndex;
      if (i === 0) {
        if (j === 0) {
          if (room.n_to && room.w_to) {
            tileIndex = 40;
          } else if (room.n_to) {
            tileIndex = 21;
          } else if (room.w_to) {
            tileIndex = 39;
          } else {
            tileIndex = 3;
          }
        } else if (j === 1) {
          tileIndex = 39;
          if (room.n_to) tileIndex = 6;
        } else if (j === 2) {
          if (room.n_to && room.e_to) {
            tileIndex = 38;
          } else if (room.n_to) {
            tileIndex = 19;
          } else if (room.e_to) {
            tileIndex = 39;
          } else {
            tileIndex = 4;
          }
        }
      } else if (i === 1) {
        if (j === 0) {
          tileIndex = 21;
          if (room.w_to) tileIndex = 6;
        } else if (j === 1) {
          tileIndex = 6;
        } else if (j === 2) {
          tileIndex = 19;
          if (room.e_to) tileIndex = 6;
        }
      } else if (i === 2) {
        if (j === 0) {
          if (room.s_to && room.w_to) {
            tileIndex = 2;
          } else if (room.s_to) {
            tileIndex = 21;
          } else if (room.w_to) {
            tileIndex = 1;
          } else {
            tileIndex = 22;
          }
        } else if (j === 1) {
          tileIndex = 1;
          if (room.s_to) tileIndex = 6;
        } else if (j === 2) {
          if (room.s_to && room.e_to) {
            tileIndex = 0;
          } else if (room.s_to) {
            tileIndex = 19;
          } else if (room.e_to) {
            tileIndex = 1;
          } else {
            tileIndex = 23;
          }
        }
      }
      nextTile = (
        <TilingSprite
          key={`${i}${j}`}
          texture={textures[tileIndex]}
          x={x + j * TILE_WIDTH}
          y={y + i * TILE_HEIGHT}
          height = {TILE_HEIGHT}
          width = {TILE_WIDTH}
        />
      );
      children.push(nextTile);
    }
  }
  return <>{children}</>;
}
