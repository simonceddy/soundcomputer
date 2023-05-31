/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { formatNumber } from '../util';

/**
 * @typedef {object} RotaryKnobOptions
 * Most numbers can be negative or positive.
 * @property {number} maxDeg max degrees knob can rotate. Defaults to 150.
 * @property {number} minDeg min degrees knob can rotate. Defaults to -150.
 * @property {number} maxVal max value allowed. Defaults to 20.
 * @property {number} minVal min value allowed. Defaults to 0.
 * @property {number} defaultVal a default value for the knob. Defaults to 0.
 * @property {number} val current value. Uses defaultVal if not provided.
 * @property {number} stepSize the step size for changing the value. Defaults to 1
 * @property {number} microStepSize the size of shift modified micro steps. Defaults to 0.1
 * @property {number} megaStepSize the size of alt modified mega steps. Defaults to 3
 * @property {Function<number>|null} onChange an optional callback that runs on state change
 */
const defaultOpts = {
  maxDeg: 150,
  minDeg: -150,
  minVal: 0,
  maxVal: 20,
  defaultVal: 0,
  val: 0,
  stepSize: 1,
  microStepSize: 0.1,
  megaStepSize: 3,
  onChange: null
};

/**
 * @param {object} ref
 * @param {RotaryKnobOptions} options
 */
export default function useRotaryKnob(ref, options = {}) {
  const opts = { ...defaultOpts, ...options };

  const getDeg = (deg) => {
    if (deg <= opts.minDeg) return opts.minDeg;
    if (deg >= opts.maxDeg) return opts.maxDeg;
    return deg;
  };

  const getVal = (val) => {
    if (val <= opts.minVal) return opts.minVal;
    if (val >= opts.maxVal) return opts.maxVal;
    return val;
  };

  const degSpan = opts.maxDeg + -opts.minDeg;
  const stepDeg = degSpan / (opts.maxVal - opts.minVal);

  const defaultDeg = (opts.defaultVal * stepDeg) + opts.minDeg;
  const firstValDeg = opts.val !== null && opts.val !== opts.defaultVal
    ? (opts.val * stepDeg) + opts.minDeg : defaultDeg;
  // console.log(firstValDeg, stepDeg);

  const [state, setState] = useState({
    deg: firstValDeg,
    val: opts.val || opts.defaultVal
  });
  // console.log(state);

  const turnKnob = () => {
    ref.current.style = `transform: rotate(${state.deg || 0}deg);`;
    if (opts.onChange) opts.onChange(state.val);
  };

  const dblClickHandler = () => {
    setState({ val: opts.defaultVal, deg: defaultDeg });
    turnKnob();
  };

  const wheelHandler = (e) => {
    const a = e.deltaY > 0 ? 1 : -1;
    let mult = 1;
    if (e.shiftKey && !e.altKey) mult = opts.microStepSize;
    if (e.altKey && !e.shiftKey) mult = opts.megaStepSize;

    const newDeg = getDeg(
      state.deg - (a * stepDeg * mult)
    );

    if (newDeg !== state.deg) {
      const newVal = Number(formatNumber(getVal(
        state.val - (a * opts.stepSize * mult)
      )));
      setState({ deg: newDeg, val: newVal });
      turnKnob();
    }
  };

  useEffect(() => {
    let setup = false;
    if (!setup && ref.current) {
      // perform setup
      console.log('setting up rotary knob');
      turnKnob();
    }
    return () => {
      setup = true;
    };
  }, [ref]);

  return {
    state,
    wheelHandler,
    dblClickHandler
  };
}
