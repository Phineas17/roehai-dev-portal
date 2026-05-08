import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function DocFooter() {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo-roehai.png" alt="RoehAI" className="h-7 w-auto mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agents IA vocaux et WhatsApp pour automatiser vos communications.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Documentation</h4>
            <ul className="space-y-2">
              {[
                { label: "Quickstart", to: "/quickstart" },
                { label: "Authentification", to: "/auth" },
                { label: "SDK", to: "/sdk" },
                { label: "Changelog", to: "/changelog" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Référence API</h4>
            <ul className="space-y-2">
              {[
                { label: "Aria — Appels vocaux", to: "/reference/aria" },
                { label: "Léa — WhatsApp", to: "/reference/lea" },
                { label: "Webhooks", to: "/reference/webhooks" },
                { label: "Codes d'erreur", to: "/errors" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">RoehAI</h4>
            <ul className="space-y-2">
              {[
                { label: "Site principal", href: "https://www.roehai.com" },
                { label: "Dashboard", href: "https://www.roehai.com/dashboard" },
                { label: "GitHub SDK", href: "https://github.com/Phineas17/roehai-sdk" },
                { label: "npm package", href: "https://www.npmjs.com/package/roehai-sdk" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                    {l.label} <ExternalLink size={11} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">© 2026 RoehAI. Tous droits réservés.</p>
          <p className="text-xs text-muted-foreground">
            API v1 · <span className="text-primary font-medium">Stable</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
