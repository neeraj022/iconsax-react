import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M17 2H8C5.79 2 4 3.79 4 6v7.25c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-2.21-1.79-4-4-4ZM8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-2.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-2.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 16.75V18c0 2.21 1.79 4 4 4h9c2.21 0 4-1.79 4-4v-1.25c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1Zm13.71 2.71c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M4 7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5H9c-3 0-5-2-5-5v-5.29M4 15h17M7 12h1M7 9.5h1M7 7h1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.494 18.25h.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M21 6v7.25a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6c0-2.21 1.79-4 4-4h9c2.21 0 4 1.79 4 4Z"
      fill={color}
    ></path>
    <path
      d="M8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 10.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 7.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 15.75a1 1 0 0 0-1 1V18c0 2.21 1.79 4 4 4h9c2.21 0 4-1.79 4-4v-1.25a1 1 0 0 0-1-1H5Zm12.71 3.71c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M16 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5ZM4 15h17M7 12h1M7 9.5h1M7 7h1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.494 18.25h.01"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M16 22.75H9c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h7c3.44 0 5.75 2.31 5.75 5.75v10c0 3.44-2.31 5.75-5.75 5.75Zm-7-20C6.42 2.75 4.75 4.42 4.75 7v10c0 2.58 1.67 4.25 4.25 4.25h7c2.58 0 4.25-1.67 4.25-4.25V7c0-2.58-1.67-4.25-4.25-4.25H9Z"
      fill={color}
    ></path>
    <path
      d="M21 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 10.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 7.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 19.499c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.27.11-.52.29-.71.28-.28.72-.37 1.09-.21.12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M16 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5ZM4 15h17"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7 12h1M7 9.5h1M7 7h1"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M16.494 18.25h.01"
      stroke={color}
      strokeWidth="2"
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

const ExternalDrive = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ExternalDrive.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ExternalDrive.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ExternalDrive.displayName = 'ExternalDrive';

export default ExternalDrive;
