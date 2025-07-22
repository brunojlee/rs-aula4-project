import React, { useState } from 'react';
import styled from 'styled-components';
import { searchBarStyles, searchInputStyles, searchButtonStyles } from '../../../themes/shared-styles';
import { SearchBarProps } from '../../../types';

const SearchContainer = styled.div`
  ${searchBarStyles}
`;

const SearchInput = styled.input`
  ${searchInputStyles}
`;

const SearchButton = styled.button`
  ${searchButtonStyles}
`;

export const SCSearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = 'Pesquisar...', 
  value = '', 
  onSearch, 
  onChange 
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
        <SearchButton type="submit">
          🔍
        </SearchButton>
      </form>
    </SearchContainer>
  );
};
