import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="m21.56 10.738-1.35-1.58c-.25-.3-.46-.86-.46-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35c-.69-.59-1.82-.59-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.17c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35c.69.59 1.82.59 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51Zm-6.75 5.5-.98-2.2c-.03 0-.06.02-.09.02h-3.5c-.03 0-.06-.01-.09-.02l-.98 2.2-1.37-.61 3.5-7.88h1.37l3.5 7.88-1.36.61Z"
      fill={color}
    ></path>
    <path d="M10.82 12.56h2.36L12 9.91l-1.18 2.65Z" fill={color}></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M4.24 6.198c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="m8.5 15.939 3.5-7.88 3.5 7.88"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    ></path>
    <path
      d="M13.75 13.309h-3.5"
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
      d="M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.59-1.36Z"
      fill={color}
    ></path>
    <path
      d="M14.81 16.242 12 9.912l-2.81 6.33-1.38-.61 3.5-7.87h1.38l3.5 7.87-1.38.61Z"
      fill={color}
    ></path>
    <path
      d="M13.75 14.059h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.59-1.36Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M8.5 15.94 12 8.06l3.5 7.88"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    ></path>
    <path
      d="M13.75 13.31h-3.5"
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
      d="M12.01 22.74c-.63 0-1.25-.21-1.74-.63l-1.58-1.35c-.16-.14-.56-.28-.77-.28H6.17a2.68 2.68 0 0 1-2.68-2.68v-1.71c0-.21-.14-.61-.27-.76l-1.36-1.6c-.82-.97-.82-2.49 0-3.47l1.36-1.6c.13-.15.27-.55.27-.76V6.2c0-1.48 1.2-2.68 2.68-2.68H7.9c.21 0 .6-.15.77-.29l1.58-1.35c.98-.83 2.51-.83 3.49 0l1.58 1.35c.16.14.57.28.78.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.6.29.77l1.35 1.58c.84.99.83 2.52 0 3.49l-1.35 1.58c-.14.17-.28.56-.28.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.6.15-.78.29l-1.58 1.35c-.49.43-1.12.64-1.74.64ZM6.17 5.02c-.65 0-1.18.53-1.18 1.18v1.7c0 .57-.26 1.29-.63 1.73L3 11.23c-.34.41-.34 1.13 0 1.53l1.35 1.59c.36.41.63 1.16.63 1.73v1.71c0 .65.53 1.18 1.18 1.18H7.9c.56 0 1.3.27 1.74.64l1.59 1.36c.41.35 1.12.35 1.54 0l1.58-1.35c.45-.38 1.18-.64 1.74-.64h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.56.27-1.29.64-1.74l1.36-1.59c.35-.41.35-1.13 0-1.54l-1.35-1.58c-.38-.45-.64-1.18-.64-1.74V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.57 0-1.31-.27-1.75-.64l-1.59-1.36c-.41-.35-1.12-.35-1.54 0L9.65 4.38c-.45.37-1.18.64-1.75.64H6.17Z"
      fill={color}
    ></path>
    <path
      d="M14.81 16.242 12 9.912l-2.81 6.33-1.38-.61 3.5-7.87h1.38l3.5 7.87-1.38.61Z"
      fill={color}
    ></path>
    <path
      d="M13.75 14.059h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.59-1.36Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" stroke={color} strokeWidth="1.5">
      <path d="m8.5 15.939 3.5-7.88 3.5 7.88" strokeLinejoin="bevel"></path>
      <path d="M13.75 13.309h-3.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </g>
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

const Autobrightness = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Autobrightness.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Autobrightness.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Autobrightness.displayName = 'Autobrightness';

export default Autobrightness;
