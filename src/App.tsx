import React from 'react';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Perks from './sections/Perks';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Perks />
        {/* <Partners />
        <Mentors />
        <Resources />
        <FAQ /> */}
      </main>
    </div>
  );
};


export default App;