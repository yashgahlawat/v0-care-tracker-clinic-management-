"use client";

import dynamic from "next/dynamic";

const ChatwootWidget = dynamic(() => import("@/components/ChatwootWidget"), {
  ssr: false,
});

interface ChatwootLoaderProps {
  websiteToken: string;
  baseUrl: string;
  position?: string;
  locale?: string;
  type?: string;
  hideMessageBubble?: boolean;
}

export function ChatwootLoader(props: ChatwootLoaderProps) {
  return <ChatwootWidget {...props} />;
}
