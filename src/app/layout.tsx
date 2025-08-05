// src/app/layout.tsx
import './globals.css';

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