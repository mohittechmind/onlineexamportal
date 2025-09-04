import React, { useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

const OTPVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // API call example (commented out)
      // const response = await axios.post('/api/verify-otp', {
      //   email: email,
      //   otp: otpString
      // });
      // 
      // if (response.data.success) {
      //   navigate('/reset-password', { state: { email, token: response.data.token } });
      // }

      console.log('OTP verification data:', { email, otp: otpString });
      // Simulate successful OTP verification for demo
      setTimeout(() => {
        alert('OTP verified successfully! (Demo)');
        navigate('/reset-password', { state: { email } });
      }, 1000);
    } catch (error) {
      console.error('OTP verification error:', error);
      setError('Invalid OTP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Verify OTP
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent a 6-digit code to {email || 'your email'}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Enter 6-digit OTP
              </label>
              <div className="flex justify-between space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>

            <div className="text-center space-y-2">
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-500 hover:underline"
                onClick={() => {
                  // Resend OTP logic would go here
                  alert('OTP resent! (Demo)');
                }}
              >
                Resend OTP
              </button>
              <div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-600 hover:text-gray-500 hover:underline"
                >
                  Back to Forgot Password
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
