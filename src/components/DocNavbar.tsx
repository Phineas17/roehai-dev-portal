import { Link, NavLink } from "react-router-dom";
import { ExternalLink, Menu, X, Book, Zap, Key, Package, Code2, Phone, MessageSquare, Webhook, Terminal, Users, ChevronRight, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Quickstart", to: "/quickstart" },
  { label: "SDK", to: "/sdk" },
  { label: "API Aria", to: "/reference/aria" },
  { label: "Webhooks", to: "/reference/webhooks" },
  { label: "Guides", to: "/guides/zapier" },
];

const drawerSections = [
  {
    title: "Démarrage",
    items: [
      { label: "Introduction", to: "/", icon: Book },
      { label: "Quickstart", to: "/quickstart", icon: Zap },
      { label: "Authentification", to: "/auth", icon: Key },
    ],
  },
  {
    title: "SDK",
    items: [
      { label: "Installation", to: "/sdk", icon: Package },
      { label: "Référence SDK", to: "/sdk/reference", icon: Code2 },
    ],
  },
  {
    title: "Référence API",
    items: [
      { label: "Aria - Appels vocaux", to: "/reference/aria", icon: Phone },
      { label: "Léa - WhatsApp", to: "/reference/lea", icon: MessageSquare },
      { label: "Webhooks", to: "/reference/webhooks", icon: Webhook },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Intégrer Zapier", to: "/guides/zapier", icon: LayoutDashboard },
      { label: "Intégrer n8n", to: "/guides/n8n", icon: LayoutDashboard },
      { label: "Webhook Express.js", to: "/guides/webhook-express", icon: Terminal },
      { label: "Qualifier des leads", to: "/guides/leads", icon: Users },
    ],
  },
  {
    title: "Autre",
    items: [
      { label: "Codes d'erreur", to: "/errors", icon: ChevronRight },
      { label: "Changelog", to: "/changelog", icon: ChevronRight },
    ],
  },
];

export function DocNavbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── HEADER FLOATING CARD ── */}
      <header className="sticky top-0 z-50 w-full px-3 sm:px-4 pt-3 pb-1.5">
        <div className="max-w-7xl mx-auto bg-card border border-border rounded-2xl shadow-md px-4 h-13 flex items-center justify-between gap-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={close}>
            <img src="/logo-roehai.png" alt="RoehAI" className="h-7 w-auto" />
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-foreground">RoehAI</span>
              <span className="text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-md leading-none">
                Developers
              </span>
            </div>
          </Link>

          {/* Desktop nav links - lg+ only */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center text-sm">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-1.5 rounded-lg text-sm transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* roehai.com - hidden on mobile */}
            <a
              href="https://www.roehai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              roehai.com <ExternalLink size={12} />
            </a>

            {/* Dashboard CTA - compact on mobile */}
            <a
              href="https://www.roehai.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Dashboard →
            </a>

            {/* Hamburger - below lg */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE / TABLET DRAWER ── */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop - full screen, below header */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Floating card - suspended below header, with margins */}
          <div className="absolute top-[4.5rem] left-3 bottom-3 w-72 max-w-[calc(100vw-1.5rem)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-left-4 duration-200">

            {/* Drawer nav */}
            <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-5">
              {drawerSections.map((section) => (
                <div key={section.title}>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-2 mb-1.5">
                    {section.title}
                  </p>
                  <ul className="flex flex-col gap-0.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.to}>
                          <NavLink
                            to={item.to}
                            end={item.to === "/"}
                            onClick={close}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors",
                                isActive
                                  ? "nav-active"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                              )
                            }
                          >
                            <Icon size={14} className="shrink-0 opacity-70" />
                            {item.label}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Drawer footer */}
            <div className="px-4 py-4 border-t border-border space-y-2">
              <a
                href="https://www.roehai.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                Ouvrir le Dashboard →
              </a>
              <a
                href="https://www.roehai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                roehai.com <ExternalLink size={11} />
              </a>
              <p className="text-[11px] text-muted-foreground text-center">API version: <span className="text-primary font-medium">v1</span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
