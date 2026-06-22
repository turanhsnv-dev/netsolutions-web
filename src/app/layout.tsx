import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NetSolutions | Kompleks İT Həllər",
  description: "Bizneslər üçün etibarlı, təhlükəsiz və müasir İT həlləri təqdim edən texnoloji tərəfdaşınız.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col bg-white`}>
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}