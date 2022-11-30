import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M9.32 13.281h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92ZM8.5 4.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.5 20.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM4.5 12.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M21.998 12.63c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.66.75-.13 1.92.87 1.92h3.09v7.2c0 1.06 1.32 1.56 2.02.76l4.63-5.26M8.5 4h-7M7.5 20h-6M4.5 12h-3"
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
      d="M9.32 13.281h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M8.5 4.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.5 20.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM4.5 12.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M9.32 13.28h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92ZM8.5 4h-7M7.5 20h-6M4.5 12h-3"
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
      d="M13.572 22.38c-.23 0-.46-.04-.68-.12a1.88 1.88 0 0 1-1.23-1.78v-6.45h-2.34c-.76 0-1.42-.43-1.73-1.12-.31-.69-.19-1.47.31-2.04l7.57-8.6c.53-.6 1.35-.81 2.1-.52.75.28 1.23.98 1.23 1.78v6.45h2.34c.76 0 1.42.43 1.73 1.12.31.69.19 1.47-.31 2.04l-7.57 8.6c-.37.42-.89.64-1.42.64Zm3.31-19.26c-.09 0-.2.03-.29.14l-7.57 8.61c-.16.18-.1.36-.07.43s.13.24.37.24h3.09c.41 0 .75.34.75.75v7.2c0 .25.18.35.26.38.08.03.28.08.44-.11l7.57-8.61c.16-.18.1-.36.07-.43a.39.39 0 0 0-.37-.24h-3.09c-.41 0-.75-.34-.75-.75v-7.2c0-.25-.18-.35-.26-.38a.306.306 0 0 0-.15-.03ZM8.5 4.75h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.5 20.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM4.5 12.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M9.32 13.281h3.09v7.2c0 1.06 1.32 1.56 2.02.76l7.57-8.6c.66-.75.13-1.92-.87-1.92h-3.09v-7.2c0-1.06-1.32-1.56-2.02-.76l-7.57 8.6c-.65.75-.12 1.92.87 1.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M8.5 4h-7M7.5 20h-6M4.5 12h-3"
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

const Flashy = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Flashy.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Flashy.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Flashy.displayName = 'Flashy';

export default Flashy;
