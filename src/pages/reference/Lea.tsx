import { CodeBlock } from "@/components/CodeBlock";

const sendExample = `await client.lea.sendMessage({
  to: "+33612345678",
  message: "Bonjour Jean, Aria a essayé de vous joindre. Êtes-vous disponible sur WhatsApp ?",
});

// Réponse
{
  success: true,
  message_id: "msg_xyz789",
  status: "sent"
}`;

const sendREST = `curl -X POST https://www.roehai.com/api/v1/lea-whatsapp-send \\
  -H "Authorization: Bearer sk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+33612345678",
    "message": "Bonjour Jean, êtes-vous disponible ?"
  }'`;

const listConversationsExample = `const conversations = await client.lea.listConversations({ status: "active" });

// Réponse
[
  {
    id: "conv_abc",
    phone_number: "+33612345678",
    status: "active",
    last_message: "Oui je suis disponible demain",
    last_message_at: "2026-05-07T14:30:00Z"
  }
]`;

const followUpExample = `// Scénario typique : Aria appelle, échoue → Léa envoie un WhatsApp de suivi

router.on("call.failed", async (payload) => {
  const { prospect_phone, reason } = payload.call_data;

  if (reason === "no-answer") {
    await client.lea.sendMessage({
      to: prospect_phone,
      message: "Bonjour ! Nous avons essayé de vous appeler mais nous n'avons pas pu vous joindre. Êtes-vous disponible pour un échange rapide ?",
    });
  }
});`;

export function LeaReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs bg-teal-900/30 text-teal-300 border border-teal-500/20 px-2.5 py-1 rounded-full mb-3">
          Agent WhatsApp
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Léa — Agent WhatsApp IA</h1>
        <p className="text-[#a09dc0]">
          Envoyez des messages WhatsApp proactifs et gérez des conversations automatisées via l'agent Léa.
        </p>
      </div>

      <div className="flex flex-col gap-10">

        <section id="send">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-green-900/40 text-green-300 border border-green-500/20 px-2 py-0.5 rounded font-mono">POST</span>
            <code className="text-sm text-white font-mono">/lea-whatsapp-send</code>
          </div>
          <h2 className="text-xl font-semibold text-white mt-3 mb-2">sendMessage(params)</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Envoie un message WhatsApp proactif à un numéro. Requiert que le numéro ait initialement contacté votre WhatsApp Business (contrainte WhatsApp) ou soit dans une fenêtre de 24h.
          </p>
          <div className="grid gap-3 lg:grid-cols-2">
            <CodeBlock code={sendExample} language="typescript" filename="SDK" />
            <CodeBlock code={sendREST} language="bash" filename="cURL" />
          </div>
        </section>

        <section id="list">
          <h2 className="text-xl font-semibold text-white mb-2">listConversations(params?)</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Récupère les conversations WhatsApp actives gérées par Léa.
          </p>
          <CodeBlock code={listConversationsExample} language="typescript" />
        </section>

        <section id="follow-up">
          <h2 className="text-xl font-semibold text-white mb-2">Cas d'usage : suivi post-appel</h2>
          <p className="text-sm text-[#a09dc0] mb-4">
            Combinez Aria et Léa : si un appel échoue, Léa envoie automatiquement un message WhatsApp de relance.
          </p>
          <CodeBlock code={followUpExample} language="typescript" filename="follow-up.ts" />
        </section>
      </div>
    </div>
  );
}
