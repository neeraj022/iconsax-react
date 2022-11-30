import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm.03 14.23c-2.34 0-4.23-1.89-4.23-4.23 0-2.34 1.89-4.23 4.23-4.23 2.34 0 4.23 1.89 4.23 4.23 0 2.34-1.89 4.23-4.23 4.23Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M16.23 12c0-2.34-1.89-4.23-4.23-4.23-2.34 0-4.23 1.89-4.23 4.23 0 2.34 1.89 4.23 4.23 4.23.57 0 1.11-.11 1.6-.31"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
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
      d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      fill={color}
    ></path>
    <path d="M12 16.23a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46Z" fill={color}></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 16.23a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46Z"
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
      d="M11.969 22.75c-5.92 0-10.75-4.82-10.75-10.75s4.83-10.75 10.75-10.75S22.719 6.07 22.719 12s-4.82 10.75-10.75 10.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z"
      fill={color}
    ></path>
    <path
      d="M12 16.98a4.98 4.98 0 1 1 0-9.961 4.98 4.98 0 0 1 0 9.96Zm0-8.46c-1.92 0-3.48 1.56-3.48 3.48s1.56 3.48 3.48 3.48 3.48-1.56 3.48-3.48S13.92 8.52 12 8.52Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M11.969 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12 16.23a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46Z"
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

const RecordCircle = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
RecordCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
RecordCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
RecordCircle.displayName = 'RecordCircle';

export default RecordCircle;
