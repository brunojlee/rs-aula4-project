import { styled } from '@mui/material/styles';
import React from 'react';
import { InputFieldProps } from '../../../types';
import { MUIInput } from '../../atoms/mui';

const FieldContainer = styled('div')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const Label = styled('label')(() => ({
  fontSize: '14px',
  fontWeight: 500,
  color: '#495057',
}));

const ErrorText = styled('span')(() => ({
  fontSize: '14px',
  color: '#dc3545',
}));

export const MUIInputField: React.FC<InputFieldProps> = ({
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
      <MUIInput
        placeholder={placeholder}
        value={value}
        error={!!error}
        onChange={onChange}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </FieldContainer>
  );
};
