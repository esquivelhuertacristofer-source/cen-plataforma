import { Epilogue, Instrument_Serif } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["400", "500", "700", "800", "900"],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  display: 'swap',
});

export const metadata = {
  title: "CEN | Plataforma de Educación Financiera",
  description: "La plataforma educativa líder en inteligencia financiera para niños y jóvenes.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0118',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${epilogue.variable} ${instrumentSerif.variable} font-epilogue antialiased`}>
        {children}
      </body>
    </html>
  );
}