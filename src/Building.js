import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M10.75 4.64 6.32 2.45c-2.39-1.17-4.35.02-4.35 2.64v14.84c0 1.14.95 2.07 2.11 2.07h7.42c.55 0 1-.45 1-1V7.41c0-1.05-.79-2.3-1.75-2.77Zm-1.78 9.11H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5Zm0-4H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5ZM22 18.04v1.46a2.5 2.5 0 0 1-2.5 2.5h-4.53c-.54 0-.97-.43-.97-.97v-2.16c1.07.13 2.2-.18 3.01-.83.68.55 1.55.88 2.5.88.93 0 1.8-.33 2.49-.88ZM22 15.05v.01a2.5 2.5 0 0 1-2.49 2.36 2.5 2.5 0 0 1-2.5-2.5c0 1.53-1.41 2.76-3.01 2.45V12c0-.64.59-1.12 1.22-.98l1.79.4.48.11 2.04.46c.49.1.94.27 1.33.52 0 .01.01.01.01.01.1.07.2.15.29.24.46.46.76 1.13.83 2.11 0 .06.01.12.01.18Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M1.97 5.95v-.86c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22H4.08c-1.16 0-2.11-.93-2.11-2.07v-9.91M21.97 15.062v3.78c0 2.16-1 3.16-3.16 3.16H12.5v-11.58l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19ZM5.5 9h3.47M5.5 13h3.47"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01ZM21.96 14.871a2.249 2.249 0 0 1-2.24 2.13c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
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
      d="M12.5 7.41V22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.96-3.81 4.35-2.64l4.43 2.19c.96.47 1.75 1.72 1.75 2.77Z"
      fill={color}
    ></path>
    <path
      d="M8.97 9.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5ZM8.97 13.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></path>
    <path
      opacity=".6"
      d="M22 15.052v4.45a2.5 2.5 0 0 1-2.5 2.5h-7v-11.58l.47.1 4.04.9.48.11 2.04.46c.49.1.94.27 1.33.52 0 .01.01.01.01.01.1.07.2.15.29.24.46.46.76 1.13.83 2.11 0 .06.01.12.01.18Z"
      fill={color}
    ></path>
    <path
      d="M12.5 10.422v6c.46.61 1.18 1 2 1 1.39 0 2.51-1.12 2.51-2.5v-3.49l-4.04-.9-.47-.11ZM21.99 14.872c-.07-.98-.37-1.65-.83-2.11-.09-.09-.19-.17-.29-.24 0 0-.01 0-.01-.01-.39-.25-.84-.42-1.33-.52l-2.04-.46-.48-.11v3.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.49-2.36v-.01c0-.06-.01-.12-.01-.18Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M12.5 22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22ZM21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19ZM5.5 9h3.47M5.5 13h3.47"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01ZM21.96 14.87A2.249 2.249 0 0 1 19.72 17c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
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
      d="M12.5 22.749H4.08c-1.57 0-2.86-1.26-2.86-2.82V5.089c0-1.53.57-2.72 1.61-3.37 1.05-.66 2.41-.64 3.82.06l4.44 2.18c1.21.6 2.16 2.11 2.16 3.45v14.59c0 .41-.34.75-.75.75Zm-7.94-20c-.35 0-.67.08-.94.25-.58.36-.9 1.11-.9 2.09v14.84c0 .73.61 1.32 1.36 1.32h7.67V7.409c0-.77-.62-1.76-1.33-2.1l-4.44-2.18c-.51-.25-.99-.38-1.42-.38Z"
      fill={color}
    ></path>
    <path
      d="M18.81 22.75H12.5c-.41 0-.75-.34-.75-.75V10.42c0-.23.1-.44.28-.58.18-.14.4-.2.63-.15l.47.1 6.54 1.46c1.99.44 2.99 1.61 3.05 3.6.01 0 .01.1.01.21v3.78c-.01 2.56-1.36 3.91-3.92 3.91Zm-5.56-1.5h5.56c1.76 0 2.41-.65 2.41-2.41v-3.86c-.05-1.37-.57-1.98-1.88-2.27l-6.09-1.36v9.9ZM8.97 9.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5ZM8.97 13.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></path>
    <path
      d="M15.22 17.75c-1.65 0-3-1.35-3-3v-4.23c0-.23.1-.44.28-.59.18-.15.41-.2.63-.15l4.5 1.01c.34.08.59.38.59.73v3.22c0 1.66-1.34 3.01-3 3.01Zm-1.5-6.29v3.29c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2.62l-3-.67Z"
      fill={color}
    ></path>
    <path
      d="M19.72 17.749c-1.65 0-3-1.35-3-3v-3.22c0-.23.1-.44.28-.58.18-.14.41-.2.63-.15l2.03.45c1.99.44 2.99 1.61 3.05 3.6v.06a2.99 2.99 0 0 1-2.99 2.84Zm-1.5-5.29v2.29a1.498 1.498 0 0 0 2.99.11c-.05-1.26-.57-1.86-1.87-2.15l-1.12-.25Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M12.499 22h-8.42c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22ZM21.97 15.062v3.78c0 2.16-1 3.16-3.16 3.16H12.5v-11.58l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      opacity=".4"
      d="M5.5 9h3.47M5.5 13h3.47"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M17.469 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01ZM21.959 14.871a2.249 2.249 0 0 1-2.24 2.13c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89Z"
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

const Building = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Building.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Building.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Building.displayName = 'Building';

export default Building;
