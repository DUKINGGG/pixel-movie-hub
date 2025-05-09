
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      titleElement={<span className="rgb-text">Sign Up</span>}
      footer={
        <motion.div 
          className="text-gray-300 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>.</p>
        </motion.div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SignupForm />
      </motion.div>
    </AuthLayout>
  );
};

export default Signup;
