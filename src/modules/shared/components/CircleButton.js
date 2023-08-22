import { forwardRef } from 'react';

/**
 *
 * @param {import("react").DOMAttributes} props
 * @returns {import("react").ReactComponentElement}
 */
function CircleButton(props, ref) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      className={`rounded-full ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default forwardRef(CircleButton);
