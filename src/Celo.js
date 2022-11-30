import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path fill={color} d="M9 22A7 7 0 109 8a7 7 0 000 14z"></path>
    <path
      fill={color}
      d="M22 9a6.97 6.97 0 01-3.86 6.25c-.31.16-.66-.09-.69-.43a8.959 8.959 0 00-8.27-8.27c-.35-.03-.59-.38-.43-.69A6.97 6.97 0 0115 2c3.87 0 7 3.13 7 7z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M5.09 9.2C6.21 8.45 7.55 8 9 8c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7c0-.71.1-1.39.3-2.03"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path opacity=".4" d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" fill={color}></path>
    <path d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z" fill={color}></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M15 16.75c-4.27 0-7.75-3.48-7.75-7.75S10.73 1.25 15 1.25 22.75 4.73 22.75 9s-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Z"
      fill={color}
    ></path>
    <path
      d="M9 22.75c-4.27 0-7.75-3.48-7.75-7.75S4.73 7.25 9 7.25s7.75 3.48 7.75 7.75-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25S12.45 8.75 9 8.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z"
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

const Celo = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Celo.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Celo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Celo.displayName = 'Celo';

export default Celo;
