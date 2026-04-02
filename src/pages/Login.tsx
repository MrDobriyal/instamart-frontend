import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { phone, setPhone, sendOtp, skipLogin } = useAuthStore();

  const handleContinue = () => {
    if (phone.length === 10) {
      sendOtp();
      navigate('/otp');
    }
  };

  const handleSkip = () => {
    skipLogin();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col items-center justify-center px-6 max-w-[430px] mx-auto">
      <div className="w-full flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="text-6xl mb-3">🛒</div>
          <h1 className="text-3xl font-bold text-primary-foreground">Instamart</h1>
          <p className="text-primary-foreground/80 text-sm mt-1">Groceries delivered in minutes</p>
        </div>

        {/* Phone Input Card */}
        <div className="w-full bg-background rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-foreground mb-1">Enter your phone number</h2>
          <p className="text-sm text-muted-foreground mb-5">We'll send you a verification code</p>

          <div className="flex gap-2 mb-4">
            <button className="flex items-center gap-1 px-3 py-2 border border-input rounded-lg text-sm font-medium text-foreground bg-muted/50">
              🇮🇳 +91 <ChevronDown className="h-3 w-3" />
            </button>
            <Input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              className="flex-1 text-base"
              autoFocus
            />
          </div>

          <Button
            onClick={handleContinue}
            disabled={phone.length !== 10}
            className="w-full h-12 bg-brand-blue hover:bg-brand-blue/90 text-primary-foreground rounded-xl text-base font-semibold"
          >
            Continue
          </Button>
        </div>

        {/* Skip */}
        <button
          onClick={handleSkip}
          className="mt-6 text-primary-foreground/80 text-sm underline underline-offset-2"
        >
          Skip for now
        </button>

        {/* Terms */}
        <p className="mt-8 text-xs text-primary-foreground/60 text-center leading-relaxed px-4">
          By continuing, you agree to our{' '}
          <span className="underline">Terms of Service</span> &{' '}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
