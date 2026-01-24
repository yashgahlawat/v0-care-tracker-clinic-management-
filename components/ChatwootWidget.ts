"use client";

import { useEffect, useRef } from "react";

const ChatwootWidget = ({
  websiteToken,
  baseUrl,
  position,
  locale,
  type,
  hideMessageBubble,
}: any) => {
  const prevUserRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    window.chatwootSettings = {
      hideMessageBubble,
      position,
      locale,
      type,
    };

    // Initialize Chatwoot
    (function (d, t) {
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      // @ts-ignore
      g.src = `${baseUrl}/packs/js/sdk.js`;
      // @ts-ignore
      s.parentNode.insertBefore(g, s);
      // @ts-ignore
      g.async = !0;
      g.onload = function () {
        // @ts-ignore
        window.chatwootSDK.run({
          websiteToken,
          baseUrl,
        });

        // @ts-ignore
        window.$chatwoot.reset();
      };
    })(document, "script");

    // Cleanup function
    return () => {
      // Remove Chatwoot widget when component unmounts
      const cwScript = document.querySelector('script[src*="sdk.js"]');
      if (cwScript) {
        cwScript.remove();
      }

      const cwFrame = document.getElementById("chatwoot_live_chat_widget");
      if (cwFrame) {
        cwFrame.remove();
      }

      const cwHolder = document.getElementById("cw-widget-holder");
      if (cwHolder) {
        cwHolder.remove();
      }

      const cwBubble = document.getElementById("cw-bubble-holder");
      if (cwBubble) {
        cwBubble.remove();
      }

      // Clean up global variables
      // @ts-ignore
      delete window.chatwootSettings;
      // @ts-ignore
      delete window.$chatwoot;
    };
  }, [baseUrl, websiteToken, position, locale, type, hideMessageBubble]);

  return null;
};

export default ChatwootWidget;
