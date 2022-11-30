import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM5 14.52c.41 0 .75-.34.75-.75V5.31l12.72 12.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L6.81 4.25h8.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v10.27c0 .41.34.75.75.75z"
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
      d="M7.41 5.91L5 3.5M19 17.5l-8.38-8.38M19 7.23V17.5H8.73M3.5 22h17"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M20.5 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8z"
      opacity=".4"
    ></path>
    <path
      fill={color}
      d="M18.998 18.2c-.2 0-.4-.1-.5-.2l-14-14c-.3-.3-.3-.7 0-1 .3-.3.8-.3 1.1 0l14 14c.3.3.3.8 0 1.1-.2.1-.4.1-.6.1z"
    ></path>
    <path
      fill={color}
      d="M5 14.5c-.4 0-.8-.3-.8-.8V3.5c0-.4.3-.8.8-.8h10.3c.4 0 .8.3.8.8s-.3.8-.8.8H5.8v9.5c0 .4-.4.7-.8.7z"
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
      d="M3.5 22h17M5 3.5l14 14M5 13.77V3.5h10.27"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM19 18.25c-.19 0-.38-.07-.53-.22l-14-14a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l14 14c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
    ></path>
    <path
      fill={color}
      d="M5 14.52c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75h10.27c.41 0 .75.34.75.75s-.34.75-.75.75H5.75v9.52c0 .41-.34.75-.75.75z"
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
      d="M3.5 22h17"
      opacity=".4"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M5 3.5l14 14M5 13.77V3.5h10.27"
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

const Transmit = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Transmit.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Transmit.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Transmit.displayName = 'Transmit';

export default Transmit;
