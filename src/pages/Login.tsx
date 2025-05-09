
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import AuthLayout from '@/components/auth/AuthLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/browse');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout 
      title="Sign In" 
      footer={
        <div className="text-gray-300 text-center">
          <p>New to PixelFlix? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>.</p>
        </div>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
