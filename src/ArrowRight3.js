import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M6 9.33v5.34c0 3.32 2.35 4.67 5.22 3.02l1.28-.74c.31-.18.5-.51.5-.87V7.92c0-.36-.19-.69-.5-.87l-1.28-.74C8.35 4.66 6 6.01 6 9.33zM14 8.792v6.43c0 .39.42.63.75.43l1.1-.64c2.87-1.65 2.87-4.37 0-6.02l-1.1-.64a.503.503 0 00-.75.44z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M15.85 8.99c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V9.33c0-3.31 2.35-4.67 5.22-3.01"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M6 9.33v5.34c0 3.32 2.35 4.67 5.22 3.02l1.28-.74c.31-.18.5-.51.5-.87V7.92c0-.36-.19-.69-.5-.87l-1.28-.74C8.35 4.66 6 6.01 6 9.33z"
    ></path>
    <path
      fill={color}
      d="M14 8.79v6.43c0 .39.42.63.75.43l1.1-.64c2.87-1.65 2.87-4.37 0-6.02l-1.1-.64a.503.503 0 00-.75.44z"
      opacity=".4"
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M6 12V9.33c0-3.31 2.35-4.67 5.22-3.01l2.31 1.34L15.84 9c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V12z"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M8.9 19.15c-.63 0-1.22-.15-1.74-.45-1.23-.71-1.91-2.14-1.91-4.02V9.33c0-1.88.68-3.31 1.91-4.02 1.23-.71 2.8-.58 4.44.36l4.63 2.67c1.63.94 2.53 2.24 2.53 3.66s-.9 2.72-2.53 3.66l-4.63 2.67c-.94.55-1.86.82-2.7.82zm0-12.79c-.37 0-.71.08-1 .25-.74.43-1.15 1.39-1.15 2.72v5.34c0 1.32.41 2.29 1.16 2.72.75.43 1.79.3 2.94-.36l4.63-2.67c1.15-.66 1.78-1.5 1.78-2.36 0-.86-.63-1.7-1.78-2.36l-4.63-2.67c-.71-.41-1.37-.61-1.95-.61z"
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M6 12V9.33c0-3.31 2.35-4.67 5.22-3.01l2.31 1.34L15.84 9c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V12z"
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

const ArrowRight3 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArrowRight3.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowRight3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArrowRight3.displayName = 'ArrowRight3';

export default ArrowRight3;
