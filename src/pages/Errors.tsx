import { CodeBlock } from "@/components/CodeBlock";

const retryExample = `import { RoehAI, RoehAIError } from "roehai-sdk";

const client = new RoehAI({ apiKey: process.env.ROEHAI_API_KEY! });

async function triggerWithRetry(phone: string, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await client.aria.triggerCall({ phone_number: phone });
    } catch (err) {
      if (!(err instanceof RoehAIError)) throw err;

      if (err.code === "rate_limited") {
        const delay = 2000 * attempt;
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }

      // Ne pas retenter les erreurs non-récupérables
      if (err.code === "unauthorized" || err.code === "invalid_params") {
        throw err;
      }

      if (attempt === maxRetries) throw err;
    }
  }
}`;

const errors = [
  { code: "unauthorized", http: "401", color: "text-destructive bg-destructive/10 border-destructive/20", desc: "Clé API manquante, invalide ou révoquée.", action: "Vérifiez votre clé dans Dashboard → Paramètres → Clés API." },
  { code: "forbidden", http: "403", color: "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20", desc: "Clé valide mais l'opération dépasse vos permissions.", action: "Vérifiez que votre plan inclut cette fonctionnalité." },
  { code: "not_found", http: "404", color: "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Ressource introuvable (ex: call_id inexistant).", action: "Vérifiez l'identifiant passé en paramètre." },
  { code: "invalid_params", http: "422", color: "text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20", desc: "Paramètres manquants ou format invalide.", action: "Vérifiez que phone_number est en format E.164 (+33...)." },
  { code: "rate_limited", http: "429", color: "text-primary bg-primary/10 border-primary/20", desc: "Trop de requêtes en peu de temps.", action: "Implémentez un retry avec backoff exponentiel (voir exemple)." },
  { code: "server_error", http: "500", color: "text-destructive bg-destructive/10 border-destructive/20", desc: "Erreur interne côté serveur RoehAI.", action: "Réessayez après quelques secondes. Contactez le support si persiste." },
  { code: "timeout", http: "—", color: "text-muted-foreground bg-muted border-border", desc: "La requête a dépassé le délai (30s par défaut).", action: "Augmentez le timeout via la config SDK ou réessayez." },
  { code: "network_error", http: "—", color: "text-muted-foreground bg-muted border-border", desc: "Impossible de joindre le serveur RoehAI.", action: "Vérifiez votre connexion internet ou le statut de l'API." },
];

export function Errors() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Codes d'erreur</h1>
        <p className="text-muted-foreground">
          Référence complète des erreurs retournées par l'API et le SDK RoehAI.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <div className="flex flex-col gap-3">
            {errors.map((e) => (
              <div key={e.code} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <code className={`text-xs font-mono px-2 py-0.5 rounded border ${e.color}`}>{e.code}</code>
                  <span className="text-xs text-muted-foreground font-mono">HTTP {e.http}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{e.desc}</p>
                <p className="text-sm text-foreground">→ {e.action}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Retry avec backoff</h2>
          <CodeBlock code={retryExample} language="typescript" filename="retry.ts" />
        </section>
      </div>
    </div>
  );
}
