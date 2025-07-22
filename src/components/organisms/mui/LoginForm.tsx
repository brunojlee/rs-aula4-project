import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { LoginFormProps } from '../../../types';
import { MUIButton } from '../../atoms/mui';
import { MUIInputField } from '../../molecules/mui';

const FormContainer = styled('form')(() => ({
  boxSizing: 'border-box',
  margin: 0,
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '400px',
  width: '100%',
}));

const FormTitle = styled('h2')(() => ({
  fontSize: '28px',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '8px',
  color: '#212529',
}));

export const MUILoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

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

      <MUIInputField
        label="Email"
        type="email"
        placeholder="seu@email.com"
        value={email}
        error={errors.email}
        required
        onChange={setEmail}
      />

      <MUIInputField
        label="Senha"
        type="password"
        placeholder="••••••••"
        value={password}
        error={errors.password}
        required
        onChange={setPassword}
      />

      <MUIButton variant="primary" size="lg">
        Entrar
      </MUIButton>
    </FormContainer>
  );
};
