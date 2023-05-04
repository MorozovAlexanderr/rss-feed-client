import AppProvider from '@/providers/app';
import AppRouter from '@/routes';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <AppProvider>
      <Container component="main">
        <CssBaseline />
        <AppRouter />
      </Container>
    </AppProvider>
  );
};

export default App;
