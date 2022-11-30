import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M21 3.148H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM4.04 6.238h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.11 7.948c-.48-.74.05-1.71.93-1.71z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M2 3.031h20M3.7 9l-.59-.93c-.48-.74.06-1.71.93-1.71h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0l-5.26-8.18"
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
    <path
      d="M21 3.148H3c-.41 0-.75.34-.75.75s.34.75.75.75h18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM4.04 6.238h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.1 7.948c-.47-.74.06-1.71.94-1.71Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M2 3h20M4 6.4h16c.9 0 1.4 1 .9 1.7l-8 12.4c-.4.7-1.4.7-1.9 0L3 8.1c-.4-.8.2-1.7 1-1.7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M22 3.781H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 21.72c-.64 0-1.22-.32-1.57-.85L2.47 8.48c-.37-.57-.39-1.3-.07-1.9.33-.6.95-.97 1.63-.97h15.93c.68 0 1.31.37 1.63.97.33.6.3 1.33-.07 1.9l-7.96 12.39c-.34.53-.92.85-1.56.85ZM4.04 7.11c-.19 0-.29.13-.32.19-.03.06-.09.21.01.37l7.96 12.39c.09.14.23.17.3.17.07 0 .21-.02.3-.17l7.96-12.39c.1-.16.04-.31.01-.37a.344.344 0 0 0-.32-.19H4.04Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M2 3.031h20"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M4.04 6.36h15.93c.88 0 1.41.97.93 1.71l-7.96 12.39c-.44.68-1.43.68-1.87 0L3.11 8.07c-.48-.74.05-1.71.93-1.71Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
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

const Velas = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Velas.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Velas.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Velas.displayName = 'Velas';

export default Velas;
