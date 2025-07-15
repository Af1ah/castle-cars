"use client";

import { Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ShareButtonProps {
  title: string;
  text: string;
}

export function ShareButton({ title, text }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "The car link has been copied to your clipboard.",
        });
      } catch (error) {
        console.error("Error copying to clipboard:", error);
        toast({
          variant: "destructive",
          title: "Oops!",
          description: "Could not copy the link.",
        });
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="absolute top-4 right-4 bg-neutral-matteBlack/80 backdrop-blur-sm p-3 rounded-full hover:bg-neutral-darkGray transition-colors z-10"
    >
      <Share2 className="h-5 w-5 text-white" />
    </button>
  );
}