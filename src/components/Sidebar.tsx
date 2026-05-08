import { NavLink } from "react-router-dom";
import {
  Zap, Book, Code2, Webhook, Key, Terminal, Package,
  ChevronRight, Phone, MessageSquare, Users, LayoutDashboard
} from "lucide-react";

interface NavSection {
  title: string;
  items: { label: string; to: string; icon?: React.ReactNode; badge?: string }[];
}

const navSections: NavSection[] = [
  {
    title: "Démarrage",
    items: [
      { label: "Introduction", to: "/", icon: <Book size={15} /> },
      { label: "Quickstart", to: "/quickstart", icon: <Zap size={15} /> },
      { label: "Authentification", to: "/auth", icon: <Key size={15} /> },
    ],
  },
  {
    title: "SDK",
    items: [
      { label: "Installation", to: "/sdk", icon: <Package size={15} /> },
      { label: "Référence SDK", to: "/sdk/reference", icon: <Code2 size={15} /> },
    ],
  },
  {
    title: "Référence API",
    items: [
      { label: "Aria — Appels vocaux", to: "/reference/aria", icon: <Phone size={15} /> },
      { label: "Léa — WhatsApp", to: "/reference/lea", icon: <MessageSquare size={15} /> },
      { label: "Webhooks", to: "/reference/webhooks", icon: <Webhook size={15} /> },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Intégrer Zapier", to: "/guides/zapier", icon: <LayoutDashboard size={15} /> },
      { label: "Intégrer n8n", to: "/guides/n8n", icon: <LayoutDashboard size={15} /> },
      { label: "Webhook Express.js", to: "/guides/webhook-express", icon: <Terminal size={15} /> },
      { label: "Qualifier des leads", to: "/guides/leads", icon: <Users size={15} /> },
    ],
  },
  {
    title: "Autre",
    items: [
      { label: "Codes d'erreur", to: "/errors", icon: <ChevronRight size={15} /> },
      { label: "Changelog", to: "/changelog", icon: <ChevronRight size={15} />, badge: "v1.0" },
    ],
  },
];

export function Sidebar() {

  return (
    <aside className="w-60 shrink-0 hidden lg:flex flex-col gap-6 py-6 pr-4">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3">
        <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
          R
        </div>
        <div>
          <div className="text-sm font-semibold text-white">RoehAI</div>
          <div className="text-xs text-[#a09dc0]">Developers</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-5">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#a09dc0]/60 px-3 mb-1">
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "nav-active font-medium"
                          : "text-[#a09dc0] hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    <span className="opacity-70">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded font-mono">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Version badge */}
      <div className="mt-auto px-3">
        <div className="text-xs text-[#a09dc0]/50">API version: v1</div>
      </div>
    </aside>
  );
}
