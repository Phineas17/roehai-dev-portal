import { CodeBlock } from "@/components/CodeBlock";

const n8nConfig = `// Configuration du nœud HTTP Request dans n8n
{
  "method": "POST",
  "url": "https://www.roehai.com/api/v1/trigger-outbound-call",
  "authentication": "headerAuth",
  "headerParameters": {
    "Authorization": "Bearer {{ $env.ROEHAI_API_KEY }}"
  },
  "bodyParameters": {
    "phone_number": "{{ $json.phone }}",
    "contact_name": "{{ $json.name }}",
    "context": "Lead depuis n8n — source: {{ $json.source }}"
  }
}`;

const n8nWorkflow = `// Workflow typique n8n
//
// [Webhook Trigger] → [Set] → [HTTP Request → RoehAI] → [IF success] → [Notion / Airtable]
//                                                      ↘ [IF error]  → [Slack Alert]`;

export function N8nGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Guides → n8n</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Intégrer n8n</h1>
        <p className="text-muted-foreground">
          Utilisez le nœud HTTP Request de n8n pour déclencher des appels RoehAI dans vos workflows d'automatisation.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Stocker la clé API</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Dans n8n, allez dans <strong className="text-foreground">Settings → Credentials → New</strong>, choisissez <strong className="text-foreground">Header Auth</strong> et saisissez :
          </p>
          <div className="p-4 rounded-xl bg-card border border-border text-sm font-mono text-muted-foreground">
            <p>Name: <span className="text-foreground">RoehAI API</span></p>
            <p>Header Name: <span className="text-foreground">Authorization</span></p>
            <p>Header Value: <span className="text-primary">Bearer sk_votre_cle</span></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Nœud HTTP Request</h2>
          <CodeBlock code={n8nConfig} language="json" filename="nœud HTTP Request" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Architecture du workflow</h2>
          <CodeBlock code={n8nWorkflow} language="typescript" />
        </section>

        <div className="p-4 rounded-xl bg-card border border-border text-sm">
          <p className="text-foreground font-medium mb-2">Cas d'usage n8n</p>
          <ul className="text-muted-foreground space-y-1.5">
            <li>→ Scraper de leads + appel automatique immédiat</li>
            <li>→ Import CSV → campagne d'appels en masse</li>
            <li>→ Intégration Airtable → RoehAI → mise à jour du statut dans Airtable</li>
            <li>→ Webhook RoehAI → Notion → enregistrement des transcripts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
