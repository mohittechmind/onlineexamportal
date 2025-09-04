import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import OTPVerificationPage from './pages/OTPVerificationPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ThankYouPage from './pages/ThankYouPage';
import ContactPage from './pages/ContactPage';
import StudyMaterialsScreen from './pages/StudyMaterialsScreen';



const App: React.FC = () => {
  return (
    <Router>
      <Layout>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/otp-verification" element={<OTPVerificationPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/study-materials" element={<StudyMaterialsScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

