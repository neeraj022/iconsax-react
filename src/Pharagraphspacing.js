import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.3 15.358l-1.55 1.55V6.698l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 0 0-1.06 0l-2.83 2.83c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M3 2h18M12 6v12M14.832 7.72l-2.83-2.83-2.83 2.83M14.832 15.89l-2.83 2.83-2.83-2.83M10.05 22H21M3 22h2.98"
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
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="m14.3 15.358-1.55 1.55V6.698l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 0 0-1.06 0l-2.83 2.83c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M3 22h18M3 2h18M12 6v12M14.83 7.72 12 4.89 9.17 7.72M14.83 15.89 12 18.72l-2.83-2.83"
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
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M14.83 8.468c-.19 0-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.83-2.83c.28-.28.78-.28 1.06 0l2.83 2.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM12 19.468a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.83 2.83a.75.75 0 0 1-.53.22Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M3 22h18M3 2h18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6v12M14.832 7.72l-2.83-2.83-2.83 2.83M14.832 15.89l-2.83 2.83-2.83-2.83"></path>
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

const Pharagraphspacing = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Pharagraphspacing.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Pharagraphspacing.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Pharagraphspacing.displayName = 'Pharagraphspacing';

export default Pharagraphspacing;
