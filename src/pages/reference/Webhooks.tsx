import { CodeBlock } from "@/components/CodeBlock";

const routerExample = `import { WebhookRouter } from "@roehai/sdk";
import express from "express";

const app = express();
const router = new WebhookRouter();

// Appel terminé
router.on("call.completed", async (payload) => {
  const { call_id, summary, extracted_data, transcript } = payload.call_data;

  // Mettre à jour votre CRM
  await updateCRM({
    phone: payload.call_data.prospect_phone,
    qualification: extracted_data.qualification_level,
    summary,
    transcript,
  });
});

// Appel échoué
router.on("call.failed", async (payload) => {
  console.warn("Appel échoué :", payload.call_data.reason);
  // Replanifier, notifier, etc.
});

// Message WhatsApp reçu
router.on("whatsapp.message_received", async (payload) => {
  console.log("WhatsApp de", payload.message_data.from, ":", payload.message_data.message);
});

// Monter le handler
app.post("/webhooks/roehai", express.json(), async (req, res) => {
  await router.handle(req.body);
  res.sendStatus(200);
});

app.listen(3000);`;

const callCompletedPayload = `{
  "event": "call.completed",
  "call_data": {
    "call_id": "call_abc123",
    "prospect_phone": "+33612345678",
    "duration": 142,
    "transcript": "Agent: Allô Jean ? Jean: Oui bonjour...",
    "summary": "Le prospect est très intéressé. Rappeler mardi 14h.",
    "extracted_data": {
      "qualification_level": "Chaud",
      "budget": "5000",
      "objection": "Aucune",
      "next_step": "RDV mardi 14h"
    },
    "agent_id": "uuid_agent",
    "timestamp": "2026-05-07T14:23:11Z"
  }
}`;

const callFailedPayload = `{
  "event": "call.failed",
  "call_data": {
    "call_id": "call_def456",
    "prospect_phone": "+33698765432",
    "reason": "no-answer",
    "timestamp": "2026-05-07T14:25:00Z"
  }
}`;

const webhookConfigNote = `# URL de votre endpoint webhook à configurer dans :
# Dashboard → Paramètres → Webhooks

# Exemple d'URL
https://monapp.com/webhooks/roehai

# Événements à cocher :
# ✓ call.completed
# ✓ call.failed
# ✓ call.started
# ✓ lead.qualified
# ✓ whatsapp.message_received`;

const events = [
  {
    event: "call.completed",
    desc: "Appel terminé normalement — inclut transcript complet, résumé IA et données extraites",
    color: "text-green-300 bg-green-900/30 border-green-500/20",
  },
  {
    event: "call.failed",
    desc: "Appel échoué — occupé, messagerie vocale, numéro invalide ou erreur technique",
    color: "text-red-300 bg-red-900/30 border-red-500/20",
  },
  {
    event: "call.started",
    desc: "L'appel vient d'être décroché — utile pour tracker le timing",
    color: "text-blue-300 bg-blue-900/30 border-blue-500/20",
  },
  {
    event: "lead.qualified",
    desc: "Prospect qualifié par l'agent avec un score de qualification",
    color: "text-yellow-300 bg-yellow-900/30 border-yellow-500/20",
  },
  {
    event: "whatsapp.message_received",
    desc: "Message WhatsApp reçu sur une conversation gérée par Léa",
    color: "text-teal-300 bg-teal-900/30 border-teal-500/20",
  },
  {
    event: "whatsapp.message_sent",
    desc: "Confirmation d'envoi d'un message WhatsApp par Léa",
    color: "text-teal-300 bg-teal-900/30 border-teal-500/20",
  },
];

export function WebhooksReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs bg-pink-900/30 text-pink-300 border border-pink-500/20 px-2.5 py-1 rounded-full mb-3">
          Temps réel
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Webhooks</h1>
        <p className="text-[#a09dc0]">
          Recevez les événements RoehAI en temps réel sur votre serveur — transcripts d'appels, qualifications, messages WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-10">

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Événements disponibles</h2>
          <div className="flex flex-col gap-2">
            {events.map((e) => (
              <div key={e.event} className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1a35] border border-white/8">
                <code className={`text-xs font-mono px-2 py-1 rounded border shrink-0 ${e.color}`}>
                  {e.event}
                </code>
                <p className="text-sm text-[#a09dc0]">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Configuration</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Configurez l'URL de votre endpoint dans votre dashboard RoehAI.
          </p>
          <CodeBlock code={webhookConfigNote} language="bash" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">Gérer les webhooks avec le SDK</h2>
          <p className="text-sm text-[#a09dc0] mb-3">
            Le <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">WebhookRouter</code> dispatche les payloads typés vers les bons handlers.
          </p>
          <CodeBlock code={routerExample} language="typescript" filename="webhook-server.ts" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Payloads de référence</h2>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-medium text-white mb-2">call.completed</p>
              <CodeBlock code={callCompletedPayload} language="json" />
            </div>
            <div>
              <p className="text-sm font-medium text-white mb-2">call.failed</p>
              <CodeBlock code={callFailedPayload} language="json" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
