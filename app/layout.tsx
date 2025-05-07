import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'Deploy your static Next.js site to GitHub Pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* global.css is imported above for global styles */}
        {/* Removed inline <style> for menu bar */}
      </head>
      <body>
        <nav className="menu-bar">
          <a href="/" className="menu-link">Home</a>
          <a href="/about" className="menu-link">About</a>
          <a href="/contact" className="menu-link">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
