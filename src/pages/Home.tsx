import { Link } from "react-router-dom";
import { Zap, Phone, MessageSquare, Webhook, Package, ArrowRight, Terminal, Key } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

const quickstart = `import { RoehAI } from "roehai-sdk";

const client = new RoehAI({ apiKey: "sk_votre_cle" });

// Déclencher un appel vocal IA en 3 lignes
const call = await client.aria.triggerCall({
  phone_number: "+33612345678",
  contact_name: "Jean Dupont",
  context: "Prospect depuis le formulaire web",
});

console.log(call.call_id); // "call_abc123"
console.log(call.status);  // "ringing"`;

const cards = [
  { icon: Zap, title: "Quickstart", desc: "Premier appel IA en 5 minutes.", to: "/quickstart", color: "text-yellow-500" },
  { icon: Package, title: "SDK JavaScript", desc: "Wrapper TypeScript officiel pour Node.js et le navigateur.", to: "/sdk", color: "text-primary" },
  { icon: Phone, title: "Aria - Agent Vocal", desc: "Déclenchez des appels sortants IA avec transcript et résumé auto.", to: "/reference/aria", color: "text-blue-500" },
  { icon: MessageSquare, title: "Léa - WhatsApp", desc: "Agent de support WhatsApp - envoyez et recevez automatisé.", to: "/reference/lea", color: "text-primary" },
  { icon: Webhook, title: "Webhooks", desc: "Recevez les événements en temps réel - transcripts, qualifications.", to: "/reference/webhooks", color: "text-pink-500" },
  { icon: Terminal, title: "Guides", desc: "Zapier, n8n, Express.js - intégrez RoehAI dans votre stack.", to: "/guides/zapier", color: "text-cyan-500" },
];

export function Home() {
  return (
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full mb-5 font-medium">
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        API v1 - Stable
      </div>

      {/* Hero */}
      <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight tracking-tight">
        Bienvenue sur{" "}
        <span className="text-primary">RoehAI Developers</span>
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Intégrez des agents IA vocaux et WhatsApp dans vos applications en quelques lignes.
        Déclenchez des appels, recevez des transcripts, synchronisez votre CRM.
      </p>

      {/* Code example */}
      <div className="mb-4">
        <CodeBlock code={quickstart} filename="exemple.ts" language="typescript" />
      </div>
      <p className="text-sm text-muted-foreground mb-10">
        Obtenez votre clé API dans votre{" "}
        <a href="https://www.roehai.com/dashboard" target="_blank" rel="noopener noreferrer"
          className="text-primary hover:underline font-medium">
          dashboard RoehAI
        </a>.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.to}
              to={card.to}
              className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-accent/50 transition-all"
            >
              <div className="flex items-start gap-3">
                <Icon size={18} className={`${card.color} mt-0.5 shrink-0`} />
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-sm font-semibold text-foreground">{card.title}</span>
                    <ArrowRight size={13} className="text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-snug">{card.desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Install CTA */}
      <div className="mt-8 p-5 rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 mb-3">
          <Key size={15} className="text-primary" />
          <span className="text-sm font-semibold text-foreground">Installer le SDK</span>
        </div>
        <CodeBlock code="npm install roehai-sdk" language="bash" />
      </div>
    </div>
  );
}
