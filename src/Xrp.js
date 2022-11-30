import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      fill={color}
      d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 005.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2zM5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 015.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92z"
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="m18.33 6.15 2.36-2.36c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.74 6.5c-.41.41-1.07.41-1.48 0L7.68 2.92C7.09 2.33 6.29 2 5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l.56-.56M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z"
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
      d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.65-.66.18-1.79-.75-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.74 6.5c-.41.41-1.07.41-1.48 0L7.68 2.92C7.09 2.33 6.29 2 5.46 2Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M5.5 2H4.1c-1 0-1.5 1.1-.8 1.8L9 9.5c1.6 1.6 4.3 1.6 5.9 0l5.7-5.7c.8-.7.3-1.8-.7-1.8h-1.4c-.8 0-1.6.3-2.2.9l-3.6 3.6c-.4.4-1.1.4-1.5 0L7.7 2.9C7.1 2.3 6.3 2 5.5 2ZM5.5 22H4.1c-.9 0-1.4-1.1-.7-1.8L9 14.5c1.6-1.6 4.3-1.6 5.9 0l5.7 5.7c.7.7.2 1.8-.7 1.8h-1.4c-.8 0-1.6-.3-2.2-.9l-3.6-3.6c-.4-.4-1.1-.4-1.5 0l-3.6 3.6c-.5.5-1.3.9-2.1.9Z"
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
      d="M12 11.488c-1.32 0-2.56-.51-3.49-1.45l-5.73-5.73a1.798 1.798 0 0 1 1.27-3.07h1.41c1.04 0 2.02.41 2.75 1.14l3.58 3.58c.15.15.27.15.42 0l3.58-3.58a3.85 3.85 0 0 1 2.75-1.14h1.41a1.798 1.798 0 0 1 1.27 3.07l-5.73 5.73c-.93.94-2.17 1.45-3.49 1.45Zm-7.95-8.74c-.17 0-.25.12-.28.18-.03.06-.06.2.06.32l5.73 5.73c1.3 1.3 3.57 1.3 4.87 0l5.73-5.73c.12-.12.09-.26.06-.32a.295.295 0 0 0-.28-.18h-1.41c-.64 0-1.24.25-1.69.7l-3.58 3.58c-.7.7-1.84.7-2.54 0l-3.58-3.58c-.45-.45-1.05-.7-1.69-.7h-1.4ZM19.95 22.719h-1.41c-1.04 0-2.02-.41-2.75-1.14l-3.58-3.58c-.15-.15-.27-.15-.42 0l-3.58 3.58a3.85 3.85 0 0 1-2.75 1.14H4.05a1.798 1.798 0 0 1-1.27-3.07l5.73-5.73a4.91 4.91 0 0 1 3.49-1.45c1.32 0 2.56.51 3.49 1.45l5.73 5.73a1.798 1.798 0 0 1-1.27 3.07Zm-7.95-6.3c.46 0 .92.18 1.27.53l3.58 3.58c.45.45 1.05.7 1.69.7h1.41c.17 0 .25-.12.28-.18.03-.06.06-.2-.06-.32l-5.73-5.73c-1.3-1.3-3.57-1.3-4.87 0l-5.73 5.73c-.12.12-.09.26-.06.32s.1.18.28.18h1.41c.64 0 1.24-.25 1.69-.7l3.58-3.58c.34-.36.8-.53 1.26-.53Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z"
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

const Xrp = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Xrp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Xrp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Xrp.displayName = 'Xrp';

export default Xrp;
