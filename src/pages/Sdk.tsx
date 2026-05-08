import { CodeBlock } from "@/components/CodeBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const install = `npm install roehai-sdk
# yarn add roehai-sdk
# pnpm add roehai-sdk`;

const init = `import { RoehAI } from "roehai-sdk";

const client = new RoehAI({
  apiKey: process.env.ROEHAI_API_KEY!,
  // baseUrl: "https://www.roehai.com/api/v1",  // par défaut
  // timeout: 30_000,                            // ms, par défaut 30s
});`;

const errorHandling = `import { RoehAI, RoehAIError } from "roehai-sdk";

try {
  const call = await client.aria.triggerCall({ phone_number: "+33612345678" });
} catch (err) {
  if (err instanceof RoehAIError) {
    console.error(err.code);    // "unauthorized" | "rate_limited" | ...
    console.error(err.status);  // 401 | 429 | ...
    console.error(err.message);
  }
}`;

const modules = [
  { module: "client.aria", methods: ["triggerCall(params)", "getCallStatus(callId)", "listCalls(params?)", "ingestLead(params)"], to: "/reference/aria" },
  { module: "client.lea", methods: ["sendMessage(params)", "listConversations(params?)"], to: "/reference/lea" },
  { module: "WebhookRouter", methods: ["on(event, handler)", "handle(payload)"], to: "/reference/webhooks" },
];

const errorCodes = [
  ["unauthorized", "401", "Clé API manquante, invalide ou révoquée"],
  ["forbidden", "403", "Permission insuffisante pour cette opération"],
  ["not_found", "404", "Ressource introuvable"],
  ["invalid_params", "422", "Paramètres manquants ou format invalide"],
  ["rate_limited", "429", "Trop de requêtes - implémenter un retry"],
  ["server_error", "500", "Erreur interne côté serveur RoehAI"],
  ["timeout", "-", "Requête dépassant le délai configuré"],
  ["network_error", "-", "Impossible de joindre le serveur RoehAI"],
];

export function Sdk() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">SDK</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">SDK JavaScript / TypeScript</h1>
        <p className="text-muted-foreground">
          Wrapper TypeScript officiel - fonctionne dans Node.js, Deno, Bun et le navigateur.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Installation</h2>
          <CodeBlock code={install} language="bash" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Initialisation</h2>
          <CodeBlock code={init} language="typescript" filename="client.ts" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Modules disponibles</h2>
          <div className="flex flex-col gap-3">
            {modules.map((mod) => (
              <div key={mod.module} className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center justify-between mb-3">
                  <code className="text-primary bg-primary/10 px-2 py-0.5 rounded text-sm font-mono">{mod.module}</code>
                  <Link to={mod.to} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    Voir la référence <ArrowRight size={11} />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mod.methods.map((m) => (
                    <code key={m} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono border border-border">
                      {m}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Gestion des erreurs</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Toutes les erreurs sont des instances de <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">RoehAIError</code>.
          </p>
          <CodeBlock code={errorHandling} language="typescript" />
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Codes d'erreur</h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Code</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">HTTP</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Description</th>
                </tr>
              </thead>
              <tbody>
                {errorCodes.map(([code, http, desc], i) => (
                  <tr key={code} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                    <td className="px-4 py-2.5">
                      <code className="text-xs text-destructive bg-destructive/10 px-1.5 py-0.5 rounded font-mono">{code}</code>
                    </td>
                    <td className="px-4 py-2.5 text-sm text-muted-foreground font-mono">{http}</td>
                    <td className="px-4 py-2.5 text-sm text-muted-foreground">{desc}</td>
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
