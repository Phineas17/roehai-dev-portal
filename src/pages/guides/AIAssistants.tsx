import { CodeBlock } from "@/components/CodeBlock";
import { LLMLogoStack } from "@/components/LLMLogoStack";

const mcpEndpoint = `https://www.roehai.com/mcp`;

const steps = [
  {
    n: 1,
    title: "Verifier votre agent RoehAI",
    desc: "Avant de connecter un LLM externe, assurez-vous que votre agent vocal est configure dans RoehAI avec son nom, son entreprise, ses consignes et ses messages d'accueil.",
  },
  {
    n: 2,
    title: "Creer une nouvelle connexion MCP",
    desc: "Dans l'assistant compatible MCP, ajoutez une nouvelle app, integration ou connexion personnalisee. Le nom peut rester generique, par exemple RoehAI.",
  },
  {
    n: 3,
    title: "Utiliser le point d'entree RoehAI",
    desc: "Renseignez l'URL MCP publique de RoehAI. C'est le meme endpoint pour les assistants compatibles avec les connexions MCP distantes.",
    code: mcpEndpoint,
    language: "bash",
  },
  {
    n: 4,
    title: "Choisir OAuth",
    desc: "Selectionnez OAuth comme methode d'authentification. L'assistant ouvrira RoehAI pour demander l'autorisation d'acces a votre compte.",
  },
  {
    n: 5,
    title: "Autoriser les actions",
    desc: "Connectez-vous a RoehAI, puis autorisez l'assistant. Les outils disponibles permettent de lire la configuration de l'agent, ajuster ses consignes et preparer des appels.",
  },
  {
    n: 6,
    title: "Tester avec une demande simple",
    desc: "Demandez a l'assistant de recuperer la configuration actuelle de votre agent. Ensuite seulement, testez une modification ou une planification d'appel.",
  },
];

const prompts = `Recupere la configuration de mon agent vocal RoehAI.

Configure mon agent pour se presenter comme l'assistant de mon entreprise.

Prepare un appel pour ce prospect, mais ne le lance pas sans ma confirmation.`;

const llmExamples = [
  {
    name: "ChatGPT",
    desc: "Creer une app personnalisee, ajouter l'URL MCP, puis autoriser RoehAI via OAuth.",
  },
  {
    name: "Claude",
    desc: "Utiliser une connexion MCP distante lorsque l'espace de travail le permet, puis tester les outils RoehAI.",
  },
  {
    name: "Gemini",
    desc: "Reutiliser le meme point d'entree MCP des que l'environnement prend en charge les outils MCP distants.",
  },
];

const screenshotSlots = [
  "Creation de la connexion MCP",
  "Autorisation OAuth RoehAI",
  "Outils RoehAI detectes",
];

export function AIAssistantsGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="mb-4">
          <LLMLogoStack />
        </div>
        <p className="text-sm text-muted-foreground mb-1">Guides → LLM</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
          Connecter votre agent RoehAI a un LLM
        </h1>
        <p className="text-muted-foreground">
          Exposez votre agent vocal RoehAI aux LLM compatibles MCP pour consulter sa configuration,
          ajuster ses consignes et preparer des actions depuis votre espace de travail IA.
        </p>
      </div>

      <div className="mb-8">
        <LLMLogoStack showLabels />
      </div>

      <div className="rounded-xl bg-card border border-border p-4 mb-8 text-sm">
        <p className="text-foreground font-medium mb-2">Point d'entree MCP</p>
        <CodeBlock code={mcpEndpoint} language="bash" />
        <p className="text-muted-foreground mt-3">
          Ce domaine est stable pour les connexions externes. Utilisez toujours HTTPS.
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
              <p className="text-sm text-muted-foreground mb-2">{step.desc}</p>
              {step.code && <CodeBlock code={step.code} language={step.language} />}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-card border border-border text-sm">
        <p className="text-foreground font-medium mb-3">Exemples de connexion LLM</p>
        <div className="grid gap-3">
          {llmExamples.map((item) => (
            <div key={item.name} className="rounded-lg border border-border bg-muted/30 p-3">
              <p className="font-medium text-foreground">{item.name}</p>
              <p className="mt-1 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-card border border-border text-sm">
        <p className="text-foreground font-medium mb-3">Captures d'ecran a ajouter</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {screenshotSlots.map((slot) => (
            <div key={slot} className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-3 text-center text-xs text-muted-foreground">
              {slot}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-card border border-border text-sm">
        <p className="text-foreground font-medium mb-2">Exemple pour ChatGPT</p>
        <p className="text-muted-foreground mb-3">
          Dans ChatGPT, creez une app personnalisee depuis Settings → Apps, scannez les outils,
          puis autorisez RoehAI via OAuth.
        </p>
        <CodeBlock code={prompts} language="text" />
      </div>

      <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border text-sm">
        <p className="text-foreground font-medium mb-2">Bonnes pratiques</p>
        <ul className="text-muted-foreground space-y-1.5">
          <li>Demandez toujours un resume avant de modifier la configuration d'un agent.</li>
          <li>Gardez les actions sensibles, comme le lancement d'un appel, avec confirmation explicite.</li>
          <li>Reconnectez votre compte si l'assistant indique que l'autorisation a expire.</li>
        </ul>
      </div>
    </div>
  );
}
