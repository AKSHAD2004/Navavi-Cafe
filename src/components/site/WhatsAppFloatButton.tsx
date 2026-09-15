import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloatButton() {
  return (
    <div className="whatsapp-floating-container">
      <a
        href={whatsappLink(
          "Hi Navavi Chai & Cafe, I would like to know more about your Amrutulya franchise.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Navavi Chai & Cafe on WhatsApp"
        className="animate-whatsapp-z-pop inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-3.5 py-2.5 text-xs font-semibold text-whatsapp-foreground transition-all duration-200 sm:px-4 sm:py-3 sm:text-sm"
      >
        <WhatsAppIcon className="size-4 shrink-0 sm:size-5" />
        <span className="sm:hidden">WhatsApp for enquiry</span>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
