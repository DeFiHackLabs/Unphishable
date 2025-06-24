'use client';

import { ThemeProvider } from 'next-themes';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { holesky } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { injected } from 'wagmi/connectors';
import { LanguageProvider } from './contexts/LanguageContext';

import "./globals.css";

const config = createConfig({
  chains: [holesky],
  connectors: [
    injected(),
  ],
  transports: {
    [holesky.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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