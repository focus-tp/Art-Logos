import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Promotions from '../components/sections/Promotions';
import Services from '../components/sections/Services';
import TeamBento from '../components/sections/TeamBento';
import Parents from '../components/sections/Parents';
import Cta from '../components/sections/Cta';

export default function Home() {
  return (
    <div className="font-nunito text-tx bg-ww min-h-screen">
      <Navbar />
      <Hero />
      <Promotions />
      <About />
      <Services />
      <TeamBento />
      <Parents />
      <Cta />
      <Footer />
    </div>
  );
}
