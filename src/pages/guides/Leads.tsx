import { CodeBlock } from "@/components/CodeBlock";

const leadPayload = `{
  "phone_number": "+243812345678",
  "contact_name": "Grace Mbala",
  "business_name": "Agence Prestige Immobilier",
  "context": "Lead immobilier intéressé par un appartement 2 chambres à Gombe",
  "source": "website_form",
  "priority": "hot"
}`;

const qualificationFlow = `Lead entrant
  -> appel automatique Aria
  -> questions de qualification
  -> résumé + score du lead
  -> transfert commercial ou suivi CRM`;

const checklist = [
  "Téléphone au format international, par exemple +243...",
  "Nom du contact ou entreprise pour personnaliser l'appel",
  "Contexte clair sur l'intention du prospect",
  "Source du lead pour mesurer les performances",
];

const outcomes = [
  {
    title: "Lead chaud",
    desc: "Aria confirme le besoin, collecte les informations clés et peut proposer un rendez-vous.",
  },
  {
    title: "Lead à rappeler",
    desc: "Le prospect est intéressé mais indisponible. Le statut permet de relancer au bon moment.",
  },
  {
    title: "Lead non qualifié",
    desc: "Aria filtre les demandes hors cible pour éviter de saturer l'équipe commerciale.",
  },
];

export function LeadsGuide() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-1">Guides / Qualification des leads</p>
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
          Qualifier des leads avec Aria
        </h1>
        <p className="text-muted-foreground">
          Déclenchez un appel vocal IA dès qu'un prospect arrive, qualifiez son besoin et transmettez uniquement les opportunités utiles à votre équipe.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Envoyer le lead à RoehAI</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Votre formulaire, CRM ou outil d'automatisation peut appeler l'API avec les informations du prospect.
          </p>
          <CodeBlock code={leadPayload} language="json" filename="payload lead" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">2. Définir le contexte d'appel</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Le champ <strong className="text-foreground">context</strong> aide Aria à adapter son ton, ses questions et ses priorités pendant l'appel.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. Suivre le résultat</h2>
          <CodeBlock code={qualificationFlow} language="bash" filename="workflow" />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Statuts recommandés</h2>
          <div className="grid gap-3">
            {outcomes.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-4">
                <p className="font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
