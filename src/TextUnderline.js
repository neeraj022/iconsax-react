import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-4.12 14.83H7.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.67c.41 0 .75.34.75.75s-.34.75-.76.75Zm.75-8.34c0 3.08-2.5 5.58-5.58 5.58s-5.58-2.5-5.58-5.58V5.79c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 2.25 1.83 4.08 4.08 4.08s4.08-1.83 4.08-4.08V5.79c0-.41.34-.75.75-.75s.75.34.75.75v4.83Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M5 21h14M12 17c3.87 0 7-3.13 7-7V3M5 3v7c0 2.17.98 4.1 2.53 5.38"
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
      d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z"
      fill={color}
    ></path>
    <path
      d="M16.832 18.96h-9.66c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.67c.41 0 .75.34.75.75s-.34.75-.76.75ZM12.002 16.2c-3.08 0-5.58-2.5-5.58-5.58V5.79c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 2.25 1.83 4.08 4.08 4.08s4.08-1.83 4.08-4.08V5.79c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 3.08-2.5 5.58-5.58 5.58Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M5 21h14M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
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
      d="M19 21.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 17.75c-4.27 0-7.75-3.48-7.75-7.75V3c0-.41.34-.75.75-.75s.75.34.75.75v7c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25V3c0-.41.34-.75.75-.75s.75.34.75.75v7c0 4.27-3.48 7.75-7.75 7.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M5 21h14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
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

const TextUnderline = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
TextUnderline.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
TextUnderline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
TextUnderline.displayName = 'TextUnderline';

export default TextUnderline;
