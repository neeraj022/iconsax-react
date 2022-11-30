import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M8.02 4.621H6.98c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.741c-.01-1.52-.65-2.12-2.23-2.12ZM16.52 9.621h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12Z"
      fill={color}
    ></path>
    <path
      d="M2.75 17.879h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.76s.34-.74.75-.74Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M10.76 12.102v6.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1M2 19h20"
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
      d="M8.02 4.621H6.98c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.741c-.01-1.52-.65-2.12-2.23-2.12Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M16.52 9.621h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12Z"
      fill={color}
    ></path>
    <path
      d="M2.75 17.879h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.76s.34-.74.75-.74Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8M2 19h20"
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
      d="M19.26 19.65c-.41 0-.75-.34-.75-.75V7.1c0-1.01-.21-1.35-1.48-1.35h-1.04c-1.27 0-1.48.34-1.48 1.35v11.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.1c0-1.92.98-2.85 2.98-2.85h1.04c2.01 0 2.98.93 2.98 2.85v11.8c0 .41-.34.75-.75.75ZM10.76 19.65c-.41 0-.75-.34-.75-.75v-6.8c0-1.01-.21-1.35-1.48-1.35H7.49c-1.27 0-1.48.34-1.48 1.35v6.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.8c0-1.92.98-2.85 2.98-2.85h1.04c2.01 0 2.98.93 2.98 2.85v6.8c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path d="M22 19.75H2a.749.749 0 1 1 0-1.5h20a.749.749 0 1 1 0 1.5Z" fill={color}></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2 19h20"
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

const AlignBottom = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
AlignBottom.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
AlignBottom.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
AlignBottom.displayName = 'AlignBottom';

export default AlignBottom;
