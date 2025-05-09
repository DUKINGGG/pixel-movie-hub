
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      title={<span className="rgb-text">Sign In</span>}
      footer={
        <motion.div 
          className="text-gray-300 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>New to PixelFlix? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>.</p>
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LoginForm />
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
