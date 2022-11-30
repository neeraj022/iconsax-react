import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75ZM7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75ZM12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75ZM16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75ZM21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M3 8.25v7.5M7.5 5.75v12.5M12 9.96v10.79M12 3.25v2.72M16.5 5.75v12.5M21 8.25v7.5"
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
      d="M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M3 8.25v7.5M7.5 5.75v12.5M12 3.25v17.5M16.5 5.75v12.5M21 8.25v7.5"
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
      d="M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75ZM7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75ZM12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75ZM16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75ZM21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M3 8.25v7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7.5 5.75v12.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 3.25v17.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M16.5 5.75v12.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M21 8.25v7.5"
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

const Sound = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Sound.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Sound.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Sound.displayName = 'Sound';

export default Sound;
