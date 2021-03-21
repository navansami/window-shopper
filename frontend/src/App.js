import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
