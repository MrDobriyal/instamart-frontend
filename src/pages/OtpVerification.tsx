import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';

const OtpVerification = () => {
  const navigate = useNavigate();
  const { phone, otp, setOtp, verifyOtp } = useAuthStore();

  const handleVerify = () => {
    if (otp.length === 6) {
      verifyOtp();
      navigate('/');
    }
  };

  useEffect(() => {
    if (otp.length === 6) {
      handleVerify();
    }
  }, [otp]);

  return (
    <div className="min-h-screen bg-brand-blue flex flex-col max-w-[430px] mx-auto">
      {/* Header */}
      <div className="px-4 pt-4">
        <button onClick={() => navigate('/login')} className="text-primary-foreground">
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full bg-background rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-foreground mb-1">Verify your number</h2>
          <p className="text-sm text-muted-foreground mb-1">
            Enter the 6-digit code sent to
          </p>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium text-foreground">+91 {phone}</span>
            <button
              onClick={() => navigate('/login')}
              className="text-xs text-brand-blue font-medium"
            >
              Edit
            </button>
          </div>

          {/* OTP Input */}
          <div className="flex justify-center mb-6">
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Resend options */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2 h-11 rounded-xl text-sm">
              <MessageSquare className="h-4 w-4" />
              Get via SMS
            </Button>
            <Button variant="outline" className="flex-1 gap-2 h-11 rounded-xl text-sm">
              <Phone className="h-4 w-4" />
              Get via Call
            </Button>
          </div>
        </div>

        <p className="mt-6 text-xs text-primary-foreground/60 text-center">
          Didn't receive the code? Retry in 30s
        </p>
      </div>
    </div>
  );
};

export default OtpVerification;
