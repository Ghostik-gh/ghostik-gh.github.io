import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about/AboutPage.tsx';
import HomePage from './pages/home/HomePage.js';
import NotFoundPage from './pages/not_found/NotFoundPage.js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout.tsx';

const theme = extendTheme({
  fonts: {
    heading: 'Fredoka, sans-serif',
    body: 'Fredoka, sans-serif',
  },
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#e6ecff',
      200: '#ccd3ff',
      300: '#b2baff',
      400: '#99a2ff',
      500: '#7f89ff',
      600: '#5f66cc',
      700: '#4a5199',
      800: '#343b66',
      900: '#1f2633',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
