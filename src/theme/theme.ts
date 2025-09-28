import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a73e8'
    },
    secondary: {
      main: '#ea4335'
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)'
        }
      }
    }
  }
});

export default theme;
