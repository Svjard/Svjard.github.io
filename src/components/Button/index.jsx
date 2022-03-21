import React from 'react';
import styled from 'styled-components';

const defaultProps = {
  disabled: false,
  onClick: () => {},
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  background: #4b626d;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  padding: 8px 15px;
  border-radius: 2px;
  background-clip: padding-box;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 40%);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    background: #566f7c;
    text-decoration: none;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CustomButton(props = defaultProps) {
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
      disabled={disabled}
    >
      {children && <Container>{children}</Container>}
    </Button>
  );
}