// From https://github.com/cwilso/metronome/

let timerID = null;
let interval = 50;

onmessage = (e) => {
  if (e.data === 'start') {
    // console.log('starting');
    timerID = setInterval(() => { postMessage('tick'); }, interval);
  } else if (e.data.interval) {
    // console.log('setting interval');
    interval = e.data.interval;
    // console.log(`interval=${interval}`);
    if (timerID) {
      clearInterval(timerID);
      timerID = setInterval(() => {
        console.log('here');
        postMessage('tick');
      }, interval);
    }
  } else if (e.data === 'stop') {
    // console.log('stopping');
    clearInterval(timerID);
    timerID = null;
  }
};

postMessage('hi there');
