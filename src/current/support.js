export function render3DigitNum(num = 1) {
  return num.toLocaleString('en-US', {
    minimumIntegerDigits: 3
  });
}

export function render2DigitNum(num = 1) {
  return num.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  });
}
