import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M21.5 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04C13.64 2 13 2.6 13 4.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.73c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1ZM21.5 19.9v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04C10.36 9 11 8.4 11 6.9Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M15.73 2c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1M22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM4.23 22C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1v6.8c0 1.5-.64 2.1-2.23 2.1M10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1Z"
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
      d="M21.5 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04C13.64 2 13 2.6 13 4.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.73c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M21.5 19.9v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04C10.36 9 11 8.4 11 6.9Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M22 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM10.5 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1ZM10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1Z"
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
      d="M19.77 13.75h-4.04c-2.01 0-2.98-.93-2.98-2.85V4.1c0-1.92.98-2.85 2.98-2.85h4.04c2.01 0 2.98.93 2.98 2.85v6.8c0 1.92-.98 2.85-2.98 2.85Zm-4.04-11c-1.27 0-1.48.34-1.48 1.35v6.8c0 1.01.21 1.35 1.48 1.35h4.04c1.27 0 1.48-.34 1.48-1.35V4.1c0-1.01-.21-1.35-1.48-1.35h-4.04ZM19.77 22.75h-4.04c-2.01 0-2.98-.93-2.98-2.85v-1.8c0-1.92.98-2.85 2.98-2.85h4.04c2.01 0 2.98.93 2.98 2.85v1.8c0 1.92-.98 2.85-2.98 2.85Zm-4.04-6c-1.27 0-1.48.34-1.48 1.35v1.8c0 1.01.21 1.35 1.48 1.35h4.04c1.27 0 1.48-.34 1.48-1.35v-1.8c0-1.01-.21-1.35-1.48-1.35h-4.04ZM8.27 22.75H4.23c-2.01 0-2.98-.93-2.98-2.85v-6.8c0-1.92.98-2.85 2.98-2.85h4.04c2.01 0 2.98.93 2.98 2.85v6.8c0 1.92-.98 2.85-2.98 2.85Zm-4.04-11c-1.27 0-1.48.34-1.48 1.35v6.8c0 1.01.21 1.35 1.48 1.35h4.04c1.27 0 1.48-.34 1.48-1.35v-6.8c0-1.01-.21-1.35-1.48-1.35H4.23ZM8.27 8.75H4.23c-2.01 0-2.98-.93-2.98-2.85V4.1c0-1.92.98-2.85 2.98-2.85h4.04c2.01 0 2.98.93 2.98 2.85v1.8c0 1.92-.98 2.85-2.98 2.85Zm-4.04-6c-1.27 0-1.48.34-1.48 1.35v1.8c0 1.01.21 1.35 1.48 1.35h4.04c1.27 0 1.48-.34 1.48-1.35V4.1c0-1.01-.21-1.35-1.48-1.35H4.23Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M22 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10.5 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1Z"
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

const Element4 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Element4.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Element4.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Element4.displayName = 'Element4';

export default Element4;
