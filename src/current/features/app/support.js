export const APP_MODE_SEQ = 0;
export const APP_MODE_STEP = 1;
export const APP_MODE_INSTR = 2;
export const APP_MODE_FLTR = 3;
export const APP_MODE_MODS = 4;
export const APP_MODE_FX = 5;
export const APP_MODE_MIX = 6;
export const APP_MODE_MAN = 7;
export const APP_MODE_LOAD = 8;
export const APP_MODE_SAVE = 9;

const counter = new Int8Array(8);
export function initTracks(callback) {
  counter.forEach(callback);
}
