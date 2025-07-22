import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { SearchBarProps } from '../../../types';

const SearchContainer = styled('div')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  border: '2px solid #e9ecef',
  borderRadius: '8px',
  background: 'white',
  overflow: 'hidden',
  transition: 'border-color 0.2s ease-in-out',

  '&:focus-within': {
    borderColor: '#007bff',
    boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)',
  },
}));

const SearchInput = styled('input')(() => ({
  flex: 1,
  border: 'none',
  padding: '12px 16px',
  fontSize: '16px',
  background: 'transparent',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    color: '#6c757d',
  },
}));

const SearchButton = styled('button')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: '12px 16px',
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  background: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s ease-in-out',

  '&:hover': {
    background: '#0056b3',
  },

  '&:focus': {
    outline: 'none',
  },
}));

export const MUISearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Pesquisar...',
  value = '',
  onSearch,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <SearchButton type="submit">🔍</SearchButton>
      </form>
    </SearchContainer>
  );
};
