import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kavita Tiwari | Finance Automation & Business Analysis",
  description:
    "Chartered Accountant and Finance Automation professional specializing in TDS automation, rule engines, analytics, compliance transformation, and scalable finance systems at Ernst & Young.",
  keywords: [
    "Kavita Tiwari",
    "Chartered Accountant",
    "Finance Automation",
    "TDS Automation",
    "Business Analysis",
    "Alteryx",
    "Power BI",
    "Ernst & Young",
  ],
  authors: [{ name: "Kavita Tiwari" }],
  openGraph: {
    title: "Kavita Tiwari | Finance Automation & Business Analysis",
    description:
      "Transforming finance functions into scalable, efficient, and insight-driven systems.",
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
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
