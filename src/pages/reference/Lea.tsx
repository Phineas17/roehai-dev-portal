import { CodeBlock } from "@/components/CodeBlock";

const sendSDK = `await client.lea.sendMessage({
  to: "+33612345678",
  message: "Bonjour Jean, Aria a essayé de vous joindre. Êtes-vous disponible ?",
});

// Réponse
{ success: true, message_id: "msg_xyz789", status: "sent" }`;

const sendREST = `curl -X POST https://www.roehai.com/api/v1/lea-whatsapp-send \\
  -H "Authorization: Bearer sk_votre_cle" \\
  -H "Content-Type: application/json" \\
  -d '{ "to": "+33612345678", "message": "Bonjour Jean !" }'`;

const listExample = `const conversations = await client.lea.listConversations({ status: "active" });

// Réponse
[{
  id: "conv_abc",
  phone_number: "+33612345678",
  status: "active",
  last_message: "Oui je suis disponible demain",
  last_message_at: "2026-05-08T14:30:00Z"
}]`;

const followUpExample = `// Scénario : Aria appelle, échoue, puis Léa envoie un WhatsApp de suivi
router.on("call.failed", async (payload) => {
  if (payload.call_data.reason === "no-answer") {
    await client.lea.sendMessage({
      to: payload.call_data.prospect_phone,
      message: "Bonjour ! Nous avons essayé de vous appeler. Êtes-vous disponible pour un échange ?",
    });
  }
});`;

export function LeaReference() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Référence API</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full font-medium">Agent WhatsApp</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Léa, agent WhatsApp IA</h1>
        <p className="text-muted-foreground">
          Envoyez des messages WhatsApp proactifs et gérez des conversations automatisées via l'agent Léa.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        <section>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded font-mono font-semibold">POST</span>
            <code className="text-sm text-foreground font-mono">/lea-whatsapp-send</code>
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">sendMessage(params)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Envoie un message WhatsApp proactif. Requiert que le contact soit dans une fenêtre de conversation active (24h).
          </p>
          <div className="grid gap-3 lg:grid-cols-2">
            <CodeBlock code={sendSDK} language="typescript" filename="SDK" />
            <CodeBlock code={sendREST} language="bash" filename="cURL" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">listConversations(params?)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Récupère les conversations WhatsApp actives gérées par Léa.
          </p>
          <CodeBlock code={listExample} language="typescript" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Cas d'usage : suivi post-appel</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Combinez Aria et Léa. Si un appel échoue, Léa envoie automatiquement un WhatsApp de relance.
          </p>
          <CodeBlock code={followUpExample} language="typescript" filename="follow-up.ts" />
        </section>
      </div>
    </div>
  );
}
