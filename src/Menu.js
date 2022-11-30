import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM17.54 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM6.46 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM8.92 5.85c0-1.36-1.1-2.46-2.46-2.46C5.1 3.39 4 4.49 4 5.85c0 1.36 1.1 2.46 2.46 2.46M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46 0-1.36-1.1-2.46-2.46-2.46-1.36 0-2.46 1.1-2.46 2.46M6.46 20.611a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
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
      opacity=".4"
      d="M17.54 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      fill={color}
    ></path>
    <path
      d="M6.46 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92ZM17.54 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M6.46 21.111a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM17.54 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
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
      d="M17.54 9.06c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21Zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71ZM6.46 9.06c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21Zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.76-1.71-1.71-1.71ZM17.54 21.37c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21Zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71ZM6.46 21.37c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21Zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.76-1.71-1.71-1.71Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M6.46 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM17.54 20.611a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M6.46 20.611a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
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

const Menu = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Menu.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Menu.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Menu.displayName = 'Menu';

export default Menu;
