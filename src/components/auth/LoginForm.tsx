
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      await login(email, password);
      navigate('/browse');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // For demo purposes, let's provide a demo login
  const handleDemoLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await login('demo@example.com', 'password123');
      navigate('/browse');
    } catch (error) {
      console.error('Demo login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-dark-300 border-dark-200 text-white ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`bg-dark-300 border-dark-200 text-white ${
            errors.password ? 'border-red-500' : ''
          }`}
        />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
      </div>
      
      <Button type="submit" className="w-full bg-streaming-500 hover:bg-streaming-600">
        Sign In
      </Button>
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={handleDemoLogin}
        className="w-full border-streaming-500/50 text-streaming-500 hover:bg-streaming-500/10"
      >
        Try Demo Account
      </Button>
    </form>
  );
};

export default LoginForm;
