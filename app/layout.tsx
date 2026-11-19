'use client';

import { ThemeProvider } from 'next-themes';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from 'wagmi/connectors';
import { LanguageProvider } from './contexts/LanguageContext';

import "./globals.css";

const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),
  ],
  transports: {
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // next-themes sets data-theme on <html> via an inline script before React
  // hydrates, so the server markup and the first client render differ by that
  // attribute. suppressHydrationWarning silences that one element's attribute
  // diff; it does not hide mismatches anywhere else in the tree.
  return (
    <html lang="en" suppressHydrationWarning>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <body>
            <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
              <LanguageProvider>
                {children}
              </LanguageProvider>
            </ThemeProvider>
          </body>
        </QueryClientProvider>
      </WagmiProvider>
    </html>
  );
}