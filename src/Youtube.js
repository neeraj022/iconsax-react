import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M2 9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5H7c-3 0-5-2-5-5v-1.41"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z"
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
      d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
      fill={color}
    ></path>
    <path
      d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1Z"
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
      d="M17 20.75H7c-3.44 0-5.75-2.31-5.75-5.75V9c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v6c0 3.44-2.31 5.75-5.75 5.75Zm-10-16C4.42 4.75 2.75 6.42 2.75 9v6c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25V9c0-2.58-1.67-4.25-4.25-4.25H7Z"
      fill={color}
    ></path>
    <path
      d="M10.59 15.53c-.29 0-.57-.07-.82-.21-.58-.33-.92-1-.92-1.83v-2.96c0-.83.33-1.5.92-1.83.58-.33 1.33-.27 2.04.16l2.47 1.48c.68.41 1.07 1.02 1.07 1.67 0 .65-.39 1.26-1.07 1.67l-2.47 1.48c-.41.24-.83.37-1.22.37Zm0-5.56a.2.2 0 0 0-.09.02c-.07.04-.15.22-.15.53v2.96c0 .3.08.48.15.53.08.04.27.02.53-.14l2.47-1.48c.25-.15.34-.3.34-.39 0-.09-.09-.23-.34-.39l-2.47-1.48c-.18-.11-.34-.16-.44-.16Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z"
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

const Youtube = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Youtube.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Youtube.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Youtube.displayName = 'Youtube';

export default Youtube;
