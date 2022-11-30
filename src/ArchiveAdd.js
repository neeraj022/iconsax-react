import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Zm-2.32 9.4h-1.75v1.81c0 .41-.34.75-.75.75s-.75-.34-.75-.75V11.4H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V8.21c0-.41.34-.75.75-.75s.75.34.75.75V9.9h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M14.5 10.648h-5M12 8.21v5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3.32 10.04v9.91c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86"
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
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
      fill={color}
    ></path>
    <path
      d="M14.5 9.9h-1.75V8.21c0-.41-.34-.75-.75-.75s-.75.34-.75.75V9.9H9.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.81c0 .41.34.75.75.75s.75-.34.75-.75V11.4h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M14.5 10.65h-5M12 8.21v5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
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
      d="M14.5 11.398h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M12 13.96c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M19.07 22.75c-.51 0-1.07-.15-1.61-.46l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.99.55-2 .61-2.77.15-.77-.45-1.21-1.36-1.21-2.49V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.35.21-.75.31-1.16.31ZM12 17.96c.47 0 .93.1 1.3.31l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.61.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11H7.18a3.12 3.12 0 0 0-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.17.77.12 1.28-.17l4.88-2.71c.37-.21.83-.31 1.3-.31Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <g
      opacity=".4"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 10.652h-5M12 8.21v5"></path>
    </g>
    <path
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
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

const ArchiveAdd = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArchiveAdd.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArchiveAdd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArchiveAdd.displayName = 'ArchiveAdd';

export default ArchiveAdd;
