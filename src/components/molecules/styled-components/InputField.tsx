import React from 'react';
import styled from 'styled-components';
import {
  errorTextStyles,
  inputFieldStyles,
  labelStyles,
} from '../../../themes/shared-styles';
import { InputFieldProps } from '../../../types';
import { SCInput } from '../../atoms/styled-components';

const FieldContainer = styled.div`
  ${inputFieldStyles}
`;

const Label = styled.label`
  ${labelStyles}
`;

const ErrorText = styled.span`
  ${errorTextStyles}
`;

export const SCInputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  error,
  required = false,
  onChange,
}) => {
  return (
    <FieldContainer>
      <Label>
        {label}
        {required && <span style={{ color: '#dc3545' }}>*</span>}
      </Label>
      <SCInput
        placeholder={placeholder}
        value={value}
        error={!!error}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </FieldContainer>
  );
};
