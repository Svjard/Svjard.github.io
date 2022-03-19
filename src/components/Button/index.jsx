import React from 'react';
import {
  Button,
} from '@chakra-ui/react';
import { jsx } from '@emotion/react';

const defaultProps = {
  disabled: false,
  onClick: () => {},
};

const Button = (props = defaultProps) => {
  const { disabled, onClick, children, testId } = props;

  const handleClick = () => {
    if (!disabled) {
      if (onClick) onClick();
    }
  };

  return (
    <Button
      {...process.env.REACT_APP_IS_TEST && { 'data-testid': testId }}
      onClick={handleClick}
      disabled={disabled || loading}
      css={{
        color: '#fff',
        background: '#4b626d',
        lineHeight: 1.5,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        userSelect: 'none',
        border: '1px solid transparent',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
        padding: '8px 15px',
        borderRadius: '2px',
        backgroundClip: 'padding-box',
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 40%)',
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: '14px',
        textDecoration: 'none',
        '&:hover': {
          background: '#566f7c',
          textDecoration: 'none',
        },
        '&:focus': {
          outline: 0,
          boxShadow: 'none',
        }
      }}
    >
      {children && <div>{children}</div>}
    </Button>
  );
}

export default Button;