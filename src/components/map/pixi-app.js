import React, { useRef } from "react";
import { Stage, Container } from "react-pixi-fiber";
import TileMap from "./TileMap";
import Room from "./Room";
import Player from "./Player";

export default function game({ rooms }) {
  return (
    <>
      <Stage options={{ backgroundColor: 0x10bb99, height: 600, width: 800 }}>
        <Container>
          <TileMap
            rooms={[
              { n_to: 0, e_to: 1, w_to: 0, s_to: 1 },
              { n_to: 0, e_to: 0, w_to: 1, s_to: 1 },
            ]}
          />
          <Player scale={2} x={64}/>
        </Container>
      </Stage>
    </>
  );
}
