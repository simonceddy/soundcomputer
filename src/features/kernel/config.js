import { loadConfig } from '../../util/storage';

export const defaultConfig = {

};

export async function initConfig() {
  const config = await loadConfig();
  return config || defaultConfig;
}
