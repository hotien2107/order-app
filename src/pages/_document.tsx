import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {" "}
        {/* <!-- Messenger Chat plugin Code --> */}
        <div id="fb-root"></div>
        {/* <!-- Your Chat plugin code --> */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
