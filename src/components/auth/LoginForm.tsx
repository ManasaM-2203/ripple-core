import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Welcome back! Connect Supabase for full functionality.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="glass-card border-border/50 animate-fade-in">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-foreground">
          Welcome Back
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Sign in to your account
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full glow-button text-primary-foreground font-semibold py-3 text-base"
          >
            Sign In
          </Button>
        </form>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <span className="text-primary cursor-pointer hover:text-accent transition-colors">
              Create account
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};