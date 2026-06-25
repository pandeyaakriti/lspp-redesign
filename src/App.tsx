import React from 'react';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Perks from './sections/Perks';
import Partners from './sections/Partners';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Perks />
        <Partners />
        {/* <Partners />
        <Mentors />
        <Resources />
        <FAQ /> */}
      </main>
    </div>
  );
};


export default App;