import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M17 4H7C4 4 2 5.5 2 9v3.56c0 .37.38.6.71.45.98-.45 2.11-.62 3.3-.41 2.63.47 4.56 2.91 4.49 5.58-.01.42-.07.83-.18 1.23-.08.31.17.6.49.6H17c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5Zm-5 10.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4Z"
      fill={color}
    ></path>
    <path
      d="M5 14c-1.2 0-2.27.53-3 1.36A4 4 0 0 0 1 18c0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 5 22c1.01 0 1.93-.37 2.63-1 .31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.6 5.58c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M22 13.14V15c0 3.5-2 5-5 5H8.5M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.5 12a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 2.5 2.5M18.5 9.5v5M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4ZM6.07 19.04l-2.11-2.11M6.04 16.96l-2.11 2.11"
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
      d="M22 9v6c0 3.5-2 5-5 5H8.45c.35-.59.55-1.27.55-2 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5Z"
      fill={color}
    ></path>
    <path
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75ZM5 14c-1.2 0-2.27.53-3 1.36A4 4 0 0 0 1 18c0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 5 22c1.01 0 1.93-.37 2.63-1 .31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.6 5.58c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4ZM6.071 19.04l-2.11-2.11M6.04 16.96l-2.11 2.11"
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
      d="M17 20.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c2.86 0 4.25-1.39 4.25-4.25V9c0-2.86-1.39-4.25-4.25-4.25H7C4.14 4.75 2.75 6.14 2.75 9v6.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v6c0 3.65-2.1 5.75-5.75 5.75Z"
      fill={color}
    ></path>
    <path
      d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75ZM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM5 22.75c-1.66 0-3.22-.88-4.06-2.31C.49 19.72.25 18.87.25 18c0-2.62 2.13-4.75 4.75-4.75S9.75 15.38 9.75 18c0 .87-.24 1.72-.69 2.45-.84 1.42-2.4 2.3-4.06 2.3Zm0-8c-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.58.98 1.65 1.58 2.78 1.58A3.256 3.256 0 0 0 8.25 18c0-1.79-1.46-3.25-3.25-3.25Z"
      fill={color}
    ></path>
    <path
      d="M6.068 19.791c-.19 0-.38-.07-.53-.22l-2.11-2.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.11 2.11c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></path>
    <path
      d="M3.931 19.819c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.11-2.11c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.11 2.11c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 9.5v5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 5 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 18c0-2.21 1.79-4 4-4s4 1.79 4 4ZM6.07 19.04l-2.11-2.11M6.04 16.96l-2.11 2.11"
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

const MoneyRemove = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
MoneyRemove.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MoneyRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
MoneyRemove.displayName = 'MoneyRemove';

export default MoneyRemove;
