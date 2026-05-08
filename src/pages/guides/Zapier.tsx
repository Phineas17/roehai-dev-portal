import { CodeBlock } from "@/components/CodeBlock";

const zapierPayload = `// Payload envoyé par votre Zap vers RoehAI
{
  "phone_number": "{{contact.phone}}",
  "contact_name": "{{contact.first_name}} {{contact.last_name}}",
  "business_name": "{{company.name}}",
  "context": "Lead depuis HubSpot — Score : {{contact.score}}",
  "source": "zapier_hubspot"
}`;

const steps = [
  {
    n: 1,
    title: "Créer un nouveau Zap",
    desc: "Dans Zapier, créez un nouveau Zap. Le déclencheur peut être n'importe quel événement (nouveau lead HubSpot, formulaire Typeform, ligne Google Sheets, etc.).",
  },
  {
    n: 2,
    title: "Ajouter une action Webhooks by Zapier",
    desc: "Choisissez l'action \"Webhooks by Zapier\" → \"POST\". C'est l'action qui enverra les données vers l'API RoehAI.",
  },
  {
    n: 3,
    title: "Configurer l'URL",
    desc: null,
    code: `URL : https://www.roehai.com/api/v1/trigger-outbound-call
Méthode : POST`,
    language: "bash",
  },
  {
    n: 4,
    title: "Configurer les headers",
    desc: null,
    code: `Authorization: Bearer sk_votre_cle_api
Content-Type: application/json`,
    language: "bash",
  },
  {
    n: 5,
    title: "Configurer le body",
    desc: "Mappez les champs Zapier vers les paramètres RoehAI :",
    code: zapierPayload,
    language: "json",
  },
  {
    n: 6,
    title: "Tester et activer",
    desc: "Zapier vous permet de tester le Zap avant de l'activer. Vérifiez que l'appel est déclenché dans votre dashboard RoehAI.",
  },
];

export function ZapierGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Guides → Zapier</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Intégrer Zapier</h1>
        <p className="text-muted-foreground">
          Connectez RoehAI à vos outils sans coder — déclenchez des appels depuis HubSpot, Typeform, Google Sheets, et plus.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step) => (
          <div key={step.n} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                {step.n}
              </div>
              {step.n < steps.length && (
                <div className="w-px flex-1 bg-border mt-2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <h2 className="text-foreground font-semibold mb-1">{step.title}</h2>
              {step.desc && <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>}
              {step.code && <CodeBlock code={step.code} language={step.language} />}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-card border border-border text-sm">
        <p className="text-foreground font-medium mb-2">Cas d'usage courants avec Zapier</p>
        <ul className="text-muted-foreground space-y-1.5">
          <li>→ <strong className="text-foreground">HubSpot</strong> — appeler automatiquement les nouveaux leads entrants</li>
          <li>→ <strong className="text-foreground">Typeform</strong> — appeler les prospects qui remplissent un formulaire</li>
          <li>→ <strong className="text-foreground">Google Sheets</strong> — lancer des campagnes d'appels depuis une liste</li>
          <li>→ <strong className="text-foreground">Calendly</strong> — confirmer les RDV par appel vocal</li>
        </ul>
      </div>
    </div>
  );
}
