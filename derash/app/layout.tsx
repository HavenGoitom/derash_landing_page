import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DerashCare — Emergency Response Platform for Ethiopia",
  description:
    "DerashCare connects patients, hospitals, ambulance drivers, and emergency responders in real time across Ethiopia. Someone who is there for you in your hardest times.",
  keywords: [
    "emergency response Ethiopia",
    "ambulance dispatch",
    "healthcare coordination",
    "hospital availability",
    "emergency SOS",
    "GPS tracking Ethiopia",
  ],
  openGraph: {
    title: "DerashCare — Emergency Response Platform",
    description:
      "Real-time emergency response & healthcare coordination across Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#E8182A" />
      </head>
      <body className={`${sora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
