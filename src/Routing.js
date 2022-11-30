import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M8.88 4.599c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82Zm-3.37 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1s-.44 1-1 1ZM21.91 16.599c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82Zm-3.38 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.55 0 1 .45 1 1s-.45 1-1 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M6.94 9.419c-.82.78-2.11.77-2.93 0-1.12-1.07-2.41-2.79-1.94-4.82.8-3.46 6.01-3.46 6.8 0 .12.49.13.95.07 1.4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M15.07 16.599c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82Z"
      stroke={color}
      strokeWidth="1.5"
    ></path>
    <path
      d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.486 5.5h.011M18.486 17.5h.011"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Bulk = ({ color }) => (
  <>
    <path
      opacity=".4"
      d="M8.88 4.599c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82Zm-3.37 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1s-.44 1-1 1Z"
      fill={color}
    ></path>
    <path
      d="M6.51 5.2c0 .55-.44 1-1 1-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1Z"
      fill={color}
    ></path>
    <path
      opacity=".4"
      d="M21.91 16.599c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82Zm-3.38 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.55 0 1 .45 1 1s-.45 1-1 1Z"
      fill={color}
    ></path>
    <path
      d="M19.53 17.2c0 .55-.45 1-1 1s-1-.45-1-1 .44-1 .99-1h.01c.55 0 1 .45 1 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6ZM15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82Z"
      stroke={color}
      strokeWidth="1.5"
    ></path>
    <path
      d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M5.486 5.5h.012M18.486 17.5h.012"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </>
);

const Outline = ({ color }) => (
  <>
    <path
      d="M5.47 10.75c-.71 0-1.43-.26-1.98-.79C1.65 8.21.91 6.3 1.34 4.43c.51-2.2 2.44-3.18 4.13-3.18s3.63.99 4.13 3.18c.43 1.87-.32 3.78-2.15 5.53-.55.53-1.26.79-1.98.79ZM2.8 4.77c-.38 1.67.73 3.15 1.73 4.1.53.51 1.36.5 1.89 0 1-.95 2.11-2.43 1.72-4.11-.34-1.48-1.65-2.01-2.66-2.01-1.02 0-2.33.53-2.68 2.02Z"
      fill={color}
    ></path>
    <path
      d="M5.51 6.2c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1ZM18.49 22.748c-.71 0-1.43-.26-1.99-.79-1.85-1.75-2.6-3.66-2.16-5.54.51-2.19 2.45-3.18 4.15-3.18 1.7 0 3.64.99 4.15 3.18.43 1.87-.32 3.79-2.17 5.53-.55.54-1.26.8-1.98.8Zm0-8c-1.02 0-2.34.53-2.69 2.02-.39 1.67.73 3.16 1.73 4.11.53.51 1.37.51 1.91 0 1-.95 2.12-2.43 1.73-4.1-.33-1.5-1.65-2.03-2.68-2.03Z"
      fill={color}
    ></path>
    <path
      d="M18.53 18.2c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      stroke={color}
      strokeWidth="1.5"
      d="M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6zM15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82z"
      opacity=".4"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
    ></path>
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.486 5.5h.011M18.486 17.5h.011"
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

const Routing = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Routing.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Routing.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Routing.displayName = 'Routing';

export default Routing;