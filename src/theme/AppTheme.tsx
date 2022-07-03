import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme, lightTheme } from '.';
import { useMemo } from 'react';

type Props = {
  mode: 'light' | 'dark';
  children: any;
}

export default function AppTheme({ mode, children }: Props) {

  const theme = useMemo(
    () => mode === 'dark' ? darkTheme : lightTheme,
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}