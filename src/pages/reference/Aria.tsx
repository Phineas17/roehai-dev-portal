import { CodeBlock } from "@/components/CodeBlock";

const triggerCallExample = `const call = await client.aria.triggerCall({
  phone_number: "+33612345678",   // Requis — format E.164
  contact_name: "Jean Dupont",    // Optionnel
  business_name: "Salon Beauté",  // Optionnel
  pain_point: "Perd 30% des appels le week-end",
  context: "PME, 5 employés, secteur beauté",
});

// Réponse
{
  success: true,
  call_id: "call_abc123",
  status: "ringing",
  prospect: "+33612345678"
}`;

const triggerCallREST = `curl -X POST https://www.roehai.com/api/v1/trigger-outbound-call \\
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
{
  success: true,
  lead_id: "lead_xyz789",
  status: "queued"
}`;

interface ParamRowProps {
  name: string;
  type: string;
  required?: boolean;
  desc: string;
}

function ParamRow({ name, type, required, desc }: ParamRowProps) {
  return (
    <tr className="border-t border-white/8">
      <td className="py-2.5 pr-4">
        <code className="text-purple-300 bg-purple-900/20 px-1.5 py-0.5 rounded text-xs font-mono">{name}</code>
        {required && (
          <span className="ml-1.5 text-[10px] text-red-400 font-medium uppercase">requis</span>
        )}
      </td>
      <td className="py-2.5 pr-4 text-xs text-[#a09dc0] font-mono">{type}</td>
      <td className="py-2.5 text-sm text-[#a09dc0]">{desc}</td>
    </tr>
  );
}

export function AriaReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs bg-blue-900/30 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-full mb-3">
          Agent Vocal
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Aria — Appels Vocaux IA</h1>
        <p className="text-[#a09dc0]">
          Déclenchez des appels téléphoniques IA sortants, récupérez les transcripts et qualifications en temps réel.
        </p>
      </div>

      <div className="flex flex-col gap-10">

        {/* triggerCall */}
        <section id="trigger-call">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-900/40 text-green-300 border border-green-500/20 px-2 py-0.5 rounded font-mono">POST</span>
            <code className="text-sm text-white font-mono">/trigger-outbound-call</code>
          </div>
          <h2 className="text-xl font-semibold text-white mt-3 mb-2">triggerCall()</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Déclenche immédiatement un appel sortant IA vers le numéro spécifié. L'agent conduit la conversation selon votre configuration dans le dashboard.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr>
                  <th className="pb-2 text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium pr-4">Paramètre</th>
                  <th className="pb-2 text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium pr-4">Type</th>
                  <th className="pb-2 text-xs text-[#a09dc0]/60 uppercase tracking-wide font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <ParamRow name="phone_number" type="string" required desc="Numéro à appeler au format E.164 (ex: +33612345678)" />
                <ParamRow name="contact_name" type="string" desc="Nom complet du contact — injecté dans le prompt de l'agent" />
                <ParamRow name="business_name" type="string" desc="Nom de l'entreprise" />
                <ParamRow name="pain_point" type="string" desc="Problème principal identifié — contextualise l'appel" />
                <ParamRow name="context" type="string" desc="Contexte libre — source du lead, informations complémentaires" />
                <ParamRow name="from_number" type="string" desc="Numéro appelant (override du numéro par défaut du compte)" />
                <ParamRow name="agent_user_id" type="string" desc="UUID de l'utilisateur dont la config agent sera utilisée" />
              </tbody>
            </table>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <CodeBlock code={triggerCallExample} language="typescript" filename="SDK" />
            <CodeBlock code={triggerCallREST} language="bash" filename="cURL" />
          </div>
        </section>

        {/* getCallStatus */}
        <section id="get-status">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-900/40 text-green-300 border border-green-500/20 px-2 py-0.5 rounded font-mono">POST</span>
            <code className="text-sm text-white font-mono">/trigger-outbound-call</code>
          </div>
          <h2 className="text-xl font-semibold text-white mt-3 mb-2">getCallStatus(callId)</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Récupère les données complètes d'un appel — statut, transcript intégral, résumé IA et données extraites.
          </p>
          <CodeBlock code={getStatusExample} language="typescript" />
        </section>

        {/* listCalls */}
        <section id="list-calls">
          <h2 className="text-xl font-semibold text-white mb-2">listCalls(params?)</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Liste les appels récents avec pagination et filtrage par statut.
          </p>
          <CodeBlock code={listCallsExample} language="typescript" />
        </section>

        {/* ingestLead */}
        <section id="ingest-lead">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-900/40 text-green-300 border border-green-500/20 px-2 py-0.5 rounded font-mono">POST</span>
            <code className="text-sm text-white font-mono">/ingest-lead</code>
          </div>
          <h2 className="text-xl font-semibold text-white mt-3 mb-2">ingestLead(params)</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Ajoute un prospect à la file d'appels automatique. L'agent Aria l'appellera selon la disponibilité et votre configuration de campagne.
          </p>
          <CodeBlock code={ingestLeadExample} language="typescript" />
        </section>

        {/* Statuts */}
        <section id="statuses">
          <h2 className="text-xl font-semibold text-white mb-3">Statuts d'appel</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { s: "ringing", color: "bg-yellow-900/30 text-yellow-300 border-yellow-500/20" },
              { s: "in-progress", color: "bg-blue-900/30 text-blue-300 border-blue-500/20" },
              { s: "completed", color: "bg-green-900/30 text-green-300 border-green-500/20" },
              { s: "failed", color: "bg-red-900/30 text-red-300 border-red-500/20" },
            ].map(({ s, color }) => (
              <div key={s} className={`px-3 py-2 rounded-lg border text-sm font-mono text-center ${color}`}>
                {s}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
