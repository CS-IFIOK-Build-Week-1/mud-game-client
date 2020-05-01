import * as PIXI from "pixi.js";
import tilesheet from "../../assets/sheet.png";
import slime from "../../assets/slime1_front.png";
export const TILE_HEIGHT = 16;
export const TILE_WIDTH = 16;

// Texture pack
const mapTextures = new PIXI.Texture.from(tilesheet);
const slimeBaseTexture = new PIXI.Texture.from(slime);
export const slimeTextures = [];
for (let k = 0; k < 4; k++) {
  slimeTextures.push(
    new PIXI.Texture(
      slimeBaseTexture.baseTexture,
      new PIXI.Rectangle(TILE_WIDTH * k, 0, TILE_WIDTH, TILE_HEIGHT)
    )
  );
}
export const textures = [];
for (let i = 0; i < 13; i++) {
  for (let j = 0; j < 19; j++) {
    textures.push(
      new PIXI.Texture(
        mapTextures.baseTexture,
        new PIXI.Rectangle(
          TILE_WIDTH * j,
          i * TILE_HEIGHT,
          TILE_WIDTH,
          TILE_HEIGHT
        )
      )
    );
  }
}
