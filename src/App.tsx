import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BrandedFallback } from './components/LoadingFallback';
import HomeContainer from './components/HomeContainer';
import PropertyDetailPage from './components/PropertyDetailPage';
import OurServices from './pages/OurServices';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const ContactUsPage = lazy(() => import('./components/ContactUs'));
const AboutPage = lazy(() => import('./pages/AboutUs'));
const AllProperties = lazy(() => import('./components/AllProperties'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<BrandedFallback />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/properties' element={<AllProperties />} />
          <Route path="/properties/:handle" element={<PropertyDetailPage />} />


          <Route path='/services' element={<OurServices />} />
          <Route path='*' element={<BrandedFallback />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;