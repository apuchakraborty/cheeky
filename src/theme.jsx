import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    custom: {
        main: '#fff',
        headingColor: '#0F1D3B',
        bgSidebar: '#FAFBFB',
        themeBlue: '#2870FB',
        borderColor: '#E3E3E5'
    }
  },
  typography: {
    fontFamily: 'Manrope, sans-serif',
    h6: {
      fontWeight: 600,
      fontSize: 16
    },
    body2: {
      color: '#757575',
    },
  },
});

export default theme;
