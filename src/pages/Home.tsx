import { Link } from "react-router-dom";
import { Zap, Phone, MessageSquare, Webhook, Package, ArrowRight, Terminal } from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";

const quickstart = `import { RoehAI } from "@roehai/sdk";

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
  {
    icon: <Zap size={18} />,
    title: "Quickstart",
    desc: "Premier appel IA en 5 minutes.",
    to: "/quickstart",
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: <Package size={18} />,
    title: "SDK JavaScript",
    desc: "Wrapper TypeScript officiel pour Node.js et le navigateur.",
    to: "/sdk",
    color: "from-purple-500/20 to-blue-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: <Phone size={18} />,
    title: "Aria — Agent Vocal",
    desc: "Déclenchez des appels sortants IA avec transcript et résumé auto.",
    to: "/reference/aria",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: <MessageSquare size={18} />,
    title: "Léa — WhatsApp",
    desc: "Agent de support WhatsApp — envoyez et recevez des messages automatisés.",
    to: "/reference/lea",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/20",
  },
  {
    icon: <Webhook size={18} />,
    title: "Webhooks",
    desc: "Recevez les événements en temps réel — transcripts, qualifications, statuts.",
    to: "/reference/webhooks",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: <Terminal size={18} />,
    title: "Guides",
    desc: "Zapier, n8n, Express.js — intégrez RoehAI dans votre stack.",
    to: "/guides/zapier",
    color: "from-cyan-500/20 to-sky-500/10",
    border: "border-cyan-500/20",
  },
];

export function Home() {
  return (
    <div className="max-w-3xl">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs bg-purple-900/40 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
          API v1 — Stable
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Bienvenue sur{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            RoehAI Developers
          </span>
        </h1>
        <p className="text-lg text-[#a09dc0] leading-relaxed">
          Intégrez des agents IA vocaux et WhatsApp dans vos applications en quelques lignes.
          Déclenchez des appels, recevez des transcripts, synchronisez votre CRM.
        </p>
      </div>

      {/* Quick example */}
      <div className="mb-10">
        <CodeBlock code={quickstart} filename="exemple.ts" language="typescript" />
        <p className="mt-3 text-sm text-[#a09dc0]">
          Obtenez votre clé API dans votre{" "}
          <a
            href="https://www.roehai.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            dashboard RoehAI
          </a>
          .
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className={`group p-4 rounded-xl border ${card.border} bg-gradient-to-br ${card.color} hover:border-white/20 transition-all`}
          >
            <div className="flex items-start gap-3">
              <div className="text-[#a09dc0] group-hover:text-white transition-colors mt-0.5">
                {card.icon}
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm font-semibold text-white">{card.title}</span>
                  <ArrowRight
                    size={13}
                    className="text-[#a09dc0] group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
                <p className="text-sm text-[#a09dc0]">{card.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
