import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M15.59 5h-.34V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3h-3.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3h-.34C7.36 5 6.5 5.86 6.5 6.91V12c0 2.2 1.5 4 4 4h.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-6h.75c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M17.5 7.96V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12c0 2.2 1.5 4 4 4h3c2.5 0 4-1.8 4-4M9.5 2v3M14.5 2v3M12 22v-6"
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
      d="M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16Z"
      fill={color}
    ></path>
    <path
      d="M10.25 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75ZM15.25 2v3h-1.5V2c0-.41.34-.75.75-.75s.75.34.75.75ZM12.75 16v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6h1.5Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16ZM9.5 2v3M14.5 2v3M12 22v-6"
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
      d="M13.5 16.75h-3c-2.75 0-4.75-2-4.75-4.75V6.92c0-1.47 1.2-2.67 2.67-2.67h7.17c1.47 0 2.67 1.2 2.67 2.67V12c-.01 2.75-2.01 4.75-4.76 4.75Zm-5.08-11c-.64 0-1.17.52-1.17 1.17V12c0 1.62 1 3.25 3.25 3.25h3c2.25 0 3.25-1.63 3.25-3.25V6.92c0-.64-.52-1.17-1.17-1.17H8.42Z"
      fill={color}
    ></path>
    <path
      d="M9.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM14.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M10.5 16h3c2.5 0 4-1.8 4-4V6.91c0-1.05-.86-1.91-1.91-1.91H8.42c-1.05 0-1.91.86-1.91 1.91V12C6.5 14.2 8 16 10.5 16Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M9.5 2v3M14.5 2v3M12 22v-6"
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

const Electricity = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Electricity.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Electricity.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Electricity.displayName = 'Electricity';

export default Electricity;
