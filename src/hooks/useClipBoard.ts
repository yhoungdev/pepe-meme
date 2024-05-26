import { useState } from "react";

export const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (copied) {
    alert("Address copied successfully");
    return { copied, copyToClipboard };
  }

  return { copied, copyToClipboard };
};
