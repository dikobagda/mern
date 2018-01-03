import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const App = ({ children }) => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
