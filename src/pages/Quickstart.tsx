import { CodeBlock } from "@/components/CodeBlock";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    n: 1,
    title: "Créer un compte RoehAI",
    content: (
      <p className="text-sm text-muted-foreground">
        Inscrivez-vous sur{" "}
        <a href="https://www.roehai.com" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">roehai.com</a>{" "}
        et accédez à votre dashboard.
      </p>
    ),
  },
  {
    n: 2,
    title: "Générer une clé API",
    content: (
      <p className="text-sm text-muted-foreground">
        Dans <strong className="text-foreground font-medium">Dashboard → Paramètres → Clés API</strong>, créez une nouvelle clé.
        Elle commence par{" "}
        <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">sk_</code>.
      </p>
    ),
  },
  {
    n: 3,
    title: "Installer le SDK",
    code: `npm install roehai-sdk`,
    language: "bash",
  },
  {
    n: 4,
    title: "Déclencher votre premier appel",
    content: (
      <p className="text-sm text-muted-foreground mb-3">
        Remplacez <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs font-mono">sk_votre_cle</code> par votre vraie clé.
      </p>
    ),
    code: `import { RoehAI } from "roehai-sdk";

const client = new RoehAI({ apiKey: "sk_votre_cle" });

const call = await client.aria.triggerCall({
  phone_number: "+33612345678",   // Numéro à appeler (E.164)
  contact_name: "Jean Dupont",
  context: "Prospect depuis le formulaire de contact",
});

console.log("Appel lancé :", call.call_id);
// Appel lancé : call_abc123`,
    language: "typescript",
    filename: "premier-appel.ts",
  },
  {
    n: 5,
    title: "Recevoir le résultat via Webhook",
    content: (
      <p className="text-sm text-muted-foreground mb-3">
        Configurez votre URL webhook dans <strong className="text-foreground font-medium">Dashboard → Paramètres → Webhooks</strong> pour recevoir le transcript et le résumé.
      </p>
    ),
    code: `import { WebhookRouter } from "roehai-sdk";
import express from "express";

const app = express();
const router = new WebhookRouter();

router.on("call.completed", (payload) => {
  const { call_id, summary, extracted_data } = payload.call_data;
  console.log("Appel terminé :", summary);
  console.log("Qualification :", extracted_data.qualification_level);
});

app.post("/webhooks/roehai", express.json(), async (req, res) => {
  await router.handle(req.body);
  res.sendStatus(200);
});`,
    language: "typescript",
    filename: "webhook.ts",
  },
];

export function Quickstart() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Démarrage</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Quickstart</h1>
        <p className="text-muted-foreground">Premier appel IA opérationnel en moins de 5 minutes.</p>
      </div>

      <div className="flex flex-col gap-8">
        {steps.map((step, i) => (
          <div key={step.n} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                {step.n}
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
            </div>
            <div className="flex-1 pb-6">
              <h2 className="text-foreground font-semibold mb-2">{step.title}</h2>
              {step.content}
              {step.code && (
                <CodeBlock code={step.code} language={step.language} filename={step.filename} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Success */}
      <div className="mt-4 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
        <CheckCircle2 size={17} className="text-primary mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">Vous êtes prêt !</p>
          <p className="text-sm text-muted-foreground">
            Consultez la{" "}
            <Link to="/reference/aria" className="text-primary hover:underline font-medium">référence API Aria</Link>{" "}
            pour tous les paramètres, ou les{" "}
            <Link to="/guides/webhook-express" className="text-primary hover:underline font-medium">guides d'intégration</Link>{" "}
            pour des exemples avancés.
          </p>
        </div>
      </div>
    </div>
  );
}
