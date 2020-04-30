import React, { useRef, useEffect, useState } from "react";
import { Sprite, withApp } from "react-pixi-fiber";
import { slimeTextures, textures } from "./constants";

let frameCounter = 0;

export function Player({ app, x, y }) {
  const [current_texture, setCurrentTexture] = useState(0);
  const sprite = useRef(null);
  useEffect(() => {
    app.ticker.add((delta) => {
      frameCounter += delta;
      sprite.current.texture =
        slimeTextures[parseInt((frameCounter % 60) / 15)];
    });
  }, []);
  console.log(slimeTextures);
  return (
    <Sprite ref={sprite} texture={slimeTextures[0]} x={x} y={y} scale={2} />
  );
}

export default withApp(Player);
