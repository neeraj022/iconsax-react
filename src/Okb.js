import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M17 7c0 2.76-2.24 5-5 5 2.76 0 5 2.24 5 5 2.76 0 5-2.24 5-5s-2.24-5-5-5z"
    ></path>
    <path
      fill={color}
      d="M12 12c0 2.76-2.24 5-5 5 0 2.76 2.24 5 5 5s5-2.24 5-5c-2.76 0-5-2.24-5-5zM12 12c0-2.76 2.24-5 5-5 0-2.76-2.24-5-5-5S7 4.24 7 7c2.76 0 5 2.24 5 5z"
    ></path>
    <path
      fill={color}
      d="M12 12c-2.76 0-5-2.24-5-5-2.76 0-5 2.24-5 5s2.24 5 5 5c0-2.76 2.24-5 5-5z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2.81 9.27A5.003 5.003 0 0 0 7 17c2.76 0 5-2.24 5-5S9.76 7 7 7c-.35 0-.68.03-1.01.1"
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
      d="M22 12c0 2.76-2.24 5-5 5 0-2.76-2.24-5-5-5 2.76 0 5-2.24 5-5 2.76 0 5 2.24 5 5Z"
      fill={color}
    ></path>
    <path d="M17 17c-2.76 0-5-2.24-5-5 2.76 0 5 2.24 5 5Z" fill={color}></path>
    <path
      opacity=".4"
      d="M17 17c0 2.76-2.24 5-5 5s-5-2.24-5-5c2.76 0 5-2.24 5-5 0 2.76 2.24 5 5 5Z"
      fill={color}
    ></path>
    <path d="M17 7c0 2.76-2.24 5-5 5 0-2.76 2.24-5 5-5Z" fill={color}></path>
    <path
      opacity=".4"
      d="M17 7c-2.76 0-5 2.24-5 5 0-2.76-2.24-5-5-5 0-2.76 2.24-5 5-5s5 2.24 5 5Z"
      fill={color}
    ></path>
    <path
      d="M12 12c0 2.76-2.24 5-5 5 0-2.76 2.24-5 5-5ZM12 12c-2.76 0-5-2.24-5-5 2.76 0 5 2.24 5 5Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M12 12c-2.76 0-5 2.24-5 5-2.76 0-5-2.24-5-5s2.24-5 5-5c0 2.76 2.24 5 5 5Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10Z"
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
      d="M17 17.75c-3.17 0-5.75-2.58-5.75-5.75S13.83 6.25 17 6.25s5.75 2.58 5.75 5.75-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 12.75 12 4.26 4.26 0 0 0 17 16.25 4.26 4.26 0 0 0 21.25 12 4.26 4.26 0 0 0 17 7.75Z"
      fill={color}
    ></path>
    <path
      d="M12 22.75c-3.17 0-5.75-2.58-5.75-5.75s2.58-5.75 5.75-5.75 5.75 2.58 5.75 5.75-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 17 4.26 4.26 0 0 0 12 21.25 4.26 4.26 0 0 0 16.25 17 4.26 4.26 0 0 0 12 12.75Z"
      fill={color}
    ></path>
    <path
      d="M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75Z"
      fill={color}
    ></path>
    <path
      d="M7 17.75c-3.17 0-5.75-2.58-5.75-5.75S3.83 6.25 7 6.25s5.75 2.58 5.75 5.75-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 2.75 12 4.26 4.26 0 0 0 7 16.25 4.26 4.26 0 0 0 11.25 12 4.26 4.26 0 0 0 7 7.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g
      opacity=".4"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"></path>
    </g>
    <path
      d="M7 17A5 5 0 1 0 7 7a5 5 0 0 0 0 10Z"
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

const Okb = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Okb.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Okb.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Okb.displayName = 'Okb';

export default Okb;
