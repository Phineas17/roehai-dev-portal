import { CodeBlock } from "@/components/CodeBlock";

const triggerCallSDK = `const call = await client.aria.triggerCall({
  phone_number: "+33612345678",   // Requis - format E.164
  contact_name: "Jean Dupont",    // Optionnel
  business_name: "Salon Beauté",  // Optionnel
  pain_point: "Perd 30% des appels",
  context: "PME, 5 employés, secteur beauté",
});

// Réponse
{
  success: true,
  call_id: "call_abc123",
  status: "ringing",
  prospect: "+33612345678"
}`;

const triggerCallCURL = `curl -X POST https://www.roehai.com/api/v1/trigger-outbound-call \\
  -H "Authorization: Bearer sk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone_number": "+33612345678",
    "contact_name": "Jean Dupont",
    "context": "Prospect depuis formulaire web"
  }'`;

const getStatusExample = `const status = await client.aria.getCallStatus("call_abc123");

// Réponse
{
  call_id: "call_abc123",
  status: "completed",
  duration: 142,
  transcript: "Agent: Allô Jean ? Jean: Oui bonjour...",
  summary: "Le prospect est très intéressé, rappeler mardi.",
  extracted_data: {
    qualification_level: "Chaud",
    budget: "5000",
    objection: "Aucune",
    next_step: "RDV mardi 14h"
  }
}`;

const listCallsExample = `const { calls, total } = await client.aria.listCalls({
  limit: 20,
  offset: 0,
  status: "completed",
});`;

const ingestLeadExample = `await client.aria.ingestLead({
  business_name: "Salon Lumière",
  phone_number: "+33612345678",
  city: "Paris",
  pain_point: "Perd des appels le week-end",
  source: "formulaire_site_web",
});

// Réponse
{ success: true, lead_id: "lead_xyz789", status: "queued" }`;

function ParamRow({ name, type, required, desc }: { name: string; type: string; required?: boolean; desc: string }) {
  return (
    <tr className="border-t border-border">
      <td className="px-4 py-2.5">
        <code className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded font-mono">{name}</code>
        {required && <span className="ml-1.5 text-[10px] text-destructive font-semibold uppercase">requis</span>}
      </td>
      <td className="px-4 py-2.5 text-xs text-muted-foreground font-mono">{type}</td>
      <td className="px-4 py-2.5 text-sm text-muted-foreground">{desc}</td>
    </tr>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded font-mono font-semibold">
      {method}
    </span>
  );
}

export function AriaReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence API</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2.5 py-1 rounded-full font-medium">Agent Vocal</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Aria, appels vocaux IA</h1>
        <p className="text-muted-foreground">
          Déclenchez des appels téléphoniques IA sortants, récupérez les transcripts et qualifications en temps réel.
        </p>
      </div>

      <div className="flex flex-col gap-10">

        {/* triggerCall */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <MethodBadge method="POST" />
            <code className="text-sm text-foreground font-mono">/trigger-outbound-call</code>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">triggerCall()</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Déclenche immédiatement un appel sortant IA. L'agent conduit la conversation selon votre configuration dashboard.
          </p>
          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Paramètre</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Type</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Description</th>
                </tr>
              </thead>
              <tbody>
                <ParamRow name="phone_number" type="string" required desc="Numéro à appeler au format E.164 (ex: +33612345678)" />
                <ParamRow name="contact_name" type="string" desc="Nom du contact utilisé dans le prompt de l'agent" />
                <ParamRow name="business_name" type="string" desc="Nom de l'entreprise" />
                <ParamRow name="pain_point" type="string" desc="Problème principal identifié pour contextualiser l'appel" />
                <ParamRow name="context" type="string" desc="Contexte libre avec source du lead et informations complémentaires" />
                <ParamRow name="from_number" type="string" desc="Numéro appelant (override du numéro par défaut)" />
                <ParamRow name="agent_user_id" type="string" desc="UUID de l'utilisateur dont la config agent sera utilisée" />
              </tbody>
            </table>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <CodeBlock code={triggerCallSDK} language="typescript" filename="SDK" />
            <CodeBlock code={triggerCallCURL} language="bash" filename="cURL" />
          </div>
        </section>

        {/* getCallStatus */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">getCallStatus(callId)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Récupère les données complètes d'un appel - statut, transcript intégral, résumé IA et données extraites.
          </p>
          <CodeBlock code={getStatusExample} language="typescript" />
        </section>

        {/* listCalls */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">listCalls(params?)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Liste les appels récents avec pagination et filtrage par statut.
          </p>
          <CodeBlock code={listCallsExample} language="typescript" />
        </section>

        {/* ingestLead */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <MethodBadge method="POST" />
            <code className="text-sm text-foreground font-mono">/ingest-lead</code>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">ingestLead(params)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Ajoute un prospect à la file d'appels automatique.
          </p>
          <CodeBlock code={ingestLeadExample} language="typescript" />
        </section>

        {/* Statuts */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Statuts d'appel</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { s: "ringing", cls: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20" },
              { s: "in-progress", cls: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
              { s: "completed", cls: "bg-primary/10 text-primary border-primary/20" },
              { s: "failed", cls: "bg-destructive/10 text-destructive border-destructive/20" },
            ].map(({ s, cls }) => (
              <div key={s} className={`px-3 py-2 rounded-lg border text-sm font-mono text-center ${cls}`}>{s}</div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
