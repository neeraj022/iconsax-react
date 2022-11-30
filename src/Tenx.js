import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.79 10.71l-1.84 1.84a.996.996 0 01-1.41 0L12 12l-2.54 2.54a.996.996 0 01-1.41 0L6.21 12.7a.996.996 0 010-1.41l1.84-1.84a.996.996 0 011.41 0L12 12l2.54-2.54a.996.996 0 011.41 0l1.84 1.84c.39.38.39 1.02 0 1.41z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M12 12 8.75 8.75 5.5 12l3.25 3.25 6.5-6.5L18.5 12l-3.25 3.25L12 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></path>
    <path
      d="M12 12 9.46 9.46a.996.996 0 0 0-1.41 0L6.21 11.3a.996.996 0 0 0 0 1.41l1.84 1.84c.39.39 1.02.39 1.41 0l5.09-5.09a.996.996 0 0 1 1.41 0l1.84 1.84c.39.39.39 1.02 0 1.41l-1.84 1.84a.996.996 0 0 1-1.41 0L12 12Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M12 12 8.8 8.8 5.5 12l3.3 3.2 6.4-6.4 3.3 3.2-3.3 3.2L12 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M15.25 16.001c-.19 0-.38-.07-.53-.22L12 13.061l-2.72 2.72c-.29.29-.77.29-1.06 0l-3.25-3.25a.754.754 0 0 1 0-1.06l3.25-3.25c.29-.29.77-.29 1.06 0l2.72 2.72 2.72-2.72c.29-.29.77-.29 1.06 0l3.25 3.25c.29.29.29.77 0 1.06l-3.25 3.25c-.15.15-.34.22-.53.22Zm-2.19-4 2.19 2.19 2.19-2.19-2.19-2.19-2.19 2.19Zm-6.5 0 2.19 2.19 2.19-2.19-2.19-2.19-2.19 2.19Z"
      fill={color}
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M12 12 8.75 8.75 5.5 12l3.25 3.25 6.5-6.5L18.5 12l-3.25 3.25L12 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
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

const Tenx = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Tenx.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Tenx.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Tenx.displayName = 'Tenx';

export default Tenx;
