import { CodeBlock } from "@/components/CodeBlock";

const installDeps = `npm install express roehai-sdk
npm install -D @types/express`;

const fullExample = `import express from "express";
import { WebhookRouter } from "roehai-sdk";

const app = express();
const webhooks = new WebhookRouter();

// ─── Handlers ────────────────────────────────────────────────────────────────

webhooks.on("call.completed", async (payload) => {
  const { call_id, prospect_phone, summary, extracted_data } = payload.call_data;

  console.log(\`Appel terminé [ID: \${call_id}]\`);
  console.log(\`Résumé : \${summary}\`);
  console.log(\`Qualification : \${extracted_data.qualification_level}\`);

  // Synchroniser votre CRM
  // await hubspot.updateContact(prospect_phone, { qualification: extracted_data.qualification_level });
});

webhooks.on("call.failed", async (payload) => {
  console.warn(\`Appel échoué : \${payload.call_data.reason}\`);
});

webhooks.on("lead.qualified", async (payload) => {
  const { business_name, qualification_level } = payload.lead_data;
  console.log(\`Lead chaud : \${business_name} → \${qualification_level}\`);
});

// ─── Endpoint ────────────────────────────────────────────────────────────────

app.post("/webhooks/roehai", express.json(), async (req, res) => {
  try {
    await webhooks.handle(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error("Webhook error:", err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Webhook server on :3000"));`;

const ngrokTip = `# Tester en local avec ngrok
npx ngrok http 3000

# Copiez l'URL HTTPS générée (ex: https://abc.ngrok.io)
# et collez-la dans Dashboard → Paramètres → Webhooks`;

export function WebhookExpressGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Guides → Webhook</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Webhook avec Express.js</h1>
        <p className="text-muted-foreground">
          Recevez et traitez les événements RoehAI dans une API Node.js Express.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Installer les dépendances</h2>
          <CodeBlock code={installDeps} language="bash" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Serveur complet</h2>
          <CodeBlock code={fullExample} language="typescript" filename="webhook-server.ts" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Tester en local</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Utilisez ngrok pour exposer votre serveur local à RoehAI.
          </p>
          <CodeBlock code={ngrokTip} language="bash" />
        </section>

        <div className="p-4 rounded-xl bg-card border border-border text-sm">
          <p className="text-foreground font-medium mb-2">Points importants</p>
          <ul className="text-muted-foreground space-y-1.5">
            <li>→ Répondez toujours <code className="text-primary bg-primary/10 px-1 rounded text-xs font-mono">200</code> rapidement - RoehAI retente si pas de réponse en 10s</li>
            <li>→ Traitez le payload de manière asynchrone si nécessaire</li>
            <li>→ En production, vérifiez la signature HMAC (disponible en v1.1)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
