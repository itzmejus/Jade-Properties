import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { BrandedFallback } from './components/LoadingFallback';
import { initializeAuth } from './slices/authSlice';
import HomeContainer from './components/HomeContainer';
import PropertyDetailPage from './components/PropertyDetailPage';
import OurServices from './pages/OurServices';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

const Footer = lazy(() => import('./components/Footer'));
const Navbar = lazy(() => import('./components/Navbar'));
const ContactUsPage = lazy(() => import('./components/ContactUs'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AboutPage = lazy(() => import('./pages/AboutUs'));
const AllProperties = lazy(() => import('./components/AllProperties'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth() as any);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<BrandedFallback />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/properties' element={<AllProperties />} />
          <Route path='/property' element={<PropertyDetailPage />} />



          <Route path='/tours' element={<BrandedFallback />} />
          <Route path='/transfers' element={<BrandedFallback />} />
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