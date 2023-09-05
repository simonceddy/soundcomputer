let ticker = 0;

export default function tickHandler(callback, reset = 24) {
  ticker += 1;
  // console.log(ticker);
  if (ticker >= reset) {
    callback();
    ticker = 0;
  }
}
