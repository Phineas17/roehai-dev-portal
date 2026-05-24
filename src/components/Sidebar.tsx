import { NavLink } from "react-router-dom";
import { Zap, Book, Code2, Webhook, Key, Terminal, Package, ChevronRight, Phone, MessageSquare, Users, LayoutDashboard, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
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
      { label: "Aria, appels vocaux", to: "/reference/aria", icon: Phone },
      { label: "Léa, WhatsApp", to: "/reference/lea", icon: MessageSquare },
      { label: "Webhooks", to: "/reference/webhooks", icon: Webhook },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Intégrer Zapier", to: "/guides/zapier", icon: LayoutDashboard },
      { label: "Intégrer n8n", to: "/guides/n8n", icon: LayoutDashboard },
      { label: "Connecter aux LLM", to: "/guides/llm", icon: BrainCircuit },
      { label: "Webhook Express.js", to: "/guides/webhook-express", icon: Terminal },
      { label: "Qualifier des leads", to: "/guides/leads", icon: Users },
    ],
  },
  {
    title: "Autre",
    items: [
      { label: "Codes d'erreur", to: "/errors", icon: ChevronRight },
      { label: "Changelog", to: "/changelog", icon: ChevronRight, badge: "v1.0" },
    ],
  },
];

export function Sidebar() {
  return (
    <div className="flex flex-col gap-5 py-5 px-3 overflow-y-auto flex-1">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground px-3 mb-1.5">
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
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-colors",
                        isActive
                          ? "nav-active"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )
                    }
                  >
                    <Icon size={14} className="shrink-0 opacity-70" />
                    <span className="flex-1 leading-snug">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded font-mono">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="mt-auto px-3 pb-2">
        <p className="text-xs text-muted-foreground">API version: <span className="text-primary font-medium">v1</span></p>
      </div>
    </div>
  );
}
