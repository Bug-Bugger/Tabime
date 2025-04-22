'use client';

import { AuthProvider } from "@components/auth/SupabaseProvider";
import ObserverProvider from "@components/layout/observerProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ObserverProvider>{children}</ObserverProvider>
    </AuthProvider>
  );
}
