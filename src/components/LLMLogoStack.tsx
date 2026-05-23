import { cn } from "@/lib/utils";
import claudeLogo from "@/assets/integrations/claude-logo.png";
import geminiLogo from "@/assets/integrations/gemini-logo.png";

interface LLMLogoStackProps {
  className?: string;
  showLabels?: boolean;
}

function OpenAILogo() {
  return (
    <svg viewBox="0 0 41 41" aria-hidden="true" className="h-5 w-5 fill-foreground">
      <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5 10.079 10.079 0 0 0 8.695 7.26a9.966 9.966 0 0 0-6.66 4.834 10.079 10.079 0 0 0 1.243 11.83 9.964 9.964 0 0 0 .856 8.185 10.078 10.078 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.61-6.76 9.967 9.967 0 0 0 6.66-4.834 10.079 10.079 0 0 0-1.243-11.83ZM22.505 37.68a7.45 7.45 0 0 1-4.778-1.73l.236-.134 7.936-4.583a1.32 1.32 0 0 0 .663-1.148V18.892l3.355 1.938a.122.122 0 0 1 .066.092v9.27a7.472 7.472 0 0 1-7.478 7.488ZM6.392 30.803a7.45 7.45 0 0 1-.892-5.001l.236.141 7.937 4.583a1.32 1.32 0 0 0 1.325 0l9.69-5.596v3.875a.122.122 0 0 1-.044.103l-8.03 4.633a7.472 7.472 0 0 1-10.222-2.738ZM4.305 13.408a7.45 7.45 0 0 1 3.886-3.271v9.448a1.32 1.32 0 0 0 .663 1.148l9.69 5.596-3.356 1.937a.122.122 0 0 1-.11.01l-8.03-4.633a7.472 7.472 0 0 1-2.743-10.235Zm27.841 6.86-9.69-5.596 3.356-1.937a.122.122 0 0 1 .11-.01l8.03 4.633a7.472 7.472 0 0 1-1.143 13.506v-9.448a1.32 1.32 0 0 0-.663-1.148Zm3.354-5.061-.236-.141-7.937-4.583a1.32 1.32 0 0 0-1.325 0l-9.69 5.596v-3.875a.122.122 0 0 1 .044-.103l8.03-4.633a7.472 7.472 0 0 1 11.114 7.739ZM14.438 22.105l-3.355-1.937a.122.122 0 0 1-.066-.092v-9.27a7.472 7.472 0 0 1 12.256-5.758l-.236.134-7.936 4.583a1.32 1.32 0 0 0-.663 1.148v11.192Zm1.872-3.862 4.316-2.492 4.315 2.492v4.984l-4.315 2.492-4.316-2.492v-4.984Z" />
    </svg>
  );
}

function ClaudeLogo() {
  return (
    <img
      src={claudeLogo}
      alt=""
      className="h-5 w-5 object-contain"
      loading="lazy"
    />
  );
}

function GeminiLogo() {
  return (
    <img
      src={geminiLogo}
      alt=""
      className="h-5 w-5 object-contain"
      loading="lazy"
    />
  );
}

const logos = [
  { label: "OpenAI", icon: OpenAILogo, bg: "bg-background" },
  { label: "Claude", icon: ClaudeLogo, bg: "bg-[#fbf4ef] dark:bg-[#2a1812]" },
  { label: "Gemini", icon: GeminiLogo, bg: "bg-[#eef2ff] dark:bg-[#101936]" },
];

export function LLMLogoStack({ className, showLabels = false }: LLMLogoStackProps) {
  if (showLabels) {
    return (
      <div className={cn("grid gap-3 sm:grid-cols-3", className)}>
        {logos.map((logo) => {
          const Icon = logo.icon;
          return (
            <div
              key={logo.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
            >
              <span className={cn("flex h-10 w-10 items-center justify-center rounded-full border border-border shadow-sm", logo.bg)}>
                <Icon />
              </span>
              <span className="text-sm font-medium text-foreground">{logo.label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <span className={cn("flex items-center", className)} aria-label="OpenAI, Claude et Gemini">
      {logos.map((logo, index) => {
        const Icon = logo.icon;
        return (
          <span
            key={logo.label}
            title={logo.label}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-border shadow-sm",
              logo.bg,
              index > 0 && "-ml-3"
            )}
            style={{ zIndex: logos.length - index }}
          >
            <Icon />
          </span>
        );
      })}
    </span>
  );
}
