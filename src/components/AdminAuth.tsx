import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Shield, Mail, Lock } from 'lucide-react';

interface AdminAuthProps {
  onAuthSuccess: () => void;
}

export default function AdminAuth({ onAuthSuccess }: AdminAuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      onAuthSuccess();
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        toast({
          title: "Access Denied",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Authentication successful!",
        });
        onAuthSuccess();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Authentication failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin/blog`,
        },
      });
      
      if (error) {
        toast({
          title: "Sign Up Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Account Created",
          description: "Check your email to confirm your account, then sign in.",
        });
        setIsSignUpMode(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Sign up failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/blog`,
      });
      
      if (error) throw error;
      
      toast({
        title: "Reset Email Sent",
        description: "Check your email for the password reset link.",
      });
      setIsResetMode(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Admin Access</CardTitle>
          <p className="text-muted-foreground text-sm">
            Secure authentication required for blog administration
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <form onSubmit={isResetMode ? handlePasswordReset : (isSignUpMode ? handleSignUp : handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Admin Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="iamsomnath@franchiseleadspro.com"
                required
                disabled={isLoading}
              />
            </div>
            
            {!isResetMode && (
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                  required
                  minLength={6}
                  disabled={isLoading}
                />
              </div>
            )}
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading 
                ? (isResetMode ? 'Sending Reset Link...' : (isSignUpMode ? 'Creating Account...' : 'Signing In...')) 
                : (isResetMode ? 'Send Reset Link' : (isSignUpMode ? 'Create Admin Account' : 'Sign In to Admin Panel'))}
            </Button>
            
            {!isResetMode && (
              <button
                type="button"
                onClick={() => setIsSignUpMode(!isSignUpMode)}
                className="text-sm text-primary hover:underline w-full text-center"
                disabled={isLoading}
              >
                {isSignUpMode ? '← Back to Sign In' : "Don't have an account? Sign Up"}
              </button>
            )}
            
            <button
              type="button"
              onClick={() => { setIsResetMode(!isResetMode); setIsSignUpMode(false); }}
              className="text-sm text-muted-foreground hover:underline w-full text-center"
              disabled={isLoading}
            >
              {isResetMode ? '← Back to Sign In' : 'Forgot Password?'}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}