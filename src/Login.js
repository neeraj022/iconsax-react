import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M10.758 2c-.48 0-.86.38-.86.86v8.46h3.67l-1.57-1.57a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.84 2.85c.29.29.29.77 0 1.06l-2.84 2.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.56-1.56h-3.66v8.33c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.638 2 10.758 2zM3.988 11.32c-.41 0-.75.34-.75.75s.34.75.75.75h5.9v-1.5h-5.9z"
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
      d="M11.68 14.56L14.24 12l-2.56-2.56M9 12h5.17M4 12h1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      fill={color}
      d="M10.76 2c-.48 0-.86.38-.86.86v18.29c0 .47.38.86.86.86 5.89 0 10-4.11 10-10S16.64 2 10.76 2z"
      opacity=".4"
    ></path>
    <path
      fill={color}
      d="M15.9 11.54l-2.84-2.85a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56H3.99c-.41 0-.75.34-.75.75s.34.75.75.75h9.57L12 14.38c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.29.3-.76 0-1.05z"
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
      d="M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      fill={color}
      d="M11.68 15.37c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.03-2.03-2.03-2.03a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.14.15-.34.22-.53.22z"
    ></path>
    <path
      fill={color}
      d="M14.17 12.81H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.17c.41 0 .75.34.75.75s-.34.75-.75.75z"
    ></path>
    <path
      fill={color}
      d="M12 20.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.25-2.98 7.25-7.25S16.27 4.75 12 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.15 0 8.75 3.6 8.75 8.75s-3.6 8.75-8.75 8.75z"
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <g opacity=".4">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"
      ></path>
    </g>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
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

const Login = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Login.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Login.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Login.displayName = 'Login';

export default Login;
