import React from 'react';
import styled from 'styled-components';
import {
  buttonPrimaryStyles,
  buttonSecondaryStyles,
  buttonSizes,
} from '../../../themes/shared-styles';
import { ButtonProps } from '../../../types';

const StyledButton = styled.button<{ $variant: string; $size: string }>`
  ${({ $variant }) =>
    $variant === 'primary' ? buttonPrimaryStyles : buttonSecondaryStyles}
  ${({ $size }) => buttonSizes[$size as keyof typeof buttonSizes]}
`;

export const SCButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
