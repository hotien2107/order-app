import MenuControl from "@/components/MenuControl";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/backgroundVideo";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Order App",
  description: "Tien's Order App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="tm-container">
            <div className="tm-row">
              <MenuControl />
              <div className="tm-right">
                <main className="tm-main">{children}</main>
              </div>
            </div>
          </div>
          <Footer />
          <BackgroundVideo />
        </main>
      </body>
    </html>
  );
}
