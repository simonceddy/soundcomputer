import { forwardRef } from 'react';

/**
 *
 * @param {import("react").DOMAttributes} props
 * @returns {import("react").ReactComponentElement}
 */
function CircleDiv(props, ref) {
  return (
    <div {...props} ref={ref} className={`${props.className} rounded-full`} style={{ ...props.style }}>
      {props.children}
    </div>
  );
}

const RefWrapper = forwardRef(CircleDiv);

export default RefWrapper;
