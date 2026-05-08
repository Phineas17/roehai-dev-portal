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
        <div className="text-xs text-[#a09dc0] mb-2">Guides → n8n</div>
        <h1 className="text-3xl font-bold text-white mb-2">Intégrer n8n</h1>
        <p className="text-[#a09dc0]">
          Utilisez le nœud HTTP Request de n8n pour déclencher des appels RoehAI dans vos workflows d'automatisation.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-white mb-2">1. Stocker la clé API</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Dans n8n, allez dans <strong className="text-white">Settings → Credentials → New</strong>, choisissez <strong className="text-white">Header Auth</strong> et saisissez :
          </p>
          <div className="p-4 rounded-xl bg-[#1a1a35] border border-white/8 text-sm font-mono text-[#a09dc0]">
            <p>Name: <span className="text-white">RoehAI API</span></p>
            <p>Header Name: <span className="text-white">Authorization</span></p>
            <p>Header Value: <span className="text-purple-300">Bearer sk_votre_cle</span></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2. Nœud HTTP Request</h2>
          <CodeBlock code={n8nConfig} language="json" filename="nœud HTTP Request" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">3. Architecture du workflow</h2>
          <CodeBlock code={n8nWorkflow} language="typescript" />
        </section>

        <div className="p-4 rounded-xl bg-[#1a1a35] border border-white/8 text-sm">
          <p className="text-white font-medium mb-2">Cas d'usage n8n</p>
          <ul className="text-[#a09dc0] space-y-1.5">
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
