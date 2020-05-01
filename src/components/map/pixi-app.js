import React, { useRef } from "react";
import { Stage, Container } from "react-pixi-fiber";
import TileMap from "./TileMap";
import Player from "./Player";

export default function game({ rooms, currentRoomData, dispatch }) {
  return (
    <>
      <Stage options={{ backgroundColor: 0x10bb99, height: 480, width: 576 }}>
        <Container>
          <TileMap rooms={rooms} {...currentRoomData} dispatch={dispatch} />
          <Player scale={2} x={-16 + 96 * 3} y={32 + 96 * 2} />
        </Container>
      </Stage>
    </>
  );
}
