import React from 'react';
import styled from 'styled-components';
import { inputBaseStyles, inputErrorStyles } from '../../../themes/shared-styles';
import { InputProps } from '../../../types';

const StyledInput = styled.input<{ $error?: boolean }>`
  ${inputBaseStyles}
  ${({ $error }) => $error && inputErrorStyles}
`;

export const SCInput: React.FC<InputProps> = ({ 
  placeholder, 
  value, 
  disabled = false, 
  error = false, 
  onChange 
}) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      $error={error}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
