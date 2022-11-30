import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z"
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
      d="M16.01 12.85l-2.62 2.62c-.77.77-2.03.77-2.8 0L4.08 8.95M19.92 8.95l-1.04 1.04"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M15.48 13.23l-3.79-5.05H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97z"
      opacity=".4"
    ></path>
    <path fill={color} d="M17.92 8.18h-6.23l3.79 5.05 3.21-3.21c.67-.68.19-1.84-.77-1.84z"></path>
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
      d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8z"
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
      d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
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

const ArrowDown2 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArrowDown2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowDown2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArrowDown2.displayName = 'ArrowDown2';

export default ArrowDown2;
