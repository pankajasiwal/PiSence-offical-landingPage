import Services from './component/ServicesCards.jsx';
import HeroSection from './component/HeroSection.jsx';
import Nav from './component/Nav.jsx';
import AboutSection from './component/AboutSection.jsx';
import GetInTouch from './component/GetInTouch.jsx';
import Footer from './component/Footer.jsx';
import WhyChooseUs from './component/WhyChooseUs.jsx';

function App() {
  return (
    <>
      <Nav />

      <HeroSection />

      <section className='relative my-10 bg-[#2b2727] max-w-screen-2xl mx-auto'>
        <AboutSection />
      </section>

      <WhyChooseUs />

      <section className='max-w-screen-2xl mx-auto my-10 h-fit bg-[#2b2727]'>
        <div className='text-center pt-6'>
          <h2 className='text-[2rem] font-bold text-stone-100'>
            <span className='text-red-500'>Our </span>Services
          </h2>
        </div>
        <Services />
      </section>

      <GetInTouch />

      <Footer />
    </>
  );
}

export default App;
