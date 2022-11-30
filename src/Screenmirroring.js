import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm2.31 14.4c0 1.5-.6 2.1-2.1 2.1h-3.8c-1.5 0-2.1-.6-2.1-2.1v-1.8c0-1.5.6-2.1 2.1-2.1h3.8c1.5 0 2.1.6 2.1 2.1v1.8Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1Z"
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
      fill={color}
    ></path>
    <path
      d="M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1Z"
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></path>
    <path
      d="M16.4 19.25h-3.8c-1.92 0-2.85-.93-2.85-2.85v-1.8c0-1.92.93-2.85 2.85-2.85h3.8c1.92 0 2.85.93 2.85 2.85v1.8c0 1.92-.93 2.85-2.85 2.85Zm-3.8-6c-1.08 0-1.35.27-1.35 1.35v1.8c0 1.08.27 1.35 1.35 1.35h3.8c1.08 0 1.35-.27 1.35-1.35v-1.8c0-1.08-.27-1.35-1.35-1.35h-3.8Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M12.6 18.5h3.8c1.5 0 2.1-.6 2.1-2.1v-1.8c0-1.5-.6-2.1-2.1-2.1h-3.8c-1.5 0-2.1.6-2.1 2.1v1.8c0 1.5.6 2.1 2.1 2.1Z"
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

const Screenmirroring = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Screenmirroring.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Screenmirroring.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Screenmirroring.displayName = 'Screenmirroring';

export default Screenmirroring;
