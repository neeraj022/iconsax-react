import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M18.68 13.978l-3.21-3.21-1.96-1.97a2.13 2.13 0 00-3.01 0l-5.18 5.18c-.68.68-.19 1.84.76 1.84h11.84c.96 0 1.44-1.16.76-1.84z"
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
      d="M16.01 11.15L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52M19.92 15.05l-1.04-1.04"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M15.48 10.77l-3.79 5.05H6.08c-.96 0-1.44-1.16-.76-1.84L10.5 8.8a2.13 2.13 0 013.01 0l1.97 1.97z"
      opacity=".4"
    ></path>
    <path fill={color} d="M17.92 15.82h-6.23l3.79-5.05 3.21 3.21c.67.68.19 1.84-.77 1.84z"></path>
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
      d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M19.92 15.8c-.19 0-.38-.07-.53-.22l-6.52-6.52c-.48-.48-1.26-.48-1.74 0l-6.52 6.52c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06L10.07 8a2.74 2.74 0 013.86 0l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"
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
      d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
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

const ArrowUp2 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArrowUp2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowUp2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArrowUp2.displayName = 'ArrowUp2';

export default ArrowUp2;
