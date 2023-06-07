/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
let a = [];
let n = [];

(async () => {
  const npath = '/worklets/nouns.txt';
  const apath = '/worklets/verbjectives.txt';
  // eslint-disable-next-line no-undef
  const nres = await fetch(npath);
  const ares = await fetch(apath);
  n = await nres.text();
  a = await ares.text();
  n = n.split('\n');
  a = a.split('\n');
  // console.log(n, a);

  function makeRandName() {
    const words = [
      a[Math.floor(Math.random() * a.length)],
      a[Math.floor(Math.random() * a.length)],
      n[Math.floor(Math.random() * n.length)],
      n[Math.floor(Math.random() * n.length)],
    ];

    return words.map((w) => {
      const uc = w.charAt(0).toUpperCase();
      return `${uc}${w.substring(1)}`;
    }).join('');
  }

  onmessage = (e) => {
    postMessage(makeRandName());
  };
})();
