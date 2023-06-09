import localforage from 'localforage';

export const STORAGE_CONFIG_KEY = 'conf-soundcomputer';

export async function getStorageKeys() {
  const keys = await localforage.keys();
  return keys.filter((v) => v.startsWith('soundcomputer-'));
}

export async function load(name) {
  const result = await localforage.getItem(name);
  return result;
}

export async function saveSong(name, state) {
  const n = name.startsWith('soundcomputer-') ? name : `soundcomputer-${name}`;
  const oldState = await load(n);
  const s = { ...state, modified: new Date() };
  if (!oldState && !s.created) s.created = new Date();
  const result = await localforage.setItem(n, {
    ...oldState,
    ...s
  });
  return result;
}

export async function loadConfig() {
  const config = await localforage.getItem(STORAGE_CONFIG_KEY);
  return config;
}

export async function saveConfig(config) {
  const result = await localforage.setItem(STORAGE_CONFIG_KEY, config);
  return result;
}
