import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ThemeProvider } from "@/providers/theme-provider";
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
    // suppressHydrationWarning Next.js + next-themes üçün mütləq lazımdır
    <html lang="az" suppressHydrationWarning className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      {/* Burada dark mode üçün arxa fonu (#050505) və mətn rəngini təyin etdik */}
      <body suppressHydrationWarning className={`${poppins.className} min-h-full flex flex-col bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}