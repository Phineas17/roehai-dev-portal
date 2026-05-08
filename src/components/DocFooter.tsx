import { Link } from "react-router-dom";
import { ExternalLink, X, GitBranch, Globe } from "lucide-react";

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
  { href: "https://twitter.com/roehai", Icon: X, label: "Twitter / X" },
  { href: "https://github.com/Phineas17/roehai-sdk", Icon: GitBranch, label: "GitHub" },
  { href: "https://www.roehai.com", Icon: Globe, label: "roehai.com" },
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
                    <Icon className="w-4 h-4" />
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
