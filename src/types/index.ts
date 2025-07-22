export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
}

export interface BadgeProps {
  count: number;
  max?: number;
  variant?: 'default' | 'success' | 'error' | 'warning';
}

export interface TextProps {
  variant?: 'body' | 'heading' | 'caption';
  color?: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
}

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onSearch: (value: string) => void;
  onChange?: (value: string) => void;
}

export interface InputFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password';
  onChange?: (value: string) => void;
}

export interface HeaderProps {
  onThemeToggle?: () => void;
}

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export type Theme = 'light' | 'dark';
