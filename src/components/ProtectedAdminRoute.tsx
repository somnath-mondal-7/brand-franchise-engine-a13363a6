import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import AdminAuth from './AdminAuth';
import { User } from '@supabase/supabase-js';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    // Safety: never get stuck on the loader for more than 5s.
    const safety = setTimeout(() => {
      if (!cancelled) setIsLoading(false);
    }, 5000);

    const checkAdmin = async (currentUser: User | null) => {
      if (!currentUser) {
        if (!cancelled) {
          setIsAdmin(false);
          setIsLoading(false);
        }
        return;
      }
      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('id')
          .eq('user_id', currentUser.id)
          .maybeSingle();
        if (error) console.error('admin_users lookup error:', error);
        if (!cancelled) setIsAdmin(!!data);
      } catch (err) {
        console.error('admin check failed:', err);
        if (!cancelled) setIsAdmin(false);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    // Subscribe FIRST, then read session — avoids missing the INITIAL_SESSION event.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      // Defer DB call so we don't deadlock the auth callback.
      setTimeout(() => checkAdmin(currentUser), 0);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
    }).catch((err) => {
      console.error('getSession failed:', err);
      if (!cancelled) setIsLoading(false);
    });

    return () => {
      cancelled = true;
      clearTimeout(safety);
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthSuccess = () => {};

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Access Denied</h1>
          <p className="text-muted-foreground">You don't have admin privileges.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
