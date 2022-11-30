import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bold = ({ color }) => (
  <>
    <path
      d="m21.619 12.099-.62-.21-1.67-.55c-.58-.19-1.17-.12-1.62.2-.44.33-.7.86-.7 1.48v4.79c-.4-.22-.85-.36-1.34-.36a2.8 2.8 0 0 0-2.69 3.55 2.796 2.796 0 0 0 5.49-.69v-4.61c.02 0 .03.01.05.02l2.28.76c.04.01.09.03.13.03.18.05.34.07.51.07.36 0 .7-.1.98-.31.45-.32.7-.85.7-1.47v-.6c0-.91-.64-1.81-1.5-2.1Zm-5.95 9.49c-.46 0-.86-.23-1.1-.59-.15-.21-.23-.47-.23-.75a1.336 1.336 0 0 1 2.67 0c0 .23-.06.44-.16.62-.22.43-.67.72-1.18.72Z"
      fill={color}
    ></path>
    <path
      d="M23.119 14.199v.6c0 .62-.25 1.15-.7 1.47-.28.21-.62.31-.98.31-.17 0-.33-.02-.51-.07-.04 0-.09-.02-.13-.03l-2.28-.76c-.02-.01-.03-.02-.05-.02v4.61a2.796 2.796 0 0 1-5.49.69 2.8 2.8 0 0 1 2.69-3.55c.49 0 .94.14 1.34.36v-4.79c0-.62.26-1.15.7-1.48.45-.32 1.04-.39 1.62-.2l1.67.55.62.21c.86.29 1.5 1.19 1.5 2.1Z"
      fill={color}
    ></path>
    <path
      d="M21 7.52v2.1c0 .34-.33.58-.66.47l-.54-.18c-1.05-.33-2.12-.19-2.99.43-.83.62-1.3 1.6-1.3 2.68v2.45c0 .27-.21.49-.48.53-2.06.31-3.65 2.1-3.65 4.25v.15c.01.31-.22.6-.54.6H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2h7.96C18.93 2 21 4.06 21 7.52Z"
      fill={color}
    ></path>
  </>
);

const Broken = ({ color }) => (
  <>
    <path
      d="M2 13.012v1.99c0 5 2 7 7 7h2M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9M15.512 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.512 20.002v-6.99M18.822 12.071l2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95Z"
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
      d="M21 7.52v7.96c0 .36-.02.71-.07 1.03-.04 0-.09-.02-.13-.03l-2.28-.76c-.02-.01-.03-.02-.05-.02v4.61c-.48.27-1.02.46-1.62.56.1-.18.16-.39.16-.62a1.336 1.336 0 0 0-2.67 0c0 .28.08.54.23.75H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2h7.96C18.93 2 21 4.06 21 7.52Z"
      fill={color}
    ></path>
    <path
      d="m21.619 12.099-.62-.21-1.67-.55c-.58-.19-1.17-.12-1.62.2-.44.33-.7.86-.7 1.48v4.79c-.4-.22-.85-.36-1.34-.36a2.8 2.8 0 0 0-2.69 3.55 2.796 2.796 0 0 0 5.49-.69v-4.61c.02 0 .03.01.05.02l2.28.76c.04.01.09.03.13.03.18.05.34.07.51.07.36 0 .7-.1.98-.31.45-.32.7-.85.7-1.47v-.6c0-.91-.64-1.81-1.5-2.1Zm-5.95 9.49c-.46 0-.86-.23-1.1-.59-.15-.21-.23-.47-.23-.75a1.336 1.336 0 0 1 2.67 0c0 .23-.06.44-.16.62-.22.43-.67.72-1.18.72Z"
      fill={color}
    ></path>
  </>
);

const Linear = ({ color }) => (
  <>
    <path
      d="M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M15.51 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.51 20v-6.99M18.82 12.07l2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95Z"
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
      d="M11 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M15.508 22.75c-1.51 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.24 2.75-2.75 2.75Zm0-3.99a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      fill={color}
    ></path>
    <path
      d="M17.508 20.752c-.41 0-.75-.34-.75-.75v-6.99c0-.41.34-.75.75-.75s.75.34.75.75v6.99c0 .42-.34.75-.75.75Z"
      fill={color}
    ></path>
    <path
      d="M21.078 16.5c-.21 0-.42-.03-.63-.11l-2.21-.73c-.85-.28-1.48-1.17-1.48-2.06v-.59c0-.61.25-1.14.7-1.46.45-.32 1.03-.39 1.6-.2l2.21.74c.85.28 1.48 1.17 1.48 2.06v.59c0 .61-.25 1.14-.7 1.46-.28.2-.62.3-.97.3Zm-2.65-3.75a.25.25 0 0 0-.1.02c-.04.03-.07.1-.07.24v.59c0 .24.23.56.46.64l2.21.73c.13.04.22.03.25.01.04-.03.08-.1.08-.24v-.59c0-.24-.23-.56-.46-.64l-2.21-.73a.614.614 0 0 0-.16-.03Z"
      fill={color}
    ></path>
  </>
);

const TwoTone = ({ color }) => (
  <>
    <path
      d="M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h2"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <g opacity=".4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.508 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.508 20.002v-6.99M18.818 12.071l2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95Z"></path>
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

const NoteSquare = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
NoteSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
NoteSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
NoteSquare.displayName = 'NoteSquare';

export default NoteSquare;
