import Header from '@/components/UI/Header';
import AppProvider from '@/providers/app';
import AppRouter from '@/routes';
import { Container, CssBaseline } from '@mui/material';

const App = () => {
  return (
    <AppProvider>
      <CssBaseline />
      <Header />
      <Container component="main">
        <AppRouter />
      </Container>
    </AppProvider>
  );
};

export default App;
