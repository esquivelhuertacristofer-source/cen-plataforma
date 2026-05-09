import { Plus_Jakarta_Sans, Epilogue } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
});

export default function HubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${plusJakarta.variable} ${epilogue.variable} min-h-screen bg-[#011126] selection:bg-[#FF8C00] selection:text-[#011126]`}>
      {children}
    </div>
  );
}
