import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2ZM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      fill={color}
    ></path>
    <path
      opacity=".96"
      d="M16 13.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.75V18c0 1.52 1.23 2.75 2.75 2.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75H16Z"
      fill={color}
    ></path>
    <path
      d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2ZM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 5h7"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path d="M12.5 16.36V18c0 1.1.9 2 2 2H16" fill="#fff"></path>
    <path
      d="M12.5 16.36V18c0 1.1.9 2 2 2H16M12.5 5v7.32M16 12.5h-3.5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
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
      d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2ZM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      fill={color}
    ></path>
    <path
      opacity=".37"
      d="M16 13.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.75V18c0 1.52 1.23 2.75 2.75 2.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75H16Z"
      fill={color}
    ></path>
    <path
      d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2ZM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 5h7"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path d="M12.5 5v13c0 1.1.9 2 2 2H16" fill="#fff"></path>
    <path
      d="M12.5 5v13c0 1.1.9 2 2 2H16M12.5 12.5H16"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M7 8.75H4C2.48 8.75 1.25 7.52 1.25 6V4c0-1.52 1.23-2.75 2.75-2.75h3c1.52 0 2.75 1.23 2.75 2.75v2c0 1.52-1.23 2.75-2.75 2.75Zm-3-6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25H4ZM20.8 7.75h-3.6c-1.08 0-1.95-.88-1.95-1.95V4.2c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95Zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45V4.2c0-.24-.21-.45-.45-.45h-3.6ZM20.8 15.25h-3.6c-1.08 0-1.95-.88-1.95-1.95v-1.6c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95Zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45v-1.6c0-.24-.21-.45-.45-.45h-3.6Z"
      fill={color}
    ></path>
    <path
      d="M16 5.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path d="M12.5 5v13c0 1.1.9 2 2 2H16" fill="#fff"></path>
    <path
      d="M16 20.75h-1.5c-1.52 0-2.75-1.23-2.75-2.75V5c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .69.56 1.25 1.25 1.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M16 13.25h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.8 22.75h-3.6c-1.08 0-1.95-.88-1.95-1.95v-1.6c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95Zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45v-1.6c0-.24-.21-.45-.45-.45h-3.6Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2ZM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4">
      <path
        d="M9 5h7"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M12.5 5v13c0 1.1.9 2 2 2H16" fill="#fff"></path>
      <path
        d="M12.5 5v13c0 1.1.9 2 2 2H16M12.5 12.5H16"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <path
      d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
      stroke={color}
      strokeWidth="1.5"
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

const Data2 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Data2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Data2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Data2.displayName = 'Data2';

export default Data2;
