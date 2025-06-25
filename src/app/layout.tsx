// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Layout from '../../components/Layout';

export const metadata = {
  title: 'Aquatic Elite Performance',
  description: 'Elite swim coaching for national and international athletes.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
