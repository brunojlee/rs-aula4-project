import React from 'react';
import styled from 'styled-components';
import { textBaseStyles, textVariants, textColors } from '../../../themes/shared-styles';
import { TextProps } from '../../../types';

const StyledText = styled.span<{ $variant: string; $color: string }>`
  ${textBaseStyles}
  ${({ $variant }) => textVariants[$variant as keyof typeof textVariants]}
  ${({ $color }) => textColors[$color as keyof typeof textColors]}
`;

export const SCText: React.FC<TextProps> = ({ 
  variant = 'body', 
  color = 'primary', 
  children 
}) => {
  return (
    <StyledText $variant={variant} $color={color}>
      {children}
    </StyledText>
  );
};
