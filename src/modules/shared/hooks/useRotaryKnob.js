/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { formatNumber } from '../../../util';

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
 * @property {Function<number>|null} onDoubleClick an optional default double click handler
 */
const defaultOpts = {
  maxDeg: 150,
  minDeg: -150,
  minVal: 0,
  maxVal: 20,
  defaultVal: 0,
  val: null,
  stepSize: 1,
  microStepSize: 0.1,
  megaStepSize: 3,
  onChange: null,
  onDoubleClick: null
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
  const firstValDeg = opts.val && opts.val !== opts.defaultVal
    ? (opts.val * stepDeg) + opts.minDeg : defaultDeg;
  // console.log(firstValDeg, stepDeg);

  const [state, setState] = useState({
    deg: firstValDeg,
    val: opts.val || opts.defaultVal
  });
  const [lastPos, setLastPos] = useState(null);
  // console.log(state);

  // const turnKnob = () => {
  //   ref.current.style = `transform: rotate(${state.deg || 0}deg);`;
  // };

  const dblClickHandler = (e) => {
    if (e.shiftKey) {
      setState({ val: opts.defaultVal, deg: defaultDeg });
      if (opts.onChange) opts.onChange(opts.defaultVal);
    } else if (opts.onDoubleClick) opts.onDoubleClick();
  };

  const wheelHandler = throttle((e) => {
    const a = e.deltaY > 0 ? 1 : -1;
    let mult = 1;
    if (e.shiftKey && !e.altKey) mult = opts.microStepSize;
    if (e.altKey && !e.shiftKey) mult = opts.megaStepSize;

    const newDeg = getDeg(
      state.deg - (a * stepDeg * mult)
    );

    const newVal = Number(formatNumber(getVal(
      state.val - (a * opts.stepSize * mult)
    )));
    if (newDeg !== state.deg || newVal !== state.val) {
      setState({ deg: newDeg, val: newVal });
      if (opts.onChange) opts.onChange(newVal);
      // turnKnob();
    }
  }, 50);

  const mouseMove = throttle((e) => {
    e.preventDefault();
    if (lastPos !== null) {
      const a = e.deltaY > 0 ? 1 : -1;
      let mult = 1;
      if (e.shiftKey && !e.altKey) mult = opts.microStepSize;
      if (e.altKey && !e.shiftKey) mult = opts.megaStepSize;
      const newDeg = getDeg(
        (((lastPos - e.clientY) * stepDeg) * mult) + state.deg
      );
      // console.log(((opts.minDeg + newDeg) / stepDeg) + opts.maxVal);
      const newVal = Number(formatNumber(getVal(
        ((opts.minDeg + newDeg) / stepDeg) + opts.maxVal
      )));
      if (newDeg !== state.deg || newVal !== state.val) {
        setState({ deg: newDeg, val: newVal });
        if (opts.onChange) opts.onChange(newVal);
        // turnKnob();
      }
    }
  }, 50);

  const mouseUp = (e) => {
    if (lastPos !== null) {
      setLastPos(null);
      document.removeEventListener('mouseup', mouseUp);
      document.removeEventListener('mousemove', mouseMove);
    }
  };

  const dragHandler = (e) => {
    e.preventDefault();
    setLastPos(e.clientY);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  };

  useEffect(() => {
    let setup = false;
    if (!setup && ref.current) {
      // perform setup
      // console.log('setting up rotary knob');
      // turnKnob();
      ref.current.style.transform = `rotate(${state.deg || 0}deg)`;
    }
    return () => {
      setup = true;
    };
  }, [ref]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.style.transform = `rotate(${state.deg || 0}deg)`;
      ref.current.addEventListener('click', (e) => {
        e.preventDefault();
        ref.current.focus();
      });
      // ref.current.addEventListener('wheel', wheelHandler, { passive: false });
      // ref.current.addEventListener('dblclick', dblClickHandler, { passive: false });
      // ref.current.addEventListener('mousedown', dragHandler, { passive: false });
    }
  }, [state]);

  return {
    state,
    wheelHandler,
    dblClickHandler,
    dragHandler
  };
}
