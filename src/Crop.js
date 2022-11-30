import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M5.53 2c-.42 0-.75.34-.75.75v2.03H2.75a.749.749 0 1 0 0 1.5h2.78c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75ZM21.25 17.719h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></path>
    <path
      d="M16.72 18.47c0-.96.79-1.75 1.75-1.75h.69v-6.67c0-2.89-2.34-5.23-5.23-5.23H7.28v.69c0 .96-.79 1.75-1.75 1.75h-.7v6.67c0 2.89 2.34 5.23 5.23 5.23h6.67v-.69h-.01Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M9.98 5H5v9.1C5 18 6 19 9.9 19H19V9.9C19 6 18 5 14.1 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 5V2M5 5H2M19 19v3M19 19h3"
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
      d="M13.94 4.828H6.83c-1.1 0-2 .9-2 2v7.11c0 2.89 2.34 5.23 5.23 5.23h7.11c1.1 0 2-.9 2-2v-7.11c0-2.89-2.34-5.23-5.23-5.23Z"
      fill={color}
    ></path>
    <path
      d="M5.53 2c-.42 0-.75.34-.75.75v2.03H2.75a.749.749 0 1 0 0 1.5h2.78c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75ZM21.25 17.719h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5v9.1C5 18 6 19 9.9 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 5V2M5 5H2M19 19v3M19 19h3"
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
      d="M19 19.75H9.9c-4.33 0-5.65-1.32-5.65-5.65V5c0-.41.34-.75.75-.75h9.1c4.33 0 5.65 1.32 5.65 5.65V19c0 .41-.34.75-.75.75Zm-13.25-14v8.35c0 3.49.66 4.15 4.15 4.15h8.35V9.9c0-3.49-.66-4.15-4.15-4.15H5.75Z"
      fill={color}
    ></path>
    <path
      d="M5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M5 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM19 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M22 19.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5v9.1C5 18 6 19 9.9 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 5V2M5 5H2M19 19v3M19 19h3"
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

const Crop = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Crop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Crop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Crop.displayName = 'Crop';

export default Crop;
