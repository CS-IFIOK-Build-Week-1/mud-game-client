import { textures, TILE_HEIGHT, TILE_WIDTH } from "./constants";
import * as PIXI from "pixi.js";

const indexes = textures.map((_, index) => index);
const floorTextures = [
  6,6,6,6,6,6,6,6,6,6,6,6,6,6,
  ...indexes.slice(6, 13),
  ...indexes.slice(25, 32),
  ...indexes.slice(44, 51),
  ...indexes.slice(63, 70),
];
const lowerWallTextures = [1,43, ...indexes.slice(78, 81)];
const upperWallTextures = [24,39,...indexes.slice(57, 60)]

export default function Room(parent, room, x, y) {
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
            tileIndex = getRandomArrayIndex(upperWallTextures);
          } else {
            tileIndex = 3;
          }
        } else if (j === 1) {
          tileIndex = getRandomArrayIndex(upperWallTextures);
          if (room.n_to) tileIndex = getRandomArrayIndex(floorTextures);
        } else if (j === 2) {
          if (room.n_to && room.e_to) {
            tileIndex = 38;
          } else if (room.n_to) {
            tileIndex = 19;
          } else if (room.e_to) {
            tileIndex = getRandomArrayIndex(upperWallTextures);
          } else {
            tileIndex = 4;
          }
        }
      } else if (i === 1) {
        if (j === 0) {
          tileIndex = 21;
          if (room.w_to) tileIndex = getRandomArrayIndex(floorTextures);
        } else if (j === 1) {
          tileIndex = getRandomArrayIndex(floorTextures);
        } else if (j === 2) {
          tileIndex = 19;
          if (room.e_to) tileIndex = getRandomArrayIndex(floorTextures);
        }
      } else if (i === 2) {
        if (j === 0) {
          if (room.s_to && room.w_to) {
            tileIndex = 2;
          } else if (room.s_to) {
            tileIndex = 21;
          } else if (room.w_to) {
            tileIndex = getRandomArrayIndex(lowerWallTextures);
          } else {
            tileIndex = 22;
          }
        } else if (j === 1) {
          tileIndex = getRandomArrayIndex(lowerWallTextures);
          if (room.s_to) tileIndex = getRandomArrayIndex(floorTextures);
        } else if (j === 2) {
          if (room.s_to && room.e_to) {
            tileIndex = 0;
          } else if (room.s_to) {
            tileIndex = 19;
          } else if (room.e_to) {
            tileIndex = getRandomArrayIndex(lowerWallTextures);
          } else {
            tileIndex = 23;
          }
        }
      }
      nextTile = new PIXI.TilingSprite(
        textures[tileIndex],
        TILE_WIDTH,
        TILE_HEIGHT
      );
      nextTile.x = x + j * TILE_WIDTH;
      nextTile.y = y + i * TILE_WIDTH;
      parent.addChild(nextTile);
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomArrayIndex(arr) {
  return arr[getRandomInt(0, arr.length)];
}
