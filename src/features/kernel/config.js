import { loadConfig } from '../../util/storage';

export const defaultConfig = {
  lockSeqByDefault: false,
  enableKeyboardShortcuts: true,
  enableMidi: true,
};

export async function initConfig() {
  const config = await loadConfig();
  return config || defaultConfig;
}
