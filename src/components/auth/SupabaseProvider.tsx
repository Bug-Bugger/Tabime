import {
    createContext, ReactNode, useContext, useEffect, useState,
  } from 'react';
  import { Session } from '@supabase/supabase-js';
  import { createClient } from "@src/utils/supabase/client";


const supabase = createClient();

const AuthContext = createContext<{
    session: Session | null;
    supabase: typeof supabase;
    isLoading: boolean;
}>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setSession(session);
        setIsLoading(false);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setSession(session);
            }
        );

        return () => {
           authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ session, supabase, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
