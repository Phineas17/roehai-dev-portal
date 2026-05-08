import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.631 5.903-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const docLinks = [
  { label: "Quickstart", to: "/quickstart" },
  { label: "Authentification", to: "/auth" },
  { label: "SDK JavaScript", to: "/sdk" },
  { label: "Référence SDK", to: "/sdk/reference" },
  { label: "Changelog", to: "/changelog" },
];

const apiLinks = [
  { label: "Aria — Appels vocaux", to: "/reference/aria" },
  { label: "Léa — WhatsApp", to: "/reference/lea" },
  { label: "Webhooks", to: "/reference/webhooks" },
  { label: "Codes d'erreur", to: "/errors" },
];

const externalLinks = [
  { label: "Site principal", href: "https://www.roehai.com" },
  { label: "Dashboard", href: "https://www.roehai.com/dashboard" },
  { label: "GitHub SDK", href: "https://github.com/Phineas17/roehai-sdk" },
  { label: "npm package", href: "https://www.npmjs.com/package/roehai-sdk" },
];

const socials = [
  { href: "https://twitter.com/roehai", Icon: IconTwitterX, label: "Twitter / X" },
  { href: "https://github.com/Phineas17/roehai-sdk", Icon: IconGitHub, label: "GitHub" },
  { href: "https://www.linkedin.com/company/roehai", Icon: IconLinkedIn, label: "LinkedIn" },
];

export function DocFooter() {
  return (
    <footer className="w-full pt-8 pb-4 lg:pt-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="bg-card border border-border rounded-2xl shadow-md p-7 md:p-10">

          {/* Main grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex items-center gap-2">
                <img src="/logo-roehai.png" alt="RoehAI" className="h-7 w-auto" />
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-foreground">RoehAI</span>
                  <span className="text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-md leading-none">
                    Developers
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Intégrez des agents IA vocaux et WhatsApp dans vos apps en quelques lignes de code.
              </p>
              <div className="flex gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Documentation */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Documentation
              </h4>
              <ul className="space-y-2">
                {docLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Référence API */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Référence API
              </h4>
              <ul className="space-y-2">
                {apiLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RoehAI */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                RoehAI
              </h4>
              <ul className="space-y-2">
                {externalLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {l.label} <ExternalLink size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border/50 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} RoehAI. Tous droits réservés.</span>
            <span>API v1 · <span className="text-primary font-medium">Stable</span></span>
          </div>
        </div>
      </div>

      {/* Brand watermark */}
      <div className="w-full overflow-hidden mt-1" aria-hidden="true">
        <p
          className="select-none text-center font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(5rem, 18vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px hsl(var(--foreground) / 0.04)",
            background: "linear-gradient(110deg, hsl(var(--foreground) / 0.06) 40%, hsl(var(--foreground) / 0.13) 50%, hsl(var(--foreground) / 0.06) 60%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            marginBottom: "-0.1em",
            letterSpacing: "-0.03em",
          }}
        >
          RoehAI
        </p>
      </div>
    </footer>
  );
}
