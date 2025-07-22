import React from 'react';
import styled from 'styled-components';
import { badgeBaseStyles, badgeVariants } from '../../../themes/shared-styles';
import { BadgeProps } from '../../../types';

const StyledBadge = styled.span<{ $variant: string }>`
  ${badgeBaseStyles}
  ${({ $variant }) => badgeVariants[$variant as keyof typeof badgeVariants]}
`;

export const SCBadge: React.FC<BadgeProps> = ({ 
  count, 
  max = 99, 
  variant = 'default' 
}) => {
  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <StyledBadge $variant={variant}>
      {displayCount}
    </StyledBadge>
  );
};
