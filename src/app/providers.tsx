'use client';

import { AuthProvider } from "@components/auth/SupabaseProvider";
import ObserverProvider from "@components/layout/ObserverProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ObserverProvider>{children}</ObserverProvider>
    </AuthProvider>
  );
}
