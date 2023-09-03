// Store utils

export function basicSetter(key) {
  return (state, action) => {
    state[key] = action.payload;
  };
}
