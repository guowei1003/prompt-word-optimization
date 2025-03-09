import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css'
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI提示词优化平台',
  description: '提升大模型输出质量的智能提示词优化工具',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  );
}