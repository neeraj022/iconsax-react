import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34ZM11.762 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14.68 6.65c-1.3-.75-2.93.19-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-2.18-1.26"
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
      d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34Z"
      fill={color}
    ></path>
    <path
      d="M11.762 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34ZM11.76 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67Z"
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
      d="M3.95 18.359c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 0 1-1.35-2.34v-7.32c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.29.17.52.37.7.59.11.13.17.3.17.47v2.56c0 .17-.06.34-.17.47-.18.22-.41.42-.68.58l-6.36 3.68c-.42.24-.88.36-1.35.36Zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.61-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.82.22 1.2 0l6.34-3.66c.04-.02.08-.05.11-.08v-1.93a.834.834 0 0 0-.12-.08l-6.33-3.65c-.19-.11-.39-.16-.6-.16Z"
      fill={color}
    ></path>
    <path
      d="M13.708 18.359c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 0 1-1.35-2.34v-7.32c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.84.49 1.35 1.36 1.35 2.34 0 .98-.5 1.85-1.35 2.34l-6.34 3.66c-.42.25-.89.37-1.35.37Zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.6-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.83.22 1.2 0l6.34-3.66c.38-.22.6-.61.6-1.04 0-.43-.22-.82-.6-1.04l-6.34-3.66c-.19-.11-.39-.16-.6-.16Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M11.762 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67Z"
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

const Forward = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Forward.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Forward.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Forward.displayName = 'Forward';

export default Forward;
