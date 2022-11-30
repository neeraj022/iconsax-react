import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.3 14.69a.763.763 0 01-.99-.39L12 8.85l-1.07 2.4H12c.41 0 .75.34.75.75s-.34.75-.75.75h-1.73L8.69 16.3a.75.75 0 01-1.37-.61l1.31-2.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.29l2.02-4.55c.24-.54 1.13-.54 1.37 0l4 9c.17.38 0 .83-.38 1z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="m8 16 4-9 4 9M8 12h4"
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
      d="m16.69 15.702-4-9c-.24-.54-1.13-.54-1.37 0l-2.02 4.55H8c-.41 0-.75.34-.75.75s.34.75.75.75h.62l-1.31 2.95c-.17.38 0 .82.38.99.38.17.82 0 .99-.38l1.58-3.55H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.07l1.07-2.4 3.31 7.46c.12.28.4.45.69.45.1 0 .21-.02.3-.06.38-.19.55-.64.39-1.01Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="m8 16 4-9 4 9M8 12h4"
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
      d="M16 16.752c-.29 0-.56-.17-.69-.45L12 8.852l-3.31 7.46a.75.75 0 0 1-.99.38c-.38-.17-.55-.61-.38-.99l4-9c.24-.54 1.13-.54 1.37 0l4 9c.17.38 0 .82-.38.99-.1.04-.21.06-.31.06Z"
      fill={color}
    ></path>
    <path
      d="M12 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
    <g
      opacity=".4"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 16 4-9 4 9M8 12h4"></path>
    </g>
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

const Aave = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Aave.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Aave.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Aave.displayName = 'Aave';

export default Aave;
