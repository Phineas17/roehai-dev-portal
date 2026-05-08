import { CodeBlock } from "@/components/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const install = `npm install @roehai/sdk
# yarn add @roehai/sdk
# pnpm add @roehai/sdk`;

const init = `import { RoehAI } from "@roehai/sdk";

const client = new RoehAI({
  apiKey: process.env.ROEHAI_API_KEY!,
  // baseUrl: "https://www.roehai.com/api/v1",  // par défaut
  // timeout: 30_000,                            // ms, par défaut 30s
});`;

const errorHandling = `import { RoehAI, RoehAIError } from "@roehai/sdk";

try {
  const call = await client.aria.triggerCall({ phone_number: "+33612345678" });
} catch (err) {
  if (err instanceof RoehAIError) {
    console.error(err.code);    // "unauthorized" | "rate_limited" | ...
    console.error(err.status);  // 401 | 429 | ...
    console.error(err.message); // message lisible
  }
}`;

const sdkModules = [
  {
    module: "client.aria",
    methods: ["triggerCall(params)", "getCallStatus(callId)", "listCalls(params?)", "ingestLead(params)"],
    to: "/reference/aria",
  },
  {
    module: "client.lea",
    methods: ["sendMessage(params)", "listConversations(params?)"],
    to: "/reference/lea",
  },
  {
    module: "WebhookRouter",
    methods: ["on(event, handler)", "handle(payload)"],
    to: "/reference/webhooks",
  },
];

export function Sdk() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">SDK JavaScript / TypeScript</h1>
        <p className="text-[#a09dc0]">
          Wrapper TypeScript officiel — fonctionne dans Node.js, Deno, Bun et le navigateur.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Installation</h2>
          <CodeBlock code={install} language="bash" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Initialisation</h2>
          <CodeBlock code={init} language="typescript" filename="client.ts" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Modules disponibles</h2>
          <div className="flex flex-col gap-3">
            {sdkModules.map((mod) => (
              <div key={mod.module} className="p-4 rounded-xl bg-[#1a1a35] border border-white/8">
                <div className="flex items-center justify-between mb-3">
                  <code className="text-purple-300 font-mono text-sm">{mod.module}</code>
                  <Link
                    to={mod.to}
                    className="flex items-center gap-1 text-xs text-[#a09dc0] hover:text-white transition-colors"
                  >
                    Voir la référence <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mod.methods.map((m) => (
                    <code key={m} className="text-xs bg-[#252545] text-[#c4b5fd] px-2 py-1 rounded font-mono">
                      {m}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Gestion des erreurs</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Toutes les erreurs sont des instances de <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">RoehAIError</code> avec un code typé.
          </p>
          <CodeBlock code={errorHandling} language="typescript" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Codes d'erreur</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="pb-2 text-left text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium pr-6">Code</th>
                  <th className="pb-2 text-left text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium pr-6">HTTP</th>
                  <th className="pb-2 text-left text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["unauthorized", "401", "Clé API manquante ou invalide"],
                  ["forbidden", "403", "Clé valide mais permission insuffisante"],
                  ["not_found", "404", "Ressource introuvable"],
                  ["invalid_params", "422", "Paramètres manquants ou invalides"],
                  ["rate_limited", "429", "Trop de requêtes — attendre avant retry"],
                  ["server_error", "500", "Erreur côté serveur RoehAI"],
                  ["timeout", "—", "La requête a dépassé le délai configuré"],
                  ["network_error", "—", "Impossible de joindre le serveur"],
                ].map(([code, http, desc]) => (
                  <tr key={code} className="border-t border-white/8">
                    <td className="py-2.5 pr-6">
                      <code className="text-xs text-red-300 bg-red-900/20 px-1.5 py-0.5 rounded font-mono">{code}</code>
                    </td>
                    <td className="py-2.5 pr-6 text-sm text-[#a09dc0] font-mono">{http}</td>
                    <td className="py-2.5 text-sm text-[#a09dc0]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
