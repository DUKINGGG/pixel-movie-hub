
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '@/components/auth/SignupForm';
import AuthLayout from '@/components/auth/AuthLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/browse');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout 
      title="Sign Up" 
      footer={
        <div className="text-gray-300 text-center">
          <p>Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>.</p>
        </div>
      }
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
