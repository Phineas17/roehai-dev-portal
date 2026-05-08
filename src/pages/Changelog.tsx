export function Changelog() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Changelog</h1>
        <p className="text-muted-foreground">Historique des versions de l'API et du SDK RoehAI.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <div className="w-px flex-1 bg-border mt-2" />
          </div>
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-bold text-foreground">v1.0.0</span>
              <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">stable</span>
              <span className="text-xs text-muted-foreground">Mai 2026</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Lancement du portail développeurs et du SDK officiel.</p>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li className="flex gap-2"><span className="text-primary">+</span> SDK <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">roehai-sdk</code> — modules Aria, Léa, WebhookRouter</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /trigger-outbound-call</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /ingest-lead</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">POST /lea-whatsapp-send</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Webhooks : <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">call.completed</code>, <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">call.failed</code>, <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">whatsapp.*</code></li>
              <li className="flex gap-2"><span className="text-primary">+</span> Authentification par clé API (<code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">sk_*</code>)</li>
              <li className="flex gap-2"><span className="text-primary">+</span> Portail dev.roehai.com avec référence complète</li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Roadmap v1.1</p>
          <ul className="space-y-1">
            <li>→ Endpoint <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">GET /calls/:id</code> (méthode HTTP GET native)</li>
            <li>→ SDK Python officiel</li>
            <li>→ Console API Playground dans le portail</li>
            <li>→ Signature des webhooks (HMAC-SHA256)</li>
            <li>→ Support agent Maya dans le SDK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
