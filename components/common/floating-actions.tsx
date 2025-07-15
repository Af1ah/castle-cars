"use client"

import { Phone, MessageCircle, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function FloatingActions() {
  const { toast } = useToast();
  const handleCall = () => {
    window.location.href = "tel:+918248723357";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918248723357", "_blank");
  };

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: "Check out this page from Castle Cars!",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied!",
          description: "The page link has been copied to your clipboard.",
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
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button
        onClick={handleCall}
        className="bg-[#C4A750] hover:bg-[#B8A045] text-black p-4 rounded-full shadow-lg transition-colors"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </button>
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <button
        onClick={handleShare}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-colors"
        aria-label="Share this page"
      >
        <Share2 className="h-6 w-6" />
      </button>
    </div>
  );
}
