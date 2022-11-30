import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M5 15c-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 1 19c0 2.21 1.79 4 4 4a4 4 0 0 0 2.64-1C8.47 21.27 9 20.2 9 19c0-2.21-1.79-4-4-4Zm1 4.25c0 .26-.14.51-.36.64l-1.25.75c-.12.08-.26.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.89-.53v-1.08a.74.74 0 0 1 .74-.75c.41 0 .75.34.75.75v1.5ZM14.85 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4-.05 0-.1.01-.15.03L4.87 6.57c-.53.2-.87.7-.87 1.27v.67c-.91.68-1.5 1.77-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3c.22-.08.45-.12.67-.12 1 0 1.9.81 1.9 1.9ZM21.5 14.5v1a.5.5 0 0 1-.49.5h-1.46c-.53 0-1.01-.39-1.05-.91-.03-.31.09-.6.29-.8a.95.95 0 0 1 .7-.29H21c.29.01.5.23.5.5Z"
      fill={color}
    ></path>
    <path
      d="M19.48 12.95h1.02c.55 0 1-.45 1-1v-.44c0-2.07-1.69-3.76-3.76-3.76H6.26c-.85 0-1.63.28-2.26.76-.91.68-1.5 1.77-1.5 3v1.78c0 .38.4.62.76.5.56-.19 1.15-.29 1.74-.29 3.03 0 5.5 2.47 5.5 5.5 0 .72-.19 1.51-.49 2.21-.16.36.09.79.48.79h7.25c2.07 0 3.76-1.69 3.76-3.76v-.19c0-.55-.45-1-1-1h-.87c-.96 0-1.88-.59-2.13-1.52-.2-.76.04-1.5.54-1.98.37-.38.88-.6 1.44-.6Zm-5.48-.2H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 19c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 23c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.25 17.75v1.5L4 20"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M14 22H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.281 2.171a1.9 1.9 0 0 1 2.57 1.78v3.8M2.5 12.412v-4.57c0-1.19.73-2.25 1.84-2.67l3.97-1.5"
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
      d="M5 15c-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 1 19c0 2.21 1.79 4 4 4a4 4 0 0 0 2.64-1C8.47 21.27 9 20.2 9 19c0-2.21-1.79-4-4-4Zm1 4.25c0 .26-.14.51-.36.64l-1.25.75c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5H6Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M19.48 12.95h2.02v-1.44c0-2.07-1.69-3.76-3.76-3.76H6.26c-2.07 0-3.76 1.69-3.76 3.76v4.37A3.999 3.999 0 0 1 9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94h10.11c2.07 0 3.76-1.69 3.76-3.76v-1.19h-1.9c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6Z"
      fill={color}
    ></path>
    <path
      d="M14.85 3.952v3.8H6.26c-2.07 0-3.76 1.69-3.76 3.76v-3.67c0-1.19.73-2.25 1.84-2.67l7.94-3c1.24-.46 2.57.45 2.57 1.78ZM22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM14 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H7.64C8.47 21.27 9 20.2 9 19a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M2.5 11.51V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3c1.24-.46 2.57.45 2.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 19c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 23c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.25 17.75v1.5L4 20"
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
      d="M17.74 22.748H7.64c-.31 0-.59-.19-.7-.49-.11-.3-.03-.62.21-.83.7-.62 1.11-1.51 1.11-2.44 0-1.79-1.46-3.25-3.25-3.25-.74 0-1.44.25-2.03.72a.744.744 0 0 1-1.21-.59v-4.37c0-2.49 2.02-4.51 4.51-4.51h11.48c2.49 0 4.51 2.02 4.51 4.51v1.44c0 .41-.34.75-.75.75H19.5c-.35 0-.67.13-.9.37l-.01.01c-.28.27-.41.64-.38 1.02.06.66.69 1.19 1.41 1.19h1.9c.41 0 .75.34.75.75v1.19c-.02 2.51-2.04 4.53-4.53 4.53Zm-8.56-1.5h8.56c1.66 0 3.01-1.35 3.01-3.01v-.44H19.6c-1.51 0-2.79-1.12-2.91-2.56-.08-.82.22-1.63.82-2.22.52-.53 1.22-.82 1.97-.82h1.27v-.69c0-1.66-1.35-3.01-3.01-3.01H6.26c-1.66 0-3.01 1.35-3.01 3.01v3.08a4.78 4.78 0 0 1 1.75-.34c2.62 0 4.75 2.13 4.75 4.75 0 .79-.2 1.57-.57 2.25Z"
      fill={color}
    ></path>
    <path
      d="M2.5 12.26c-.41 0-.75-.34-.75-.75V7.84c0-1.49.93-2.85 2.32-3.37l7.94-3c.82-.3 1.74-.19 2.45.31.71.5 1.14 1.31 1.14 2.17v3.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.8c0-.38-.18-.72-.49-.94-.32-.22-.71-.27-1.07-.14l-7.94 3c-.82.31-1.35 1.08-1.35 1.97v3.67c0 .41-.34.75-.75.75ZM19.599 17.8c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.51-.52 1.21-.81 1.96-.81h2.08c.99.03 1.75.81 1.75 1.77v2.06c0 .96-.76 1.74-1.72 1.77h-1.98Zm1.93-4.1h-2.05c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.06.66.69 1.19 1.41 1.19h1.96c.13 0 .25-.12.25-.27v-2.06c0-.15-.12-.26-.28-.27ZM14 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 23.75C2.38 23.75.25 21.62.25 19c0-1.46.65-2.81 1.78-3.71.84-.67 1.9-1.04 2.97-1.04 2.62 0 4.75 2.13 4.75 4.75A4.758 4.758 0 0 1 5 23.75Zm0-8c-.74 0-1.44.25-2.03.72-.77.61-1.22 1.54-1.22 2.53 0 1.79 1.46 3.25 3.25 3.25.78 0 1.54-.29 2.15-.81.7-.62 1.1-1.5 1.1-2.44 0-1.79-1.46-3.25-3.25-3.25Z"
      fill={color}
    ></path>
    <path
      d="M4 20.75c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.13.08-.27.11-.4.11Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H7.64C8.47 21.27 9 20.2 9 19a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M2.5 11.512v-3.67c0-1.19.73-2.25 1.84-2.67l7.94-3c1.24-.46 2.57.45 2.57 1.78v3.8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M7 12h7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M9 19c0 1.2-.53 2.27-1.36 3A4 4 0 0 1 5 23c-2.21 0-4-1.79-4-4 0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.25 17.75v1.5L4 20"
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

const EmptyWalletTime = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
EmptyWalletTime.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
EmptyWalletTime.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
EmptyWalletTime.displayName = 'EmptyWalletTime';

export default EmptyWalletTime;
