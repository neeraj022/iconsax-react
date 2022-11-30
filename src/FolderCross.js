import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M21.017 7.992c.398.566-.076 1.258-.769 1.258H3a1 1 0 0 1-1-1V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.805 0 3.402.897 4.367 2.272ZM21.983 11.747a1 1 0 0 0-1-.997H3a1 1 0 0 0-1 1v4.9C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65l-.017-4.903ZM14.34 18.28c-.15.14-.34.22-.53.22s-.39-.08-.53-.22l-1.24-1.24-1.28 1.28c-.14.14-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l1.28-1.28-1.24-1.24a.754.754 0 0 1 0-1.06c.3-.29.77-.29 1.06 0l1.24 1.24 1.2-1.2c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.06l-1.2 1.2 1.24 1.24c.29.29.29.77 0 1.06Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="m13.81 15.731-3.54-3.54M13.77 12.23l-3.54 3.54M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.988v2.01c0 4-1 5-5 5H7c-4 0-5-1-5-5"
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
      d="M21.869 9.44H2.129V6.42c0-2.44 1.98-4.42 4.42-4.42h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71Z"
      fill={color}
    ></path>
    <path
      d="M21.99 10.841c-.02-.48-.1-.95-.25-1.4H2v7.21c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58c0-.07 0-.16-.01-.23Zm-7.65 6.94c-.15.14-.34.22-.53.22s-.38-.07-.53-.22l-1.24-1.24-1.28 1.28c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.28-1.28-1.24-1.24a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.24 1.24 1.2-1.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.2 1.2 1.24 1.24c.29.29.29.77 0 1.06Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="m13.81 15.73-3.54-3.54M13.77 12.23l-3.54 3.54"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M13.81 16.479c-.19 0-.38-.07-.53-.22l-3.54-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.54 3.54c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
      fill={color}
    ></path>
    <path
      d="M10.232 16.522c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.54-3.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.54 3.54c-.14.14-.34.22-.53.22Z"
      fill={color}
    ></path>
    <path
      d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.57 0-4.25.68-4.25 4.25v10c0 3.57.68 4.25 4.25 4.25h10c3.57 0 4.25-.68 4.25-4.25v-6c0-3.57-.68-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.67-.9-1.8-.9H7Z"
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
      <path d="m13.81 15.731-3.54-3.54M13.77 12.23l-3.54 3.54"></path>
    </g>
    <path
      d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
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

const FolderCross = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
FolderCross.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FolderCross.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
FolderCross.displayName = 'FolderCross';

export default FolderCross;
