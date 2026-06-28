import React from 'react';
import Navbar from './layouts/Navbar';
import Hero from './sections/Hero';
import Perks from './sections/Perks';
import Partners from './sections/Partners';
import Stats from './sections/Stats';
import Mentors from './sections/Mentors';
import Resources from './sections/Resources';
import Faq from './sections/Faq';
import Highlights from './sections/Highlights';
const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Perks />
        <Partners />
        <Stats />
        <Mentors />
        <Resources />
        <Highlights />
        <Faq />
      </main>
    </div>
  );
};


export default App;