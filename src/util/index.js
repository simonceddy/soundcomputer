export function formatNumber(num = 1) {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function formatTempo(bpm = 120) {
  return bpm.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

export function formatBool(val) {
  if (typeof val === 'boolean') {
    return val === true ? 'true' : 'false';
  }
  return val;
}
