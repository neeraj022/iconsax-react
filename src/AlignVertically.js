import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM12.75 19.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2h1.5ZM12.75 10.75h-1.5v3h1.5v-3ZM12.75 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75ZM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM15.4 5.25H8.6c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8c1.5 0 2.1-.64 2.1-2.23M12 22.002v-2.4M12 13v-2M12 2v2.69"
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
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM12.75 19.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2h1.5ZM12.75 10.75h-1.5v3h1.5v-3ZM12.75 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM12 22v-2.4M12 13v-2M12 2v2.69"
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
      d="M17.4 20H6.6c-1.92 0-2.85-.98-2.85-2.98v-1.04c0-2 .93-2.98 2.85-2.98h10.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98ZM6.6 14.5c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h10.8c1.01 0 1.35-.21 1.35-1.48v-1.04c0-1.27-.34-1.48-1.35-1.48H6.6ZM15.4 11.5H8.6c-1.92 0-2.85-.98-2.85-2.98V7.48c0-2.01.93-2.98 2.85-2.98h6.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98ZM8.6 6c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h6.8c1.01 0 1.35-.21 1.35-1.48V7.48c0-1.27-.34-1.48-1.35-1.48H8.6Z"
      fill={color}
    ></path>
    <path
      d="M12 22.752c-.41 0-.75-.34-.75-.75v-2.4c0-.41.34-.75.75-.75s.75.34.75.75v2.4c0 .41-.34.75-.75.75ZM12 13.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 5.44c-.41 0-.75-.34-.75-.75V2a.749.749 0 1 1 1.5 0v2.69c0 .42-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23ZM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 22.002v-2.4M12 13v-2M12 2v2.69"
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

const AlignVertically = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
AlignVertically.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignVertically.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
AlignVertically.displayName = 'AlignVertically';

export default AlignVertically;
