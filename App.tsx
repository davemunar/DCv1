import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
