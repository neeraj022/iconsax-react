import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M12 18.5v.88c0 1.87-.75 2.62-2.63 2.62H4.62C3.17 22 2 20.83 2 19.38v-4.75C2 12.75 2.75 12 4.62 12h.88v3.5c0 1.66 1.34 3 3 3H12Z"
      fill={color}
    ></path>
    <path
      d="M17 13.5v.87c0 1.45-1.18 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7h.88v3.5c0 1.66 1.34 3 3 3H17Z"
      fill={color}
    ></path>
    <path
      d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 9.37c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62"
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
      d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12Z"
      fill={color}
    ></path>
    <path
      opacity=".6"
      d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17Z"
      fill={color}
    ></path>
    <path
      d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62Z"
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
      d="M9.37 22.75H4.62c-2.3 0-3.37-1.07-3.37-3.37v-4.75c0-2.31 1.07-3.38 3.37-3.38H7c.41 0 .75.34.75.75v2.37c0 1.46.42 1.88 1.87 1.88H12c.41 0 .75.34.75.75v2.38c0 2.3-1.07 3.37-3.38 3.37Zm-4.75-10c-1.45 0-1.87.42-1.87 1.88v4.75c0 1.45.42 1.87 1.87 1.87h4.75c1.46 0 1.88-.42 1.88-1.87v-1.63H9.62c-2.3 0-3.37-1.07-3.37-3.38v-1.62H4.62Z"
      fill={color}
    ></path>
    <path
      d="M14.37 17.75H9.62c-2.3 0-3.37-1.07-3.37-3.38V9.62c0-2.3 1.07-3.37 3.37-3.37H12c.41 0 .75.34.75.75v2.37c0 1.46.42 1.88 1.87 1.88H17c.41 0 .75.34.75.75v2.37c0 2.31-1.07 3.38-3.38 3.38Zm-4.75-10c-1.45 0-1.87.42-1.87 1.87v4.75c0 1.46.42 1.88 1.87 1.88h4.75c1.46 0 1.88-.42 1.88-1.88v-1.62h-1.63c-2.3 0-3.37-1.07-3.37-3.38V7.75H9.62Z"
      fill={color}
    ></path>
    <path
      d="M19.37 12.75h-4.75c-2.3 0-3.37-1.07-3.37-3.38V4.62c0-2.3 1.07-3.37 3.37-3.37h4.75c2.31 0 3.38 1.07 3.38 3.37v4.75c0 2.31-1.07 3.38-3.38 3.38Zm-4.75-10c-1.45 0-1.87.42-1.87 1.87v4.75c0 1.46.42 1.88 1.87 1.88h4.75c1.46 0 1.88-.42 1.88-1.88V4.62c0-1.45-.42-1.87-1.88-1.87h-4.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M12 17v2.38c0 1.87-.75 2.62-2.63 2.62H4.62C2.75 22 2 21.25 2 19.38v-4.75C2 12.75 2.75 12 4.62 12H7v2.37C7 16.25 7.75 17 9.62 17H12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17 12v2.37c0 1.88-.75 2.63-2.63 2.63H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12v2.37c0 1.88.75 2.63 2.62 2.63H17Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2h4.75C21.25 2 22 2.75 22 4.62Z"
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

const I3Square = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
I3Square.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
I3Square.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
I3Square.displayName = 'I3Square';

export default I3Square;
