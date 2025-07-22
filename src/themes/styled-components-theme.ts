export const styledComponentsTheme = {
  colors: {
    primary: '#007bff',
    primaryDark: '#0056b3',
    primaryDarker: '#004499',
    secondary: '#6c757d',
    secondaryDark: '#545b62',
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    light: '#f8f9fa',
    dark: '#212529',
    muted: '#6c757d',
    border: '#e9ecef',
    background: '#ffffff',
    surface: '#ffffff',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
};

export type StyledComponentsTheme = typeof styledComponentsTheme;
