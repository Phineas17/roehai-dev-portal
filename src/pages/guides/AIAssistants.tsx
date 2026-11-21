import { CodeBlock } from "@/components/CodeBlock";
import { LLMLogoStack } from "@/components/LLMLogoStack";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";

const MCP_URL = "https://www.roehai.com/mcp";

const connectorFields = `Nom du connecteur : RoehAI
URL du serveur MCP : ${MCP_URL}`;

const firstMessage = `Connecte-toi à mon compte RoehAI et configure mon agent téléphonique.
Voici ma clé API : sk_votre_cle
Suis le playbook RoehAI de bout en bout, puis fais un appel test pour prouver que tout fonctionne.`;

const dailyExamples = `« Appelle le +1 514 555 0100 et présente-lui notre offre de novembre. »
« Envoie un texto à Marie pour confirmer son rendez-vous de demain. »
« Quel est mon solde de minutes d'appel ? »
« Mets à jour les instructions de mon agent : il doit toujours proposer un rappel si la personne est occupée. »
« Achète 120 minutes de crédits avec ma carte enregistrée. »`;

const steps = [
  {
    title: "Créez votre clé API RoehAI",
    body: "Connectez-vous à votre tableau de bord RoehAI, ouvrez l'onglet Clés API et utilisez la carte « Connecter à Muse » : la clé est créée en un clic, avec les permissions lecture et écriture. Vous pouvez aussi créer une clé classique depuis Paramètres, Clés API. Une clé expire après 12 mois et se révoque en tout temps au même endroit.",
  },
  {
    title: "Ajoutez le serveur MCP à votre assistant",
    body: "Dans Muse (Paramètres, Connecteurs, Ajouter un connecteur personnalisé) ou dans ChatGPT (Paramètres, Applications, Mode développeur, Créer une application), entrez l'adresse du serveur RoehAI. Aucun mot de passe RoehAI n'est demandé à cette étape : l'authentification se fait par votre clé API, à l'étape suivante.",
    code: connectorFields,
  },
  {
    title: "Collez votre clé dans la conversation",
    body: "Démarrez une nouvelle conversation et envoyez votre clé à l'assistant, avec la demande de configuration. L'assistant vérifie la connexion en lisant le playbook officiel RoehAI, puis vous guide étape par étape, directement dans la conversation. Rien d'autre à installer, aucun autre écran à visiter.",
    code: firstMessage,
  },
  {
    title: "Laissez l'assistant tout configurer",
    body: "Le parcours guidé couvre, dans l'ordre : l'état de votre compte, la création de votre agent téléphonique (nommé Muse par défaut, avec sa voix et ses instructions), le choix de votre numéro parmi au moins cinq propositions, l'achat de vos premiers crédits, puis un appel test réel. L'installation n'est terminée que lorsque votre agent répond pour vrai à l'appel test.",
  },
  {
    title: "Pilotez votre ligne par conversation",
    body: "Ensuite, tout se demande en langage naturel : passer un appel, envoyer un texto, consulter vos transcriptions, ajuster les instructions de l'agent, vérifier votre solde ou acheter des minutes. Votre assistant confirme toujours avec vous avant un appel sortant ou un achat.",
    code: dailyExamples,
  },
];

const capabilities = [
  ["Agents et voix", "Créer des agents, régler leur identité, leurs salutations, leurs instructions et leur voix parmi le catalogue."],
  ["Appels", "Appels sortants immédiats ou planifiés, statut en direct, transcriptions et résumés."],
  ["SMS", "Envoi de textos depuis vos numéros et suivi des conversations."],
  ["Numéros", "Recherche de numéros canadiens et américains, achat et rattachement à un agent."],
  ["Crédits", "Solde de minutes en temps réel et achat de crédits prépayés, sans abonnement."],
  ["Missions", "Campagnes d'appels commerciaux : création, pilotage, prospects et rapports."],
];

const pricing = [
  ["Numéro de téléphone", "2 $ de frais d'activation, puis 3 $ par mois, affichés avant l'achat"],
  ["60 minutes d'appels", "30 $"],
  ["120 minutes d'appels", "55 $"],
  ["250 minutes d'appels", "110 $"],
  ["500 minutes d'appels", "215 $"],
];

export function AIAssistantsGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Guide</p>
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Donner un numéro de téléphone à votre assistant IA
          </h1>
          <LLMLogoStack />
        </div>
        <p className="text-muted-foreground leading-relaxed">
          RoehAI expose un serveur MCP de 48 outils à l'adresse{" "}
          <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono">{MCP_URL}</code>.
          Connectez-y Muse, Claude, ChatGPT ou tout autre assistant compatible MCP : votre assistant gagne une vraie
          ligne téléphonique. Il passe et reçoit des appels, envoie des textos, prend des messages et gère vos agents
          vocaux, le tout depuis votre conversation.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Connexion en cinq étapes</h2>
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={step.title} className="p-5 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{step.body}</p>
                {step.code && <CodeBlock code={step.code} language="text" />}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Ce que votre assistant peut faire</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map(([title, desc]) => (
              <div key={title} className="p-4 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 size={14} className="text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
              </div>
            ))}
          </div>
          <Link to="/reference/mcp" className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium mt-4">
            Voir la référence complète des 48 outils <ArrowRight size={13} />
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Tarifs : crédits prépayés, sans abonnement</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Les appels fonctionnent aux crédits prépayés. Vous achetez des minutes quand vous en avez besoin,
            depuis la conversation ou le tableau de bord, et votre solde se consulte en tout temps. Chaque achat
            passe par un devis affiché à l'écran et n'est débité qu'après votre confirmation explicite.
          </p>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {pricing.map(([label, price], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                    <td className="px-4 py-2.5 text-muted-foreground">{label}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-foreground">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Les achats de minutes vont de 10 à 500 minutes, au prorata de la grille. Prix en dollars américains.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Sécurité de la connexion</h2>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed">
            <li>Votre clé API voyage uniquement dans les en-têtes des requêtes de votre assistant, jamais dans une adresse web.</li>
            <li>Les permissions de la clé sont appliquées côté serveur : une clé en lecture seule ne peut ni appeler, ni acheter, ni modifier un agent.</li>
            <li>Chaque achat (numéro ou crédits) exige un devis serveur à usage unique et votre confirmation explicite avant le débit.</li>
            <li>Le serveur limite le débit à 180 requêtes par minute par compte et journalise les tentatives d'authentification échouées.</li>
            <li>Perte ou doute : révoquez la clé depuis le tableau de bord, l'accès cesse immédiatement.</li>
          </ul>
        </section>

        <section className="p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-2">
            <Clock3 size={15} className="text-primary" />
            <h2 className="text-base font-semibold text-foreground">Bientôt : la connexion en un clic</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Une connexion OAuth est en préparation : elle remplacera le collage de la clé par un écran d'autorisation
            RoehAI. En attendant, la clé API décrite dans ce guide est la méthode officielle et entièrement fonctionnelle.
          </p>
        </section>
      </div>
    </div>
  );
}
