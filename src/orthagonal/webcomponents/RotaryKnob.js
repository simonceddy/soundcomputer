// TODO
export default class RotaryKnob extends HTMLElement {
  static name = 'rotary-knob';

  /** @type {?number} */
  max = null;

  /** @type {?number} */
  min = null;

  /** @type {?number} */
  step = 1;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const outerDiv = document.createElement('div');
    const innerDiv = document.createElement('div');

    outerDiv.setAttribute('class', 'outer-rotary-knob');
    innerDiv.setAttribute('class', 'inner-rotary-knob');

    const style = document.createElement('style');
    // console.log(style.isConnected);
    style.textContent = `
      .outer-rotary-knob, .inner-rotary-knob {
        border-radius: 9999px;
        border-width: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .outer-rotary-knob {
        width: 63px;
        height: 63px;
        border-color: #313131;
        background-color: #303030;
      }
      
      .inner-rotary-knob {
        width: 47px;
        height: 47px;
        background-color: #555555;
        border-color: #0e0e0e;
      }
    `;

    shadow.appendChild(style);
    // console.log(style.isConnected);
    outerDiv.appendChild(innerDiv);
    shadow.appendChild(outerDiv);
  }
}
