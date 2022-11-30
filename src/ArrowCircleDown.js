import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.06 9.27l-3.53 3.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-3.53-3.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06z"
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
      d="M4.87 4.99A9.936 9.936 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.47 10.74L12 14.26l3.53-3.52"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      opacity=".4"
    ></path>
    <path
      fill={color}
      d="M12 15.01c-.19 0-.38-.07-.53-.22l-3.53-3.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.47 10.74L12 14.26l3.53-3.52"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
    ></path>
    <path
      fill={color}
      d="M12 15.01c-.19 0-.38-.07-.53-.22l-3.53-3.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3 3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22z"
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.47 10.74L12 14.26l3.53-3.52"
      opacity=".4"
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

const ArrowCircleDown = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArrowCircleDown.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowCircleDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArrowCircleDown.displayName = 'ArrowCircleDown';

export default ArrowCircleDown;
