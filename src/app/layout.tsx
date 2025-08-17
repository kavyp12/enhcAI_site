// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  icons: {
    icon: '/enhc_logo.jpg', // favicon replacement
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <main className="w-full max-w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
