import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M19 7c-.14 0-.25.11-.25.25V12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-.14-.11-.25-.25-.25h-2c-.14 0-.25.11-.25.25V9.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-.14-.11-.25-.25-.25h-1.96c-.14 0-.25.11-.25.25l-.04 4.76c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76l.04-4.74c0-.14-.11-.25-.25-.25H7c-.14 0-.25.11-.25.25v3.55c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25C5.25 7.11 5.14 7 5 7c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M22 10c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3h14c2 0 3-1 3-3M18 7v5M6 7v4M10.05 7 10 12M14 7v3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M5 17h14c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3H5c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3Z"
      fill={color}
    ></path>
    <path
      d="M18.75 7v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h1.5ZM6.75 7v3.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h1.5ZM10.79 7l-.04 5.01c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76L9.29 7h1.5ZM14.75 7v2.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7h1.5Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3zM18 7v5M6 7v4M10.05 7L10 12M14 7v3"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M19 17.75H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h14c2.42 0 3.75 1.33 3.75 3.75v4c0 2.42-1.33 3.75-3.75 3.75Zm-14-10c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h14c1.58 0 2.25-.67 2.25-2.25v-4c0-1.58-.67-2.25-2.25-2.25H5Z"
      fill={color}
    ></path>
    <path
      d="M18 12.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM6 11.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM10 12.75c-.42 0-.75-.34-.75-.76l.05-5c0-.41.34-.74.75-.74h.01c.41 0 .75.34.74.76l-.05 5c0 .41-.34.74-.75.74ZM14 10.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    ></path>
    <path
      opacity=".4"
      d="M18 7v5M6 7v4M10.05 7 10 12M14 7v3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
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

const Ruler = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Ruler.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Ruler.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Ruler.displayName = 'Ruler';

export default Ruler;
