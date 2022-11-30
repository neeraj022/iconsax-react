import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.05 8.29a.5.5 0 01.45-.28h5c.19 0 .36.11.45.28.09.17.07.37-.05.52l-2.5 3.33a.48.48 0 01-.4.2.48.48 0 01-.4-.2L9.1 8.81a.51.51 0 01-.05-.52zm8.56 2.15l-5 7a.74.74 0 01-.61.31c-.24 0-.47-.12-.61-.31l-5-7a.76.76 0 01.17-1.05.76.76 0 011.05.17L12 15.71l4.39-6.15c.24-.34.71-.42 1.05-.17.33.24.41.71.17 1.05z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="m9.5 8.52 2.5 3.33 2.5-3.33h-5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m17 10-5 7-5-7"
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
      d="M14.95 8.292a.5.5 0 0 0-.45-.28h-5c-.19 0-.36.11-.45.28a.47.47 0 0 0 .05.52l2.5 3.33c.09.13.24.2.4.2.16 0 .31-.07.4-.2l2.5-3.33a.51.51 0 0 0 .05-.52Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      fill={color}
    ></path>
    <path
      d="M12 17.748c-.24 0-.47-.12-.61-.31l-5-7a.76.76 0 0 1 .17-1.05.76.76 0 0 1 1.05.17l4.39 6.15 4.39-6.15c.24-.34.71-.42 1.05-.17.34.24.42.71.17 1.05l-5 7c-.14.19-.37.31-.61.31Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="m9.5 8.5 2.5 3.4 2.5-3.4h-5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="m17 10-5 7-5-7"
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
      d="M12 12.6c-.24 0-.46-.11-.6-.3L8.9 8.97a.752.752 0 0 1-.07-.79c.13-.26.39-.41.67-.41h5c.28 0 .54.16.67.41.13.25.1.56-.07.79l-2.5 3.33c-.14.19-.36.3-.6.3Zm-1-3.33 1 1.33 1-1.33h-2Z"
      fill={color}
    ></path>
    <path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z"
      fill={color}
    ></path>
    <path
      d="M12 17.748c-.24 0-.47-.12-.61-.31l-5-7a.76.76 0 0 1 .17-1.05.76.76 0 0 1 1.05.17l4.39 6.15 4.39-6.15c.24-.34.71-.42 1.05-.17.34.24.42.71.17 1.05l-5 7c-.14.19-.37.31-.61.31Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="m9.5 8.52 2.5 3.33 2.5-3.33h-5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      opacity=".4"
      d="m17 10-5 7-5-7"
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

const Vibe = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Vibe.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Vibe.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Vibe.displayName = 'Vibe';

export default Vibe;
