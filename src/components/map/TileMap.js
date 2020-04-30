import React, { useState, useEffect, useRef } from "react";
import { ParticleContainer, withApp } from "react-pixi-fiber";
import Room from "./Room";

function TileMap({ app, rooms }) {
  const container = useRef(null);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(null);
  useEffect(() => {
    app.ticker.add(move);
    window.addEventListener("keydown", handleMoveControls);
    return () => app.ticker.remove(move);
  }, [isMoving, direction]);
  function handleMoveControls(event) {
    if ([37, 38, 39, 40].includes(event.keyCode)) {
      event.preventDefault();
    }
    const { keyCode } = event;
    // Directions inverted cause we are moving the map and not the  player
    switch (keyCode) {
      case 37:
        setIsMoving(true);
        setDirection("RIGHT");
        break;
      case 38:
        setIsMoving(true);
        setDirection("DOWN");
        break;
      case 39:
        setIsMoving(true);
        setDirection("LEFT");
        break;
      case 40:
        setIsMoving(true);
        setDirection("UP");
        break;
      default:
        break;
    }
  }
  function move(delta) {
    if (isMoving) {
      switch (direction) {
        case "UP":
          container.current.y = container.current.y - delta;
          break;
        case "DOWN":
          container.current.y = container.current.y + delta;
          break;
        case "RIGHT":
          container.current.x = container.current.x + delta;
          break;
        case "LEFT":
          container.current.x = container.current.x - delta;
          break;

        default:
          break;
      }
    } else {
      return;
    }
  }

  return (
    <ParticleContainer ref={container} scale={2}>
      {rooms.map((room, i) => (
        <Room room={room} x={i * 48} y={0} key={i} />
      ))}
    </ParticleContainer>
  );
}

export default withApp(TileMap);
