import { Link, useNavigate } from "react-router-dom";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

export function DocNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo-roehai.png" alt="RoehAI" className="h-8 w-auto" />
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">RoehAI</span>
            <span className="text-xs font-medium bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-md">
              Developers
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {[
            { label: "Quickstart", to: "/quickstart" },
            { label: "SDK", to: "/sdk" },
            { label: "API Aria", to: "/reference/aria" },
            { label: "Webhooks", to: "/reference/webhooks" },
            { label: "Guides", to: "/guides/zapier" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.roehai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            roehai.com <ExternalLink size={13} />
          </a>
          <a
            href="https://www.roehai.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1.5 rounded-lg transition-colors"
          >
            Dashboard →
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
          {[
            { label: "Introduction", to: "/" },
            { label: "Quickstart", to: "/quickstart" },
            { label: "Authentification", to: "/auth" },
            { label: "SDK", to: "/sdk" },
            { label: "API Aria", to: "/reference/aria" },
            { label: "API Léa", to: "/reference/lea" },
            { label: "Webhooks", to: "/reference/webhooks" },
            { label: "Guides", to: "/guides/zapier" },
            { label: "Erreurs", to: "/errors" },
          ].map((item) => (
            <button
              key={item.to}
              onClick={() => { navigate(item.to); setOpen(false); }}
              className="text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
