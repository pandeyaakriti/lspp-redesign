import React from 'react';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Perks from './sections/Perks';
import Partners from './sections/Partners';
import Stats from './sections/Stats';
const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Perks />
        <Partners />
        <Stats />
        {/* <Partners />
        <Mentors />
        <Resources />
        <FAQ /> */}
      </main>
    </div>
  );
};


export default App;