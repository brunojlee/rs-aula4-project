import React, { useState } from 'react';
import styled from 'styled-components';
import { formStyles, formTitleStyles } from '../../../themes/shared-styles';
import { LoginFormProps } from '../../../types';
import { SCButton } from '../../atoms/styled-components';
import { SCInputField } from '../../molecules/styled-components';

const FormContainer = styled.form`
  ${formStyles}
`;

const FormTitle = styled.h2`
  ${formTitleStyles}
`;

export const SCLoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ email, password });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>

      <SCInputField
        label="Email"
        type="email"
        placeholder="seu@email.com"
        value={email}
        error={errors.email}
        required
        onChange={setEmail}
      />

      <SCInputField
        label="Senha"
        type="password"
        placeholder="••••••••"
        value={password}
        error={errors.password}
        required
        onChange={setPassword}
      />

      <SCButton variant="primary" size="lg">
        Entrar
      </SCButton>
    </FormContainer>
  );
};
