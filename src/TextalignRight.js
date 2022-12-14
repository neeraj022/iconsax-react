import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.001 10.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.001 20.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M11.531 9.5h9.47M3 14.5h18M11.531 19.5h9.47M13.95 4.5H3M21 4.5h-2.98"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M21.001 10.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M21.001 20.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M3 4.5h18M11.53 9.5H21M3 14.5h18M11.53 19.5H21"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.001 10.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.001 20.25h-9.47c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M3 4.5h18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M11.531 9.5h9.47"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M3 14.5h18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M11.531 19.5h9.47"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const chooseVariant = (variant, color) => {
  switch (variant) {
    case 'Bold':
      return <Bold color={color} />;

    case 'Broken':
      return <Broken color={color} />;

    case 'Bulk':
      return <Bulk color={color} />;

    case 'Linear':
      return <Linear color={color} />;

    case 'Outline':
      return <Outline color={color} />;

    case 'TwoTone':
      return <TwoTone color={color} />;

    default:
      return <Linear color={color} />;
  }
};

const TextalignRight = forwardRef(({ variant, color, size, ...rest }, ref) => {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {chooseVariant(variant, color)}
    </svg>
  );
});
TextalignRight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
TextalignRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
TextalignRight.displayName = 'TextalignRight';

export default TextalignRight;
