import Navbar from "./Componants/Navbar";
import Hero from "./Componants/Hero";
import Highlights from "./Componants/Highlights";
import Model from "./Componants/Model";
import * as Sentry from '@sentry/react';
import Features from "./Componants/Features";
import Chip from "./Componants/Chip";
import Footer from "./Componants/Footer";
const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
