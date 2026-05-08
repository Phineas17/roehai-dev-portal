import { CodeBlock } from "@/components/CodeBlock";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: 1,
    title: "Créer un compte RoehAI",
    desc: (
      <p className="text-[#a09dc0] text-sm">
        Inscrivez-vous sur{" "}
        <a href="https://www.roehai.com" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">
          roehai.com
        </a>{" "}
        et accédez à votre dashboard.
      </p>
    ),
  },
  {
    n: 2,
    title: "Générer une clé API",
    desc: (
      <p className="text-[#a09dc0] text-sm">
        Dans <strong className="text-white">Dashboard → Paramètres → Clés API</strong>, créez une nouvelle clé.
        Elle commence par <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">sk_</code>.
      </p>
    ),
  },
  {
    n: 3,
    title: "Installer le SDK",
    desc: null,
    code: `npm install @roehai/sdk`,
    language: "bash",
  },
  {
    n: 4,
    title: "Déclencher votre premier appel",
    desc: (
      <p className="text-[#a09dc0] text-sm mb-3">
        Copiez ce snippet et remplacez <code className="text-purple-300 bg-purple-900/30 px-1 rounded text-xs font-mono">sk_votre_cle</code> par votre vraie clé.
      </p>
    ),
    code: `import { RoehAI } from "@roehai/sdk";

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
    desc: (
      <p className="text-[#a09dc0] text-sm mb-3">
        Configurez votre URL webhook dans le dashboard pour recevoir le transcript et le résumé de l'appel.
      </p>
    ),
    code: `import { WebhookRouter } from "@roehai/sdk";
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
        <h1 className="text-3xl font-bold text-white mb-2">Quickstart</h1>
        <p className="text-[#a09dc0]">Premier appel IA opérationnel en moins de 5 minutes.</p>
      </div>

      <div className="flex flex-col gap-8">
        {steps.map((step) => (
          <div key={step.n} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                {step.n}
              </div>
              {step.n < steps.length && (
                <div className="w-px flex-1 bg-white/8 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <h2 className="text-white font-semibold mb-2">{step.title}</h2>
              {step.desc}
              {step.code && (
                <CodeBlock
                  code={step.code}
                  language={step.language}
                  filename={step.filename}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-green-900/20 border border-green-500/20 flex items-start gap-3">
        <CheckCircle2 size={18} className="text-green-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm text-white font-medium mb-1">Vous êtes prêt !</p>
          <p className="text-sm text-[#a09dc0]">
            Consultez la{" "}
            <a href="/reference/aria" className="text-purple-400 hover:underline">
              référence API Aria
            </a>{" "}
            pour tous les paramètres disponibles, ou les{" "}
            <a href="/guides/webhook-express" className="text-purple-400 hover:underline">
              guides d'intégration
            </a>{" "}
            pour des exemples plus avancés.
          </p>
        </div>
      </div>
    </div>
  );
}
