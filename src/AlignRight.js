import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M4.62 15.98v1.04c0 1.59.6 2.23 2.12 2.23h11.88v-5.5H6.74c-1.52 0-2.12.64-2.12 2.23ZM9.62 7.48v1.04c0 1.59.61 2.23 2.12 2.23h6.88v-5.5h-6.88c-1.51 0-2.12.64-2.12 2.23Z"
      fill={color}
    ></path>
    <path
      d="M18.62 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c.01.41-.33.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M18.9 19.25H7.1c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h11.8M10 8.52c0 1.59.6 2.23 2.1 2.23h6.8M18.9 5.25h-6.8M19 1.988v20"
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
      d="M4.62 15.98v1.04c0 1.59.6 2.23 2.12 2.23h11.88v-5.5H6.74c-1.52 0-2.12.64-2.12 2.23Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M9.62 7.48v1.04c0 1.59.61 2.23 2.12 2.23h6.88v-5.5h-6.88c-1.51 0-2.12.64-2.12 2.23Z"
      fill={color}
    ></path>
    <path
      d="M18.62 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c.01.41-.33.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M18.9 19.25H7.1c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h11.8M18.9 5.25h-6.8c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8M19 1.99v20"
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
      d="M18.9 20H7.1c-1.92 0-2.85-.98-2.85-2.98v-1.04c0-2 .93-2.98 2.85-2.98h11.8c.41 0 .75.34.75.75s-.34.75-.75.75H7.1c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h11.8c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.9 11.5h-6.8c-1.92 0-2.85-.98-2.85-2.98V7.48c0-2.01.93-2.98 2.85-2.98h6.8c.41 0 .75.34.75.75s-.34.75-.75.75h-6.8c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h6.8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M19 22.738c-.41 0-.75-.34-.75-.75v-20c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M18.9 19.25H7.1c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h11.8M18.9 5.25h-6.8c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M19 1.988v20"
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

const AlignRight = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
AlignRight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
AlignRight.displayName = 'AlignRight';

export default AlignRight;
