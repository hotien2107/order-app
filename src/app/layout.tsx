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
        <Script id="fb-messenger" strategy="lazyOnload">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "105241572603864");
            chatbox.setAttribute("attribution", "biz_inbox");
      
            window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v17.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
        `}
        </Script>
      </body>
    </html>
  );
}
