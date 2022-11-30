import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M19.75 9c0-4.27-3.48-7.75-7.75-7.75S4.25 4.73 4.25 9c0 .41.34.75.75.75s.75-.34.75-.75c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71Z"
      fill={color}
    ></path>
    <path
      d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6M15 19H9"
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
      d="M19.75 9c0-4.27-3.48-7.75-7.75-7.75S4.25 4.73 4.25 9c0 .41.34.75.75.75s.75-.34.75-.75c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c3.92-.38 7-3.69 7-7.71Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6M15 19H9"
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
      d="M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.45 0 6.25-2.8 6.25-6.25S15.45 2.75 12 2.75 5.75 5.55 5.75 9c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 3.48-7.75 7.75-7.75S19.75 4.73 19.75 9s-3.48 7.75-7.75 7.75Z"
      fill={color}
    ></path>
    <path
      d="M12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7M12 16v6"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M15 19H9"
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

const Aquarius = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Aquarius.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Aquarius.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Aquarius.displayName = 'Aquarius';

export default Aquarius;
